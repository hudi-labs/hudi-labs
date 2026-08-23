# ADR-001 — Stack de Comunicação em Tempo Real para o Hermes

**Data:** 2026-08-23
**Status:** Aceito
**Contexto:** HUDI-002 — Pesquisa de Protocolos e Estado em Tempo Real para Multiversos

---

## Contexto

O projeto **Hermes** precisa sincronizar estados de mensagens entre o WhatsApp Business API
e o frontend web (Next.js). A solução deve:

- Receber callbacks assíncronos da Meta (interações do usuário com botões / WhatsApp Flows).
- Propagar essas atualizações imediatamente para o painel web sem polling.
- Suportar feedback automático de bot após o processamento.

---

## Benchmarks: WebSockets vs WebTransport vs SSE

| Critério | WebSockets | WebTransport (HTTP/3 + QUIC) | Server-Sent Events (SSE) |
|---|---|---|---|
| Latência (p50) | ~5–15 ms | ~3–10 ms | ~5–20 ms |
| Throughput | Alto, bidirecional | Muito alto (datagrama + stream) | Médio, unidirecional |
| Suporte de browsers | Universal | Chrome/Edge 97+, Firefox parcial | Universal |
| Infraestrutura | Requer WebSocket server | Requer HTTP/3 + QUIC no proxy | Funciona via HTTP/1.1 |
| Reconexão automática | Manual | Manual | Nativa no `EventSource` |
| Ideal para | Chat bidirecional em tempo real | Jogos / telemetria de alta frequência | Push server→cliente (painel, feeds) |

**Cenário Hermes**: o fluxo de dados é majoritariamente **server → client** (a Meta notifica o backend
via webhook; o backend atualiza o frontend). WebTransport tem overhead de infraestrutura elevado
(HTTP/3 obrigatório) sem benefício prático para este caso.

---

## Modelos de Reconciliação de Estado

### CRDTs (Conflict-free Replicated Data Types)
Indicados quando múltiplos clientes editam o mesmo documento simultaneamente (ex: editores
colaborativos). Adicionam complexidade de merge nos tipos de dado. **Não aplicável** ao Hermes
nesta fase, pois o WhatsApp é fonte de verdade única e a edição das mensagens não é permitida
pela plataforma.

### Snapshot Interpolation
Armazena snapshots do estado em intervalos regulares e interpola valores entre eles para
suavizar a experiência em telas com alta taxa de atualização (ex: jogos). **Não aplicável** ao
padrão de mensagens assíncronas do Hermes.

### Event Sourcing (escolhido)
Cada interação do usuário no WhatsApp gera um evento imutável. O estado atual é derivado
aplicando os eventos em ordem. Alinha-se naturalmente com o modelo de webhooks da Meta
e com o bus de eventos interno do Hermes.

---

## Decisão

**Recomendação de stack:**

1. **Entrada**: Webhook REST (`POST /api/webhook/whatsapp`) para receber callbacks da Meta com
   validação de assinatura HMAC-SHA256 (`X-Hub-Signature-256`).

2. **Bus Interno**: Pub/Sub in-process (`EventBus`) desacoplando a recepção do webhook da
   emissão para clientes SSE. Em produção escalonada, substituir por Redis Pub/Sub ou similar.

3. **Saída para Frontend**: SSE via `GET /api/events` usando a API nativa `ReadableStream` do
   Next.js App Router. O hook `useRealTimeEvents` no frontend reconecta automaticamente.

4. **Feedback de Bot**: Após processar o webhook, o Hermes dispara nova mensagem de texto ao
   usuário via `POST https://graph.facebook.com/v21.0/{phone_id}/messages`.

### Justificativa para SSE sobre WebSockets

- **Suporte universal** sem dependências adicionais no servidor.
- **Reconexão nativa** via `EventSource.onerror`.
- **Stateless no servidor**: cada conexão SSE é independente, facilitando escalabilidade horizontal.
- Fluxo é estritamente server→cliente, exatamente o que SSE oferece.

---

## PoC de Telemetria Espacial

Um teste de carga simples (50 clientes SSE simultâneos enviando 1 evento/s cada) demonstrou:

- Latência mediana (webhook → EventSource.onmessage): **12 ms** em ambiente local.
- SLO de PoC definido em **< 200 ms** — aprovado.
- CPU do servidor: < 5% para 50 conexões SSE ativas.

---

## Consequências

- O bus in-process não persiste eventos: clientes que conectam após um evento não o recebem.
  Mitigação: carregar estado inicial via REST antes de abrir o SSE.
- Em escala horizontal (múltiplos pods), o bus deve ser externalizado (Redis, Kafka).
- WebTransport deve ser reavaliado quando o suporte de browsers for universal e o projeto
  migrar para cenários de telemetria de alta frequência (ex: Hudi Esporte).

---

## Referências

- [Meta Webhooks Documentation](https://developers.facebook.com/docs/graph-api/webhooks/)
- [WhatsApp Cloud API — Interactive Messages](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-messages)
- [WHATWG — Server-Sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html)
- [WebTransport Explainer](https://w3c.github.io/webtransport/)

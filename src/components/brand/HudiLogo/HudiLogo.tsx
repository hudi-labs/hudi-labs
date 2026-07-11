import { useId, type ComponentPropsWithoutRef } from "react";

type HudiLogoProps = ComponentPropsWithoutRef<"svg"> & {
  compact?: boolean;
  inverted?: boolean;
};

export function HudiLogo({ compact = false, inverted = false, ...props }: HudiLogoProps) {
  const primary = inverted ? "#FFFFFF" : "#102157";
  const secondary = inverted ? "#CBD5E1" : "#64748B";
  const gradientId = useId();

  return (
    <svg
      aria-label="Hudi Labs"
      role="img"
      viewBox={compact ? "0 0 84 100" : "0 0 450 100"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="10" y="12" width="30" height="76" fill={primary} />
      <rect
        x="28"
        y="31"
        width="42"
        height="42"
        fill={`url(#${gradientId})`}
        opacity="0.78"
        stroke="#DBEAFE"
        strokeOpacity="0.7"
      />
      {!compact && (
        <>
          <text x="91" y="68" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="46" fill={primary}>
            HUDI
          </text>
          <text x="224" y="68" fontFamily="Inter, Arial, sans-serif" fontWeight="400" fontSize="46" fill={secondary}>
            Labs
          </text>
        </>
      )}
    </svg>
  );
}

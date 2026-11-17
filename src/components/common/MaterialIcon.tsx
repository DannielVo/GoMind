import type { CSSProperties } from "react";

interface MaterialIconProps {
  name: string;
  size?: number;
  weight?: number;
  filled?: boolean;
  className?: string;
}

export default function MaterialIcon({
  name,
  size = 24,
  weight = 400,
  filled = false,
  className = "",
}: MaterialIconProps) {
  const style: CSSProperties = {
    fontSize: size,
    fontVariationSettings: `
      'FILL' ${filled ? 1 : 0},
      'wght' ${weight},
      'GRAD' 0,
      'opsz' ${Math.max(20, Math.min(size, 48))}
    `,
  };

  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined shrink-0 select-none ${className}`}
      style={style}
    >
      {name}
    </span>
  );
}

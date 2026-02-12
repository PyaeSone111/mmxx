/**
 * Burmese Kanote (ကနုတ်) ornamental decorative elements.
 * Traditional Burmese scroll / floral corner motifs.
 */

export function KanoteCorner({
  className = "",
  position = "top-left",
  size = 32,
  color = "currentColor",
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  color?: string;
}) {
  const rotations: Record<string, string> = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g transform={`${rotations[position]} `} style={{ transformOrigin: "32px 32px" }}>
        {/* Outer scroll curl */}
        <path
          d="M4 4C4 4 12 4 20 8C28 12 32 20 32 20C32 20 28 14 22 10C16 6 8 4 4 4Z"
          fill={color}
          opacity="0.3"
        />
        {/* Main flourish stem */}
        <path
          d="M2 2C2 2 6 2 14 6C22 10 28 18 30 22C32 26 32 32 32 32"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner leaf curl 1 */}
        <path
          d="M10 4C10 4 14 6 18 12C22 18 22 22 22 22"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Inner leaf curl 2 */}
        <path
          d="M4 10C4 10 6 14 12 18C18 22 22 22 22 22"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Small decorative dot */}
        <circle cx="8" cy="8" r="1.5" fill={color} opacity="0.5" />
        {/* Tip flourish */}
        <path
          d="M28 20C28 20 26 24 28 28C30 32 32 32 32 32"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export function KanoteBorder({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      width="100%"
      height="8"
      viewBox="0 0 400 8"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* Repeating Burmese scroll wave */}
      <path
        d="M0 4 C10 0, 20 0, 30 4 C40 8, 50 8, 60 4 C70 0, 80 0, 90 4 C100 8, 110 8, 120 4 C130 0, 140 0, 150 4 C160 8, 170 8, 180 4 C190 0, 200 0, 210 4 C220 8, 230 8, 240 4 C250 0, 260 0, 270 4 C280 8, 290 8, 300 4 C310 0, 320 0, 330 4 C340 8, 350 8, 360 4 C370 0, 380 0, 390 4 L400 4"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Small dots along the wave */}
      <circle cx="30" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="90" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="150" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="210" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="270" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="330" cy="4" r="1" fill={color} opacity="0.5" />
      <circle cx="390" cy="4" r="1" fill={color} opacity="0.5" />
    </svg>
  );
}

export function KanoteFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Four corner kanote ornaments */}
      <KanoteCorner position="top-left" className="absolute -left-1 -top-1 text-kanote" size={28} color="currentColor" />
      <KanoteCorner position="top-right" className="absolute -right-1 -top-1 text-kanote" size={28} color="currentColor" />
      <KanoteCorner position="bottom-left" className="absolute -bottom-1 -left-1 text-kanote" size={28} color="currentColor" />
      <KanoteCorner position="bottom-right" className="absolute -bottom-1 -right-1 text-kanote" size={28} color="currentColor" />
      {children}
    </div>
  );
}

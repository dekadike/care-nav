interface OmatochLogoProps {
  className?: string;
  height?: number;
  /** Set to true when logo is on a dark background — renders in white */
  inverted?: boolean;
}

export default function OmatochLogo({ className = '', height = 36, inverted = false }: OmatochLogoProps) {
  const color = inverted ? '#ffffff' : '#00AAA8';
  const width = height * 4.2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 252 60"
      height={height}
      width={width}
      aria-label="Omatochi"
      role="img"
      className={className}
      style={{ display: 'block' }}
    >
      {/* Leaf / drop motif */}
      <g fill={color}>
        {/* Outer leaf shape */}
        <path d="M28 4 C14 4 4 14 4 28 C4 42 14 52 28 52 C36 52 43 48 48 42 L42 36 C39 40 34 43 28 43 C19 43 12 36 12 28 C12 20 19 13 28 13 C34 13 39 16 42 20 L48 14 C43 8 36 4 28 4 Z" />
        {/* Inner accent line */}
        <path d="M28 13 C34 13 39 16 42 20 L48 14 C43 8 36 4 28 4 C22 4 17 6 13 10 L19 16 C22 14 25 13 28 13 Z" opacity="0.4" />
        {/* Small dot accent */}
        <circle cx="28" cy="28" r="4" />
      </g>

      {/* Wordmark: Omatochi */}
      <text
        x="58"
        y="40"
        fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={color}
        letterSpacing="-0.5"
      >
        matochi
      </text>
      <text
        x="58"
        y="40"
        fontFamily="'Segoe UI', system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={color}
        letterSpacing="-0.5"
      >
        O
      </text>
    </svg>
  );
}

interface OmatochLogoProps {
  className?: string;
  height?: number;
  inverted?: boolean;
}

export default function OmatochLogo({ className = '', height = 36, inverted = false }: OmatochLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/omatochi-logo.png"
      alt="Omatochi"
      height={height}
      style={{
        height,
        width: 'auto',
        filter: inverted ? 'brightness(0) invert(1)' : 'none',
      }}
      className={className}
    />
  );
}

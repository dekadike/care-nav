interface OmatochLogoProps {
  className?: string;
  height?: number;
}

export default function OmatochLogo({ className = '', height = 36 }: OmatochLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/omatochi-logo.png"
      alt="Omatochi"
      height={height}
      style={{ height, width: 'auto' }}
      className={className}
    />
  );
}

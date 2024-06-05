import Image from 'next/image';

interface BSIconProps {
  color?: string;
  size?: number;
  margin?: string;
  iconUrl: string;
  className?: string;
  alt: string;
  onClick?: () => void;
}

export default function BSIcon({
  color = '',
  size = 24,
  margin = '',
  iconUrl,
  className = '',
  alt = '',
  onClick,
}: BSIconProps) {
  return (
    <div
      style={{ color, margin }}
      className="duration-200 cursor-pointer hover:opacity-45"
    >
      <Image
        src={iconUrl}
        alt={alt}
        width={size}
        height={size}
        className={className}
        onClick={onClick}
        priority
      />
    </div>
  );
}

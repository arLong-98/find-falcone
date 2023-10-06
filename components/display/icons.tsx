import { icons, type LucideProps } from 'lucide-react';
import { type ForwardRefExoticComponent } from 'react';

type LucideIconType = ForwardRefExoticComponent<LucideProps>;

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: LucideIconType = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;

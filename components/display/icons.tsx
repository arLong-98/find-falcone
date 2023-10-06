import { icons, type LucideProps } from 'lucide-react';
import { type ForwardRefExoticComponent } from 'react';

const Icon: React.FC<IconProps> = ({ name, color, size }) => {
  const LucideIcon: LucideIconType = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export type LucideIconType = ForwardRefExoticComponent<LucideProps>;

export interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: string;
}

export default Icon;

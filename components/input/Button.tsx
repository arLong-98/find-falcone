'use client';

import { MouseEventHandler } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;

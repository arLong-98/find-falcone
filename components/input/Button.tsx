'use client';

import { type MouseEventHandler } from 'react';

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export interface ButtonProps {
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

export default Button;

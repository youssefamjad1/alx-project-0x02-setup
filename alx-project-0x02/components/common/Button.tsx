import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  return (
    <button
      className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white hover:bg-blue-700 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

// interfaces/index.ts
export interface User {
  id: number;
  name: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

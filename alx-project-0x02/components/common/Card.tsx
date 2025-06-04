import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;


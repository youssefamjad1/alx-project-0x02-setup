import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500 mt-2">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;

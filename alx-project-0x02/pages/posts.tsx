// alx-project-0x02/pages/posts.tsx

import React from 'react';
import Header from '@/components/layout/Header';

const Posts: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
      <p>This is a placeholder for the Posts page.</p>
    </main>
  );
};

export default Posts;

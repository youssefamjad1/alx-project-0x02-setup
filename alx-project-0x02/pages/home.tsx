import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to ALX Project 0x02</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add New Post
      </button>

      {posts.length === 0 && <p>No posts yet.</p>}

      <div className="space-y-4">
        {posts.map((post, idx) => (
          <Card key={idx} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;

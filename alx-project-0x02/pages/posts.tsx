import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

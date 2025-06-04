import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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

// Fetch posts data at build time
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;

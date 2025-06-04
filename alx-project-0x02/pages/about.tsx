import React from 'react';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm">Small Rounded-SM</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-MD</Button>
        <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
      </div>
    </main>
  );
};

export default About;

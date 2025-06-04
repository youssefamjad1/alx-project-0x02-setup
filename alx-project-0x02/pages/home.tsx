
import React from 'react';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <p>Welcome to the Home page!</p>


      <Card title="Introduction" content="This is a reusable card component." />
      <Card title="Next.js + TypeScript" content="This project uses TypeScript with Next.js." />
      <Card title="Tailwind CSS" content="Styling is handled using Tailwind CSS." />
    </div>
  );
};

export default HomePage;

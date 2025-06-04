// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex space-x-4">
        <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
        <Link href="/about" legacyBehavior><a className="hover:underline">About</a></Link>
        <Link href="/posts" legacyBehavior><a className="hover:underline">Posts</a></Link>
        <Link href="/users" legacyBehavior><a className="hover:underline">Users</a></Link>
      </nav>
    </header>
  );
};

export default Header;

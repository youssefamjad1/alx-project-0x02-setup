import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="container mx-auto flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">Internal Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
};

export default Header;

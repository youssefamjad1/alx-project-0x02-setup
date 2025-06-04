import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 0x02</title>
        <meta name="description" content="ALX Next.js project setup with TypeScript and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Project 0x02</h1>
        <p>This is a Next.js app with TypeScript and Tailwind CSS configured.</p>
      </main>
    </>
  );
};

export default Home;

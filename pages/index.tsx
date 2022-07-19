import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Head>
        <title>Crypto-job-list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full py-4 min-h-screen max-w-5xl mx-auto ">
        <Navbar />
        <Main />
      </main>
    </div>
  );
};

export default Home;

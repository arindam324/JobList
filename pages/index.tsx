import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

import { useTheme } from "../context/ThemeProvider";

const Home: NextPage = () => {
  const theme = useTheme();
  console.log("theme", theme?.isDark);

  return (
    <div
      className={`flex min-h-screen ${
        theme?.isDark ? "bg-gray-900" : "bg-white"
      } `}
    >
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

import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Main, { Data } from "../components/Main";
import Layout from "../components/Layout";

import prisma from "../lib/Prisma";
import { useTheme } from "../context/ThemeProvider";
import LoadingProvider from "../context/LoadingContext";

const Home: NextPage<{ jobs: Data[] }> = ({ jobs }) => {
  const theme = useTheme();

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
      <LoadingProvider>
        <Layout>
          <Navbar />
          <Main Data={jobs} />
        </Layout>
      </LoadingProvider>
    </div>
  );
};

export const getStaticProps = async () => {
  const jobs = await prisma.job.findMany({
    select: {
      id: true,
      title: true,
      company: {
        select: {
          image: true,
        },
      },
      tags: true,
    },
  });

  return {
    props: {
      jobs,
    },
  };
};

export default Home;

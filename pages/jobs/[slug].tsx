import React from "react";

import Head from "next/head";
import { useTheme } from "../../context/ThemeProvider";
import NavBar from "../../components/Navbar";
import Layout from "../../components/Layout";

const JobView = ({ slug }) => {
  console.log("slug", slug);

  const theme = useTheme();

  return (
    <div
      className={`flex min-h-screen ${
        theme?.isDark ? "bg-gray-900" : "bg-white"
      } `}
    >
      <Head>
        <title>{slug}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NavBar />
      </Layout>
    </div>
  );
};

export default JobView;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  return {
    props: {
      slug,
    },
  };
}

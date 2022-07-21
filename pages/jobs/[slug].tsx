import React from "react";
import Head from "next/head";
import { formatDistance } from "date-fns";
import { BookmarkIcon, LogoutIcon } from "@heroicons/react/outline";

import { useTheme } from "../../context/ThemeProvider";
import NavBar from "../../components/Navbar";
import Layout from "../../components/Layout";

import Prisma from "../../lib/Prisma";
import { Job } from ".prisma/client";
import Image from "next/image";

interface NewDataType extends Job {
  company: {
    image: string;
  };
}

const JobView: React.FC<{ job: NewDataType }> = ({ job }) => {
  const theme = useTheme();

  return (
    <div
      className={`flex min-h-screen ${
        theme?.isDark ? "bg-gray-900" : "bg-white"
      } `}
    >
      <Head>
        <title>Job View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NavBar />
        <div className="pt-8 flex ">
          <div className="w-[70%]">
            <div className="flex-1">
              <h1
                className={`${
                  theme?.isDark ? "text-white" : "text-black"
                }  text-5xl leading-normal font-semibold`}
              >
                {job.title}
              </h1>
              <p
                className={`${
                  theme?.isDark ? "text-gray-300" : "text-gray-800"
                } text-md`}
              >
                {formatDistance(new Date(job.createdAt), new Date(), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <p
              className={`text-lg ${
                theme?.isDark ? "text-gray-300" : "text-gray-800"
              }  mt-3 pr-2`}
            >
              {job.description}
            </p>
          </div>
          <div className="w-[30%]  flex flex-col items-center  p-4">
            <Image src={job.company.image} width={200} height={200} />
            <button className="flex bg-indigo-700 px-6   py-2 my-4 space-x-3 rounded-sm font-semibold text-white">
              <p>Apply Now</p>
              <LogoutIcon className="h-6" />
            </button>
            <button
              className={`flex bg-transparent border-2  rounded-md px-4 py-2 my-4 space-x-3  font-semibold ${
                theme?.isDark
                  ? "text-white border-gray-200"
                  : "text-black  border-gray-800"
              } `}
            >
              <BookmarkIcon className="h-6" />
              <p>Save For Later</p>
            </button>
            <div className="flex flex-wrap items-center">
              {job.tags.map((item) => (
                <span
                  className="text-sm m-2 text-gray-300 px-2 py-1 rounded-md font-semibold bg-gray-800"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default JobView;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const job = await Prisma.job.findFirst({
    where: {
      title: slug,
    },
    select: {
      title: true,
      description: true,
      createdAt: true,
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
      job: JSON.parse(JSON.stringify(job)),
    },
  };
}

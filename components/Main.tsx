import React from "react";

import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import { useTheme } from "../context/ThemeProvider";

const DATA = [
  {
    id: 0,
    image: "https://cdn.svgporn.com/logos/kibana.svg",
    title: "Backend Enginner at Kibana  organizations",
    tags: ["Backend Engineer", "Developer", "Manager", "Node.js"],
  },
  {
    id: 1,
    image: "https://cdn.svgporn.com/logos/airbnb-icon.svg",
    title: "Full Stack Developer at Airbnb",
    tags: [
      "Full Stack Developer",
      "Developer",
      "Node.js",
      "Typescript",
      "React.js",
    ],
  },
  {
    id: 2,
    image: "https://cdn.svgporn.com/logos/cloudinary.svg",
    title: "Developer advlocate at Cloudinary",
    tags: ["Developer", "Git", "Node.js", "Typescript"],
  },
  {
    id: 3,
    image: "https://cdn.svgporn.com/logos/openai-icon.svg",
    title: "Machine Learning Engineer at OpenAI",
    tags: ["Machine Learning Engineer", "Developer", "tensorflow", "keras"],
  },
];

const Main = () => {
  const theme = useTheme();
  return (
    <div className="pt-6">
      <h1
        className={`text-[4rem] leading-tight font-semibold ${
          theme?.isDark ? "text-white" : "text-black"
        }  `}
      >
        The Web's Biggest List of Cryptocurrency Jobs, Web3 Jobs and Blockchain
        Jobs
      </h1>
      <p
        className={`${
          theme?.isDark ? "text-gray-200" : "text-gray-800"
        }  text-2xl py-2 leading-8`}
      >
        Discover over 3148+ open Cryptocurrency Jobs, Web3 Jobs and Blockchain
        Jobs on CryptoJobsList — the #1 site to find and post jobs. Connect with
        companies hiring in a few clicks and begin your next experience in the
        industry.
      </p>
      <SearchBar />

      <div className="w-full my-4">
        <div className="flex items-center text-gray-500 justify-between">
          <p>333 active jobs . page 1-17</p>
          <select className="bg-gray-900 text-white">
            <option value={"Recent"}>Reccent</option>
            <option value="relevance">Relevance</option>
          </select>
        </div>
        <div className="my-4 space-y-8">
          {DATA.map((item) => (
            <JobCard
              key={item.id}
              title={item.title}
              image={item.image}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

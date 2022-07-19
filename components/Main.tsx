import React from "react";

import SearchBar from "../components/SearchBar";

const Main = () => {
  return (
    <div className="pt-6">
      <h1 className="text-[4rem] leading-tight font-semibold text-white">
        The Web's Biggest List of Cryptocurrency Jobs, Web3 Jobs and Blockchain
        Jobs
      </h1>
      <p className="text-gray-200 text-2xl py-2 leading-8">
        Discover over 3148+ open Cryptocurrency Jobs, Web3 Jobs and Blockchain
        Jobs on CryptoJobsList — the #1 site to find and post jobs. Connect with
        companies hiring in a few clicks and begin your next experience in the
        industry.
      </p>
      <SearchBar />
    </div>
  );
};

export default Main;

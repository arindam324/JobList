import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeProvider";

type JobCardProps = {
  image: string;
  title: string;
  tags: string[] | undefined;
};

const JobCard: React.FC<JobCardProps> = ({ image, title, tags }) => {
  const theme = useTheme();

  return (
    <Link href={`/jobs/${title}`}>
      <article className="flex cursor-pointer items-center space-x-4 justify-between">
        <Image src={image} width={60} height={60} />

        <div className="flex-1 ">
          <h2
            className={`${
              theme?.isDark ? "text-white" : "text-blue-600"
            } text-2xl font-semibold`}
          >
            {title}
          </h2>
          <div className="space-x-4 mt-2">
            {tags &&
              tags.map((item) => (
                <span
                  key={item}
                  className="text-gray-200 bg-gray-800 rounded-sm px-2 py-1 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
        <div className="font-semibold text-gray-600 text-2xl">Today</div>
      </article>
    </Link>
  );
};

export default JobCard;

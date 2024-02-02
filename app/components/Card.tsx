import Image from "next/image";
import Link from "next/link";
import React from "react";
interface GameCardProps {
  imagePath: string;
  title: string;
  href: string;
  category: "01" | "cricket" | "practice" | "party" | "match" | "ai" | "beta";
}

export const GameCard: React.FC<GameCardProps> = ({
  imagePath,
  title,
  href,
  category,
}) => {
  let bgColor = "bg-white";

  switch (category) {
    case "01":
      bgColor = "bg-blue-400";
      break;
    case "cricket":
      bgColor = "bg-green-300";
      break;
    case "practice":
      bgColor = "bg-cyan-300";
      break;
    case "party":
      bgColor = "bg-teal-300";
      break;
    case "match":
      bgColor = "bg-red-300";
      break;
    case "ai":
      bgColor = "bg-pink-300";
      break;
    case "beta":
      bgColor = "bg-purple-400";
      break;
  }

  return (
    <Link
      href={href}
      className={`w-full ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <Image
        src={imagePath}
        alt={title}
        width={180}
        height={180}
        className="object-contain m-auto"
        priority
      />
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
    </Link>
  );
};

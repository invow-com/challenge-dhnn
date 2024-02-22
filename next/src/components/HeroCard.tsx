"use client";
import Image from "next/image";
import TextBlock from "../components/TextBlock";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MdOutlineArrowOutward } from "react-icons/md";
import { data } from "@/data/data";

const HeroCard = () => {
  const isScreenSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const [expanded, setExpanded] = useState(isScreenSmall);

  useEffect(() => {
    const handleResize = () => {
      setExpanded(isScreenSmall);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmall]);

  return (
    <div className="relative flex w-full flex-col">
      <Image
        src={data.image}
        alt={`Image: ${data.title}`}
        className="object-fill w-full h-auto"
      />
      <div className="sm:absolute bottom-0 left-0 bg-white sm:w-[606px] h-auto sm:py-[40px] sm:pr-[40px] sm:pl-[120px]">
        <div className="flex flex-row px-4 py-8 sm:px-0 sm:py-0">
          <TextBlock
            title={data.title}
            description={data.description}
            category={data.category}
            expanded={expanded}
            type="contained"
          />
          <div className="hidden sm:flex justify-center items-center h-8 w-8 p-1">
            <button
              className="flex w-full h-full justify-center"
              onClick={() => setExpanded(!expanded)}
            >
              <MdOutlineArrowOutward className={`text-primary-700 w-6 h-6 ${expanded && 'rotate-180'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

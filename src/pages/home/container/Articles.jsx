import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

import ArticleCard from "../../../components/ArticleCard";

const Articles = () => {
  const count = useSelector((state) => state.count);

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
      <div className="mt-2 flex items-center gap-x-5">
        <button>decrease</button>
        <span>{count.number}</span>
        <button>increase</button>
      </div>
    </section>
  );
};

export default Articles;

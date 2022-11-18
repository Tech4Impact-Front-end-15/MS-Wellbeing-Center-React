import React from "react";
import { Link } from "react-router-dom";

const ItemBlog = ({
  blog: { img, tittle, author, releaseDate, descContent, id },
}) => {
  return (
    <div>
      <div className="p-4 bg-textWhite rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
        <div className="flex flex-wrap items-center">
          <img src={img} alt="Hero" />
          <h3 className="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">
            {tittle}
            <span className="lg: text-left block font-semibold text-[12px] lg:text-left">
              {author}
              <span className="font-normal"> | {releaseDate}</span>
            </span>
          </h3>
          <p className="mt-2 truncate-overflow text-left sm:text-justify w-full">
            {descContent}
          </p>
          <Link
            to={`/blog/${id}`}
            target="_blank"
            className="text-center lg:text-right mt-6 lg:mt-12 lg:mr-4 w-full lg:hidden bg-bgPrimary py-2 rounded-lg lg:bg-textWhite lg:py-0 lg:rounded-none hover:opacity-[90%] shadow-lg lg:shadow-none"
          >
            <button className="font-semibold text-[#fff] lg:text-textBlack">
              Readmore<span className="hidden lg:inline">...</span>
            </button>
          </Link>
          <div className="hidden lg:block w-full text-right mt-12 mr-4">
            <Link
              to={`/blog/${id}`}
              target="_blank"
              className="hover:opacity-[90%] font-semibold text-textBlack"
            >
              Readmore...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBlog;

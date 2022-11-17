import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import loading from "../dir/img/loading2.gif";
import Blog from "./Blog";
import { useNavigate } from "react-router-dom";

function ViewBlog() {
  const navigation = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios("https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing").then(
      (res) => {
        // console.log(res.data);
        setBlogs(res.data);
        setisLoading(false);
      }
    );
  }, []);

  console.log(blogs);

  const clickBlog = (item) => {
    console.log("Berhasil di klik");
    console.log(item);
  };

  const handleDetail = (id) => {
    navigation(`/blog/${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <img src={loading} alt="isLoading" className="mx-auto my-1/2 h-80" />
      ) : (
        blogs.map((item, id) => (
          <div key={id} onClick={() => clickBlog(item)}>
            {/* <div className="font-serif px-5 pt-5 text-lg sm:text-4xl font-bold text-textPrimary text-center">
              {item.tittle}
            </div>
            <div>
              <div className="font-serif px-5 font-semibold text-sm text-[#71717a] text-center mt-2">
                {item.releaseDate}
              </div>
              <div className="font-serif px-5 italic text-center">
                Author by : {item.author}
              </div>
              <div className="flex flex-wrap justify-center w-full">
                <img src={item.img} alt="" />
              </div>
            </div> */}

            <div className="p-4 bg-textWhite rounded-lg shadow-xl outline-textPrimary outline outline-offset-2 opacity-[95%]">
              <div className="flex flex-wrap items-center">
                <img
                  src={item.img}
                  alt="Hero"
                  className="w-full rounded-t-lg h-full sm:h-[200px] lg:h-[300px]"
                />
                <h3 className="font-semibold text-2xl mt-4 text-center lg:text-left w-full truncate">
                  {item.tittle}
                  <span className="lg: text-left block font-semibold text-[12px] lg:text-left">
                    {item.author}
                    <span className="font-normal"> | {item.releaseDate}</span>
                  </span>
                </h3>
                <p className="mt-2 truncate-overflow text-left sm:text-justify w-full">
                  {item.descContent}
                </p>
                <button onClick={() => handleDetail(item.id)}>
                  Readmore..
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewBlog;

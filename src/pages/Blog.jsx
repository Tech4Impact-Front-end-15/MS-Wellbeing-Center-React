import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loading from "../dir/img/loading2.gif";

function Blog() {
  const { id } = useParams();
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

  const clickBlog = (item) => {
    console.log("Berhasil di klik");
    console.log(item);
  };

  return (
    <>
      {isLoading ? (
        <img src={loading} alt="isLoading" className="mx-auto my-1/2 h-80" />
      ) : (
        blogs
          .filter((item) => item.id === +id)
          .map((item) => {
            return (
              <div key={item.id}>
                <div className="font-serif px-5 pt-5 text-lg sm:text-4xl font-bold text-textPrimary text-center">
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
                </div>
              </div>
            );
          })
      )}
    </>
  );
}

export default Blog;

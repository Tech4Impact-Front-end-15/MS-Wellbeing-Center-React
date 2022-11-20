import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import loading from "../../img/loading2.gif";
import Empty from "../../img/empty.gif";
import Hero from "../../img/hero3.png";
import HeroBlog from "../../components/Blog/HeroBlog";

const baseUrl = "https://6348abae0b382d796c75343e.mockapi.io/videos";

function ListVideo() {
  const [isLoading, setIsLoading] = useState(true);

  const [searching, setSearching] = useState("");

  const [videos, setVideos] = useState([]);

  const searchVideos = (e) => {
    e.preventDefault();
    axios(
      `https://6348abae0b382d796c75343e.mockapi.io/videos?title=${searching}`
    ).then((res) => {
      setVideos(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    axios(
      "https://6348abae0b382d796c75343e.mockapi.io/videos?page=1&limit=8"
    ).then((res) => {
      setVideos(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <img src={Hero} alt="hero" className="w-full" />
      <HeroBlog />
      <section className="p-12 sm:p-auto  bg-white">
        <header className="w-full mx-auto text-center">
          <h1 className="font-bold text-2xl sm:text-4xl text-center text-[#006969]">
            Cari
          </h1>
          <br />
          <p className="text-gray-500">Ayo ketik sesuatu, lalu enter</p>
        </header>

        <div className="mt-12 flex justify-center w-full">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <form className="flex" type="submit" onSubmit={searchVideos}>
                <input
                  className="form-control form-control relative flex-auto min-w-0 block w-[250px] sm:w-[600px] lg:w-[800px] px-3 py-1.5 text-xs sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-gray-200 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-textSecondary focus:outline-none"
                  type="text"
                  placeholder="Cari disini..."
                  name="search"
                  aria-label="Search"
                  value={searching}
                  onChange={(e) => setSearching(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-10 w-full mt-8 lg:mt-16s">
        <div className="grid grid-cols-1 pt-6 gap-8 content-center">
          {isLoading ? (
            <img
              src={loading}
              alt="isLoading"
              className="h-40 sm:h-60 mx-auto"
            />
          ) : !videos || videos == "" ? (
            <div className="flex justify-center font-mono font-semibold text-[#295454]">
              <img
                src={Empty}
                alt="isLoading"
                className="h-60 sm:h-80 mx-auto"
              />
              <div className="text-xl text-center">404 Not Found </div>
            </div>
          ) : (
            videos.map((item, index) => (
              <div key={index} onClick={() => clickBlog(item)}>
                <div className=" bg-white border border-gray-50 rounded-xl shadow-md">
                  <div className="flex">
                    <div className="m-3">
                      <iframe
                        src={"https://www.youtube.com/embed/" + item.videoId}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="mx-5 my-3">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-textPrimary truncate">
                        {item.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 truncate-overflow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end mx-4 mb-4">
                    <div className="mx-2 w-5 h-4">
                      <a href={"https://www.youtube.com/embed/" + item.videoId}>
                        ➝
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ListVideo;

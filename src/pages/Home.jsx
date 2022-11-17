import React from "react";
import Dokter from "../dir/img/Dokter.png";
import Zaky from "../dir/img/Zaky.png";
import Thobi from "../dir/img/Thobi.png";
import Suca from "../dir/img/Suca.png";

function Home() {
  return (
    <div>
      <div id="home" className="py-24">
        <div className="container flex w-full mx-auto sm:py-0">
          <div className="block sm:flex items-center justify-around align-center">
            <div className="flex justify-center items-center sm:hidden">
              <img src={Dokter} alt="" />
            </div>
            {/* <!-- Left Side --> */}
            <div className="flex justify-center items-center text-center sm:text-left w-full sm:w-1/2 py-12">
              <div>
                <h1 className="text-4xl font-bold pb-4 text-textSecondary ">
                  MentalHack
                </h1>
                <p className="text-justify sm:text-left font-medium text-textBlack mx-10 sm:mx-0">
                  Masalah kesehatan mental meningkat dua kali lipat selama
                  pandemi. Tanpa kamu sadari, kamu bisa jadi salah satunya. Yuk,
                  bergabung bersama 25,000+ orang lainnya untuk belajar menjaga
                  kesehatan mental bersama MentalHack. Website yang berisikan
                  berita dan blog terbaru yang menjadi solusi terbaik untuk
                  kamu, memahami diri dan solusi masalah hati lebih dalam.
                </p>
              </div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="hidden sm:flex justify-center items-center">
              <img src={Dokter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="mt-12 px-12 py-12 bg-bgPrimary">
        <header className="w-full mx-auto flex flex-wrap justify-center">
          <h1 className="font-bold text-4xl text-center text-textWhite italic">
            NEWS BLOG
          </h1>
        </header>
        <main className="container mx-auto w-full mt-16">
          <div
            id="newsblog"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 content-center"
          ></div>
        </main>
      </section>
      <div id="about">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-center items-center w-full pt-28 lg:pt-24 pb-6">
            <h1 className="text-4xl font-semibold text-textPrimary">
              Our Team
            </h1>
          </div>
          <div className="relative">
            <ul id="slider" className="shadow-lg">
              <li className="relative">
                <div className="bg-textSecondary h-full md:h-[500px] object-cover w-full rounded-xl block md:flex items-center justify-around align-center bg-contain bg-no-repeat bg-right-top">
                  <div className="flex justify-center items-center md:hidden pt-12">
                    <img src={Zaky} alt="Hero" className="h-[400px]" />
                  </div>
                  <div className="flex md:ml-14 lg:ml-36 justify-center md:justify-start items-center text-center md:text-left w-full md:w-1/2 pb-12 md:py-12">
                    <div>
                      <h1 className="lg:text-4xl font-bold pb-4 text-textWhite text-xl">
                        Muhammad Zaky Rahmadany
                      </h1>
                      <p className="text-lg lg:text-2xl font-semibold text-textWhite ">
                        Web Developer
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center w-1/2 pt-12">
                    <img src={Zaky} alt="Hero" className="h-[400px]" />
                  </div>
                </div>
                <div className="absolute top-0 h-full w-full text-center mt-4">
                  <h2 className="text-2xl font-bold text-textWhite">Leader</h2>
                </div>
              </li>
              <li className="relative hidden ">
                <div className="bg-textSecondary h-full md:h-[500px] object-cover w-full rounded-xl block md:flex items-center justify-around align-center bg-contain bg-no-repeat bg-right-top">
                  <div className="flex justify-center items-center md:hidden pt-12">
                    <img src={Thobi} alt="Hero" className="h-[400px]" />
                  </div>
                  <div className="flex md:ml-14 lg:ml-36 justify-center md:justify-start items-center text-center md:text-left w-full md:w-1/2 pb-12 md:py-12">
                    <div>
                      <h1 className="lg:text-4xl font-bold pb-4 text-textWhite text-xl">
                        Raihan Thobie
                      </h1>
                      <p className="text-lg lg:text-2xl font-semibold text-textWhite ">
                        Web Developer
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center w-1/2 pt-12">
                    <img src={Thobi} alt="Hero" className="h-[400px]" />
                  </div>
                </div>
                <div className="absolute top-0 h-full w-full text-center mt-4">
                  <h2 className="text-2xl font-bold text-textWhite">Member</h2>
                </div>
              </li>
              <li className="relative hidden ">
                <div className="bg-textSecondary h-full md:h-[500px] object-cover w-full rounded-xl block md:flex items-center justify-around align-center bg-contain bg-no-repeat bg-right-top">
                  <div className="flex justify-center items-center md:hidden pt-12">
                    <img src={Suca} alt="Hero" className="h-[400px]" />
                  </div>
                  <div className="flex md:ml-14 lg:ml-36 justify-center md:justify-start items-center text-center md:text-left w-full md:w-1/2 pb-12 md:py-12">
                    <div>
                      <h1 className="lg:text-4xl font-bold pb-4 text-textWhite text-xl">
                        Febrila Sucia
                      </h1>
                      <p className="text-lg lg:text-2xl font-semibold text-textWhite ">
                        Web Developer
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center items-center w-1/2 pt-12">
                    <img src={Suca} alt="Hero" className="h-[400px]" />
                  </div>
                </div>
                <div className="absolute top-0 h-full w-full text-center mt-4">
                  <h2 className="text-2xl font-bold text-textWhite">Members</h2>
                </div>
              </li>
            </ul>
            <div className="absolute px-3 flex h-full w-full top-0 left-0">
              <div className="my-auto w-full flex justify-between">
                <button
                  id="prev"
                  className="bg-[#fff] p-3 rounded-full bg-opacity-80 shadow-lg hover:scale-[1.1] duration-300 transform ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  id="next"
                  className="bg-[#fff] p-3 rounded-full bg-opacity-80 shadow-lg hover:scale-[1.1] duration-300 transform ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

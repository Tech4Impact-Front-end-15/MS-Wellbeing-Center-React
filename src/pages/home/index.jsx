import React from "react";
import Psikolog from "../../img/psikolog.png";
import homephoto from "../../img/hero4.png";
import hero from "../../img/hero.png";
import hero3 from "../../img/hero3.png";
import team from "../../img/team.png";
import hero4 from "../../img/hero4.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <section className="w-full">
        <img src={homephoto} alt="" className="w-full" />
      </section>
      <section className="h-[200px] sm:h-[400px] bg-white text-bgPrimary flex items-center">
        <div className="p-5 mx-28">
          <div className=" text-justify text-[10px] sm:text-lg">
            Tau gak sih, <br /> Masalah kesehatan mental meningkat dua kali
            lipat selama pandemi. Tanpa kamu sadari, kamu bisa jadi salah
            satunya. Yuk, bergabung bersama 25,000+ orang lainnya untuk belajar
            menjaga kesehatan mental bersama MentalHack. Website yang berisikan
            berita dan blog terbaru yang menjadi solusi terbaik untuk kamu,
            memahami diri dan solusi masalah hati lebih dalam.
          </div>
        </div>
      </section>

      <section className="h-[200px] sm:h-[400px] text-white bg-bgPrimary border flex items-center">
        <img
          src={Psikolog}
          alt=""
          className=" h-[150px] sm:h-[300px] px-4 sm:px-20"
        />
        <div className="">
          <p className="text-2xl sm:text-4xl font-bold ">Psikolog Terbaik</p>
          <div className="italic text-justify mt-3 text-[10px] sm:text-lg">
            MentalHack memberikan dengan memberikan psikolog terbaik <br />
            ditujukan untuk kamu yang membutuhkan tempat keluh kesah.
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="flex flex-wrap justify-center">
          <div className="m-5 max-w-sm bg-bgPrimary hover:bg-textSecondary border border-gray-100 rounded-xl shadow-md text-white">
            <img src={hero} alt="sample img" className="rounded-xl" />
            <div className="p-5 text-center">
              <Link
                to="/blog"
                className="mb-2 text-xl font-bold tracking-tight"
              >
                BLOG
              </Link>
            </div>
          </div>

          <div className="m-5 max-w-sm bg-bgPrimary hover:bg-textSecondary border border-gray-100 rounded-xl shadow-md text-white">
            <img src={hero3} alt="sample img" className="rounded-xl" />
            <div className="p-5 text-center">
              <Link
                to="/video"
                className="mb-2 text-xl font-bold tracking-tight "
              >
                VIDEO
              </Link>
            </div>
          </div>

          <div className="m-5 max-w-sm bg-bgPrimary hover:bg-textSecondary border border-gray-100 rounded-xl shadow-md text-white">
            <img src={hero4} alt="sample img" className="rounded-xl" />
            <div className="p-5 text-center">
              <Link
                to="/team"
                className="mb-2 text-xl font-bold tracking-tight "
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

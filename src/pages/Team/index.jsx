import React from "react";
import Team from "../../img/team3.png";
import Zaky from "../../img/Zaky.png";
import Suca from "../../img/Suca.png";
import Thobie from "../../img/Thobi.png";
import HeroBlog from "../../components/Blog/HeroBlog";
import HeroTeam from "../../components/Team/HeroTeam";

function Member() {
  return (
    <div>
      <section className="mb-10 w-full">
        <img src={Team} alt="" className="w-full" />
      </section>

      <HeroTeam />

      <section className="h-[200px] sm:h-[400px] text-white bg-bgPrimary border flex items-center">
        <img
          src={Zaky}
          alt=""
          className=" h-[150px] sm:h-[300px] px-4 sm:px-20"
        />
        <div className="p-5 mr-5">
          <p className="text-2xl sm:text-4xl font-bold ">Zaky</p>
          <p className="text-sm sm:text-xl">21 tahun</p>

          <div className="italic text-justify mt-3 sm:mr-20 text-[10px] sm:text-lg">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, accusantium illum, modi voluptate dolorum autem sint
            iure exercitationem praesentium nihil quod nulla quibusdam
            necessitatibus sequi dolore nobis deserunt corporis quam!"
          </div>
        </div>
      </section>

      <section className="h-[200px] sm:h-[400px] text-bgPrimary border text-right">
        <div className="p-5 ml-[250px] sm:ml-[650px] flex items-center">
          <div className="mr-5">
            <p className="text-2xl sm:text-4xl font-bold">Suca</p>
            <p className="text-sm sm:text-xl">20 tahun</p>
            <div className="italic text-justify sm:text-right mt-3 text-[10px] sm:text-lg">
              "tidak dapat berbicara, kirim duit saja"
            </div>
          </div>
          <img src={Suca} alt="" className=" h-[150px] sm:h-[300px]" />
        </div>
      </section>

      <section className="h-[200px] sm:h-[400px] text-white bg-bgPrimary border flex items-center">
        <img
          src={Thobie}
          alt=""
          className=" h-[150px] sm:h-[300px] px-4 sm:px-20"
        />
        <div className="p-5 mr-5">
          <p className="text-2xl sm:text-4xl font-bold ">Thobie</p>
          <p className="text-sm sm:text-xl">21 tahun</p>
          <div className="italic text-justify mt-3 sm:mr-20 text-[10px] sm:text-lg">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, accusantium illum, modi voluptate dolorum autem sint
            iure exercitationem praesentium nihil quod nulla quibusdam
            necessitatibus sequi dolore nobis deserunt corporis quam!"
          </div>
        </div>
      </section>
    </div>
  );
}

export default Member;

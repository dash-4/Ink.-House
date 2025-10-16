import React from "react";
import Layer1 from "../assets/Layer1.png";
import PrmButton from "../ui/PrmButton";

function HeroSection() {
  return (
    <div className="flex ">
      <img src={Layer1} alt="bird" className="w-540px h-331px" />
      <div className=" w-135 h-156 flex flex-col justify-center  gap-16">
        <div className="flex flex-col gap-5">
          <h2 className=" text-[60px] text-[#2C2D35] leading-[100%]">
            Реплики картин от <span className="text-[#598D66]">Ink. House</span>
          </h2>
          <p className="text-lg text-[#86928B]">
            Высокое качество отрисовки на плотной бумаге или льняном <br />
            холсте. Редкие произведения, доступные цены.
          </p>
        </div>
        <PrmButton />
      </div>
    </div>
  );
}

export default HeroSection;

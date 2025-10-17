import React from "react";
import Layer1 from "../assets/Layer1.png";
import PrmButton from "../ui/PrmButton";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 lg:px-0">
      <img src={Layer1} alt="bird" className="w-full lg:w-[540px] h-auto max-w-md lg:max-w-none" />
      <div className="w-full lg:w-[540px] flex flex-col justify-center gap-8 lg:gap-16">
        <div className="flex flex-col gap-4 lg:gap-5">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] text-[#2C2D35] leading-[110%] lg:leading-[100%]">
            Реплики картин от <span className="text-[#598D66]">Ink. House</span>
          </h2>
          <p className="text-base lg:text-lg text-[#86928B]">
            Высокое качество отрисовки на плотной бумаге или льняном <br className="hidden lg:block" />
            холсте. Редкие произведения, доступные цены.
          </p>
        </div>
        <PrmButton />
      </div>
    </div>
  );
}

export default HeroSection;
import React from "react";
import Rama from "../assets/rama.png";
import K from "../assets/k.png";

function AboutSection() {
  return (
    <div id='about' className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1110px] mx-auto gap-6 lg:gap-10 py-6 lg:py-10 px-4">
      <div className="relative flex-1 w-full">
        <img src={Rama} alt="рамка" className="relative z-10 w-full" />
        <img
          src={K}
          alt="рука"
          className="absolute top-1/2 left-1/2 lg:left-45 transform -translate-x-1/2 -translate-y-1/2 h-4/5 object-cover z-0"
        />
      </div>

      <div className="flex-1 w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] text-[#2C2D35] font-medium mb-4 lg:mb-6">Наша команда</h2>
        <p className="text-[#2C2D35] text-base sm:text-[18px] leading-relaxed">
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
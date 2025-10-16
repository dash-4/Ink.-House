import React from "react";
import Rama from "../assets/rama.png";
import K from "../assets/k.png";

function AboutSection() {
  return (
    <div className="flex relative items-center justify-center">
      <img src={Rama} alt="рамка" className="relative z-10" />

      <div className="absolute inset-0 flex items-center justify-start z-0 p-8">
        <img
          src={K}
          alt="рука"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div>
        <h2>Наша команда</h2>
        <p>
          Значимость этих проблем настолько очевидна, что базовый вектор
          развития позволяет оценить значение экспериментов, поражающих по своей
          масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
          консультация с широким активом.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;

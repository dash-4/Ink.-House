import React from "react";
import I from "../assets/attachment.jpeg";
import Star from "../assets/Star2.png";
import MitButton from "../ui/MitButton";

function NewSection() {
  return (
    <div id='new' className="relative w-full">
      <img src={I} alt="картинка" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[600px] lg:w-[500px] mx-auto lg:mx-0 lg:ml-8 xl:ml-12 2xl:ml-50 py-4 sm:py-6 lg:py-8 xl:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
            <img 
              src={Star} 
              alt="звезда" 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0" 
            />
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] leading-[110%] text-center sm:text-left font-medium">
              Новая коллекция французских авторов
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 text-white mb-4 sm:mb-5 lg:mb-6">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-center sm:text-left">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас
              к новым свершениям, которые, в свою очередь, должны быть
              заблокированы в рамках своих собственных рациональных ограничений.
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-loose text-center sm:text-left">
              Принимая во внимание показатели успешности, граница обучения
              кадров предопределяет высокую востребованность направлений
              прогрессивного развития.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <MitButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
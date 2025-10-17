import React from "react";
import I from "../assets/attachment.jpeg";
import Star from "../assets/Star2.png";
import MitButton from "../ui/MitButton";

function NewSection() {
  return (
    <div className="relative w-full">
      <img src={I} alt="картинка" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center">
        <div className="w-[500px] ml-50 py-10">
          <div className="flex items-start gap-4 mb-6">
            <img src={Star} alt="звезда" className="w-16 h-16 flex-shrink-0" />
            <h2 className="text-white text-[40px] leading-[100%] font-medium">
              Новая коллекция французских авторов
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-white mb-6">
            <p className="text-lg leading-relaxed">
              Сложно сказать, почему акционеры крупнейших компаний призывают нас
              к новым свершениям, которые, в свою очередь, должны быть
              заблокированы в рамках своих собственных рациональных ограничений.
            </p>
            <p className="text-lg leading-relaxed">
              Принимая во внимание показатели успешности, граница обучения
              кадров предопределяет высокую востребованность направлений
              прогрессивного развития.
            </p>
          </div>
          <MitButton />
        </div>
      </div>
    </div>
  );
}

export default NewSection;

import React from "react";
import Card from "./Card";
import { cardData } from "../data";

function CardSection() {
  return (  
    <section className="flex flex-col gap-6 lg:gap-8 px-4 lg:px-0">
      <div id='rep' className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900">Репродукции</h2>
        <span className="bg-green-700 text-white text-base sm:text-xl rounded-2xl px-3 sm:px-4 py-2 sm:py-2 self-start sm:self-auto">
          Франция
        </span>
      </div>
      <Card cardData={cardData()} />
    </section>
  );
}

export default CardSection;
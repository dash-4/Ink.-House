import React from "react";
import Card from "./Card";
import { cardData } from "../data";

function CardSection() {
  return (
    <section className="flex flex-col gap-8">
      <div id='rep' className="flex justify-between items-center">
        <h2 className="text-4xl text-gray-900">Репродукции</h2>
        <span className="bg-green-700 text-white text-xl rounded-2xl px-4 py-2">
          Франция
        </span>
      </div>
      <Card cardData={cardData()} />
    </section>
  );
}

export default CardSection;

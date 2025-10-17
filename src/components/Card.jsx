import React from "react";
import CartButton from "../ui/CartButton";

function Card({ cardData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
      {cardData.map((item) => (
        <div key={item.id} className="bg-[#E1EDE6] p-4 sm:p-5">
          <img className="w-full h-auto" src={item.image} alt={item.title} />
          <p className="text-[#86928B] text-base sm:text-[18px] mt-3 sm:mt-4">{item.author}</p>
          <h3 className="text-[#2C2D35] text-xl sm:text-2xl lg:text-[30px] mt-2">{item.title}</h3>
          <p className="text-[#2C2D35] text-sm sm:text-[18px] mt-2 sm:mt-3">{item.description}</p>
          <p className="text-[#598D66] text-lg sm:text-xl lg:text-[24px] mt-3 sm:mt-4">{item.price}</p>
          <div className="mt-4 sm:mt-5">
            <CartButton />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
import React from "react";
import CartButton from "../ui/CartButton";

function Card({ cardData }) {
  return (
    <div className=" grid grid-cols-3 gap-8 ">
      {cardData.map((item) => (
        <div key={item.id} className="bg-[#E1EDE6] p-5">
          <img className="" src={item.image} alt={item.title}  />
          <p className="text-[#86928B] text-[18px] ">{item.author}</p>
          <h3 className="text-[#2C2D35] text-[30px]">{item.title}</h3>
          <p className="text-[#2C2D35] text-[18px]">{item.description}</p>
          <p className="text-[#598D66] text-[24px]">{item.price}</p>
          <CartButton />
        </div>
        
      ))}
      
    </div>
  );
}

export default Card;

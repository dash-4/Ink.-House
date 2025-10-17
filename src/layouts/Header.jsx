import React from "react";
import Star1 from "../assets/Star1.png";
import Cart from "../assets/cart.png"

function Header() {
  return (
    <div className="bg-[#E1EDE6] flex justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-[1280px] flex flex-col sm:flex-row justify-between items-center gap-4 ">
        <div className="flex gap-2 items-center">
          <img src={Star1} alt="Star logo" className="w-6 sm:w-8 lg:w-35px" />
          <h1 className="text-[#598D66] text-lg sm:text-xl lg:size-20px font-bold">Ink. House</h1>
        </div>
        <nav className="flex gap-4 sm:gap-6 lg:gap-10 items-center text-[#2C2D35] text-sm sm:text-base">
          <ul>
            <a href="#rep">Репродукции</a>
          </ul>
          <ul>
            <a href="#new">Новинки</a>
          </ul>
          <ul>
            <a href="#about">О нас</a>
          </ul>
          <img src={Cart} alt="cart" className="w-5 h-5 sm:w-6 sm:h-6 lg:w-24px lg:h-24px" />
        </nav>
      </div>
    </div>
  );
}

export default Header;
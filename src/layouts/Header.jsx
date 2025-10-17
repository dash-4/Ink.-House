import React from "react";
import Star1 from "../assets/Star1.png";
import Cart from "../assets/cart.png"

function Header() {
  return (
    <div className="bg-[#E1EDE6] flex justify-center p-8">
      <div className="w-full max-w-[1280px] flex justify-between">
        <div className="flex gap-2 items-center justify-center">
          <img src={Star1} alt="Star logo" className="w-35px " />
          <h1 className="text-[#598D66] size-20px font-bold">Ink. House</h1>
        </div>
        <nav className="flex gap-10 items-center text-[#2C2D35]">
          <ul>
            <a href="#rep">Репродукции</a>
          </ul>
          <ul>
            <a hre="#">Новинки</a>
          </ul>
          <ul>
            <a href="#about">О нас</a>
          </ul>
           <img src={Cart} alt="cart" className="w-24px h-24px" />
        </nav>
       
      </div>
    </div>
  );
}

export default Header;

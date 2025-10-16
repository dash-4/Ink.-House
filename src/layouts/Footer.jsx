import React from "react";
import Star1 from "../assets/Star1.png";

function Footer() {
  return (
    <div className="bg-[#E1EDE6]">
      <div className="flex gap-2 items-center justify-center">
        <img src={Star1} alt="Star logo" className="w-35px " />
        <h1 className="text-[#598D66] size-20px font-bold">Ink. House</h1>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { BsArrowLeft } from "react-icons/bs";

function Header() {
  return (
    <div className="w-[400px] bg-[#4EC1E6] flex justify-between h-16 items-center p-3 text-white">
      <BsArrowLeft className="w-6 h-6" />
      <h1 className="font-extrabold uppercase">Customize</h1>
      <p className="opacity-70">Cancel</p>
    </div>
  );
}

export default Header;

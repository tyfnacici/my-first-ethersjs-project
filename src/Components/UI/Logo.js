import React from "react";
import Cuberium from "./cuberium.png";

function Logo() {
  return (
    <div className="col-span-1 flex flex-col min-h-full bg-gray-500 rounded-l-xl  border-r-2 border-black align-middle place-items-center">
      <img src={Cuberium} alt="cuberium-logo" className="w-60 self-center" />
      <p className="text-white text-center text-sm align">Made by Cuberium</p>
    </div>
  );
}

export default Logo;

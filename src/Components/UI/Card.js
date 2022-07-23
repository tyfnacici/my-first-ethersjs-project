import React from "react";

function Card(props) {
  return (
    <div className="grid grid-cols-4 grid-rows-1 pr-8   justify-center w-2/3 h-1/3 text-xl text-gray-700 bg-white rounded-xl shadow-2xl">
      {props.children}
    </div>
  );
}

export default Card;

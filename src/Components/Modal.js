import React, { useState } from "react";

function Modal(props) {
  const visibility = props.setVisibility;
  const [button, changeButton] = useState("Connect");
  const connectMetamask = async (props) => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    changeButton("Connected");
    visibility("3");
  };

  return (
    <div className="backdrop-blur-lg fixed inset-0">
      <div className="flex h-screen justify-center items-center">
        <div className=" flex flex-col text-4xl bg-white shadow-2xl rounded-xl w-1/3 h-1/3 p-4 justify-between outline outline-purple-700 ">
          <p className="text-left">{props.title}</p>
          {typeof window.ethereum !== "undefined" && (
            <button
              className="px-6 py-2 bg-purple-700 rounded-lg text-white"
              onClick={connectMetamask}
            >
              {button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

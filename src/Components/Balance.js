import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Buttons from "./Buttons";

function Balance(props) {
  const [modalVal, setModalVisibility] = useState(0);
  const [walletConnect, setConnectState] = useState("Connect Wallet");
  const [storedNumber, setStoredNumber] = useState(0);

  const modalHandler = () => {
    if (window.ethereum !== undefined) {
      if (window.ethereum._state.accounts.length === 0) {
        setModalVisibility("1");
        setConnectState("Connected!");
      } else {
        setConnectState("Connected!");
        setModalVisibility("3");
      }
    } else {
      setModalVisibility("2");
    }
  };

  return (
    <>
      {modalVal === "1" && (
        <Modal
          title="Kardeş, Looks like you didn't connect your Metamask yet. Please connect it."
          setVisibility={setModalVisibility}
        />
      )}
      {modalVal === "2" && <Modal title="Kardeş, Please install Metamask." />}
      <div className="items-center pt-4  pb-2 flex flex-row justify-between">
        <p className="text-4xl">Hello, Kardeş!</p>
        <button
          className="px-6 py-2 bg-purple-700 rounded-lg text-white"
          onClick={modalHandler}
        >
          {walletConnect}
        </button>
      </div>

      {modalVal === "3" && (
        <>
          <p className="pb-5 text-lg">
            Your Metamask address is: {window.ethereum._state.accounts[0]}
          </p>

          <h1 className="text-2xl  pb-20">
            Your stored number is {storedNumber}
          </h1>
          <Buttons storedNumber={setStoredNumber} />
        </>
      )}
    </>
  );
}

export default Balance;

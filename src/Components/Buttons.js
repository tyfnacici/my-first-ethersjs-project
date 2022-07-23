import React from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../constants";
import { useState } from "react";

function Buttons(props) {
  const [number, changeNumber] = useState(0);
  const storedNumber = props.storedNumber;
  const listenForTransactionMine = (transactionResponse, provider) => {
    console.log(`Mining ${transactionResponse.hash}...`);
    return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (transactionReceipt) => {
        console.log(
          `Complated with ${transactionReceipt.confirmations} confirmations.`
        );
        resolve();
      });
    });
  };
  const store = async () => {
    let storeNumber = number;
    console.log(`Storing the ${storeNumber}.`);
    if (window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const transactionResponse = await contract.store(storeNumber);
      await listenForTransactionMine(transactionResponse, provider);
      await setTimeout(console.log("Done"), listenForTransactionMine);
    }
  };

  const retrieve = async (props) => {
    if (window.ethereum !== undefined) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const favoriteNumber = await contract.retrieve();
      storedNumber(favoriteNumber.toNumber());
    }
  };

  const inputHandler = (event) => {
    changeNumber(event.target.value);
  };
  return (
    <>
      <div className="flex justify-between text-white align-bottom">
        <button
          className="px-6 py-2 bg-purple-700 rounded-lg"
          onClick={retrieve}
        >
          Withdraw
        </button>
        <input
          type="number"
          className="border-2 border-black text-black"
          onChange={inputHandler}
          value={number}
        />
        <button className="px-6 py-2 bg-purple-700 rounded-lg" onClick={store}>
          Fund
        </button>
      </div>
    </>
  );
}

export default Buttons;

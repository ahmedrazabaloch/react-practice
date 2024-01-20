import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter < 20 ? counter + 1 : counter);
  };

  const handleMinus = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  };

  return (
    <>
      <div className="h-full flex flex-col text-center mt-5 gap-5">
        <h1 className="text-5xl font-bold">Counter = {counter}</h1>
        <div className="text-lg font-bold flex gap-4 justify-center text-white">
          <button
            className="bg-red-500 py-2 px-4 rounded-lg flex items-center gap-3"
            onClick={handleMinus}
          >
            Decrease
            <TiMinus />
          </button>
          <button
            className=" bg-green-500 py-2 px-4 rounded-lg flex items-center gap-3"
            onClick={handlePlus}
          >
            Increase
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;

import React, { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("#1a1a1a");

  return (
    <div
      className=" h-full duration-200 rounded-lg"
      style={{ backgroundColor: color }}
    >
      <div className="py-4 px-4 flex gap-5 justify-center">
        <button
          onClick={() => setColor("Orange")}
          style={{
            backgroundColor: "Orange",
            outline: "none",
          }}
          className="p-2 rounded-lg font-semibold border"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("Red")}
          style={{
            backgroundColor: "Red",
            outline: "none",
          }}
          className="p-2 rounded-lg font-semibold border"
        >
          Red
        </button>
        <button
          onClick={() => setColor("Green")}
          style={{
            backgroundColor: "Green",
            outline: "none",
          }}
          className="p-2 rounded-lg font-semibold border"
        >
          Green
        </button>
        <button
          onClick={() => setColor("Pink")}
          style={{
            backgroundColor: "Pink",
            outline: "none",
          }}
          className="p-2 rounded-lg font-semibold border "
        >
          Pink
        </button>
        <button
          onClick={() => setColor("Blue")}
          style={{
            backgroundColor: "Blue",
            outline: "none",
          }}
          className="p-2 rounded-lg font-semibold border"
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default BgChanger;

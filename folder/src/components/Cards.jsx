import React from "react";
import stock from "../images/stock.jpg";
import ReactDOM from "react-dom/client";

function Cards() {
  return (
    <div className="flex text-white">
      <div className="text-white mx-auto bg-orange-600 p-10 my-11 rounded-md">
        <h1 className="font-bold bg-orange-600">CARD 1</h1>
      </div>
      <div className="text-white mx-auto bg-orange-600 p-10 my-11 rounded-md">
        <h1 className="font-bold bg-orange-600">CARD 1</h1>
      </div>
      <div className="text-white mx-auto bg-orange-600 p-10 my-11 rounded-md">
        <h1 className="font-bold bg-orange-600">CARD 1</h1>
      </div>
    </div>
  );
}

export default Cards;

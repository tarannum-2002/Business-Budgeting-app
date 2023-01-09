import React from "react";
import stock from "../images/stock.jpg";
import ReactDOM from "react-dom/client";

function Content() {
  return (
    <div className="flex text-white">
      <div>
        <h1 className="text-white p-12 text-8xl">
          Business <br /> Budgeting <br /> App <br />
        </h1>
        <br />
        <div className="button flex-col">
          <button className="px-8 py-2 rounded-md mt-3 mb-16 mx-14">
            GET STARTED
          </button>
        </div>
      </div>
      <div className="background-image w-50%">
        <img src="{stock}" alt="stock market" />
      </div>
    </div>
  );
}

export default Content;

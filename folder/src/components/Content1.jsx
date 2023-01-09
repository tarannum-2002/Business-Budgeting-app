import React from "react";
import stock from "../images/stock.jpg";
import ReactDOM from "react-dom/client";

function Content1() {
  return (
    <div className="bg-slate-200 text-black p-12">
      <h1 className="bg-slate-200 my-7 mx-auto font-bold text-4xl text-center">
        Use our app to calculate and keep track of your expenses!
      </h1>
      <div className="bg-slate-200 flex">
        <p className="text-center bg-slate-200 mx-12 py-11">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          corrupti ex facilis ut fuga, qui odit temporibus dolor, vitae aliquam
          repudiandae maxime. A, sed. Repellendus dolores quaerat reiciendis
          recusandae earum? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quia corrupti ex facilis ut fuga, qui odit temporibus dolor,
          vitae aliquam repudiandae maxime. A, sed. Repellendus dolores quaerat
          reiciendis recusandae earum?
        </p>
        <p className="text-center bg-slate-200 mx-12 text-9xl font-bold px-5 py-10">
          ICON
        </p>
      </div>
    </div>
  );
}

export default Content1;

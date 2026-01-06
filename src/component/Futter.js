import React from "react";
import img from "./image/6.webp";
const Futter = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center py-10 mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform   ">
      <div className="items-center justify-center sm:flex">
        <div>
          <img
            className=" left-0 right-0 ml-auto mr-auto w-[400px] xl:w-[700px]"
            src={img}
          ></img>
        </div>
        <div>
          <h1 className="w-2/3 text-3xl font-bold text-transparent sm:text-4xl md:text-7xl bg-gradient-to-tr from-green-700 to-blue-600 bg-clip-text">
            What's in the box
          </h1>
          <p className="flex items-center gap-2 p-2 font-semibold text-white md:max-w-96">
            <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
            <h1>Solo Pro wireless headphones</h1>
          </p>
          <p className="flex items-center gap-2 p-2 font-semibold text-white md:max-w-96">
            <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
            <h1>Carrying Case</h1>
          </p>
          <p className="flex items-center gap-2 p-2 font-semibold text-white md:max-w-96">
            <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
            <h1>Lightning to USB-A charging cable</h1>
          </p>
          <p className="flex items-center gap-2 p-2 font-semibold text-white md:max-w-96">
            <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
            <h1>Quick Start Guide</h1>
          </p>
          <p className="flex items-center gap-2 p-2 font-semibold text-white md:max-w-96">
            <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
            <h1>Warranty Card</h1>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Futter;

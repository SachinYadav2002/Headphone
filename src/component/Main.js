import React from "react";
import img from "./image/1.webp";
const main = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-between mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform md:h-screen relative ">
      <div className="flex items-center justify-center mx-auto ">
        <div className="flex items-center justify-center text-center relative overflow-hidden min-h-[70vh] sm:min-h-screen 2xl:sm:min-h-[70vh]">
          <h1 className="font-bold text-transparent text-[130px] sm:text-[200px] xl:text-[450px] bg-gradient-to-tr from-green-600 to-blue-600 bg-clip-text ">
            2026
          </h1>
          <img
            className="absolute left-0 right-0 ml-auto mr-auto w-[600px]"
            src={img}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default main;

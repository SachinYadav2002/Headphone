import React from "react";
import img from "./image/45.webp";
const Controll = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center py-10 mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform    ">
      <div className="items-center justify-center sm:flex">
        <div className="p-10 md:w-1/2">
          <h1 className="text-4xl font-bold text-transparent sm:text-6xl bg-gradient-to-tr from-green-600 to-blue-600 bg-clip-text">
            Controll your sound with listening modes
          </h1>
          <p className="p-2 font-semibold text-white md:max-w-96 ">
            With an advanced acoustic platform and noise cancelling, Solo Pro
            ensures youl'l always have the right sound for right situation
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center text-center relative overflow-hidden min-h-[70vh] sm:min-h-screen 2xl:sm:min-h-[70vh]">
            <h1 className="font-bold text-transparent text-[120px] sm:text-[150px] xl:text-[200px] bg-gradient-to-tr from-green-600 to-blue-600 bg-clip-text ">
              SOLO
            </h1>
            <img
              className="absolute left-0 right-0 ml-auto mr-auto w-[300px] xl:w-[600px] "
              src={img}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controll;

import React from "react";
import img from "./image/2.webp";
const Self = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center py-10 mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform">
      <div className="items-center justify-center sm:flex">
        <div>
          <img src={img} />
        </div>
        <div className="flex ">
          <div>
            <h1 className="text-4xl font-bold text-transparent sm:text-6xl bg-gradient-to-tr from-green-600 to-blue-600 bg-clip-text">
              Immerse yourself in your music
            </h1>
            <h1 className="flex items-center gap-1 p-2 text-2xl font-semibold sm:text-3xl">
              $199 | Colors
              <div className="flex items-center justify-center h-2 p-2 bg-blue-600 rounded-full"></div>
              <div className="flex items-center justify-center h-2 p-2 bg-red-600 rounded-full"></div>
              <div className="flex items-center justify-center h-2 p-2 bg-yellow-600 rounded-full"></div>
              <div className="flex items-center justify-center h-2 p-2 bg-green-600 rounded-full"></div>
              <div className="flex items-center justify-center h-2 p-2 bg-pink-600 rounded-full"></div>
            </h1>
            <p className="p-2 font-semibold text-white ">
              With an advanced acoustic platform and noise cancelling, Solo Pro
              ensures you'll always have the right sound for right situation
            </p>
            <p className="p-2 font-bold text-center text-white border-2 border-blue-300 cursor-pointer rounded-2xl bg-gradient-to-tr from-green-600 to-indigo-500">
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;

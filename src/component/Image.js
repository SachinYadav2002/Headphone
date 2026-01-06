import React from "react";
import img from "./image/person.webp";
import { PlayCircleOutlined } from "@ant-design/icons";
const Image = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center  mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform h-screen">
      <div className="fixed w-full p-2 mt-10 rounded-xl">
        <img src={img} className="w-full h-[80vh] rounded-2xl "></img>
        <div className="absolute bottom-0 left-0 flex items-center justify-center gap-3 p-3 m-4 rounded-lg cursor-pointer backdrop-blur-xl">
          <h1 className="text-4xl text-blue-500">
            <PlayCircleOutlined />
          </h1>
          <div>
            <h1 className="text-2xl font-semibold text-purple-600">WATCH</h1>
            <h1 className="text-gray-500">Intro Video</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;

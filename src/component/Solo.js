import React from "react";
import img1 from "./image/person2.webp";
import {
  WifiOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";
const Solo = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center py-10 mx-auto p-2 bg-gradient-65 from-yellow-300 to-pink-500 transform   ">
      <div>
        <h1 className="flex justify-center p-4 text-3xl font-bold text-transparent transform bg-gradient-to-r from-red-800 to-blue-700 bg-clip-text">
          Solo Pro
        </h1>
        <h1 className="flex justify-center p-4 font-serif text-xl font-semibold text-blue-600">
          The only Headset you'll ever need
        </h1>
        <div className="justify-center mx-auto rounded-lg shadow-2xl sm:flex sm:w-[95%] mt-16">
          <div className="flex ">
            <img src={img1} className="h-80" />
          </div>
          <div className="gap-0 p-2 sm:columns-2 columns-auto ">
            <h1 className="py-8 font-semibold text-center border-2 border-emerald-950 ">
              <h1 className="text-4xl font-semibold text-center text-blue-700">
                <WifiOutlined />
              </h1>
              Wireless Connectivity
            </h1>
            <h1 className="p-4 font-semibold text-center border-2 py-11 border-emerald-950">
              <h1 className="text-4xl text-center text-blue-700">
                <FolderOpenOutlined />
              </h1>
              Foldable Design
            </h1>
            <h1 className="p-4 py-8 font-semibold text-center border-2 border-emerald-950">
              <h1 className="text-4xl text-center text-blue-700">
                <ClockCircleOutlined />
              </h1>
              Product Weight
            </h1>
            <h1 className="p-4 py-8 font-semibold text-center border-2 border-emerald-950">
              <h1 className="text-4xl text-center text-blue-700">
                <AlertOutlined />
              </h1>
              Microphone Feature
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solo;

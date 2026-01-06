import React from "react";
import {
  EllipsisOutlined,
  FileTextOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
const Box = () => {
  return (
    <div className="md:max-w-[85%] max-w-[95%] flex justify-center py-10 mx-auto bg-gradient-65 from-yellow-300 to-pink-500 transform   items-center ">
      {" "}
      <div className="flex flex-wrap items-center justify-center gap-4 md:py-20">
        <div className="p-4 text-center shadow-xl cursor-pointer rounded-xl size-60 hover:shadow-2xl hover:bg-gradient-65 from-yellow-200 to-pink-300">
          <h1 className="text-4xl font-semibold text-center text-blue-700">
            <EllipsisOutlined />
          </h1>
          <h1 className="text-xl font-bold text-transparent bg-gradient-to-tr from-green-700 to-blue-600 bg-clip-text">
            Noise Cancelling
          </h1>
          <p className="p-2 font-semibold text-white hover:text-black">
            Actively blocks external noise and uses real-time audio calibration,
            giving you the space you need
          </p>
        </div>
        <div className="p-4 text-center transform shadow-xl rounded-xl size-60 hover:shadow-2xl hover:bg-gradient-65 from-yellow-200 to-pink-300">
          <h1 className="text-4xl font-semibold text-center text-blue-700">
            <FileTextOutlined />
          </h1>
          <h1 className="text-xl font-bold text-transparent bg-gradient-to-tr from-green-700 to-blue-600 bg-clip-text">
            Transparency Mode
          </h1>
          <p className="p-2 font-semibold text-white hover:text-black">
            Allows you to see the real-time audio levels of your surroundings,
            and to adjust the level of noise cancellation
          </p>
        </div>
        <div className="p-4 text-center shadow-xl rounded-xl size-60 hover:shadow-2xl hover:bg-gradient-65 from-yellow-200 to-pink-300">
          <h1 className="text-4xl font-semibold text-center text-blue-700">
            <FundViewOutlined />
          </h1>
          <h1 className="text-xl font-bold text-transparent bg-gradient-to-tr from-green-700 to-blue-600 bg-clip-text">
            Extended Power
          </h1>
          <h1 className="p-2 font-semibold text-white hover:text-black">
            Extends the battery life of the device, so you can use it all day
            long
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Box;

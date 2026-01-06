import React from "react";
import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
const Contract = () => {
  return (
    <div>
      <div className="md:max-w-[85%] max-w-[95%] flex   mx-auto  bg-pink-700 transform  border-t-8 justify-center border-emerald-950  ">
        <div>
          <div className="flex justify-center mx-auto">
            <div className="">
              <h1 className="flex justify-center p-5 text-2xl font-bold text-yellow-300">
                Say Hello to us
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Enter your email "
                  className="p-2 rounded-s-full"
                ></input>
                <button className="p-2 bg-green-500 rounded-e-full">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-[85%] max-w-[95%]    mx-auto  bg-pink-700 justify-between  p-4 sm:flex ">
        <div className="">
          <h1 className="font-semibold text-blue-700 ">About us|Privacy</h1>
          <h1 className="font-semibold text-blue-700 ">policy |Contact us</h1>
        </div>
        <div className="">Copyright © 2026- Sachin</div>
        <div className="flex gap-2 text-4xl ">
          <h1 className="text-blue-700">
            <LinkedinOutlined />
          </h1>
          <h1 className="text-green-800">
            <TwitterOutlined />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contract;

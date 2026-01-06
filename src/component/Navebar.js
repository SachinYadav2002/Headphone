import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import image from "./image/sachin1231.png";
const Navebar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="">
      <div className="md:max-w-[85%] max-w-[95%] flex  justify-between mx-auto p-2 bg-gradient-to-r from-yellow-600 to-orange-600 transform h-14 sm:h-20 ">
        <div className="flex items-center gap-2 text-2xl font-bold text-transparent transform bg-gradient-to-r from-red-800 to-blue-700 bg-clip-text">
          <CustomerServiceOutlined className="text-blue-700" />
          Beats
        </div>
        <div className="items-center hidden gap-4 md:flex">
          <h1 className="font-semibold text-white cursor-pointer">Home </h1>
          <h1 className="font-semibold text-white cursor-pointer">Product</h1>
          <h1 className="font-semibold text-white cursor-pointer">Feature</h1>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setopen(!open)}
          >
            <MenuOutlined />
          </div>
          <h1 className="text-3xl">
            <ShoppingCartOutlined />{" "}
          </h1>

          <h1>
            <img
              className="w-6 bg-orange-300 rounded-full cursor-pointer"
              src={image}
            ></img>{" "}
          </h1>
        </div>
      </div>
      {open && (
        <div className="md:hidden items-center gap-4 md:flex bg-gradient-to-r from-yellow-600 to-orange-600 md:max-w-[85%] max-w-[95%] mx-auto px-10">
          <h1 className="font-semibold text-white cursor-pointer">Home </h1>
          <h1 className="font-semibold text-white cursor-pointer">Product</h1>
          <h1 className="font-semibold text-white cursor-pointer">Feature</h1>
        </div>
      )}
    </div>
  );
};

export default Navebar;

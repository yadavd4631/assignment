import React from "react";
import { IoAdd } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#6681E2] via-[#9737ff] to-[#f990ef] w-full h-5"></div>
      <div className="flex justify-between items-center px-10 py-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 ml-3 flex items-center justify-center rounded-full bg-gradient-to-b from-[#f990ef] via-[#9737ff] to-[#6681E2]">
            <h1 className="text-2xl font-bold text-gradient ml-44">PLOOTUS</h1>
          </div>
        </div>
        <button className="rounded-full bg-gradient-to-r from-[#fa5187] to-[#f68edc] h-10 w-10 text-white cursor-pointer mr-20">
          SK
        </button>
      </div>
      <div className="flex justify-between items-center px-10 mb-20 ">
        <h1 className="text-gradient font-semibold ml-32 text-3xl">
          Your Agents
        </h1>
        <button className="bg-[#6681E2] w-48 h-16 mr-20 rounded-full text-white flex items-center gap-2 text-xl cursor-pointer">
          <span className="text-4xl ml-3">
            <IoAdd />
          </span>
          Create Agent
        </button>
      </div>
    </div>
  );
};

export default Navbar;

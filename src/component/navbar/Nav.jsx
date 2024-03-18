import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import MoblleNav from "./MoblleNav";

const Nav = ({ isSidebarOpen, toggleSideBar }) => {
  return (
    <div className="w-full fixed top-0 z-50">
      <div className="lg:px-8 px-4 py-1 bg-light-green flex justify-between shadow-silver">
        <div>
          <img
            src="https://withdotta.com/_ipx/w_1920,q_75/%2Fimages%2Ficons%2Fdotta.png?url=%2Fimages%2Ficons%2Fdotta.png&w=1920&q=75"
            alt="Dotta logo"
            className="w-[100%] h-[60%] object-contain mt-2"
          />
        </div>
        <div className="gap-8 items-center hidden lg:flex">
          <ul className="flex gap-8 font-bold text-[#746c6c] text-[14px]">
            <li className="flex">
              Solutions{" "}
              <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1rem]" />
            </li>
            <li className="flex">
              Use Cases
              <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1rem]" />
            </li>
            <li className="flex">
              Developers
              <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1rem]" />
            </li>
            <li className="">Pricing</li>
            <li className="">Blog</li>
          </ul>
          <button className="border border-btn-outline px-[25px] py-[5px] rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
            Login
          </button>
          <button className="px-[25px] py-[6px] rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-btn-outline">
            Request Demo
          </button>
        </div>
        <div className="lg:hidden mt-4">
          <button onClick={toggleSideBar}>
            {isSidebarOpen ? (
              <div className="">
                <MoblleNav isSidebarOpen={toggleSideBar} />
              </div>
            ) : (
              <FcMenu className="text-2xl text-white" />
            )}
          </button>
          {/* {isSidebarOpen && (
            <div className="">
              <MoblleNav   isSidebarOpen={false}/>
            </div>
          )} */}
        </div>
      </div>
      {/* <MoblleNav
        isSidebarOpen={false}
      /> */}
    </div>
  );
};

export default Nav;
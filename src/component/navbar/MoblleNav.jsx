import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MoblleNav = ({ isSidebarOpen, toggleSideBar }) => {
  const sideNavStyles = {
    width: isSidebarOpen ? "translateX(0)" : "translateX(-100%)", // Adjust the width based on sidebar open state
    transition: "transform 0.3s ease", // Apply transition for smooth animation
  };

  return (
    <div
      style={sideNavStyles}
      className={`fixed top-0 left-0  z-50 flex transition-all duration-300 ${
        isSidebarOpen ? " " : "hidden"
      }`}
    >
      {isSidebarOpen && (
        <div className=" px-4 pt-6 bg-light-green w-[96vw]  md:w-[50vw] h-screen  ">
          <div className=" flex justify-between ">
            <div>
              <img
                src="https://withdotta.com/_ipx/w_1920,q_75/%2Fimages%2Ficons%2Fdotta.png?url=%2Fimages%2Ficons%2Fdotta.png&w=1920&q=75"
                alt="Dotta logo"
                className="w-[70%] object-contain "
              />
            </div>

            <div>
              <button onClick={toggleSideBar}>
                {" "}
                <FaTimes className="text-[#746c6c]  text-[1.5rem] mt-4" />
              </button>
            </div>
          </div>

          <div className=" relative">
            <ul className=" font-bold text-[#746c6c] text-[17px]  w-[100%] mt-10 ">
              <li className="flex justify-between">
                Solutions{" "}
                <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1.7rem]" />
              </li>
              <li className="flex  justify-between mt-6 ">
                Use Cases
                <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1.7rem]" />
              </li>
              <li className="flex  justify-between mt-6 ">
                Developers
                <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1.7rem]" />
              </li>
              <li className="mt-6 ">Pricing</li>
              <li className="mt-6 ">Blog</li>
            </ul>
            <div className="mt-[70%] md:mb-[100%]">
              <button className="border border-btn-outline px-[25px] py-[0.8rem] w-[100%] mb-4 rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
                Login
              </button>
              <button className="px-[25px] py-[0.8rem] rounded-[2rem] w-[100%] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-btn-outline">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoblleNav;

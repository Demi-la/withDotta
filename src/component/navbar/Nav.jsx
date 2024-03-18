import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcMenu } from "react-icons/fc";
import MoblleNav from "./MoblleNav";
import { TbCaptureFilled } from "react-icons/tb";
import dottaLogo from "../../assets/dottaLogo.png"

const Nav = ({ isSidebarOpen, toggleSideBar }) => {
  const [showPopUpModal, setShowPopUpModal] = useState(false);

  const handleTogglePopUpModal = () => {
    setShowPopUpModal(!showPopUpModal);
  };
  return (
    <div className="w-full fixed top-0 z-50">
      <div className="lg:px-8 pr-4 py-1 bg-light-green flex justify-between shadow-silver">
        <div>
          <img
            src={dottaLogo}
            alt="Dotta logo"
            className="w-[100%] h-[60%] object-contain mt-2"
          />
        </div>
        <div className="gap-8 items-center hidden lg:flex">
          <ul className="flex gap-8 font-bold text-[#746c6c] text-[14px]">
            <li
              className="flex"
              onMouseEnter={handleTogglePopUpModal}
              onMouseLeave={handleTogglePopUpModal}
            >
              Solutions{" "}
              <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1rem]" />
              {showPopUpModal && (
                <div className="popover-modal absolute bg-white shadow-lg rounded-lg px-4 py-8 mt-[1.5rem] left-[33%]">
                  <div className="flex gap-4">
                    <div>
                      <span className="bg-light-green  text-btn-outline w-[2rem] h-[2rem] grid place-items-center mx-auto rounded-full  text-[1rem]">
                        <TbCaptureFilled className="" />
                      </span>
                    </div>
                    <div className="text-[14px]  font-medium">
                      <p className="text-btn-outline">
                        Facial Biometric Verification
                      </p>
                      <p className="font-normal">
                        Biometric verification for identity verification
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="flex">Use Cases</li>
            <li className="flex">Developers</li>
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
        </div>
      </div>
    </div>
  );
};

export default Nav;

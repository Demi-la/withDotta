import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import dottaLogo from "../../assets/dottaLogo.png";

const MoblleNav = ({ isSidebarOpen, toggleSideBar }) => {
  const sideNavStyles = {
    width: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
                src={dottaLogo}
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
              <li
                className="flex justify-between"
                onClick={handleToggleDropdown}
              >
                Solutions{" "}
                {showDropdown ? (
                  <IoIosArrowUp className="mt-[2px] text-[1.5rem]" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="mt-[2px] text-[1.7rem]" />
                )}
              </li>
              <div>
                {showDropdown && (
                  <p className=" p-4 mt-2 text-btn-outline font-medium">
                    Facial Biometric Verification
                  </p>
                )}
              </div>

              <li className="flex  justify-between mt-6 ">Use Cases</li>
              <li className="flex  justify-between mt-6 ">Developers</li>
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

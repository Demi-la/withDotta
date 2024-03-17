import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import faceAttribution from "../../assets/faceAttribution.png";

const ThirdTab = () => {
  return (
    <div className="bg-light-green px-8 py-10 mx-16 rounded-[10px]">
      <div className="flex gap-[8rem]">
        <div>
          <img
            src={faceAttribution}
            alt="Face Verification"
            className=" w-[100%] "
          />
        </div>
        <div>
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[2rem] w-[fit-content] ">
            DOTTA FACE ATTRIBUTION
          </p>
          <h2 className="font-semibold text-[25px] mt-1 mb-2">
            Detect and analyze facial attributes
          </h2>
          <p className="text-[#746c6c] w-[90%]">
            Our Solution is capable of detecting facial attributes such as
            gender, age, and facial expressions.
          </p>
          <ul className=" mt-3 text-[1rem] text-[#000000de]  leading-[2rem] ">
            <li className="flex gap-1 ">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Provide smart responses based on facial expressions.
            </li>
            <li className="flex  gap-1">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Adapt your marketing message based on age and gender.
            </li>
            <li className="flex  gap-1">
              {" "}
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Track the mood of your product users.
            </li>
          </ul>
          <div className="flex mt-6 gap-2 ">
            <button className=" p-[10px] w-[30%] rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white">
              Learn More
            </button>
            <button className="border border-btn-outline p-[10px] w-[30%] rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdTab

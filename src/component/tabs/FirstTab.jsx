import React from 'react'
import livenessCheck from "../../assets/livenessCheck.png";
import { IoCheckmarkOutline } from "react-icons/io5";
const FirstTab = () => {
  return (
    <div className="bg-light-green px-8 py-10 mx-16 rounded-[10px]">
      <div className="flex ">
        <div>
          <img src={livenessCheck} alt="Liveness Check" className=" w-[80%] " />
        </div>
        <div>
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[4.5rem] w-[fit-content] ">
            DOTTA LIVENESS CHECK
          </p>
          <h2 className="font-semibold text-[25px] mt-1 mb-2">
            Advanced Liveness Detection
          </h2>
          <p className="text-[#746c6c] w-[95%]">
            Use our liveness detection to ensure genuine customer presence, and
            stop malicious imposters.
          </p>
          <ul className=" mt-3 text-[1rem] text-[#000000de]  leading-[2rem] ">
            <li className="flex gap-1 ">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Accurate liveness score that is easy to understand.
            </li>
            <li className="flex  gap-1">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Active and passive liveness checks for real-time identity
              authentication.
            </li>
            <li className="flex  gap-1">
              {" "}
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Combine liveness checks with facial verification for greater
              security.
            </li>
          </ul>
          <div className="flex mt-6 gap-2 ">
            <button className=" p-[10px] w-[30%] rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white ">
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

export default FirstTab

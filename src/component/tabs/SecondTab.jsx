import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import faceVerification from "../../assets/faceVerification.png";

const SecondTab = () => {
  return (
    <div className="bg-light-green lg:pl-10 lg:pr-0 pr-10 lg:pb-10 lg:pt-10 pb-20 md:pt-0  pl-5 lg:mx-16 md:mx-0 mx-0 rounded-[10px] w-[100%]">
      <div className="lg:flex  lg:gap-[5rem]">
        <div>
          <img
            src={faceVerification}
            alt="Face Verification"
            className=" w-[100%] "
          />
        </div>
        <div>
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] lg:mt-[2rem]  md:mt-[0rem] w-[fit-content] ">
            DOTTA FACE VERIFICATION
          </p>
          <h2 className="font-semibold lg:text-[25px] text-[23px] mt-1 mb-2 ">
            Accurate Biometric Verification
          </h2>
          <p className="text-[#746c6c] lg:w-[90%] w-[100%]">
            Ensure the security of your client's accounts by using both face
            detection and face match (comparison) to generate a confidence
            score.
          </p>
          <ul className=" mt-3 text-[1rem] text-[#000000de]  leading-[2rem] ">
            <li className="flex gap-1 ">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Detect the presence of faces regardless of facial characteristics
              (attributes).
            </li>
            <li className="flex  gap-1">
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Compare and predict potential matches of faces regardless of
              facial attributes.
            </li>
            <li className="flex  gap-1">
              {" "}
              <IoCheckmarkOutline className="text-[#52c41a] text-[1.3rem] mt-2" />
              Ensure integrity with a facial similarity threshold & gain
              confident results..
            </li>
          </ul>
          <div className="lg:flex mt-6 gap-2 ">
            <button className=" p-[10px] lg:w-[30%]  w-[100%]  rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white ">
              Learn More
            </button>
            <button className="border border-btn-outline p-[10px] lg:w-[30%]  w-[100%] mt-2 lg:mt-0  rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondTab

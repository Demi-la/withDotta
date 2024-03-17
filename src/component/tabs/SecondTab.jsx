import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import faceVerification from "../../assets/faceVerification.png";

const SecondTab = () => {
  return (
    <div className="bg-light-green pl-10 py-10 mx-16 rounded-[10px]">
      <div className="flex  gap-[5rem]">
        <div>
          <img
            src={faceVerification}
            alt="Face Verification"
            className=" w-[100%] "
          />
        </div>
        <div>
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[2rem] w-[fit-content] ">
            DOTTA FACE VERIFICATION
          </p>
          <h2 className="font-semibold text-[25px] mt-1 mb-2">
            Accurate Biometric Verification
          </h2>
          <p className="text-[#746c6c] w-[90%]">
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

export default SecondTab

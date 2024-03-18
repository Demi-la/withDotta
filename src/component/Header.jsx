import React from "react";
import "../App.css";
import { useTypewriter } from "react-simple-typewriter";
import { IoCheckmarkOutline } from "react-icons/io5";
import  heroImge from "../assets/heroImge.png"

const Header = () => {
  const [text] = useTypewriter({
    words: ["customers", "pensioners", "student", "patients"],
    loop: 0,
  });

  return (
    <div className="hero_pattern w-[100%]">
      <div className="lg:flex justify-between lg:px-10 px-5 ">
        <div className="w-[100%] lg:w-[60%] lg:pt-5  pt-16">
          <p className="text-btn-outline font-bold bg-transparent-green lg:py-[2px] py-1 px-[1.1rem] lg:px-[13px] rounded-[20px] lg:mt-[5rem] mt-[2rem] w-[fit-content]">
            Dotta - The future of trust
          </p>
          <h1 className="mt-[1rem] font-semibold lg:font-bold  md:font-bold lg:text-[48px] md:text-[48px] text-[28px]  leading-[2rem] lg:leading-[62px] md:leading-[62px]  text-[#000000de] w-[100%] lg:w-[60%]">
            Facial Biometric Solution & Identity verification for your
            <span className="text-[#06CC4f]">
              {" "}
              {""}
              {text}
            </span>
          </h1>
          <p className="w-[100%] lg:w-[70%] mt-6">
            Introducing Dotta - an API Based Facial Biometric Verification
            solution designed to help you establish a reputation of trust in the
            marketplace.
          </p>
          <div className="lg:flex mt-6 gap-2">
            <button className=" p-[10px] w-[100%] lg:w-[30%] rounded-[2rem] mb-5 lg:mb-0 bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white ">
              Requst Demo
            </button>
            <button className="border border-btn-outline p-[10px] w-[100%] lg:w-[30%] rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
              Get started for free
            </button>
          </div>
          <ul className="grid lg:grid-cols-3  grid-cols-2 mt-5 lg:mb-[4rem] mb-[1rem] lg:text-[18px] text-[16px]">
            <li className="flex gap-1">
              <IoCheckmarkOutline className="text-btn-outline  mt-1" />
              2-day free trial
            </li>
            <li className="flex  gap-1">
              <IoCheckmarkOutline className="text-btn-outline mt-1" /> 
              No Card Required
            </li>
            <li className="flex  gap-1">
              {" "}
              <IoCheckmarkOutline className="text-btn-outline mt-1" />
              No Commitment
            </li>
          </ul>
        </div>

        <div className=" lg:w-[35%] pb-[4rem] lg:pb-0">
          <img
            src={heroImge}
            alt="Face Recongnition "
            className="lg:w-[40rem]  w-[100%] lg:h-[100%]  object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

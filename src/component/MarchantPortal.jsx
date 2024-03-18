import React from "react";
import { dottaMarchantPortal } from "./Data";
import dashboard from "../assets/dashboard.png";
import codeSnippet from "../assets/codeSnippet.png";

const MarchantPortal = () => {
  return (
    <div className="relative  w-[100%]">
      <div className="bg-[#007945] mt-8 lg:h-[50rem] h-[100rem] relative lg:overflow-hidden">
        <div className="lg:px-[4%] px-5 ">
          <div className="text-center pt-8">
            <p className="bg-[#ffffff4d] font-bold text-white py-[2px] px-[13px] rounded-[20px] w-[fit-content] text-center mx-auto">
              Dotta Merchant Portal
            </p>

            <h1 className="font-semibold lg:text-[45px] md:text-[40px] text-[20px] lg:w-[55%] w-[100%] mx-auto lg:leading-[3.5rem] md:leading-[4rem]leading-[2rem] text-white mt-4">
              Experience how easy it is to work with Dotta.
            </h1>
          </div>
          <div className="lg:flex gap-[16px] flex-grow mt-10">
            {dottaMarchantPortal.map((item, index) => (
              <div
                key={index}
                className="border border-[#ffffff80] bg-[#ffffff26] mt-10 lg:mt-0 w-[100%] text-white rounded-[8px] px-[20px] pt-[40px] pb-[45px] flex flex-col justify-center text-center"
              >
                <div>
                  <span className="bg-white text-btn-outline w-[2.5rem] h-[2.5rem] grid place-items-center mx-auto rounded-full text-[1.3rem]">
                    {item.icon}
                  </span>
                  <h2 className="font-bold mt-4">{item.title}</h2>
                  <p className="text-[.9em] mt-4 mx-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[10rem]">
        <img
          src={dashboard}
          alt="Dashboard"
          className="absolute lg:bottom-[27rem]  bottom-[35%] lg:w-[45%]  w-[90%]  "
        />

        <div className="bg-white relative lg:top-[-8rem] top-[-6rem]  left-0 w-[100%]">
          <div className=" px-[4%] lg:flex">
            <div className=" mt-[5rem]">
              <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px]  rounded-[20px]  w-[fit-content] ">
                DOTTA FOR DEVELOPERS
              </p>

              <h1 className="font-semibold lg:text-[40px] md:text-[40px] text-[20px] lg:w-[90%] w-[100%] lg:leading-[3rem] md:leading-[4rem] leading-[2rem]  mt-6">
                Built for
                <span className="text-btn-outline">｛developers｝</span>to
                seamlessly integrate with products.
              </h1>
              <p className="text-[#746c6c] text-[18px] lg:w-[95%] w-[100%]  mt-4">
                Built with Developers in mind, our documentation provides
                guidelines on how to integrate Dotta with other applications
                with ease.
              </p>
              <div className="lg:flex mt-10 gap-2 ">
                <button className=" p-[10px] lg:w-[30%] w-[100%] rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white ">
                  EXxplore Documentaion
                </button>
                <button className="border border-btn-outline p-[10px] lg:w-[30%] w-[100%] lg:mt-0 mt-2 rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
                  Request Demo
                </button>
              </div>
            </div>
            <div>
              {" "}
              <img
                src={codeSnippet}
                alt="Code Snippet"
                className=" lg:mt-0 mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarchantPortal;

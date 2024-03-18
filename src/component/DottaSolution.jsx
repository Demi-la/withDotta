import React from "react";
import { DottaService } from "./Data";

const DottaSolution = () => {
  return (
    <div className="bg-[#fafafa] mt-14 lg:px-10  px-5 pb-[5rem] lg:pt-0 pt-20">
      <div>
        <h1 className="text-[#000000de] font-semibold lg:text-[3rem] text-[22px] text-center lg:p-[5rem] p-[1rem] pb-6 lg:w-[70%] w-[100%]  mx-auto lg:leading-[3.5rem] leading-[2rem]">
          Learn how Dotta can help your business
        </h1>
        <div className="grid lg:grid-cols-3 gap-4 gap-y-[4rem] justify-center  lg:justify-start">
          {DottaService.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex w-[26rem] lg:flex-nowrap flex-wrap   items-center justify-center  lg:justify-start  relative">
                  <div className="lg:absolute lg:top-0 ">
                    <span className="bg-gradient-to-br from-green-500 to-teal-400 text-white w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full text-[1.3rem]">
                      {item.icon}
                    </span>
                  </div>
                  <div className=" items-center flex flex-col lg:ml-8 justify-center lg:justify-start lg:items-start">
                    <p className=" font-semibold text-[16px] lg:ml-4">
                      {item.title}
                    </p>
                    <p className="text-[#746c6c] w-[85%] mx-auto text-center   lg:w-[90%] lg:mx-auto lg:text-left ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DottaSolution;

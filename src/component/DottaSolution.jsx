import React from 'react'
import {DottaService} from "./Data";

const DottaSolution = () => {
  return (
    <div className="bg-[#fafafa] mt-14 px-10 pb-[5rem]">
      <div>
        <h1 className="text-[#000000de] font-semibold text-[3rem] text-center p-[5rem] pb-6 w-[70%] mx-auto leading-[3.5rem]">
          Learn how Dotta can help your business
        </h1>
        <div className="grid grid-cols-3 gap-4 gap-y-[4rem] ">
          {DottaService.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex w-[24rem] gap-2 ">
                  <div className="">
                    <span className="bg-gradient-to-br from-green-500 to-teal-400 text-white w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full text-[1.3rem]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="">
                    <p className=" font-semibold text-[16px]">{item.title}</p>
                    <p className="text-[#746c6c] ">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DottaSolution

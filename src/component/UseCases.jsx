import React from "react";
import { useCasesData } from "./Data";

const UseCases = () => {
  return (
    <div className="w-[100%] px-[4%] ">
      <div className="text-center">
        <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[4.5rem] w-[fit-content] text-center mx-auto">
          USE CASES
        </p>

        <h1 className="font-semibold text-[45px] w-[50%] mx-auto leading-[3.5rem]">
          Empower customers to access your services, on your terms
        </h1>
        <p className="text-[#746c6c] text-[18px] w-[50%] mx-auto mt-2">
          Explore use cases and learn how your business will benefit from
          integrating your product with Dotta.
        </p>
      </div>

      <div className="flex flex-wrap">
        {useCasesData.slice(0, 2).map((item, index) => (
          <div key={index} className=" flex w-1/2 p-4 ">
            <div
              style={{
                backgroundColor: index % 2 === 0 ? "#00794599" : "#ebfdf2",
              }}
              className="p-4 pb-0 rounded-[16px] flex h-[18rem] relative"
            >
              <div className="mx-[5px]">
                <h2 className="text-[1.7rem] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className=" w-[60%]">{item.description}</p>
                <button className="border border-black mt-4 p-[6px] w-[20%] rounded-[1.91rem] bg-white text-[0.95em] text-black">
                  {item.action}
                </button>
              </div>
              <div className="">
                <img
                  src={item.picture}
                  alt={item.title}
                  className="w-[35%] absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="w-full p-4">
          <div className="bg-[#ffb46f1a] p-4 pb-0 rounded-[16px] flex relative h-[18rem] ">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {useCasesData[2].title}
              </h2>
              <p className=" w-[60%]">{useCasesData[2].description}</p>
              <button className="border border-black mt-4 p-[6px] w-[10%] rounded-[1.91rem] bg-white text-[0.95em] text-black">
                {useCasesData[2].action}
              </button>
            </div>
            <div className="">
              <img
                src={useCasesData[2].picture}
                alt={useCasesData[2].title}
                className="w-[22%] absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;

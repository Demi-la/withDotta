import React from "react";
import { useCasesData } from "./Data";

const UseCases = () => {
  return (
    <div className="w-[100%] lg:px-[4%] px-5 ">
      <div className="text-center">
        <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[4.5rem] w-[fit-content] text-center mx-auto">
          USE CASES
        </p>

        <h1 className="font-semibold lg:text-[45px] md:text-[40px] text-[20px] lg:w-[50%] w-[100%]  mx-auto lg:leading-[3.5rem] md:leading-[3.5rem] leading-[2rem]">
          Empower customers to access your services, on your terms
        </h1>
        <p className="text-[#746c6c] lg:text-[18px] md:text-[17px] text-[16px] lg:w-[50%] w-[100%]  mx-auto mt-2">
          Explore use cases and learn how your business will benefit from
          integrating your product with Dotta.
        </p>
      </div>

      <div className="lg:flex lg:flex-wrap md:mt-4">
        {useCasesData.slice(0, 2).map((item, index) => (
          <div key={index} className=" lg:flex lg:w-1/2 w-[100%]  p-4 md:px-0">
            <div
              style={{
                backgroundColor: index % 2 === 0 ? "#00794599" : "#ebfdf2",
              }}
              className="p-4 md:p-4 pb-0 lg:ml-4 rounded-[16px] lg:flex lg:h-[18rem] h-[70vh] relative"
            >
              <div className="lg:mx-[5px]">
                <h2 className="text-[1.7rem] font-semibold mb-2">
                  {item.title}
                </h2>
                <p className=" lg:w-[60%] w-[100%]">{item.description}</p>
                <button className="border border-black mt-4 lg:p-[6px] p-[10px] lg:w-[20%] w-[50%] rounded-[1.91rem] bg-white text-[0.95em] text-black">
                  {item.action}
                </button>
              </div>
              <div className="">
                <img
                  src={item.picture}
                  alt={item.title}
                  className="lg:w-[35%] w-[100%] h-[40vh] lg:h-[35vh] md:h-[70%] absolute bottom-0 lg:right-0 right-[-0]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="w-full p-4 md:px-0">
          <div className="bg-[#ffb46f1a] p-4 pb-0 rounded-[16px] lg:flex relative lg:h-[18rem] h-[80vh]  ">
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {useCasesData[2].title}
              </h2>
              <p className="lg:w-[60%] w-[100%]">
                {useCasesData[2].description}
              </p>
              <button className="border border-black mt-4 lg:p-[6px] p-[10px] lg:w-[10%] w-[50%] rounded-[1.91rem] bg-white text-[0.95em] text-black">
                {useCasesData[2].action}
              </button>
            </div>
            <div className="">
              <img
                src={useCasesData[2].picture}
                alt={useCasesData[2].title}
                className="lg:w-[22%] w-[100%] h-[40vh] lg:h-[100%] md:h-[70%] absolute bottom-0 lg:right-0 right-[-0]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;

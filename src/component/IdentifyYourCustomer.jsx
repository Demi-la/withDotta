import React, { useState } from "react";
import FirstTab from "./tabs/FirstTab";
import SecondTab from "./tabs/SecondTab";
import ThirdTab from "./tabs/ThirdTab";



const IdentifyYourCustomer = () => {
     const [activeTab, setActiveTab] = useState(1);
    

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  }
  return (
    <div className="w-[100%]">
      <div className="text-center">
        <h1 className="font-semibold text-[40px] w-[40%] mx-auto mt-20 leading-[3rem]">
          The most effective way to identify your customers
        </h1>
        <p className="text-[#746c6c] w-[40%] mx-auto mt-3">
          Dotta, an AI-driven solution built to ensure product security, and
          establish customer trust.
        </p>
      </div>
      {/* TABS */}

      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-10  mb-6">
          <button
            className={`text-[#746c6c] font-semibold  relative ${
              activeTab === 1
                ? " text-btn-outline transition-all duration-300 ease-in-out"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Liveness Check
            {activeTab === 1 && (
              <div className="absolute border-b-2 bottom-0 left-0 w-full h-1 border-btn-outline transform translate-y-2"></div>
            )}
          </button>
          <button
            className={`text-[#746c6c] font-semibold relative ${
              activeTab === 2
                ? " text-btn-outline transition-all duration-300 ease-in-out"
                : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Face Verification
            {activeTab === 2 && (
              <div className="absolute border-b-2 bottom-0 left-0 w-full h-1 border-btn-outline transform translate-y-2"></div>
            )}
          </button>
          <button
            className={`text-[#746c6c] font-semibold relative ${
              activeTab === 3
                ? " text-btn-outline transition-all duration-300 ease-in-out"
                : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Face Attributuion
            {activeTab === 3 && (
              <div className="absolute border-b-2 bottom-0 left-0 w-full h-1 border-btn-outline transform translate-y-2"></div>
            )}
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 1 && (
            <div>
              <FirstTab />
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <SecondTab />
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <ThirdTab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IdentifyYourCustomer

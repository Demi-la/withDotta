import React from "react";
import "../App.css";
import { useTypewriter } from "react-simple-typewriter";
import { IoCheckmarkOutline } from "react-icons/io5";

const Header = () => {
  const [text] = useTypewriter({
    words: ["customers", "pensioners", "student", "patients"],
    loop: 0,
  });

  return (
    <div className="hero_pattern w-[100%]">
      <div className="flex justify-between px-10 ">
        <div className="w-[60%]">
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[4.5rem] w-[fit-content]">
            Dotta - The future of trust
          </p>
          <h1 className="mt-[1rem] font-bold text-[48px] leadong-[62px] text-[#000000de] w-[60%]">
            Facial Biometric Solution & Identity verification for your
            {/* <span className="text-[#06CC4f]">
              {" "}
              {""}
              {text}
            </span> */}
          </h1>
          <p className="w-[70%] mt-6">
            Introducing Dotta - an API Based Facial Biometric Verification
            solution designed to help you establish a reputation of trust in the
            marketplace.
          </p>
          <div className="flex mt-6 gap-2">
            <button className=" p-[10px] w-[30%] rounded-[2rem] bg-gradient-to-br from-green-500 to-teal-400 text-[0.95em] text-white text-btn-outline">
              Requst Demo
            </button>
            <button className="border border-btn-outline p-[10px] w-[30%] rounded-[1.91rem] bg-white text-[0.95em] text-btn-outline">
              Get started for free
            </button>
          </div>
          <ul className="flex gap-8 mt-5 mb-[4rem] text-[18px]">
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

        <div className=" w-[35%]">
          <img
            src="https://withdotta.com/_ipx/w_1920,q_75/%2Fimages%2Favatars%2Fhero-1.png?url=%2Fimages%2Favatars%2Fhero-1.png&w=1920&q=75"
            alt="Face Recongnition "
            className="w-[40rem] h-[100%]  object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

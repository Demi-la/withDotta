import React from "react";
import { dottaBlog } from "./Data";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";

const Blog = () => {
  return (
    <div>
      <div className="bg-[#fafafa] px-[4%] pb-[10rem]">
        <div className="text-center pt-4">
          <p className="text-btn-outline font-bold bg-transparent-green py-[2px] px-[13px] rounded-[20px] mt-[4.5rem] w-[fit-content] text-center mx-auto">
            DOTTA BLOG
          </p>

          <h1 className="font-semibold text-[45px] w-[55%] mx-auto leading-[3.5rem] mt-2">
            Discover insights and trends in identity verification.
          </h1>
        </div>
        <div className="flex gap-6 mt-12 ">
          {dottaBlog.map((item, index) => (
            <div key={index} className="bg-white  rounded-[16px] w-[25rem]">
              <div className="">
                <img
                  src={item.picture}
                  alt="Dotta Staffs"
                  className="rounded-t-[16px]  h-[27vh] w-full object-cover"
                />
              </div>
              <div className="p-[15px]">
                <div className="flex gap-2">
                  <span>
                    <IoCalendarClearOutline className="mt-[2px] text-[1.2rem] font-bold" />
                  </span>
                  <p className="text-[#746c6c]">{item.date}</p>
                </div>
                <p className="font-semibold w-[90%] mt-4 text-[16px]">
                  {item.title}
                </p>
                <p className="mt-4 text-[#746c6c] w-[90%]">
                  {item.description}
                </p>
                <div className="flex font-semibold mt-4 text-btn-outline justify-end">
                  <p>{item.action}</p>
                  <span>
                    <MdArrowForward className="mt-[7px] ml-[4px] " />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#007945] to-[#23cc83] px-0">
        <div className="text-center py-[70px] px-[4%]">
          <h1 className="font-semibold text-[48px] w-[40%] mx-auto  text-white leading-[3.5rem] mt-2">
            Get started today with a 2-day free trial.
          </h1>
          <div className="flex mt-6 gap-2 justify-center ">
            <button className="border border-btn-outline p-[8px] w-[15%] rounded-[1.91rem] bg-white text-[0.95em] text-black">
              Get started for free
            </button>
            <button className=" border border-white p-[8px] w-[15%] rounded-[2rem]  bg-#007945  text-[0.95em] text-white">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

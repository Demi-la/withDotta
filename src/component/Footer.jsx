import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#fafafa] pl-[4%] pr-[2%] py-[3rem]">
      <div className="flex gap-[10rem]">
        <div>
          <div>
            <img
              src="https://withdotta.com/_ipx/w_1920,q_75/%2Fimages%2Ficons%2Fdotta.png?url=%2Fimages%2Ficons%2Fdotta.png&w=1920&q=75"
              alt="Dotta logo"
              className="w-[60%]  object-contain mt-2"
            />
          </div>
          <div className="flex gap-5 mt-6">
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              <FaLinkedin />
            </span>
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              {" "}
              <FaTwitter />
            </span>
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              {" "}
              <FaYoutube />
            </span>
          </div>
        </div>
        <div className="flex gap-[4rem]  ">
          <div className="">
            <h1 className="font-semibold text-[18px] mb-2 ">Company</h1>
            <ul className="text-[#746c6c]">
              <li className=" mb-2">Pricing</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-[18px]  mb-2">Solution</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2 ">Liveness Check</li>
              <li className=" mb-2">Face Verification</li>
              <li>Facial Attribution</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-[18px]  mb-2">Use Cases</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">Fraud Detection</li>
              <li className=" mb-2">Digital Onboarding</li>
              <li>Authentication</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-[18px]  mb-2">Resources</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">API Documentation</li>
              <li className=" mb-2">API Reference</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-[18px]  mb-2">Industries</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">Banking</li>
              <li className=" mb-2">Financial Services</li>
              <li className=" mb-2">E-commerce & Online Marketplace</li>
              <li className=" mb-2">Digital Health & Insurance</li>
              <li className=" mb-2">E-learning</li>
              <li>Public Sector</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[#746c6c] pt-[5rem] pr-[2%]">
        <div className="flex gap-4">
          <p>Terms & Conditions </p>
          <p>Privacy & Cookie Policy</p>
        </div>
        <p>Copyright © 2024. Dotta by Secured Records.</p>
      </div>
    </div>
  );
};

export default Footer;

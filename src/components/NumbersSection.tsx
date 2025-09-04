"use client";

import Image from "next/image";
import React from "react";

interface NumberDisplayProps {
  value: string;
  className?: string;
  path: string;
  alt_text: string;
  status: string;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({
  value,
  className = "",
  path,
  alt_text,
  status,
}) => {
  return (
    <div className="text-[#080808] flex flex-col items-center">
      <Image src={path} alt={alt_text} width={24} height={24} className="w-6"></Image>
      <span
        className={`${className} animate-fade-in text-[50px] leading-[111%] font-['Poppins'] font-medium text-[#080808]`}
      >
        {value}
      </span>
      <p className="text-[18px] leading-[28px] uppercase tracking-[0.48px] font-['Poppins'] text-[#080808]">
        {status}
      </p>
    </div>
  );
};

const NumbersSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div
          className="relative bg-white rounded-[30px] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px] mx-auto"
          style={{
            width: "1319px",
            height: "701px",
            padding: "63px 36px 140px 30px",
          }}
        >
          {/* Main Title */}
          <div
            className="text-center"
            style={{
              marginLeft: "174px",
              width: "910px",
              marginBottom: "61px",
            }}
          >
            <h2 className="text-[44px] leading-[49px] tracking-[0.88px] font-['Poppins'] text-[#080808]">
              Tūkstošiem cilvēku, simtiem notikumu, <br />
              <span className="text-[#c347fc]">viens kopīgs piedzīvojums.</span>
            </h2>
          </div>

          <div
            className="grid grid-cols-5 gap-6 items-center justify-center"
            style={{
              marginBottom: "9px",
            }}
          >
            <NumberDisplay
              value="15+"
              className=""
              path="/public/icons/gadu pieredze.svg"
              alt_text="test"
              status="gadu pieredze"
            />
            <NumberDisplay
              value="115 000+"
              className=""
              path=""
              alt_text=""
              status="pasākumu dalībnieki"
            />
            <NumberDisplay
              value="70+"
              className=""
              path=""
              alt_text=""
              status="pasākumu veidi"
            />
            <NumberDisplay
              value="75+"
              className=""
              path=""
              alt_text=""
              status="skolas un klases"
            />
            <NumberDisplay
              value="35+"
              className=""
              path=""
              alt_text=""
              status="pašvaldības iestādes"
            />
            <NumberDisplay
                value="500+"
                className=""
                path=""
                alt_text=""
                status="gadu pieredze"
              />
              <NumberDisplay
                value="300+"
                className=""
                path=""
                alt_text=""
                status="pasākumu dalībnieki"
              />
              <NumberDisplay
                value="7"
                className=""
                path=""
                alt_text=""
                status="pasākumu veidi"
              />
              <NumberDisplay
                value="350+"
                className=""
                path=""
                alt_text=""
                status="skolas un klases"
              />
              <NumberDisplay
                value="100%"
                className=""
                path=""
                alt_text=""
                status="mobilitāte"
              />
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center" style={{ marginTop: "32px" }}>
            <div
              className="w-16 h-16 bg-[#c347fc] rounded-full flex items-center justify-center"
              style={{ width: "64px", height: "64px" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

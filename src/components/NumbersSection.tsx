"use client";

import Image from "next/image";
import React from "react";

interface NumberDisplayProps {
  value: string;
  className?: string;
  path?: string;
  alt_text?: string;
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
    <div className="text-[#080808] flex flex-col items-center gap-2 group cursor-pointer">
      {path && alt_text && (
        <Image src={path} alt={alt_text} width={48} height={48} className="mb-2 transition-all duration-300 ease-in-out group-hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(99%)_saturate(2613%)_hue-rotate(201deg)_brightness(101%)_contrast(101%)]" />
      )}
      <span
        className={`${className} animate-fade-in text-[50px] leading-[111%] font-['Poppins'] font-medium group-hover:text-[#109AFC] transition-colors duration-300`}
      >
        {value}
      </span>
      <p className="group-hover:text-[#109AFC] transition-colors duration-300 text-[18px] leading-[28px] uppercase tracking-[0.48px] font-['Poppins']">
        {status}
      </p>
    </div>
  );
};

const NumbersSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div
          className="relative bg-white rounded-[30px] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px] mx-auto"
          style={{
            padding: "80px 40px",
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
            className="grid grid-cols-5 gap-y-10 items-center justify-center"
          >
            <NumberDisplay
              value="15+"
              className=""
              path="/icons/gadu pieredze.svg"
              alt_text="Years of experience icon"
              status="gadu pieredze"
            />
            <NumberDisplay
              value="115 000+"
              className=""
              path="/icons/pasākumu dalībnieki.svg"
              alt_text="Participants icon"
              status="pasākumu dalībnieki"
            />
            <NumberDisplay
              value="70+"
              className=""
              path="/icons/pasākumu veidi.svg"
              alt_text="Event types icon"
              status="pasākumu veidi"
            />
            <NumberDisplay
              value="75+"
              className=""
              path="/icons/skolas un klases.svg"
              alt_text="Schools and classes icon"
              status="skolas un klases"
            />
            <NumberDisplay
              value="35+"
              className=""
              path="/icons/pašvaldības iestādes.svg"
              alt_text="Administrative offices icon"
              status="pašvaldības iestādes"
            />
            <NumberDisplay
                value="500+"
                className=""
                path="/icons/gadu pieredze.svg"
                alt_text="Years of experience icon"
                status="gadu pieredze"
              />
              <NumberDisplay
                value="300+"
                className=""
                path="/icons/pasākumu dalībnieki.svg"
                alt_text="Participants icon"
                status="pasākumu dalībnieki"
              />
              <NumberDisplay
                value="7"
                className=""
                path="/icons/pasākumu veidi.svg"
                alt_text="Event types icon"
                status="pasākumu veidi"
              />
              <NumberDisplay
                value="350+"
                className=""
                path="/icons/skolas un klases.svg"
                alt_text="Schools and classes icon"
                status="skolas un klases"
              />
              <NumberDisplay
                value="100%"
                className=""
                path="/icons/mobilitāte.svg"
                alt_text="mobilitāte"
                status="mobilitāte"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;

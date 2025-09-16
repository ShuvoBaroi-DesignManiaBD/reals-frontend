"use client";

import React from 'react';

interface EventItem {
  date: string;
  title: string;
  participants: number;
}

const HistorySection: React.FC = () => {
  const events: EventItem[] = [
    {
      date: "02.06.2025.",
      title: "Deju kolektīvs Dancītis, saliedēšanas pasākums",
      participants: 73
    },
    {
      date: "30.07.2024.",
      title: "Ropažu novada Sporta diena Ulbrokā",
      participants: 900
    },
    {
      date: "15.05.2024.",
      title: "Korporatīvais pasākums SIA 'Baltika'",
      participants: 150
    },
    {
      date: "22.04.2024.",
      title: "Bērnu dienas svinības Rīgas centrā",
      participants: 250
    },
    {
      date: "10.03.2024.",
      title: "Uzņēmuma 'TechCorp' gada ballīte",
      participants: 180
    },
    {
      date: "28.02.2024.",
      title: "Sporta kluba 'Dinamo' jubilejas pasākums",
      participants: 320
    },
    {
      date: "14.01.2024.",
      title: "Jaungada svinības viesnīcā 'Grand Palace'",
      participants: 450
    },
    {
      date: "20.12.2023.",
      title: "Ziemassvētku korporatīvais pasākums",
      participants: 95
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "18.10.2023.",
      title: "Biznesa konference 'Future Tech'",
      participants: 220
    }
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-scren-xl mx-auto py-5">
      {/* Title */}
      <h2 className="w-full max-w-[881px] text-center text-[60px] leading-[67px] tracking-[0px] text-black font-['Poppins'] mb-[80px]">
        Pasākumos iepriecināto klientu hronoloģija:
      </h2>
      
      {/* Main Content Container */}
      <div className="flex items-start justify-between w-full max-w-screen-xl rounded-[20px] bg-white p-[60px_40px] shadow-[4px_4px_28px_9px_rgba(209,81,255,0.2)]">
        {/* Events List */}
        <div className="flex flex-col gap-0 items-center flex-1 h-[343px] overflow-x-hidden overflow-y-auto pr-4 scrollbar-custom">
          {/* <style jsx>{`
            div::-webkit-scrollbar {
              width: 8px;
              border-radius: 10px;
            }
            div::-webkit-scrollbar-track {
              background: #e8e8e8;
              border-radius: 10px;
              box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.1);
            }
            div::-webkit-scrollbar-thumb {
              background: #c347fc;
              border-radius: 10px;
              border: 1px solid #e8e8e8;
            }
            div::-webkit-scrollbar-thumb:hover {
              background: #a83dd9;
              border: 1px solid #d0d0d0;
              border-radius: 10px
            }
          `}</style> */}
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full border-b border-[#181A4D] py-6 px-0">
                {/* Date */}
                <p className="w-[148px] text-[20px] leading-[28px] tracking-[0px] text-[#c347fc] font-['Poppins'] font-medium">
                  {event.date}
                </p>
                
                {/* Event Title */}
                <p className="flex-1 max-w-[874px] text-[20px] leading-[28px] tracking-[0px] text-black font-['Poppins'] font-medium px-4">
                  {event.title}
                </p>
                
                {/* Participants */}
                <p className="w-[166px] text-right text-[20px] leading-[28px] tracking-[0px] text-[#c347fc] font-['Poppins'] font-medium">
                  {event.participants} dalībnieki
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="flex items-center justify-center mt-[42px] mx-auto rounded-[5px] bg-[#c347fc] px-[59px_63px] py-[16px_19px]">
        <button className="text-[15px] leading-[17px] tracking-[0px] text-white font-['Nunito_Sans'] font-medium uppercase hover:bg-[#a83dd9] transition-colors duration-300">
          apskatīt visus pasākumus
        </button>
      </div>
    </section>
  );
};

export default HistorySection;
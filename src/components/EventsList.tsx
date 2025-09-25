"use client";

import React from 'react';
import { Button } from './ui/button';
import { EventItem } from '@/lib/dataTypes';


interface EventsListProps {
  className?: string;
  events: EventItem[];
  title?: string;
  buttonText: string;
}

const EventsList: React.FC<EventsListProps> = (props) => {
  
  const { title, buttonText, events, className } = props;

  return (
    <section className={`flex flex-col items-center w-full max-w-scren-xl mx-auto py-5 ${className || ""}`}>
      {/* Title */}
      <h2 className="w-full max-w-[55%] text-center text-[60px] leading-[67px] tracking-[0px] text-black font-['Poppins'] mb-[80px]">
        {title || "Pasākumos iepriecināto klientu hronoloģija:"}
      </h2>
      
      {/* Main Content Container */}
      <div className="flex items-start justify-between w-full max-w-screen-xl rounded-[20px] bg-white p-[60px_40px] shadow-[4px_4px_28px_9px_rgba(209,81,255,0.2)]">
        {/* Events List */}
        <div className="flex flex-col gap-0 items-center flex-1 h-[370px] overflow-x-hidden overflow-y-auto pr-4 scrollbar-custom">
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
          {events.map((event: EventItem, index: React.Key | null | undefined) => (
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
        <Button variant="purple" size="lg" className="mt-20 px-16">
          {buttonText || "apskatīt visus pasākumus"}
        </Button>
    </section>
  );
};

export default EventsList;
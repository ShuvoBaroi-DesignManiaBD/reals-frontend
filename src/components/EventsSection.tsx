"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionCTA from "./SectionCTA";

// Event data structure with categories
interface Event {
  id: string;
  title: string;
  backgroundImage: string;
  categories: string[];
  variant?: "default" | "cta";
}

const eventData: Event[] = [
  {
    id: "1",
    title: "Komandas saliedēšana",
    backgroundImage:
      "/images/komandas_saliedesana_teambuilding_www.realspiedzivojums.lv_3a.png",
    categories: [
      "visi pasākumi",
      "Uzņēmumiem",
      "pie dabas",
      "vasarā",
      "top pasākumi",
    ],
  },
  {
    id: "2",
    title: "Sporta spēles",
    backgroundImage: "/images/sporta_speles_www.realspiedzivojums.lv_1a.png",
    categories: ["visi pasākumi", "skolām", "ģimenēm", "pie dabas", "vasarā"],
  },
  {
    id: "3",
    title: "Kvesti",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4.png",
    categories: ["visi pasākumi", "ģimenēm", "skolām", "pilsētā", "vasarā"],
  },
  {
    id: "4",
    title: "Klašu saliedēšana",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_15.png",
    categories: ["visi pasākumi", "skolām", "pie dabas", "vasarā"],
  },
  {
    id: "5",
    title: "Pasākumi pašvaldībām un iestādēm",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_3a.png",
    categories: ["visi pasākumi", "pašvaldībām", "telpās", "ziemā"],
  },
  {
    id: "6",
    title: "Militārie pasākumi",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-1.png",
    categories: ["visi pasākumi", "Uzņēmumiem", "pie dabas", "vasarā"],
  },
  {
    id: "7",
    title: "Sacensību organizēšana",
    backgroundImage: "/images/sporta_speles_www.realspiedzivojums.lv_2.png",
    categories: [
      "visi pasākumi",
      "skolām",
      "Uzņēmumiem",
      "pie dabas",
      "vasarā",
      "top pasākumi",
    ],
  },
  {
    id: "8",
    title: "Dzimšanas dienas ballītes",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_5a.png",
    categories: ["visi pasākumi", "ģimenēm", "telpās", "ziemā", "vasarā"],
  },
  {
    id: "9",
    title: "Tematiskie pasākumi",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-2.png",
    categories: ["visi pasākumi", "ģimenēm", "skolām", "telpās", "ziemā"],
  },
  {
    id: "10",
    title: "Šovi- priekšnesumi",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-3.png",
    categories: [
      "visi pasākumi",
      "skolām",
      "ģimenēm",
      "telpās",
      "ziemā",
      "vasarā",
    ],
  },
  {
    id: "11",
    title: "Sporta diena",
    backgroundImage: "/images/sporta_speles_www.realspiedzivojums.lv_2-1.png",
    categories: [
      "visi pasākumi",
      "skolām",
      "pie dabas",
      "vasarā",
      "top pasākumi",
    ],
  },
  {
    id: "12",
    title: "Un citi pasākumi",
    backgroundImage:
      "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4.png",
    categories: ["visi pasākumi"],
    variant: "cta" as const,
  },
];

const categories = [
  "visi pasākumi",
  "Uzņēmumiem",
  "skolām",
  "ģimenēm",
  "pašvaldībām",
  "pie dabas",
  "pilsētā",
  "telpās",
  "ziemā",
  "vasarā",
  "top pasākumi",
];

interface FilterButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  children,
  isActive = false,
  onClick,
}) => {
  const baseClasses =
    `group relative flex items-center justify-center rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow-[0_10px_25px_-5px_rgba(0,142,252,0.3),0_0_0_1px_rgba(0,142,252,0.1)] hover:-translate-y-2 cursor-pointer overflow-hidden`;
  const activeClasses = isActive
    ? `bg-[#eef7fe] shadow-[4px_0px_4px_0px_rgba(0,142,252,0.2),0px_4px_4px_0px_rgba(0,142,252,0.2)] px-[106px] py-[15px] hover:bg-[#d1efff] hover:shadow-[8px_0px_15px_0px_rgba(0,142,252,0.4),0px_8px_15px_0px_rgba(0,142,252,0.4)]`
    : `bg-white shadow-[4px_0px_4px_0px_rgba(0,142,252,0.2),0px_4px_4px_0px_rgba(0,142,252,0.2)] px-[97.5px] py-[15px] hover:bg-[#f8fbff] hover:shadow-[8px_0px_15px_0px_rgba(0,142,252,0.35),0px_8px_15px_0px_rgba(0,142,252,0.35)]`;

  return (
    <button className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

      {/* Animated shimmer effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform -translate-x-full group-hover:translate-x-full" />

      <span
        className={`text-[15px] font-medium leading-[17px] tracking-[1.35px] font-['Poppins'] uppercase transition-all duration-500 ease-out group-hover:transform group-hover:scale-105 relative z-10 ${
          isActive ? "text-blue-700" : "text-black group-hover:text-blue-700"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

interface EventCardProps {
  title: string;
  backgroundImage: string;
  variant?: "default" | "cta";
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  backgroundImage,
  variant = "default",
  onClick,
}) => {
  if (variant === "cta") {
    return (
      <div
        className="group w-[23%] h-[252px] relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-out"
          style={{
            backgroundImage: `url(${
              backgroundImage || "/images/default-cta-bg.png"
            })`,
          }}
        />

        {/* Blue background overlay on hover */}
        <div className="absolute inset-0 rounded-[20px] bg-[#109afc] opacity-0 group-hover:opacity-90 transition-all duration-300 ease-out" />

        {/* Default gradient overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-[#15191e] group-hover:opacity-0 transition-all duration-300 ease-out flex items-end p-[20px] pt-[62px] pr-[46px] pb-[30px]">
          <p className="text-[34px] leading-[38px] text-white font-['Poppins'] w-[249px] h-[160px] flex items-end relative z-10">
            {title}
          </p>
        </div>

        {/* Hover content with text and arrow */}
        <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-[20px]">
          <div className="flex items-center gap-3">
            <p className="text-[34px] leading-[38px] text-white font-['Poppins'] text-center">
              {title}
            </p>
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group w-[23%] h-[252px] relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Blue background overlay on hover */}
      <div className="absolute inset-0 rounded-[20px] bg-[#109afc] opacity-0 group-hover:opacity-90 transition-all duration-300 ease-out" />

      {/* Default gradient overlay */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent via-transparent to-[#15191e] group-hover:opacity-0 transition-all duration-300 ease-out flex items-end p-[20px] pt-[62px] pr-[46px] pb-[30px]">
        <p className="text-[34px] leading-[38px] text-white font-['Poppins'] w-[249px] h-[160px] flex items-end relative z-10">
          {title}
        </p>
      </div>

      {/* Hover content with text and arrow */}
      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex items-center justify-center p-[20px]">
        <div className="flex items-center gap-3">
          <p className="text-[34px] leading-[38px] text-white font-['Poppins'] text-center">
            {title}
          </p>
          <ArrowRight className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

const EventsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("visi pasākumi");

  // Filter events based on active category
  const filteredEvents = eventData.filter((event) =>
    event.categories.includes(activeCategory)
  );

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main heading */}
        <div className="ml-[114px] mb-[28px]">
          <h2 className="w-[1094px] text-center text-[60px] leading-[67px] text-black font-['Poppins']">
            Izvēlies savu pasākumu
          </h2>
        </div>

        {/* Description */}
        <div className="ml-[29px] mb-[47px]">
          <p className="w-[1265px] text-center text-[18px] leading-[25px] text-black font-['Poppins']">
            Mēs rīkojam pasākumus, kas saliedē, iedvesmo un paliek atmiņā.
            <br />
            Neatkarīgi no tā, vai esi uzņēmuma vadītājs, skolotājs vai vecāks –
            pie mums atradīsi programmu, kas būs tieši jums.
          </p>
        </div>

        {/* Filter buttons - single row */}
        <div className="flex items-center justify-center gap-6 mb-[48px] flex-wrap">
          {categories.map((category) => (
            <FilterButton
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        {/* Dynamic Event cards based on selected category - single row */}
        <div className="flex items-center justify-center gap-6 mb-[72px] flex-wrap">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              backgroundImage={event.backgroundImage}
              variant={event.variant}
            />
          ))}
        </div>

        {/* Call to action section */}
        <SectionCTA
          iconType="lightPurple"
          title="Laiks piedzīvojumam!"
          description="Izvēlies savu programmu vai ļauj mums to radīt kopā ar Tevi."
          buttonText="pieteikt pasākumu"
        />
      </div>
    </section>
  );
};

export default EventsSection;

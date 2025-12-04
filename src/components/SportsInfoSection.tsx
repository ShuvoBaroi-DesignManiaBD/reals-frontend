"use client";
import Image from 'next/image';
import React from 'react';

interface SportsInfoSectionProps {
  onButtonClick?: () => void;
}

const SportsInfoSection: React.FC<SportsInfoSectionProps> = ({ onButtonClick }) => {
  const sportsCategories = [
    {
      title: "KOMANDU SPORTA SPĒLES",
      description: "Uzdevumi, kas veicina sadarbību, stratēģisko domāšanu un uzticēšanos. Komandas cīnās par rezultātu kopā – nevis atsevišķi."
    },
    {
      title: "SPORTA SPĒLES AR BUMBU",
      description: "Tautas bumba, futbols ar šķēršļiem, bamper bumbas, mini volejbols – spēles, kas ienes kustību un prieku jebkurā pasākumā."
    },
    {
      title: "SPORTA SPĒLES BRĪVĀ DABĀ",
      description: "Svaigs gaiss, plašums un aktivitātes mežos, parkos vai pie ūdens. Ideālas vasaras sezonai un piedzīvojumu garam."
    },
    {
      title: "SPORTA SPĒLES TELPĀS",
      description: "Pielāgotas programmas ziemai vai sliktākiem laikapstākļiem – sporta zālēs, industriālās telpās, hallēs vai ofisa vidē."
    },
    {
      title: "TRADICIONĀLĀS SPORTA SPĒLES",
      description: "Klasiskās disciplīnas: stafetes, virves vilkšana, šķēršļu joslas, olimpiskā gaisotne. Pārbaudītas vērtības un garantēts efekts."
    },
    {
      title: "NETRADICIONĀLĀS SPORTA SPĒLES",
      description: "Spēles ar pārsteigumu un humoru: piemēram, milzu krekli, \"aklās\" disciplīnas, tematiskas misijas un improvizēti uzdevumi."
    }
  ];

  const keyStats = [
    {
      icon: "/icons/duration-icon.svg",
      label: "ILGUMS",
      value: "2–48 STUNDAS"
    },
    {
      icon: "/icons/participants-icon.svg",
      label: "DALĪBNIEKU SKAITS",
      value: "15-10 000"
    },
    {
      icon: "/icons/location-icon.svg",
      label: "LOKĀCIJA",
      value: "LATVIJĀ UN BALTIJĀ, BRĪVĀ DABĀ UN IEKŠTELPĀS"
    },
    {
      icon: "/icons/availability-icon.svg",
      label: "PIEEJAMĪBA",
      value: "VISU GADU / SEZONĀLI"
    }
  ];

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Container with rounded background and shadow */}
        <div className="bg-white rounded-[30px] shadow-[0px_4px_34px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px] p-8 md:p-16 lg:p-28">
          
          {/* Sports Categories Section */}
          <div className="flex flex-col items-center">
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal leading-[49px] tracking-[0.88px] text-black text-center mb-8 lg:mb-14 max-w-4xl">
              Kādas sporta spēles mēs rīkojam?
            </h2>

            {/* First Row - 3 Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 w-full mb-6 lg:mb-7">
              {sportsCategories.slice(0, 3).map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-[20px] shadow-[3px_3px_44px_1px_rgba(195,71,252,0.2)] p-6 lg:p-16 flex flex-col items-center text-center"
                >
                  <h3 className="text-lg lg:text-[26px] font-medium leading-[29px] tracking-[0.78px] text-black/87 uppercase mb-4 lg:mb-8">
                    {category.title}
                  </h3>
                  <p className="text-base lg:text-[18px] leading-[25px] text-black/87 font-normal">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second Row - 3 Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 w-full">
              {sportsCategories.slice(3, 6).map((category, index) => (
                <div 
                  key={index + 3}
                  className="bg-white rounded-[20px] shadow-[3px_3px_44px_1px_rgba(195,71,252,0.2)] p-6 lg:p-16 flex flex-col items-center text-center"
                >
                  <h3 className="text-lg lg:text-[26px] font-medium leading-[29px] tracking-[0.78px] text-black/87 uppercase mb-4 lg:mb-8">
                    {category.title}
                  </h3>
                  <p className="text-base lg:text-[18px] leading-[25px] text-black/87 font-normal">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Summary Section */}
          <div className="mt-16 lg:mt-24">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal leading-[49px] tracking-[0.88px] text-[#080808] text-center mb-12 lg:mb-16">
              Svarīgākais īsumā
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {keyStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Image
                    width={59}
                    height={59}
                    src={stat.icon} 
                    alt={stat.label}
                    className="w-12 h-12 lg:w-[59px] lg:h-[59px] mb-3 lg:mb-4"
                  />
                  <p className="text-lg lg:text-[26px] font-medium leading-[29px] tracking-[0.78px] text-[#c347fc] uppercase mb-2 lg:mb-3">
                    {stat.label}
                  </p>
                  <p className="text-lg lg:text-[26px] font-medium leading-[29px] tracking-[0.78px] text-[#080808] uppercase max-w-[283px]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <button
              onClick={onButtonClick}
              className="bg-[#d151ff] hover:bg-[#c347fc] transition-colors duration-200 rounded-[5px] px-8 lg:px-12 py-3 lg:py-4"
            >
              <span className="text-white text-sm lg:text-[15px] font-medium leading-[17px] uppercase tracking-normal">
                SAŅEM BEZMAKSAS PROGRAMMU
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsInfoSection;
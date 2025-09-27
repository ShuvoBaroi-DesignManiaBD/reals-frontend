"use client";

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

interface SportsHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  onButtonClick?: () => void;
}

const SportsHeroSection: React.FC<SportsHeroSectionProps> = ({
  title = "Sporta spēles",
  subtitle = "Saņem pozitīvo enerģiju Tavām Biznesa uzvarām!",
  description = "Sporta spēles ļauj izbaudīt plašu pozitīvo emociju gammu, izgaismo apslēptus talantus, jaunas spējas- Tava uzņēmuma attīstībai!\n\nSporta spēles - ļauj izbaudīt plašu pozitīvo emociju gammu, pilnveidot individuālos un komandu talantus, atrast jaunus domubiedrus un draugus, atklāt jaunas personiskās un komandas spējas un izgaismo apslēptus talantus, uzlādē ar pozitīvo enerģiju un dod spēcīgu mudinājumu arī turpmāk dzīvot veselīgi un aktīvi! Sporta spēles brīvā dabā- piedod jaudu uzņēmuma \"Turbīnai\", ved Biznasa izaugsmi jaunās un augstākās virsotnēs!",
  buttonText = "saņem programmu UZREIZ",
  imageSrc = "/images/sports-hero.png",
  onButtonClick
}) => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-20 lg:px-0 flex gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-2/4 h-full relative flex-shrink-0">
          <Image
            width={600}
            height={0}
            src={imageSrc}
            alt="Sporta spēles"
            className="w-full h-[600px] rounded-[20px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-10 items-start w-full">
          {/* Title */}
          <h1 className="w-full lg:w-full text-[40px] lg:text-[60px] leading-[67px] tracking-normal text-black"
              style={{ 
                fontFamily: 'Poppins, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
                fontWeight: 'normal'
              }}>
            {title}
          </h1>

          {/* Subtitle */}
          <h2 className="w-full text-[18px] lg:text-[26px] leading-[29px] tracking-[0.78px] text-black font-medium uppercase"
              style={{ 
                fontFamily: 'Poppins, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif'
              }}>
            {subtitle}
          </h2>

          {/* Description */}
          <p className="w-full text-[16px] lg:text-[18px] leading-[25px] tracking-normal text-black whitespace-pre-line"
             style={{ 
               fontFamily: 'Poppins, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif',
               fontWeight: 'normal'
             }}>
            {description}
          </p>

          {/* CTA Button */}
          <Button size="xl" fullWidth={false} className="self-start py-4" onClick={onButtonClick}>{buttonText}</Button>
        </div>
    </section>
  );
};

export default SportsHeroSection;
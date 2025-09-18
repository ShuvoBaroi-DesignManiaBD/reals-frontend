import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionCTA from "./SectionCTA";

// Card data structure
const cardData = [
  {
    id: 1,
    image: "/mf6ed80v-2aa3s74.png",
    alt: "Apstādīsim Latviju ar augļkokiem",
    title: "Apstādīsim Latviju ar augļkokiem",
    description: "1000+ augļkoki un ogulāji 4 gadu laikā, priecējot vairāk nekā 3500 dalībnieku pansionātos, bērnu namos, skolās un sociālās aprūpes centros.",
    hasDescription: true
  },
  {
    id: 2,
    image: "/mf6ed80v-3ifdaqs.png",
    alt: "Simtgadnieku salidojums",
    title: "Simtgadnieku salidojums",
    description: "1000+ augļkoki un ogulāji 4 gadu laikā, priecējot vairāk nekā 3500 dalībnieku pansionātos, bērnu namos, skolās un sociālās aprūpes centros.",
    hasDescription: true
  },
  {
    id: 3,
    image: "/mf6ed80v-7bboa38.png",
    alt: "Uzticams partneris veselības veicināšanā",
    title: "Uzticams partneris veselības veicināšanā",
    description: "1000+ augļkoki un ogulāji 4 gadu laikā, priecējot vairāk nekā 3500 dalībnieku pansionātos, bērnu namos, skolās un sociālās aprūpes centros.",
    hasDescription: true
  }
];

// Reusable Card Component
interface CardProps {
  image: string;
  alt: string;
  title: string;
  description?: string;
  hasDescription: boolean;
}

const ResponsibilityCard: React.FC<CardProps> = ({ image, alt, title, description, hasDescription }) => {
  return (
    <div className="relative w-full max-w-[427px] h-[297px] rounded-[20px] overflow-hidden group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
      />
      <div className="overlay-ele absolute inset-0 bg-gradient-to-b from-transparent via-[#0815283a] to-[#081528b2] rounded-[20px] transition-all duration-500 ease-out group-hover:from-[#0815283f] group-hover:via-[#08152881] group-hover:to-[#081528]" />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4 lg:p-8 transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
        {hasDescription ? (
          <>
            <h3 className="text-white font-poppins text-lg lg:text-[25px] leading-6 lg:leading-[28px] tracking-[0.5px] max-w-[363px] transition-all duration-300 ease-out group-hover:text-shadow-lg">
              {title}
            </h3>
            <p className="text-[18px] text-white opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0">
              {description}
            </p>
          </>
        ) : (
          <p className="text-white font-poppins text-lg lg:text-[25px] leading-6 lg:leading-[28px] tracking-[0.5px] max-w-[363px] transition-all duration-300 ease-out group-hover:text-shadow-lg">
            {title}
          </p>
        )}
      </div>
    </div>
  );
};

const SocialResponsibilitySection = () => {
  return (
    <section className="flex flex-col items-start w-full max-w-screen-xl mx-auto px-4">
      {/* Main Title */}
      <h2 className="w-full text-center text-black font-poppins text-4xl lg:text-[60px] leading-tight lg:leading-[67px] tracking-[0] mb-7 lg:mb-[28px]">
        Sociālā atbildība
      </h2>

      {/* Description */}
      <p className="w-full max-w-[823px] mx-auto text-center text-black font-poppins text-base lg:text-[18px] leading-6 lg:leading-[25px] tracking-[0] mb-10 lg:mb-[43px]">
        Daļu no mūsu darba un sirds mēs veltām labdarības pasākumiem – bērniem
        no sociāli mazaizsargātām grupām, daudzbērnu ģimenēm un senioriem.
        <br />
        Mēs ticam, ka prieks, kustība un kopā būšana ir tiesības, nevis
        privilēģija.
      </p>

      {/* Image Cards Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-4 mb-12 lg:mb-[61px]">
        {cardData.map((card) => (
          <ResponsibilityCard
            key={card.id}
            image={card.image}
            alt={card.alt}
            title={card.title}
            description={card.description}
            hasDescription={card.hasDescription}
          />
        ))}
      </div>

      {/* CTA Button */}
      <SectionCTA
        iconType="darkPurple"
        title="Gribi atbalstīt vai uzdāvināt kādam piedzīvojumu?
Raksti mums un mēs pastāstīsim, kā vari iesaistīties."
        variant="purple"
        size="lg"
        className="w-full !mx-auto"
        buttonText="apskatīt visus pasākumus"
      ></SectionCTA>
    </section>
  );
};

export default SocialResponsibilitySection;

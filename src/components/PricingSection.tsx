"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PricingCard } from "@/components/PricingCard";
import { SkolamFeatureItem } from "./SkolamFeatureItem";
import { SkolamPricingTier } from "./SkolamPricingTier";

interface SkolamPricingTier {
  participants: string;
  price: string;
  priceNote: string;
  additionalNote?: string;
}

interface SkolamFeature {
  text: string;
  icon: string;
}

const pricingDataByCategory = {
  uznemumiem: [
    {
      name: "Standarta",
      price: "no 74.25 EUR*",
      priceNote: "par dalībnieku",
      color: "#109AFC",
      highlighted: false,
      badge: undefined,
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Pārsteiguma balva uzņēmumam", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Kopvērtējumā viens kauss", included: false },
        { text: "Medaļas", included: false },
        { text: "Priekšnesumi/šovi", included: false },
        { text: "Atklāšanas ceremonija", included: false },
        { text: "Noslēguma ceremonija", included: false },
        { text: "Apgaismojums", included: false },
        { text: "DJ vai mūziķis", included: false },
        { text: "Dzīvā mūzika", included: false },
        { text: "Diskotēka", included: false },
        { text: "Disko apgaismojums", included: false },
        { text: "Dekorācijas", included: false },
        { text: "Unikālas balvas", included: false },
      ],
    },
    {
      name: "Biznesa",
      price: "no 121.50 EUR*",
      priceNote: "par dalībnieku",
      color: "#D151FF",
      highlighted: true,
      badge: "IZVĒLĒTĀKAIS",
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Pārsteiguma balva uzņēmumam", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Kopvērtējumā viens kauss", included: true },
        { text: "Medaļas", included: true },
        { text: "Priekšnesumi/šovi", included: true },
        { text: "Atklāšanas ceremonija", included: true },
        { text: "Noslēguma ceremonija", included: true },
        { text: "Apgaismojums", included: true },
        { text: "DJ vai mūziķis", included: false },
        { text: "Dzīvā mūzika", included: false },
        { text: "Diskotēka", included: false },
        { text: "Disko apgaismojums", included: false },
        { text: "Dekorācijas", included: false },
        { text: "Unikālas balvas", included: false },
      ],
    },
    {
      name: "VIP",
      price: "no 360.10 EUR*",
      priceNote: "par dalībnieku",
      color: "#109AFC",
      highlighted: false,
      badge: undefined,
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Pārsteiguma balva uzņēmumam", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Kopvērtējumā viens kauss", included: true },
        { text: "Medaļas", included: true },
        { text: "Priekšnesumi/šovi", included: true },
        { text: "Standarta atklāšanas ceremonija", included: true },
        { text: "Standarta noslēguma ceremonija", included: true },
        { text: "Apgaismojums", included: true },
        { text: "DJ vai mūziķis", included: true },
        { text: "Dzīvā mūzika", included: true },
        { text: "Diskotēka", included: true },
        { text: "Disko apgaismojums", included: true },
        { text: "Dekorācijas", included: true },
        { text: "Unikālas balvas", included: true },
      ],
    },
  ],
  skolam: [
    {
      name: "Standarta",
      price: "no 45.50 EUR*",
      priceNote: "par skolēnu",
      color: "#109AFC",
      highlighted: false,
      badge: undefined,
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Izglītojošas aktivitātes", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Komandu spēles", included: false },
        { text: "Medaļas", included: false },
        { text: "Priekšnesumi/šovi", included: false },
        { text: "Atklāšanas ceremonija", included: false },
        { text: "Noslēguma ceremonija", included: false },
        { text: "Apgaismojums", included: false },
        { text: "DJ vai mūziķis", included: false },
        { text: "Dzīvā mūzika", included: false },
        { text: "Diskotēka", included: false },
        { text: "Disko apgaismojums", included: false },
        { text: "Dekorācijas", included: false },
        { text: "Unikālas balvas", included: false },
      ],
    },
    {
      name: "Biznesa",
      price: "no 78.25 EUR*",
      priceNote: "par skolēnu",
      color: "#D151FF",
      highlighted: true,
      badge: "IZVĒLĒTĀKAIS",
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Izglītojošas aktivitātes", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Komandu spēles", included: true },
        { text: "Medaļas", included: true },
        { text: "Priekšnesumi/šovi", included: true },
        { text: "Atklāšanas ceremonija", included: true },
        { text: "Noslēguma ceremonija", included: true },
        { text: "Apgaismojums", included: true },
        { text: "DJ vai mūziķis", included: false },
        { text: "Dzīvā mūzika", included: false },
        { text: "Diskotēka", included: false },
        { text: "Disko apgaismojums", included: false },
        { text: "Dekorācijas", included: false },
        { text: "Unikālas balvas", included: false },
      ],
    },
    {
      name: "VIP",
      price: "no 125.75 EUR*",
      priceNote: "par skolēnu",
      color: "#109AFC",
      highlighted: false,
      badge: undefined,
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Izglītojošas aktivitātes", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Komandu spēles", included: true },
        { text: "Medaļas", included: true },
        { text: "Priekšnesumi/šovi", included: true },
        { text: "Standarta atklāšanas ceremonija", included: true },
        { text: "Standarta noslēguma ceremonija", included: true },
        { text: "Apgaismojums", included: true },
        { text: "DJ vai mūziķis", included: true },
        { text: "Dzīvā mūzika", included: true },
        { text: "Diskotēka", included: true },
        { text: "Disko apgaismojums", included: true },
        { text: "Dekorācijas", included: true },
        { text: "Unikālas balvas", included: true },
      ],
    },
  ],
  gimenem: [
    {
      name: "Pasākumā",
      subHeading: "iekļauts",
      price: "no 50 EUR*",
      priceNote: "par dalībnieku",
      color: "#109AFC",
      highlighted: false,
      badge: undefined,
      features: [
        { text: "Pasākuma vadītājs", included: true },
        { text: "Tehniskā komanda", included: true },
        { text: "Diplomi / Sertifikāti", included: true },
        { text: "Mini-Apskaņošana", included: true },
        { text: "Pasākuma programma", included: true },
        { text: "Pasākuma vietas organizēšana", included: true },
        { text: "Kopīgs klases kauss", included: true },
        { text: "Atklāšanas ceremonija", included: true },
        { text: "Noslēguma ceremonija", included: true },
      ],
    }
  ],
};

// Skolam pricing data
const skolamPricingData: SkolamPricingTier[] = [
  {
    participants: "20",
    price: "no 34 EUR",
    priceNote: "par dalībnieku",
  },
  {
    participants: "30",
    price: "no 30 EUR",
    priceNote: "par dalībnieku",
  },
  {
    participants: "40",
    price: "no 25 EUR",
    priceNote: "par dalībnieku",
  },
  {
    participants: "50",
    price: "no 23.50 EUR",
    priceNote: "par dalībnieku",
  },
  {
    participants: "100+",
    price: "no 22 EUR",
    priceNote: "par dalībnieku",
    additionalNote:
      "Izbraucam uz jebkuru Latvijas vietu, ja tiek segti transporta izdevumi!",
  },
];

// Skolam features data
const skolamFeatures: SkolamFeature[] = [
  { text: "Pasākuma vadītājs", icon: "/icons/Group 12619.svg" },
  { text: "Tehniskā komanda", icon: "/icons/Group 12619.svg" },
  { text: "Diplomi / Sertifikāti", icon: "/icons/Group 12619.svg" },
  { text: "Apskaņošana", icon: "/icons/Group 12619.svg" },
  { text: "Pasākuma programma", icon: "/icons/Group 12619.svg" },
  { text: "Pasākuma vietas organizēšana", icon: "/icons/Group 12619.svg" },
  { text: "Kopīgs klases kauss", icon: "/icons/Group 12619.svg" },
  { text: "Atklāšanas ceremonija", icon: "/icons/Group 12619.svg" },
  { text: "Noslēguma ceremonija", icon: "/icons/Group 12619.svg" },
];

const additionalCosts = [
  { text: "x2 Kvests, laivu brauciens", multiplier: "x2" },
  { text: "x3 Autokvests, Jahtu, zemūdens kvests", multiplier: "x3" },
  { text: "x1,5 Angļu valodā", multiplier: "x1,5" },
  { text: "x1,2 Krievu valodā", multiplier: "x1,2" },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 max-w-screen-xl mx-auto">
      {/* Main Title */}
      <h2 className="text-[60px] leading-[67px] text-center text-black font-['Poppins'] mb-[40px] w-full">
        Cik maksā pasākums?
      </h2>

      <Tabs defaultValue="uznemumiem" className="w-full">
        {/* Tab Navigation */}
        <div className="flex justify-center gap-5">
          <TabsList className="w-[2/3] grid grid-cols-3 bg-transparent p-0 h-auto gap-5">
            <TabsTrigger
              value="uznemumiem"
              className="px-[100px] py-[13px] rounded-full text-[15px] !font-semibold data-[state=active]:font-medium uppercase tracking-[1.35px] transition-all duration-300 font-['Poppins'] shadow-[0px_4px_4px_0px_#008efc33] data-[state=active]:!bg-secondary data-[state=active]:!text-white hover:!bg-secondary hover:text-white active:!bg-secondary bg-white text-black border-0 flex-1 cursor-pointer"
            >
              uzņēmumiem
            </TabsTrigger>
            <TabsTrigger
              value="skolam"
              className="px-[100px] py-[13px] rounded-full text-[15px] !font-semibold data-[state=active]:font-medium uppercase tracking-[1.35px] transition-all duration-300 font-['Poppins'] shadow-[0px_4px_4px_0px_#008efc33] data-[state=active]:!bg-secondary data-[state=active]:!text-white hover:bg-secondary hover:text-white active:!bg-secondary bg-white text-black border-0 flex-1 cursor-pointer"
            >
              skolām
            </TabsTrigger>
            <TabsTrigger
              value="gimenem"
              className="px-[125px] py-[13px] rounded-[20px] text-[15px] !font-semibold data-[state=active]:font-medium uppercase tracking-[1.35px] transition-all duration-300 font-['Poppins'] shadow-[0px_4px_4px_0px_#008efc33] data-[state=active]:!bg-secondary data-[state=active]:!text-white hover:bg-secondary hover:text-white active:!bg-secondary bg-white text-black border-0 flex-1 cursor-pointer"
            >
              Ģimenēm
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content for uznemumiem */}
        <TabsContent
          value="uznemumiem"
          className="pb-10 flex flex-col items-center justify-between"
        >
          {/* Subtitle */}
        <p className="text-[26px] py-16 leading-[29px] tracking-[0.78px] text-center text-[#000000B2] font-['Poppins'] font-medium uppercase">
          *vidējā cena aprēķina par 100 dalībniekiem
        </p>
        <div className="flex gap-10 items-center">
          {pricingDataByCategory.uznemumiem.map((tier, index) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              priceNote={tier.priceNote}
              features={tier.features}
              color={tier.color}
              highlighted={tier.highlighted}
              badge={tier.badge}
              index={index}
            />
          ))}
        </div>
        </TabsContent>

        {/* Tab Content for skolam */}
        <TabsContent value="skolam" className="mt-10">
          <div className="w-5/6 mx-auto grid grid-cols-5 justify-between gap-[39px] mb-[45px]">
            {/* Left Panel - Features Included */}
            <div className="col-span-2 self-stretch border-t border-secondary flex flex-col bg-[#fffffff2] rounded-[20px] shadow-[1px_4px_28px_9px_#25a0dd33] p-10 min-w-[328px]">
              <h3 className="text-[44px] leading-[49px] tracking-[0.88px] text-[#109AFC] font-['Poppins'] mb-[8px]">
                Pasākumā
              </h3>
              <p className="text-[16px] leading-[18px] tracking-[0.8px] text-black font-medium uppercase font-['Poppins'] mb-[40px] ml-[2px]">
                iekļauts
              </p>

              {/* Features List */}
              <div className="space-y-[12px]">
                {skolamFeatures.map((feature, index) => (
                  <SkolamFeatureItem
                    key={index}
                    text={feature.text}
                    icon={feature.icon}
                  />
                ))}
              </div>
            </div>

            {/* Right Panel - Pricing Tiers */}
            <div className="col-span-3 self-stretch flex flex-col gap-5">
              {skolamPricingData.map((tier, index) => (
                <SkolamPricingTier
                  key={index}
                  participants={tier.participants}
                  price={tier.price}
                  priceNote={tier.priceNote}
                  additionalNote={tier.additionalNote}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Tab Content for gimenem */}
        <TabsContent value="gimenem" className="mt-10">
          <div className="flex items-start justify-center gap-[39px] mb-[45px]">
            {pricingDataByCategory.gimenem.map((tier, index) => (
              <div key={tier.name} className={index === 1 ? "" : "mt-[31px]"}>
                <PricingCard
                  name={tier.name}
                  subHeading={tier.subHeading}
                  price={tier.price}
                  priceNote={tier.priceNote}
                  features={tier.features}
                  color={tier.color}
                  highlighted={tier.highlighted}
                  badge={tier.badge}
                  index={index}
                  className="p-[50px_30px_42px]"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Description */}
      <p className="text-center text-black font-['Poppins'] font-medium text-[16px] leading-[24px] my-[45px] mx-auto">
        Katrs mūsu pasākums ir unikāls, tāpēc arī cena tiek veidota individuāli,
        balstoties uz Taviem mērķiem, dalībnieku skaitu un vēlmēm.
        <br />
        Aizpildi pieteikumu, un mēs Tev sagatavosim precīzu cenas piedāvājumu ar
        detalizētu programmas aprakstu.
      </p>

      {/* Additional Costs */}
      <div className="mb-[45px] flex gap-5 items-center">
        <h3 className="text-secondary font-['Poppins'] text-[18px] font-medium">
          Papildus <br></br>izmaksas:
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {additionalCosts.map((cost, index) => (
            <div
              key={index}
              className="bg-white !rounded-sm px-[20px] py-[13px] shadow-sm border border-secondary"
            >
              <span className="text-lg font-medium text-black font-['Poppins']">
                {cost.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-[#109AFC] text-white font-['Poppins'] text-[16px] font-medium uppercase tracking-wide px-[40px] py-[18px] rounded-[5px] hover:bg-[#0e87e0] transition-colors duration-300">
          PIETEIKT BEZMAKSAS KONSULTĀCIJU
        </button>
      </div>
    </section>
  );
};

export default PricingSection;

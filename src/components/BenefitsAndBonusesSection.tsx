import React from "react";
import Image from "next/image";

// TypeScript interfaces for type safety
interface BenefitItem {
  id: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
  containerWidth: string;
  textWidth: string;
}

interface BonusItem {
  id: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: string;
  containerWidth: string;
  textWidth: string;
}

interface BenefitsAndBonusesSectionProps {
  benefitsTitle?: string;
  bonusesTitle?: string;
  benefits?: BenefitItem[];
  bonuses?: BonusItem[];
  className?: string;
}

// Default data arrays
const defaultBenefits: BenefitItem[] = [
  // Row 1
  {
    id: "jaunas-zinasanas",
    iconSrc: "/icons/Jaunas zināšanas.svg",
    iconWidth: 63,
    iconHeight: 59,
    title: "Jaunas zināšanas",
    description:
      "kas noder atpūtā pie dabas, pārgājienos un citām dzīves situācijām",
    containerWidth: "w-[249px]",
    textWidth: "w-[234px]",
  },
  {
    id: "iepazisti-kolēģus",
    iconSrc: "/icons/Iepazīsti kolēģus.svg",
    iconWidth: 63,
    iconHeight: 59,
    title: "Iepazīsti kolēģus",
    description: "nestandarta situācijās, grūtībās, jautrībā vai stresa brīžos",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  {
    id: "komandas-sadarbiba",
    iconSrc: "/icons/komandas sadarbība.svg",
    iconWidth: 63,
    iconHeight: 59,
    title: "Komandas sadarbība",
    description:
      "uzticēšanās kolēģiem un savstarpējās komunikācijas veicināšana uzdevumos un spēlēs dažādās situācijās.",
    containerWidth: "w-[258px]",
    textWidth: "w-[258px]",
  },
  {
    id: "nodarbinats-prats",
    iconSrc: "/icons/Nodarbināts prāts.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Nodarbināts prāts",
    description: "veicina izdomu, radošu domāšanu un neierastu pieeju",
    containerWidth: "w-[204px]",
    textWidth: "w-[204px]",
  },
  {
    id: "attista-patstavību",
    iconSrc: "/icons/Attīsta patstāvību.svg",
    iconWidth: 65,
    iconHeight: 59,
    title: "Attīsta patstāvību",
    description: "palielina savstarpējo cieņu un vēlmi palīdzēt citiem",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  // Row 2
  {
    id: "koncentresanas-spejas",
    iconSrc: "/icons/Koncentrēšanās spējas.svg",
    iconWidth: 57,
    iconHeight: 59,
    title: "Koncentrēšanās spējas",
    description: "stiprināta līdzsvara izjūta un precizitātes prasmes",
    containerWidth: "w-[283px]",
    textWidth: "w-[234px]",
  },
  {
    id: "pozitiva-gaisotne",
    iconSrc: "/icons/Pozitīva gaisotne.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Pozitīva gaisotne",
    description:
      "profesionālu vadītāju un instruktoru atbalsts garantē priecīgu atmosfēru",
    containerWidth: "w-[276px]",
    textWidth: "w-[276px]",
  },
  {
    id: "sertifikati-diplomi",
    iconSrc: "/icons/Sertifikāti un diplomi.svg",
    iconWidth: 47,
    iconHeight: 59,
    title: "Sertifikāti un diplomi",
    description: "par programmas apguvi vai dalību konkrētajā pasākumā",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  {
    id: "parsteiguma-balva",
    iconSrc: "/icons/Pārsteiguma balva.svg",
    iconWidth: 65,
    iconHeight: 59,
    title: "Pārsteiguma balva",
    description: "īpašs pateicības žests uzņēmuma pārstāvjiem",
    containerWidth: "w-[235px]",
    textWidth: "w-[204px]",
  },
  {
    id: "atklajas-jauni-lideri",
    iconSrc: "/icons/Atklājas jauni līderi.svg",
    iconWidth: 49,
    iconHeight: 59,
    title: "Atklājas jauni līderi",
    description:
      "katrs pasākums veicina 1–5 dalībnieku izaugsmi līderībā un iniciatīvā.",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  // Row 3
  {
    id: "individuala-pieeja",
    iconSrc: "/icons/Individuāla pieeja.svg",
    iconWidth: 70,
    iconHeight: 59,
    title: "Individuāla pieeja",
    description: "Programma pielāgota Tavam kolektīvam, klasei vai ģimenei",
    containerWidth: "w-[249px]",
    textWidth: "w-[234px]",
  },
  {
    id: "profesionala-komanda",
    iconSrc: "/icons/Profesionāla komanda.svg",
    iconWidth: 81,
    iconHeight: 59,
    title: "Profesionāla komanda",
    description: "15–27 gadu pieredze pasākumu vadīšanā un organizēšanā",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  {
    id: "izdevigak-lielakam-grupam",
    iconSrc: "/icons/Izdevīgāk lielākām grupām.svg",
    iconWidth: 98,
    iconHeight: 59,
    title: "Izdevīgāk lielākām grupām",
    description: "Jo vairāk dalībnieku – jo draudzīgāka cena vienam cilvēkam",
    containerWidth: "w-[289px]",
    textWidth: "w-[234px]",
  },
  {
    id: "drosiba-vienmer-1-vieta",
    iconSrc: "/icons/Drošība vienmēr 1.vietā.svg",
    iconWidth: 48,
    iconHeight: 59,
    title: "Drošība vienmēr 1.vietā",
    description: "Mēs rūpējamies par dalībnieku fizisko un emocionālo drošību",
    containerWidth: "w-[247px]",
    textWidth: "w-[204px]",
  },
  {
    id: "organizejam-no-a-lidz-z",
    iconSrc: "/icons/Organizējam no A līdz Ž.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Organizējam no A līdz Ž",
    description: "Tev atliek tikai izvēlēties datumu – pārējo izdarām mēs!",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
];

const defaultBonuses: BonusItem[] = [
  {
    id: "sanem-programmu-uzreiz",
    iconSrc: "/icons/Saņem programmu uzreiz.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Saņem programmu uzreiz",
    description: "Video un PDF formātā – vēl pirms rezervācijas",
    containerWidth: "w-[259px]",
    textWidth: "w-[234px]",
  },
  {
    id: "30-min-bezmaksas-konsultacija",
    iconSrc: "/icons/30 min bezmaksas konsultācija.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "30 min bezmaksas konsultācija",
    description: "Izrunājam vajadzības un ieteicamākos risinājumus",
    containerWidth: "w-[276px]",
    textWidth: "w-[276px]",
  },
  {
    id: "tikai-50-avanss-rezervacijai",
    iconSrc: "/icons/Tikai 50 avanss rezervācijai.svg",
    iconWidth: 62,
    iconHeight: 59,
    title: "Tikai 50% avanss rezervācijai",
    description: "Iespēja pārdomāt un plānot elastīgi",
    containerWidth: "w-[235px]",
    textWidth: "w-[234px]",
  },
  {
    id: "1-programmas-labojums-ieklauts",
    iconSrc: "/icons/1 programmas labojums iekļauts.svg",
    iconWidth: 54,
    iconHeight: 59,
    title: "1 programmas labojums iekļauts",
    description: "Ja vēlies kaut ko pielāgot – tas jau iekļauts cenā",
    containerWidth: "w-[250px]",
    textWidth: "w-[250px]",
  },
  {
    id: "100-naudas-atgriesana",
    iconSrc: "/icons/100 naudas atgriešana.svg",
    iconWidth: 81,
    iconHeight: 59,
    title: "100% naudas atgriešana",
    description:
      "Ja pasākums atcelts vismaz 1,5 mēnesi iepriekš vai neesi apmierināts",
    containerWidth: "w-[258px]",
    textWidth: "w-[258px]",
  },
];

// Reusable Benefit Item Component
const BenefitItemComponent: React.FC<{
  benefit: BenefitItem;
  index: number;
}> = ({ benefit, index }) => {
  const isSecondRow = index >= 5 && index < 10;
  const marginBottom = isSecondRow ? "mb-[18px]" : "mb-[24px]";

  return (
    <div
      className={`flex flex-col justify-start items-center self-start ${benefit.containerWidth} sm:w-full md:${benefit.containerWidth}`}
    >
      <Image
        src={benefit.iconSrc}
        alt={benefit.title}
        width={benefit.iconWidth}
        height={benefit.iconHeight}
        className={marginBottom}
      />
      <h3 className="text-[26px] leading-[29px] tracking-[0.78px] text-[#080808] font-['Poppins'] font-medium uppercase text-center mb-[12px] sm:text-[20px] md:text-[24px] lg:text-[26px]">
        {benefit.title}
      </h3>
      <p
        className={`text-[18px] leading-[25px] text-[#080808] font-['Poppins'] text-center ${benefit.textWidth} sm:w-full sm:text-[16px] md:text-[17px] lg:text-[18px]`}
      >
        {benefit.description}
      </p>
    </div>
  );
};

// Reusable Bonus Item Component
const BonusItemComponent: React.FC<{ bonus: BonusItem }> = ({ bonus }) => {
  return (
    <div
      className={`flex flex-col items-center self-start ${bonus.containerWidth} sm:w-full md:${bonus.containerWidth}`}
    >
      <Image
        src={bonus.iconSrc}
        alt={bonus.title}
        width={bonus.iconWidth}
        height={bonus.iconHeight}
      />
      <h3 className="py-4.5 text-[26px] leading-[29px] tracking-[0.78px] text-[#080808] font-['Poppins'] font-medium uppercase text-center sm:text-[20px] md:text-[24px] lg:text-[26px]">
        {bonus.title}
      </h3>
      <p
        className={`text-[18px] leading-[25px] text-[#080808] font-['Poppins'] text-center ${bonus.textWidth} sm:w-full sm:text-[16px] md:text-[17px] lg:text-[18px]`}
      >
        {bonus.description}
      </p>
    </div>
  );
};

const BenefitsAndBonusesSection: React.FC<BenefitsAndBonusesSectionProps> = ({
  benefitsTitle = "Jūsu ieguvumi",
  bonusesTitle = "Garantijas un Bonusi",
  benefits = defaultBenefits,
  bonuses = defaultBonuses,
  className = "",
}) => {
  // Split benefits into rows for responsive layout
  const benefitRows = [
    benefits.slice(0, 5), // First row
    benefits.slice(5, 10), // Second row
    benefits.slice(10, 15), // Third row
  ];
  return (
    <section
      className={`py-[90px] px-[27px] bg-white rounded-[30px] shadow-[0px_4px_34px_0px_#0000000d] backdrop-blur-[6px] max-w-screen-xl mx-auto ${className}`}
    >
      {/* Benefits Section */}
      <div className="mb-[90px]">
        <h2 className="text-[48px] leading-[54px] tracking-[1.44px] text-[#080808] font-['Poppins'] font-medium uppercase text-center mb-[90px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          {benefitsTitle}
        </h2>

        {/* Dynamic Benefits Rows */}
        {benefitRows.map((row, rowIndex) => (
          <div
            key={`benefits-row-${rowIndex}`}
            className={`flex justify-between items-start ${
              rowIndex === 0
                ? "mb-[67px]"
                : rowIndex === 1
                ? "mb-[87px]"
                : "px-[14px]"
            } sm:flex-col sm:items-center sm:gap-[40px] md:flex-row md:gap-[20px] lg:gap-[27px] sm:mb-[60px] md:mb-[70px]`}
          >
            {row.map((benefit, index) => (
              <BenefitItemComponent
                key={benefit.id}
                benefit={benefit}
                index={rowIndex * 5 + index}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Bonuses Section */}
      <div>
        <h2 className="text-[48px] leading-[54px] tracking-[1.44px] text-[#080808] font-['Poppins'] font-medium uppercase text-center mb-[90px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          {bonusesTitle}
        </h2>

        {/* Text Content Row */}
        <div className="flex justify-between items-start sm:flex-col sm:items-center sm:gap-[40px] md:flex-row md:gap-[20px] lg:gap-[27px]">
          {bonuses.map((bonus) => (
            <BonusItemComponent key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndBonusesSection;
export type { BenefitsAndBonusesSectionProps, BenefitItem, BonusItem };

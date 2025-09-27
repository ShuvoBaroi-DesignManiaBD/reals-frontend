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
}

interface CategoryBenefitsProps {
  benefitsTitle?: string;
  benefits?: BenefitItem[];
  className?: string;
}

// Default data array - exactly 4 items as per Figma design
const defaultBenefits: BenefitItem[] = [
  {
    id: "stipraka-sadarbiba-komanda",
    iconSrc: "/icons/komandas sadarbība.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Stiprāka sadarbība komandā",
    description: "Uzticēšanās un vienotība nestandarta situācijās",
  },
  {
    id: "uzlabota-komunikacija",
    iconSrc: "/icons/Iepazīsti kolēģus.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Uzlabota komunikācija",
    description: "Dalībnieki mācās sarunāties un ieklausīties",
  },
  {
    id: "jauna-energija-un-idejas",
    iconSrc: "/icons/Nodarbināts prāts.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Jauna enerģija un idejas",
    description: "Radošums, atslodze un pozitīvas emocijas",
  },
  {
    id: "profesionala-organizacija",
    iconSrc: "/icons/Organizējam no A līdz Ž.svg",
    iconWidth: 59,
    iconHeight: 59,
    title: "Profesionāla organizācija",
    description: "Drošība un kvalitāte garantēta no A līdz Ž",
  },
];

// Reusable Benefit Item Component
const BenefitItemComponent: React.FC<{
  benefit: BenefitItem;
  isFirst?: boolean;
  isLast?: boolean;
}> = ({ benefit }) => {
  return (
    <div className="flex flex-col items-center flex-1">
      <Image
        src={benefit.iconSrc}
        alt={benefit.title}
        width={benefit.iconWidth}
        height={benefit.iconHeight}
        className="mb-8"
      />
      <h3 className="text-[26px] leading-[29px] tracking-[0.78px] text-[#080808] font-['Poppins'] font-medium uppercase text-center mb-[14px] w-[292px]">
        {benefit.title}
      </h3>
      <p className="text-[18px] leading-[25px] text-[#080808] font-['Poppins'] text-center w-[234px]">
        {benefit.description}
      </p>
    </div>
  );
};

const CategoryBenifits: React.FC<CategoryBenefitsProps> = ({
  benefitsTitle = "Ieguvumi uzņēmumam",
  benefits = defaultBenefits,
  className = "",
}) => {
  return (
    <section
      className={`flex flex-col items-start bg-white rounded-[30px] shadow-[0px_4px_34px_0px_#0000000d] backdrop-blur-[6px] w-[1320px] mb-20 py-[80px] px-[38px] mx-auto ${className}`}
    >
      {/* Title */}
      <h2 className="text-[44px] leading-[49px] tracking-[0.88px] text-[#080808] font-['Poppins'] text-center w-[910px] ml-[179px] mb-[47px]">
        {benefitsTitle}
      </h2>

      {/* Benefits Grid */}
      <div className="flex items-center self-stretch">
        {benefits.map((benefit, index) => (
          <React.Fragment key={benefit.id}>
            <BenefitItemComponent
              benefit={benefit}
              isFirst={index === 0}
              isLast={index === benefits.length - 1}
            />
            {index < benefits.length - 1 && <div className="w-[43px]" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CategoryBenifits;
export type { CategoryBenefitsProps, BenefitItem };

import Image from "next/image";

interface SkolamFeatureItemProps {
  text: string;
  icon: string;
}

export const SkolamFeatureItem: React.FC<SkolamFeatureItemProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-[21px]">
      <Image
        src={icon}
        alt="Included"
        width={22}
        height={21}
        className="flex-shrink-0"
      />
      <span className="text-[14px] leading-[20px] text-black font-['Poppins']">
        {text}
      </span>
    </div>
  );
};
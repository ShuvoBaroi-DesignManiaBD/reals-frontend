import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  key?: string;
  image: string;
  icon: string;
  title: string;
  description?: string;
  hasButton?: boolean;
  buttonText?: string;
  hoverImage?: string; // Optional hover image path
}

const CTAcard: React.FC<CardProps> = ({
  image,
  icon,
  title,
  description,
  hasButton,
  buttonText,
  hoverImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-[427px] h-[297px] rounded-[20px] overflow-hidden group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={isHovered && hoverImage ? hoverImage : image}
        alt={title}
        fill
        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
      />
      <div className="overlay-ele absolute inset-0 bg-gradient-to-b from-transparent via-[#0815283a] to-[#081528b2] rounded-[20px] transition-all duration-500 ease-out group-hover:from-[#0815283f] group-hover:via-[#08152881] group-hover:to-[#081528]" />
      <div className="w-full flex flex-col items-start justify-end h-full relative bottom-0 left-0 right-0 p-5 space-y-4 transform transition-all duration-500 ease-out group-hover:translate-y-[-8px]">
        {description ? (
          <>
            <div
              className={`${icon && "w-full flex flex-col gap-3 justify-start items-start"}`}
            >
              <h3 className="text-white text-start font-poppins text-lg lg:text-3xl tracking-[0.5px] max-w-[363px] transition-all duration-300 ease-out group-hover:text-shadow-lg">
                {title}
              </h3>
              {/* {icon && (
                <Image
                  src={icon}
                  alt={alt}
                  width={24}
                  height={24}
                  className="inline-block ml-2 group-hover:hidden"
                />
              )} */}
            <p className="text-[18px] text-white opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:max-h-20 group-hover:translate-y-0">
              {description}
            </p>
            </div>
          </>
        ) : (
          <p className="text-white pr-3 text-left font-poppins text-lg lg:text-[25px] leading-6 lg:leading-[28px] tracking-[0.5px] max-w-[363px] transition-all duration-300 ease-out group-hover:text-shadow-lg">
            {title}
          </p>
        )}
        {hasButton && (
          <button className="w-full group-hover:flex justify-between text-primary font-poppins text-lg lg:text-[16px] leading-6 tracking-[0.5px] transition-all duration-300 ease-out group-hover:text-shadow-lg">
            <p className="hidden text-primary group-hover:flex">
              {buttonText ? buttonText : "Uzzināt vairāk"}
            </p>
            <Image
              src={
                isHovered ? `/icons/Vector-17.svg` : `/icons/white-arrow.svg`
              }
              alt={title}
              width={24}
              height={24}
              className="absolute rotate-0 group-hover:rotate-[-45deg] group-hover:bottom-5 [&_path]:fill-white bottom-14 right-5 transition-all duration-300 ease-out"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CTAcard;

import React from 'react';
import Image from 'next/image';

const OpinionSection = () => {
  return (
    <section className="w-full flex justify-center py-16 lg:py-24 bg-[#f6f6f6]">
      <div className="max-w-screen-xl w-full flex flex-col items-center px-4">
        <p className="max-w-[860px] text-center text-black font-poppins text-xl lg:text-[25px] leading-7 lg:leading-normal tracking-[0.5px] mb-14 lg:mb-[60px]">
          Izsaki savu viedokli par jauno mājas lapu un REĀLS PIEDZĪVOJUMS, lai mēs vēl labāk uzlabotu pakalpojumu un servisu! Jūsu ieguvumi: labs papildinājums, kas katram interesē!
        </p>
        
        <div className="w-full max-w-[549px] h-[81px]">
          <Image
            src="/smiley-faces.svg"
            alt="Smiley faces rating scale from very sad to very happy"
            width={549}
            height={81}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OpinionSection;
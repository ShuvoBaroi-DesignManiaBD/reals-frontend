import Image from 'next/image';

interface ctaProps{
    iconType: 'darkPurple' | 'lightPurple' | 'skyBlue';
    title: string;
    description: string;
    buttonText: string;
} 
const SectionCTA = ({iconType, title, description, buttonText}: ctaProps) => {
    return (
        <div className="flex items-start justify-between mt-12">
          <div className="flex items-start">
            <div className="w-[35px] h-[35px] flex-shrink-0">
                {iconType === 'darkPurple' && (
                    <Image
                        src={"icons/Vector-15.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
                {iconType === 'skyBlue' && (
                    <Image
                        src={"icons/Vector-16.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
                {iconType === 'lightPurple' && (
                    <Image
                        src={"icons/Vector-17.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
            </div>
            <div className="ml-[50px]">
              <p className="w-[620px] text-[33px] leading-[37px] tracking-[0.66px] text-black font-['Poppins'] mb-[46px] text-start">
                {title}
                <br />
                {description}
              </p>
            </div>
          </div>
          <div className="mt-[46px]">
            <button className="text-[15px] font-medium text-white font-['Nunito_Sans'] uppercase bg-[#c347fc] hover:bg-[#b83ee0] transition-colors duration-300 rounded-[5px] px-[48px] py-[18px] focus:ring-4 focus:ring-purple-300 focus:outline-none">
              {buttonText}
            </button>
          </div>
        </div>
    );
};

export default SectionCTA;
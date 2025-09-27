import Image from 'next/image';
import { type DOMAttributes } from 'react';
import { Button } from './ui/button';

// The type for the object expected by `dangerouslySetInnerHTML`
type DangerousHtml = Pick<DOMAttributes<HTMLDivElement>, 'dangerouslySetInnerHTML'>;

export interface ctaProps {
  iconType: 'darkPurple' | 'lightPurple' | 'skyBlue';
  title?: string | DangerousHtml;
  description?: string;
  buttonText: string;
} 
const SectionCTA = ({iconType, title, description, buttonText}: ctaProps) => {
    return (
        <div className="w-full flex items-start justify-between">
          <div className="flex items-start">
            <div className="w-[35px] h-[35px] flex-shrink-0">
                {iconType === 'darkPurple' && (
                    <Image
                        src={"/icons/Vector-15.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
                {iconType === 'skyBlue' && (
                    <Image
                        src={"/icons/Vector-16.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
                {iconType === 'lightPurple' && (
                    <Image
                        src={"/icons/Vector-17.svg"}
                        width={35}
                        height={35}
                        alt="call-to-action-icon"
                    ></Image>
                )}
            </div>
            <div className="ml-[50px]">
              <div className="w-[620px] text-[33px] leading-[37px] tracking-[0.66px] text-black font-['Poppins'] mb-[46px] text-start">
                {title && (
                  <span dangerouslySetInnerHTML={{ __html: title }} />
                )}
                {title && description && <br />}
                {description && (
                  <span dangerouslySetInnerHTML={{ __html: description }} />
                )}
              </div>
            </div>
          </div>
          <div className="mt-[46px]">
            <Button size="xl" className="CTA-btn py-4 px-24">
              {buttonText}
            </Button>
          </div>
        </div>
    );
};

export default SectionCTA;
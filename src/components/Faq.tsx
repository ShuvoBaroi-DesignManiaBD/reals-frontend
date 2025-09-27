"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqItems } from "@/data/faqData";

import SectionCTA, { ctaProps } from "./SectionCTA";





const Faq = ({galleryImages,title,sectionCta,description,iconType="darkPurple",sectionTitle="Ko par mums saka pasākumu dalībnieki?"}: {galleryImages?: string[], title?:string,sectionCta?: boolean, description?: string, iconType?: ctaProps['iconType'],sectionTitle?:string}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  return (
    <section className="bg-[#fff] py-20 w-full">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="max-w-[60%] text-[60px] leading-[67px] text-center text-black font-['Poppins'] mb-[62px] w-full mx-auto">
          {sectionTitle}
        </h2>

        {/* Image Gallery with Navigation */}
        {galleryImages && (
          <div className="flex flex-col gap-5 items-center justify-between mb-16">
            {/* Gallery Images - 3 Images Per Slide */}
            <div className="relative w-full mx-auto">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                className="w-full"
              >
                <CarouselContent className="flex items-center pr-10 gap-3.5">
                  {galleryImages.map((image, index) => {
                    // Calculate which items are visible in current slide (3 items per slide)

                    return (
                      <CarouselItem
                        key={index}
                        className="basis-1/3 flex justify-center"
                      >
                        <div
                          className={`relative rounded-[20px] transition-all duration-500 ease-in-out h-[500px] w-full flex items-center`}
                        >
                          <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            alt={`Gallery image ${index + 1}`}
                            className="rounded-[20px]"
                          />
                          {/* Show play button on center item */}
                          {current === index && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <Image
                                src="/icons/video_play.svg"
                                width={75}
                                height={75}
                                alt="Play button"
                                className="cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                              />
                            </div>
                          )}
                          {/* Overlay for non-center items */}
                          {current !== index && (
                            <div className="absolute inset-0 bg-black/20 rounded-[20px] transition-opacity duration-500" />
                          )}
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex gap-3 justify-end items-center w-full pt-16.5 pr-5">
                  <CarouselPrevious
                    customIcon
                    className="!static bg-transparent hover:bg-transparent size-10"
                    onClick={() => {
                      if (current === 0) {
                        setCurrent(galleryImages?.length - 1);
                      } else {
                        setCurrent(current - 1);
                      }
                      api?.scrollPrev();
                    }}
                  />
                  <CarouselNext
                    customIcon
                    className="!static bg-transparent hover:bg-transparent size-10"
                    onClick={() => {
                      if (current === galleryImages?.length - 1) {
                        setCurrent(0);
                      } else {
                        setCurrent(current + 1);
                      }
                      api?.scrollNext();
                    }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        )}

        {/* FAQ Accordions Container */}
        <div className="flex items-start justify-between w-full max-w-screen-xl rounded-[20px] bg-white p-[60px_40px] shadow-[4px_4px_28px_9px_rgba(209,81,255,0.2)]">
          {/* FAQ Accordion */}
          <div className="flex flex-col gap-0 items-start flex-1 h-[370px] overflow-x-hidden overflow-y-auto pr-4 scrollbar-custom">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b border-[#181A4D] last:border-b-0"
                >
                  <AccordionTrigger className="flex items-center justify-between w-full py-8 px-0 text-left hover:no-underline hover:bg-transparent focus-visible:ring-0 focus-visible:border-0">
                    <div className="flex items-center gap-4">
                      <p className="text-[26px] leading-[29px] tracking-[0.78px] text-[#c347fc] font-['Poppins'] font-medium uppercase">
                        {faq.id}.
                      </p>
                      <p className="text-[20px] leading-[28px] tracking-[0px] text-[#050505] font-['Poppins'] font-medium flex-1 break-words">
                        {faq.question}
                      </p>
                    </div>
                  </AccordionTrigger>
                  {faq.answer && (
                    <AccordionContent className="pb-8">
                      <p className="text-[18px] leading-[25px] text-[#050505] font-['Poppins'] ml-[33px]">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Button */}
        {sectionCta ? (
          <div className="pt-16">
          <SectionCTA iconType={iconType} title={title} buttonText="sazināties" description={description}>
          </SectionCTA>
          </div>
        ) : (
          <Button
            variant="purple"
            size="lg"
            className="block !mx-auto mt-20 px-16"
          >
            apskatīt visus pasākumus
          </Button>
        )}
      </div>
    </section>
  );
};

export default Faq;

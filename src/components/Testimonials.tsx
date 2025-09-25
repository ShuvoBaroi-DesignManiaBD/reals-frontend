"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface TestimonialData {
  id: number;
  title: string;
  content: string;
  author: string;
  position: string;
  avatar: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Labākais pasākums!",
    content:
      "Ideāls veids, kā saliedēt kolektīvu!<br />Mūsu darbinieki vēl ilgi runāja par to, kā katrs izcēlās komandu uzdevumos. Arī vakara daļa bija ļoti sirsnīga. Profesionāla organizācija un draudzīga atmosfēra.",
    author: "Anna Linde",
    position: "COO, Uzņēmums1",
    avatar: "/images/team-leader.png",
  },
  {
    id: 2,
    title: "Fantastiska pieredze!",
    content:
      "Nevaru iedomāties labāku veidu, kā pavadīt laiku ar komandu. Viss bija perfekti organizēts, un atmosfēra bija neticami pozitīva. Ieteicu visiem!",
    author: "Jānis Bērziņš",
    position: "CEO, Uzņēmums2",
    avatar: "/images/team-leader.png",
  },
  {
    id: 3,
    title: "Neaizmirstama diena!",
    content:
      "Šis pasākums pārsniedza visas mūsu cerības. Komandas saliedēšanas aktivitātes bija radošas un aizraujošas. Noteikti atkārtosim!",
    author: "Līga Kalniņa",
    position: "HR Manager, Uzņēmums3",
    avatar: "/images/team-leader.png",
  },
  {
    id: 4,
    title: "Profesionāli un jautri!",
    content:
      "Perfekts līdzsvars starp darbu un izklaidēm. Mūsu komanda ir kļuvusi vienota un motivēta. Paldies par šo brīnišķīgo pieredzi!",
    author: "Māris Ozols",
    position: "Project Manager, Uzņēmums4",
    avatar: "/images/team-leader.png",
  },
  {
    id: 5,
    title: "Izcila organizācija!",
    content:
      "Katrs moments bija rūpīgi plānots. Darbinieki jutās novērtēti un iesaistīti. Šādi pasākumi ir investīcija uzņēmuma nākotnē.",
    author: "Dace Liepiņa",
    position: "Marketing Director, Uzņēmums5",
    avatar: "/images/team-leader.png",
  },
  {
    id: 6,
    title: "Iedvesmojoši!",
    content:
      "Šis pasākums mainīja mūsu komandas dinamiku. Tagad mēs strādājam labāk kopā un esam radošāki problēmu risināšanā.",
    author: "Andris Krūmiņš",
    position: "CTO, Uzņēmums6",
    avatar: "/images/team-leader.png",
  },
];

const galleryImages = [
  "/mf6ed80v-2aa3s74.png",
  "/mf6ed80v-3ifdaqs.png",
  "/mf6ed80v-7bboa38.png",
  "/mf6ed80v-t2fudma.png",
  "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_15.png",
  "/mf6ed80v-mqe8acc.png",
];

const Testimonials = ({ outLineButton }: { outLineButton?: boolean }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  console.log("current", current);

  return (
    <section className="bg-[#F9F7FB] py-20 w-full">
      <div className="max-w-screen-xl mx-auto">
        {/* Title */}
        <h2 className="text-[60px] leading-[67px] text-center text-black font-['Poppins'] mb-[62px] w-full mx-auto">
          Ko par mums saka pasākumu dalībnieki?
        </h2>

        {/* Image Gallery with Navigation */}
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
              <CarouselContent className="flex items-center gap-3.5 min-h-[700px]">
                {galleryImages.map((image, index) => {
                  // Calculate which items are visible in current slide (3 items per slide)

                  const slideHeight =
                    current === index ? "h-[700px]" : "h-[500px]";
                  console.log(current, index);

                  return (
                    <CarouselItem
                      key={index}
                      className="basis-1/3 flex justify-center"
                    >
                      <div
                        className={`relative rounded-[20px] transition-all duration-500 ease-in-out ${slideHeight} w-full flex items-center`}
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
              <div className="flex gap-3 justify-end items-center w-full pt-8">
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

        {/* Testimonial Cards */}
        <div className="mb-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonialData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-6 basis-1/3">
                  <div
                    className="bg-white rounded-[20px] h-full"
                    style={{
                      padding: "54px 28px 54px 28px",
                    }}
                  >
                    <h3 className="text-[26px] leading-[29px] tracking-[0.78px] text-[#000000DE] font-['Poppins'] font-medium uppercase text-center mb-[31px]">
                      {testimonial.title}
                    </h3>
                    <div
                      className="text-[18px] leading-[25px] text-[#000000DE] font-['Poppins'] text-center mb-5"
                      dangerouslySetInnerHTML={{ __html: testimonial.content }}
                    />
                    <div className="flex items-center justify-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        width={45}
                        height={45}
                        alt={testimonial.author}
                        className="rounded-full"
                      />
                      <div className="h-[55px] relative">
                        <p className="text-[#000000DE] font-['Inter']">
                          {testimonial.author}
                        </p>
                        <p className="text-[#000000DE] font-['Inter']">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex gap-3 justify-end items-center w-full pt-8">
              <CarouselPrevious
                customIcon
                className="!static bg-transparent hover:bg-transparent size-10"
              />
              <CarouselNext
                customIcon
                className="!static bg-transparent hover:bg-transparent size-10"
              />
            </div>
          </Carousel>
        </div>

        {/* Action Buttons and Navigation */}
        <div className="flex items-start justify-between">
          <div className="w-full flex items-center justify-center mt-[50px] gap-5">
            {outLineButton && (
              <Button variant="outline" size="xl">
                Atstāt atsauksmi
              </Button>
            )}
            <Button variant="default" size="xl" className="py-3.5">
              Atstāt atsauksmi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

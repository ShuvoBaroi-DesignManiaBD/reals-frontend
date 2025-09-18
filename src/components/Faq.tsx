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
import { Plus, Minus, X } from "lucide-react";

const galleryImages = [
  "/mf6ed80v-2aa3s74.png",
  "/mf6ed80v-3ifdaqs.png",
  "/mf6ed80v-7bboa38.png",
  "/mf6ed80v-t2fudma.png",
  "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_15.png",
  "/mf6ed80v-mqe8acc.png",
];

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Kādas pasākumu programmas jūs piedāvājat skolām un klasēm?",
    answer:
      "Mēs piedāvājam plašu izglītojošo un izklaides programmu klāstu: komandu saliedēšanas aktivitātes, sporta spēles, radošās darbnīcas, dabas izpētes ekspedīcijas, orientēšanās sacensības, survival prasmju apmācības un tematiskos piedzīvojumus. Visas programmas ir pielāgotas dažādām vecuma grupām un mācību mērķiem.",
  },
  {
    id: "2",
    question: "Kā notiek pasākuma pieteikšana?",
    answer:
      'Lapas sadaļā "Pieteikt pasākumu" aizpildi īsu formu, kurā norādi dalībnieku skaitu, mērķauditoriju, pasākuma veidu un vēlamo datumu. Mēs sazināsimies ar Tevi tuvāko dienu laikā, lai saskaņotu detaļas. Ja nepieciešams, vari arī izvēlēties no jau gatavām programmām vai sastādīt savu unikālo piedzīvojumu.',
  },
  {
    id: "3",
    question: "Cik liela ir minimālā un maksimālā dalībnieku grupa?",
    answer:
      "Minimālā grupa ir 8 dalībnieki, maksimālā - 150 dalībnieki vienā pasākumā. Lielākām grupām varam organizēt vairākus paralēlus pasākumus vai sadalīt aktivitātes pa rotācijas stacijām. Optimālais grupas lielums ir 15-30 dalībnieki, kas nodrošina labāko pieredzi un personalizētu pieeju.",
  },
  {
    id: "4",
    question: "Vai pasākumi notiek arī ziemā vai sliktos laikapstākļos?",
    answer:
      "Jā, mēs organizējam pasākumus visu gadu! Ziemas sezonā piedāvājam īpašas ziemas aktivitātes: sniega celtņu būvēšanu, slēpošanu, kamaniņu braucienus un iekštelpu programmas. Sliktu laikapstākļu gadījumā pārvietojamies uz iekštelpu aktivitātēm vai piedāvājam alternatīvas programmas.",
  },
  {
    id: "5",
    question: "Cik maksā jūsu pakalpojumi?",
    answer:
      "Cenas atkarīgas no programmas veida, dalībnieku skaita un ilguma. Pamata programmas sākas no 15€ par dalībnieku pusdienai, pilnas dienas programmas - no 25€ par dalībnieku. Piedāvājam arī grupu atlaides un sezonas akcijas. Precīzu cenu aprēķinu saņemsi pēc pieteikuma iesniegšanas.",
  },
  {
    id: "6",
    question: "Vai jūs nodrošināt ēdināšanu pasākumu laikā?",
    answer:
      "Jā, mēs piedāvājam dažādas ēdināšanas iespējas: no vienkāršiem uzkodām līdz pilnvērtīgām maltītēm. Varam organizēt piknika stila ēdināšanu dabā, grila vakariņas vai tradicionālās maltītes. Ņemam vērā arī īpašās diētas vajadzības un alerģijas.",
  },
  {
    id: "7",
    question: "Cik ilgi iepriekš jāpiesaka pasākums?",
    answer:
      "Ieteicams pieteikt pasākumu vismaz 2-3 nedēļas iepriekš, īpaši aktīvajā sezonā (maijs-septembris). Steidzamos gadījumos varam organizēt pasākumu arī īsākā termiņā, ja ir brīvas vietas kalendārā. Populārākajiem datumiem (piemēram, mācību gada beigās) ieteicams pieteikties vēl agrāk.",
  },
  {
    id: "8",
    question: "Vai pasākumi ir droši un kādi ir drošības pasākumi?",
    answer:
      "Drošība ir mūsu prioritāte! Visi instruktori ir sertificēti un regulāri apmācīti. Nodrošinām kvalitatīvu aprīkojumu, drošības inventāru un pirmās palīdzības komplektus. Pirms katras aktivitātes tiek veikta drošības instruktāža. Mums ir spēkā apdrošināšanas polise un sertifikāti visām aktivitātēm.",
  },
  {
    id: "9",
    question: "Kur notiek pasākumi?",
    answer:
      "Mums ir vairākas bāzes Latvijā: Siguldā, Cēsīs, Liepājā un Rīgas tuvumā. Varam arī ierasties jūsu izvēlētajā vietā - skolā, parkā vai citā piemērotā teritorijā. Katrai vietai pielāgojam programmu atbilstoši pieejamajām iespējām un infrastruktūrai.",
  },
  {
    id: "10",
    question: "Vai nepieciešams īpašs aprīkojums vai apģērbs?",
    answer:
      "Pamata aprīkojumu (virves, ķiveres, aizsargekipējumu) nodrošinām mēs. Dalībniekiem jāņem līdzi sporta apģērbs, ērti apavi un apģērbs atbilstoši laikapstākļiem. Konkrētās prasības nosūtīsim kopā ar apstiprinājumu par pasākumu. Ziemas aktivitātēm nepieciešams silts apģērbs.",
  },
  {
    id: "11",
    question: "Vai varat organizēt korporatīvos pasākumus?",
    answer:
      "Protams! Specializējamies arī korporatīvo pasākumu organizēšanā: komandu saliedēšanas aktivitātes, uzņēmumu jubilejas, gada ballītes un motivācijas pasākumi. Piedāvājam gan aktīvas, gan relaksējošas programmas, pielāgojot tās uzņēmuma kultūrai un mērķiem.",
  },
  {
    id: "12",
    question: "Kāda ir atcelšanas politika?",
    answer:
      "Pasākumu var atcelt bez maksas līdz 7 dienām pirms pasākuma. Atceļot 3-7 dienas iepriekš, tiek iekasēta 50% no summas. Atceļot mazāk nekā 3 dienas iepriekš vai neierašanās gadījumā - pilna summa. Sliktu laikapstākļu dēļ atceltos pasākumus pārceļam bez papildu maksas.",
  },
  {
    id: "13",
    question: "Vai piedāvājat programmas dažādām vecuma grupām?",
    answer:
      "Jā, mūsu programmas ir pielāgotas visām vecuma grupām: pirmsskolas bērniem (4-6 gadi), sākumskolas skolēniem (7-10 gadi), pusaudžiem (11-15 gadi), jauniešiem (16+ gadi) un pieaugušajiem. Katrai grupai pielāgojam aktivitāšu sarežģītību, ilgumu un saturu.",
  },
  {
    id: "14",
    question: "Vai varat nodrošināt transportu?",
    answer:
      "Jā, sadarbībā ar licencētiem pārvadātājiem varam organizēt transportu no jūsu atrašanās vietas līdz pasākuma norises vietai un atpakaļ. Transporta izmaksas tiek aprēķinātas atsevišķi, atkarībā no attāluma un dalībnieku skaita. Autobusi ir aprīkoti ar drošības jostām.",
  },
  {
    id: "15",
    question: "Kādi ir maksājuma veidi?",
    answer:
      "Pieņemam maksājumus ar bankas pārskaitījumu, skaidru naudu vai karti uz vietas. Juridiskajām personām izrakstām rēķinus ar PVN. Iespējams arī dalīts maksājums - 50% avansa maksājums pie rezervācijas un atlikums pasākuma dienā.",
  },
  {
    id: "16",
    question: "Vai varat fotografēt vai filmēt pasākumu?",
    answer:
      "Jā, piedāvājam profesionālu foto un video pakalpojumu par papildu maksu. Mūsu fotogrāfi iemūžinās labākos mirkļus, un jūs saņemsiet visas fotogrāfijas digitālā formātā 3-5 darba dienu laikā. Video materiālus varam sagatavot kā īsu highlights video vai pilnu pasākuma ierakstu.",
  },
];

const events: EventItem[] = [
  {
    date: "02.06.2025.",
    title: "Deju kolektīvs Dancītis, saliedēšanas pasākums",
    participants: 73,
  },
  {
    date: "30.07.2024.",
    title: "Ropažu novada Sporta diena Ulbrokā",
    participants: 900,
  },
  {
    date: "15.05.2024.",
    title: "Korporatīvais pasākums SIA 'Baltika'",
    participants: 150,
  },
  {
    date: "22.04.2024.",
    title: "Bērnu dienas svinības Rīgas centrā",
    participants: 250,
  },
  {
    date: "10.03.2024.",
    title: "Uzņēmuma 'TechCorp' gada ballīte",
    participants: 180,
  },
  {
    date: "28.02.2024.",
    title: "Sporta kluba 'Dinamo' jubilejas pasākums",
    participants: 320,
  },
  {
    date: "14.01.2024.",
    title: "Jaungada svinības viesnīcā 'Grand Palace'",
    participants: 450,
  },
  {
    date: "20.12.2023.",
    title: "Ziemassvētku korporatīvais pasākums",
    participants: 95,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "05.11.2023.",
    title: "Mūzikas festivāls 'Autumn Sounds'",
    participants: 680,
  },
  {
    date: "18.10.2023.",
    title: "Biznesa konference 'Future Tech'",
    participants: 220,
  },
];

const Faq = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  return (
    <section className="bg-[#F9F7FB] py-20 my-20 w-full">
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
                    current === 0
                      ? setCurrent(galleryImages?.length - 1)
                      : setCurrent(current - 1);
                    api?.scrollPrev();
                  }}
                />
                <CarouselNext
                  customIcon
                  className="!static bg-transparent hover:bg-transparent size-10"
                  onClick={() => {
                    current === galleryImages?.length - 1
                      ? setCurrent(0)
                      : setCurrent(current + 1);
                    api?.scrollNext();
                  }}
                />
              </div>
            </Carousel>
          </div>
        </div>

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
        <Button
          variant="purple"
          size="lg"
          className="block !mx-auto mt-20 px-16"
        >
          apskatīt visus pasākumus
        </Button>
      </div>
    </section>
  );
};

export default Faq;

"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import ProgramMenu from "@/components/ProgramMenu";
import {
  heroData,
  programMenuData,
  tabCategories,
  programItems,
  ProgramItem,
} from "@/data/programData";
import CategoryBenifits from "@/components/CategoryBenifits";
import EventsList from "@/components/EventsList";
import EventStages from "@/components/EventStages";
import PricingSection from "@/components/PricingSection";
import ClientsSection from "@/components/ClientsSection";
import { EventItem } from "@/lib/dataTypes";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import SimpleApplicationForm from "@/components/SimpleApplicationForm";

const UznemumiemuUnPasvaldibamPage = () => {
  const handleHeroButtonClick = () => {
    // Scroll to program menu or handle CTA action
    const programSection = document.getElementById("program-menu");
    if (programSection) {
      programSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProgramClick = (program: ProgramItem) => {
    // Handle program card click - could navigate to program details
    console.log("Program clicked:", program);
  };

  const handleCtaClick = (buttonIndex: number) => {
    // Handle CTA button clicks
    if (buttonIndex === 0) {
      // "Apskatīt visus pasākumus" - could navigate to all programs page
      console.log("View all programs clicked");
    } else {
      // "pieteikt pasākumu" - could open contact form or navigate to booking
      console.log("Book event clicked");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        buttonText={heroData.buttonText}
        backgroundImage={heroData.backgroundImage}
        onButtonClick={handleHeroButtonClick}
      />

      {/* Program Menu Section */}
      <div id="program-menu">
        <ProgramMenu
          title={programMenuData.title}
          description={programMenuData.description}
          tabCategories={tabCategories}
          programItems={programItems}
          ctaTitle={programMenuData.ctaTitle}
          ctaDescription={programMenuData.ctaDescription}
          ctaButtons={programMenuData.ctaButtons.map((button) => ({
            ...button,
            variant: button.variant as "primary" | "secondary",
          }))}
          onProgramClick={handleProgramClick}
          onCtaClick={handleCtaClick}
        />
      </div>
      {/* Benefits and Bonuses Section */}
      <CategoryBenifits />

      {/* Stages of event organization */}
      <EventStages />

      {/* Event cost */}
      <PricingSection></PricingSection>

      {/* Clients Section */}
      <ClientsSection className="!my-0 pt-0"/>

      {/* Events List Section */}
      <EventsList
        title="Realizētie pasākumi uzņēmumiem un pašvaldībām"
        buttonText="apskatīt visus pasākumus"
        className="py-20"
        events={events}>
        </EventsList>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <Faq sectionCta
      title="Neatradi atbildi uz savu jautājumu? Sazinies ar mums, un mēs palīdzēsim atrast piemērotāko risinājumu tieši jūsu komandai."
      />

      {/* Simple Application Form Section */}
      <SimpleApplicationForm />
      
    </div>
  );
};

export default UznemumiemuUnPasvaldibamPage;


const events: EventItem[] = [
    {
      date: "02.06.2025.",
      title: "Deju kolektīvs Dancītis, saliedēšanas pasākums",
      participants: 73
    },
    {
      date: "30.07.2024.",
      title: "Ropažu novada Sporta diena Ulbrokā",
      participants: 900
    },
    {
      date: "15.05.2024.",
      title: "Korporatīvais pasākums SIA 'Baltika'",
      participants: 150
    },
    {
      date: "22.04.2024.",
      title: "Bērnu dienas svinības Rīgas centrā",
      participants: 250
    },
    {
      date: "10.03.2024.",
      title: "Uzņēmuma 'TechCorp' gada ballīte",
      participants: 180
    },
    {
      date: "28.02.2024.",
      title: "Sporta kluba 'Dinamo' jubilejas pasākums",
      participants: 320
    },
    {
      date: "14.01.2024.",
      title: "Jaungada svinības viesnīcā 'Grand Palace'",
      participants: 450
    },
    {
      date: "20.12.2023.",
      title: "Ziemassvētku korporatīvais pasākums",
      participants: 95
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "05.11.2023.",
      title: "Mūzikas festivāls 'Autumn Sounds'",
      participants: 680
    },
    {
      date: "18.10.2023.",
      title: "Biznesa konference 'Future Tech'",
      participants: 220
    }
  ];
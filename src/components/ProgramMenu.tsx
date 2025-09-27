"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ProgramItem, TabCategory } from "@/data/programData";
import { Sparkles } from "lucide-react";
import CTAcard from "./CTAcard";

interface ProgramMenuProps {
  title: string;
  description: string;
  tabCategories: TabCategory[];
  programItems: ProgramItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: Array<{ text: string; variant: "primary" | "secondary" }>;
  onProgramClick?: (program: ProgramItem) => void;
  onCtaClick?: (buttonIndex: number) => void;
}

const ProgramMenu: React.FC<ProgramMenuProps> = ({
  title,
  description,
  tabCategories,
  programItems,
  ctaTitle,
  ctaDescription,
  ctaButtons,
  // onProgramClick,
  onCtaClick,
}) => {
  const [activeTab, setActiveTab] = useState(
    tabCategories[0]?.value || "pie-dabas"
  );

  // Filter programs based on active tab
  const filteredPrograms = programItems.filter((program) =>
    program.categories.includes(activeTab)
  );

  const items = filteredPrograms.length % 2 === 0?filteredPrograms.length -2 : filteredPrograms.length - (filteredPrograms.length%2-2);

  console.log(items, filteredPrograms.length, filteredPrograms.length%2);
  
  // Group programs into rows of 4
  const programRows = [];
  for (let i = 0; i < filteredPrograms.length; i += 4) {
    programRows.push(filteredPrograms.slice(i, i + 4));
  }

  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="w-2/3 mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-black mb-6 max-w-[1220px] mx-auto"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h2>
        <p
          className="text-lg leading-relaxed text-black max-w-[1265px] mx-auto"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {description}
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Tab List */}
        <TabsList className="flex justify-center gap-4 mb-14 bg-transparent h-auto p-0">
          {tabCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.value}
              className="cursor-pointer bg-white text-black font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg border-0 data-[state=active]:!bg-primary hover:!bg-secondary hover:text-white data-[state=active]:!text-white data-[state=active]:shadow-xl transition-all duration-200 hover:shadow-xl font-poppins min-w-[195px]"
              style={{
                boxShadow:
                  "4px 0px 4px 0px #008efc33, 0px 4px 4px 0px #008efc33",
              }}
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tab Content */}
        {tabCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.value}
            className="mt-0"
          >
            <div className="relative">
              {/* Program Cards Grid */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {filteredPrograms.slice(0, items).map((program) => (
                  <CTAcard
                    key={program.id}
                    icon="/icons/white-arrow.svg"
                    image={program.image}
                    title={program.title}
                    description={program?.description}
                    hasButton={true}
                    data={program}
                  />
                ))}
                {/* CTA Section positioned in bottom-right */}
              <div className="col-span-2 flex justify-end">
                <div className="w-full max-w-[650px] flex items-start justify-start">
                  <div className="flex flex-col items-start justify-center p-6">
                    <div className="mb-6">
                      <Sparkles className="w-9 h-9 text-[#c347fc]" />
                    </div>

                    <h3 
                      className="text-black text-2xl lg:text-[33px] leading-tight mb-8 max-w-[540px]"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {ctaTitle}
                      <br />
                      {ctaDescription}
                    </h3>

                    <div className="flex gap-4 w-full max-w-[300px]">
                      {ctaButtons.map((button, index) => (
                        <Button
                          key={index}
                          onClick={() => onCtaClick?.(index)}
                          className={`
                            font-medium text-sm uppercase tracking-wide px-8 py-3 rounded-md transition-colors duration-200 w-full
                            ${
                              button.variant === "primary"
                                ? "bg-[#109afc] hover:bg-[#0e87e3] text-white"
                                : "bg-[#c347fc] hover:bg-[#b33ee8] text-white"
                            }
                          `}
                          style={{ fontFamily: "Nunito Sans, sans-serif" }}
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default ProgramMenu;

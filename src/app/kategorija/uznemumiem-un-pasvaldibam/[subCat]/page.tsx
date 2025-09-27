"use client";

import React from "react";
import SportsHeroSection from "@/components/SportsHeroSection";
import SportsInfoSection from "@/components/SportsInfoSection";
import GallerySectionSubcat from "@/components/GallerySectionSubcat";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import SimpleApplicationForm from "@/components/SimpleApplicationForm";

// interface PageProps {
//   params: {
//     subCat: string;
//   };
// }

export default function SubCategoryPage() {
  const handleButtonClick = () => {
    // Handle button click action - could be scroll to form, open modal, etc.
    console.log("Program request button clicked");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Sports Hero Section */}
      <SportsHeroSection onButtonClick={handleButtonClick} />

      {/* Sports Info Section */}
      <SportsInfoSection onButtonClick={handleButtonClick} />

      {/* Gallery Section */}
      <GallerySectionSubcat />

      {/* Testimonials Section */}
      <section className="bg-[#f9f7fb] pt-20">
        <div className="max-w-[50%] text-h2 text-center text-text font-family-poppins w-full mx-auto">
          Ko par mums saka pasākumu dalībnieki?<br></br>
          <h2 className="text-h2 py-10 text-primary">
            “Kolēģi joprojām smejas par ‘trako stafeti’. Paldies par superīgo
            dienu!”
          </h2>
          <h3 className="text-[26px] text-[#7A7676]">— Ieva, HR koordinatore</h3>
        </div>
        <Testimonials
          outLineButton={false}
          gallerySection={false}
          button={false}
          title={false}
        />
      </section>

      {/* FAQ Section */}
      <Faq 
        sectionCta 
        title={"<span class='!text-2xl font-bold'>Neatradi atbildi uz savu jautājumu?</span>"} 
        description="<span class='!text-2xl'>Sazinies ar mums, un mēs palīdzēsim atrast piemērotāko risinājumu tieši jūsu komandai.</span>"
        sectionTitle="Biežāk uzdotie jautājumi par sporta spēlēm"
      ></Faq>

      {/* Event registration form */}
      <SimpleApplicationForm></SimpleApplicationForm>
      {/* Additional content can be added here */}
    </main>
  );
}

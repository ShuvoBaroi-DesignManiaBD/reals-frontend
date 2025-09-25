import NewsCarousel from "@/components/NewsCarousel";
import EventsSection from "@/components/EventsSection";
import NumbersSection from "@/components/NumbersSection";
import GallerySection from "@/components/GallerySection";
import AboutUsSection from "@/components/AboutUsSection";
import EventStages from "@/components/EventStages";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import BenefitsAndBonusesSection from "@/components/BenefitsAndBonusesSection";
import ClientsSection from "@/components/ClientsSection";
import HistorySection from "@/components/HistorySection";
import Faq from "@/components/Faq";
import SocialResponsibilitySection from "@/components/SocialResponsibilitySection";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import OpinionSection from "@/components/OpinionSection";
import EventsList from "@/components/EventsList";
import { EventItem } from "@/lib/dataTypes";
import galleryImages from "@/data/galleryImages";

export default function Home() {
  return (
    <main className="min-h-screen" role="main">
      {/* Hero Section - Figma Design Implementation */}
      <section
        className="relative flex flex-col items-center justify-center w-full h-[600px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, #081528 0.21%, rgba(8, 21, 40, 0.00) 99.79%), url('/images/rp1 1.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="flex flex-col items-center px-[170px] pt-[139px] pb-[120px] max-w-[1440px] w-full">
          <h1
            id="hero-heading"
            className="w-[1099px] text-center text-white font-poppins text-[60px] leading-[67px] tracking-[0] mb-[45px]"
          >
            Spilgtākie pasākumi uzņēmumiem un ģimenēm no A līdz Z
          </h1>

          <div className="flex items-center justify-center bg-[#c347fc] rounded-[5px] px-[48px] py-[13px]">
            <button className="text-white font-nunito text-[15px] font-medium leading-[17px] tracking-[0] uppercase">
              pieteikt pasākumu
            </button>
          </div>
        </div>
      </section>

      <section className=""></section>
      {/* Statistics Banner - Exact Figma Design */}
      <section
        className="relative overflow-hidden mx-auto bg-white pt-10 pb-20"
        aria-labelledby="stats-banner"
        role="region"
      >
        <div className="bg-gradient-to-r rounded-[20px] from-[#109afc] to-[#D151FF] relative max-w-screen-xl mx-auto">
          <div className="flex items-start justify-between rounded-[20px] px-[60px] py-[15px] pb-[34px] w-full h-[101px]">
            <div className="flex items-start justify-between pr-[1px] w-[790px] min-w-[790px]">
              <p className="mt-[26px] w-[112px] h-[19px] text-white font-['Poppins'] text-[22px] font-medium leading-[24px] tracking-[0.66px] uppercase">
                Novadīti
              </p>
              <p className="w-[162px] h-[52px] text-white font-['Poppins'] text-[60px] font-medium leading-[67px]">
                300+
              </p>
              <p className="mt-[26px] w-[490px] h-[19px] text-white font-['Poppins'] text-[22px] font-medium leading-[24px] tracking-[0.66px] uppercase">
                Korporatīvie pasākumi un iepriecināti
              </p>
            </div>
            <p className="w-[247px] h-[52px] text-white font-['Poppins'] text-[60px] font-medium leading-[67px]">
              115000+
            </p>
            <p className="mt-[26px] w-[131px] h-[19px] text-white font-['Poppins'] text-[22px] font-medium leading-[24px] tracking-[0.66px] uppercase">
              dalībnieki!
            </p>
          </div>
        </div>
      </section>

      {/* News Carousel Section */}
      <section className="w-full">
        <NewsCarousel />
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Numbers Section */}
      <NumbersSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* About Us Section */}
      <AboutUsSection />

      <EventStages />
      {/* Testimonials Section */}
      <Testimonials outLineButton/>

      {/* Target Audience Sections */}

      {/* Pricing Section - Figma Design Implementation */}
      <PricingSection />

      {/* Benefits and Bonuses Section */}
      <BenefitsAndBonusesSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* History Section */}
      <EventsList
        title="Pasākumos iepriecināto klientu hronoloģija:"
        buttonText="apskatīt visus pasākumus"
        events={events}
      />

      {/* FAQ Section */}
      <Faq galleryImages={galleryImages}/>

      {/* Social Responsibility Section */}
      <SocialResponsibilitySection />

      <ApplicationFormSection />

      {/* Opinion Section */}
      <OpinionSection />
    </main>
  );
}

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

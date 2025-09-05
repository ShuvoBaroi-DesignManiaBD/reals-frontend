import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BrandCard } from "@/components/ui/brand-card";
import { BrandButton } from "@/components/ui/brand-button";
import { Star } from "lucide-react";
import NewsCarousel from "@/components/NewsCarousel";
import EventsSection from "@/components/EventsSection";
import NumbersSection from "@/components/NumbersSection";
import GallerySection from "@/components/GallerySection";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfbfb]" role="main">
      
      {/* Hero Section - Figma Design Implementation */}
      <section 
        className="relative flex flex-col items-center justify-center w-full h-[600px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, #081528 0.21%, rgba(8, 21, 40, 0.00) 99.79%), url('/images/rp1 1.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
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

      <section className="">

      </section>
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

      {/* Target Audience Sections */}
      <section 
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
        aria-labelledby="services-heading"
        role="region"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mūsu pakalpojumi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Piedāvājam pielāgotus risinājumus dažādām mērķauditorijām - no korporatīvajiem pasākumiem līdz ģimenes aktivitātēm
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto" role="list" aria-label="Pakalpojumu kategorijas">
            {/* Uzņēmumiem */}
            <article className="group hover:scale-105 transition-all duration-300 overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-purple-300" role="listitem" tabIndex={0}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/figma-images/memm2mzf-0f1zba7.png"
                  alt="Korporatīvi pasākumi uzņēmumiem - komandu saliedēšana"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-[#d151ff] text-white text-sm font-medium rounded-full">
                    🏢 Uzņēmumiem
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#081528] mb-3">Korporatīvie pasākumi</h3>
                <p className="text-gray-600 mb-6">
                  Komandu saliedēšanas aktivitātes, korporatīvie pasākumi un motivācijas programmas, kas stiprina jūsu komandu.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Komandu saliedēšana</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Motivācijas programmas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Korporatīvās svinības</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#d151ff] hover:bg-[#b83ee0] text-white focus:ring-4 focus:ring-purple-300 focus:outline-none"
                  aria-label="Uzzināt vairāk par korporatīvajiem pasākumiem"
                >
                  Uzzināt vairāk
                </Button>
              </div>
            </article>
            
            {/* Skolām */}
            <article className="group hover:scale-105 transition-all duration-300 overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-blue-300" role="listitem" tabIndex={0}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/figma-images/memm2mzf-0f1zba7.png"
                  alt="Izglītojošie pasākumi skolām - bērnu aktivitātes"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                    🎓 Skolām
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#081528] mb-3">Izglītojošie pasākumi</h3>
                <p className="text-gray-600 mb-6">
                  Interaktīvas un izglītojošas programmas skolēniem, kas apvieno mācīšanos ar aizraujošām aktivitātēm.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Izglītojošas programmas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Klases saliedēšana</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Sporta aktivitātes</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  aria-label="Uzzināt vairāk par izglītojošajiem pasākumiem skolām"
                >
                  Uzzināt vairāk
                </Button>
              </div>
            </article>
            
            {/* Ģimenēm */}
            <article className="group hover:scale-105 transition-all duration-300 overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-pink-300" role="listitem" tabIndex={0}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/figma-images/memm2mzf-0f1zba7.png"
                  alt="Ģimenes pasākumi - aktivitātes visai ģimenei"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-pink-500 text-white text-sm font-medium rounded-full">
                    👨‍👩‍👧‍👦 Ģimenēm
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#081528] mb-3">Ģimenes aktivitātes</h3>
                <p className="text-gray-600 mb-6">
                  Aizraujoši piedzīvojumi visai ģimenei, kas rada neaizmirstamas atmiņas un stiprina ģimenes saites.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Ģimenes piedzīvojumi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Bērnu dzimšanas dienas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    <span>Aktīvā atpūta</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white focus:ring-4 focus:ring-pink-300 focus:outline-none"
                  aria-label="Uzzināt vairāk par ģimenes aktivitātēm"
                >
                  Uzzināt vairāk
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 bg-[#fbfbfb]"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Statistics Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Papildu statistika">
              <div className="text-center" role="listitem" tabIndex={0}>
                <div className="text-5xl font-bold text-[#d151ff] mb-2" aria-label="100 procenti">100%</div>
                <div className="text-lg text-gray-600">mobilitāte</div>
              </div>
              <div className="text-center" role="listitem" tabIndex={0}>
                <div className="text-5xl font-bold text-[#d151ff] mb-2" aria-label="115 tūkstoši plus">115 000+</div>
                <div className="text-lg text-gray-600">pasākumu dalībnieki</div>
              </div>
              <div className="text-center" role="listitem" tabIndex={0}>
                <div className="text-5xl font-bold text-[#d151ff] mb-2" aria-label="500 plus">500+</div>
                <div className="text-lg text-gray-600">iepriecinātas ģimenes</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto" role="article" aria-labelledby="testimonial-author">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/figma-images/memm2mzi-6y8o1j0.png"
                    alt="Anna Linde"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 id="testimonial-author" className="text-xl font-bold text-[#081528] mb-2">Anna Linde</h3>
                  <p className="text-gray-600 mb-4">
                    &quot;Reāls Piedzīvojums organizēja mūsu uzņēmuma gada pasākumu, un tas bija fantastiski! Komanda bija ļoti profesionāla, un visi darbinieki bija sajūsmā par aktivitātēm. Noteikti sadarbosimies arī turpmāk!&quot;
                  </p>
                  <div className="flex items-center space-x-1" role="img" aria-label="5 zvaigžņu vērtējums">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-bold text-[#081528] mb-6">
                  Par Reāls Piedzīvojums
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mēs esam komanda, kas jau vairāk nekā 10 gadus organizē neaizmirstamus pasākumus uzņēmumiem un ģimenēm. Mūsu pieredze un radošā pieeja ļauj mums radīt unikālus piedzīvojumus, kas vieno cilvēkus un rada pozitīvas emocijas.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Katrs pasākums tiek plānots individuāli, ņemot vērā klienta vajadzības un vēlmes. Mēs rūpējamies par katru detaļu, lai jūsu pasākums būtu perfekts.
                </p>
                
                {/* Founder */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/.figma/image/memm2mzi-6y8o1j0.png"
                      alt="Anna Kalniņa"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#081528]">Anna Kalniņa</h3>
                    <p className="text-gray-600">Dibinātāja un vadītāja</p>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/.figma/image/memm2mzg-4p1nggs.png"
                    alt="Anna Kalniņa - Dibinātāja"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-[#fbfbfb]" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 id="process-heading" className="text-4xl font-bold text-[#081528] mb-16 text-center">
              Kā mēs organizējam jūsu pasākumu?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Pasākuma organizēšanas soļi">
              {/* Step 1 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="1. solis: Izvēlieties pasākumu">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Izvēlieties pasākumu</h3>
                <p className="text-gray-600">
                  Sazinājieties ar mums un pastāstiet par savām vēlmēm un vajadzībām.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="2. solis: Konsultācija">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Konsultācija</h3>
                <p className="text-gray-600">
                  Mūsu speciālisti sniegs detalizētu konsultāciju un piedāvās risinājumus.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="3. solis: Plānošana">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Plānošana</h3>
                <p className="text-gray-600">
                  Kopā izstrādājam detalizētu pasākuma plānu un programmu.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="4. solis: Sagatavošana">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Sagatavošana</h3>
                <p className="text-gray-600">
                  Mēs rūpējamies par visu nepieciešamo aprīkojumu un materiāliem.
                </p>
              </div>

              {/* Step 5 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="5. solis: Pasākuma vadīšana">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Pasākuma vadīšana</h3>
                <p className="text-gray-600">
                  Mūsu komanda profesionāli vada pasākumu no sākuma līdz beigām.
                </p>
              </div>

              {/* Step 6 */}
              <div className="text-center" role="listitem" tabIndex={0} aria-label="6. solis: Atsauksmes">
                <div className="w-16 h-16 bg-[#d151ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-xl font-bold text-[#081528] mb-3">Atsauksmes</h3>
                <p className="text-gray-600">
                  Saņemam jūsu atsauksmes un uzlabojam mūsu pakalpojumus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 relative overflow-hidden" aria-labelledby="pricing-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-brand-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                Cenu plāni
              </div>
              <h2 id="pricing-heading" className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent mb-6">
                Mūsu pakalpojumu cenas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Izvēlieties sev piemērotāko paketi un radiet neaizmirstamus piedzīvojumus
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8" role="list" aria-label="Cenu plāni">
              {/* Standarta Package */}
              <BrandCard className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-brand-primary/20" role="listitem" tabIndex={0} aria-label="Standarta pakete - 15 eiro par dalībnieku">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Standarta</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">€15</span>
                    <span className="text-gray-600 font-medium">/dalībnieks</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Pasākuma vadītājs</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Tehniskā komanda</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Balvas dalībniekiem</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Apskaņošana</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Pasākuma programma</span>
                  </li>
                </ul>
                <BrandButton variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-all duration-300" aria-label="Izvēlēties Standarta paketi">
                  Izvēlēties
                </BrandButton>
              </BrandCard>

              {/* Biznesa Package - Featured */}
              <BrandCard className="group hover:scale-105 transition-all duration-300 border-2 border-brand-primary shadow-2xl relative overflow-hidden" role="listitem" tabIndex={0} aria-label="Biznesa pakete - 25 eiro par dalībnieku - Populārākais">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Populārākais
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-bl-full"></div>
                
                <div className="text-center mb-8 pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Biznesa</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">€25</span>
                    <span className="text-gray-600 font-medium">/dalībnieks</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Viss no Standarta paketes</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Pasākuma vietas organizēšana</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Kausi</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Medaļas</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Priekšnesumi/šovi</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Atklāšanas ceremonija</span>
                  </li>
                </ul>
                <BrandButton className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white font-bold" aria-label="Izvēlēties Biznesa paketi">
                  Izvēlēties
                </BrandButton>
              </BrandCard>

              {/* VIP Package */}
              <BrandCard className="group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-brand-accent/20" role="listitem" tabIndex={0} aria-label="VIP pakete - 35 eiro par dalībnieku">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">€35</span>
                    <span className="text-gray-600 font-medium">/dalībnieks</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Viss no Biznesa paketes</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Noslēgšanas ceremonija</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Apgaismojums</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">DJ vai mūziķis</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Dzīvā mūzika</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Diskotēka</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Dekorācijas</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Unikālas balvas</span>
                  </li>
                </ul>
                <BrandButton variant="outline" className="w-full group-hover:bg-brand-accent group-hover:text-white transition-all duration-300" aria-label="Izvēlēties VIP paketi">
                  Izvēlēties
                </BrandButton>
              </BrandCard>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-6">
                Nepieciešama konsultācija? Sazinājieties ar mums!
              </p>
              <Button className="bg-[#d151ff] hover:bg-[#b83ee0] text-white px-8 py-3" aria-label="Saņemt bezmaksas konsultāciju">
                Saņemt konsultāciju
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-20 bg-[#fbfbfb]" aria-labelledby="trusted-companies-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="trusted-companies-heading" className="text-4xl font-bold text-[#081528] mb-12">
              Mums uzticās
            </h2>
            
            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12" role="list" aria-label="Mūsu klienti">
              {[
                'Swedbank', 'DNB', 'Kiilto', 'Kreiss', 'LDZ', 'Lindström',
                'JYSK', 'MT', 'Beaphar', 'Certex', 'Medlex', 'Rimi'
              ].map((company, index) => (
                <div key={index} className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm opacity-70 hover:opacity-100 transition-opacity" role="listitem" tabIndex={0} aria-label={`Klients: ${company}`}>
                  <span className="text-gray-600 font-medium text-xs">{company}</span>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2" role="tablist" aria-label="Klientu saraksta lapas">
              {[1, 2, 3, 4].map((dot) => (
                <button
                  key={dot}
                  role="tab"
                  aria-selected={dot === 1}
                  aria-label={`Lapa ${dot}`}
                  className={`w-3 h-3 rounded-full focus:ring-2 focus:ring-brand-primary focus:outline-none ${
                    dot === 1 ? 'bg-[#d151ff]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-4xl font-bold text-[#081528] mb-12 text-center">
              Biežāk uzdotie jautājumi
            </h2>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-[#fbfbfb] rounded-2xl p-6" role="listitem" tabIndex={0}>
                <h3 className="text-xl font-bold text-[#081528] mb-3">
                  Kādas pasākumu programmas jūs piedāvājat skolām un klasēm?
                </h3>
                <p className="text-gray-600">
                  Mēs piedāvājam plašu izglītojošu un izklaides programmu klāstu skolēniem: sporta spēles, dabas izpēti, zinību konkursus, komandas saliedēšanas aktivitātes un daudz ko citu. Visas programmas ir pielāgotas dažādām vecuma grupām.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-[#fbfbfb] rounded-2xl p-6" role="listitem" tabIndex={0}>
                <h3 className="text-xl font-bold text-[#081528] mb-3">
                  Kā notiek pasākuma pieteikšana?
                </h3>
                <p className="text-gray-600">
                  Pasākuma pieteikšana ir ļoti vienkārša - sazinājieties ar mums pa telefonu vai e-pastu, pastāstiet par savām vēlmēm, un mēs piedāvāsim piemērotākos risinājumus. Pēc tam sastādīsim detalizētu plānu un cenu aprēķinu.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-[#fbfbfb] rounded-2xl p-6" role="listitem" tabIndex={0}>
                <h3 className="text-xl font-bold text-[#081528] mb-3">
                  Cik ilgā laikā iepriekš jāpiesaka pasākums?
                </h3>
                <p className="text-gray-600">
                  Ieteicams pasākumu pieteikt vismaz 2-3 nedēļas iepriekš, lai mēs varētu kvalitatīvi sagatavot visu nepieciešamo. Tomēr ārkārtas gadījumos mēs cenšamies palīdzēt arī īsākā termiņā.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-[#fbfbfb] rounded-2xl p-6" role="listitem" tabIndex={0}>
                <h3 className="text-xl font-bold text-[#081528] mb-3">
                  Vai jūs nodrošināt pasākumus jebkurā Latvijas vietā?
                </h3>
                <p className="text-gray-600">
                  Jā, mēs organizējam pasākumus visā Latvijas teritorijā. Mūsu komanda ir mobilā un gatava doties uz jebkuru vietu, lai nodrošinātu kvalitatīvu pasākumu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden" aria-labelledby="contact-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Sazinājies ar mums
                  </div>
                  
                  <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold leading-tight">
                    Atstāj pieteikumu un saņem programmu!
                  </h2>
                </div>
                
                <div className="space-y-6 text-xl leading-relaxed">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>
                      Aizpildi šo pieteikuma formu, un mēs Tev atsūtīsim piemērotāko pasākuma programmas piedāvājumu.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>
                      Tu vari izvēlēties no jau gatavām programmām vai saņemt pielāgotu risinājumu tieši Tavam kolektīvam, klasei vai ģimenei.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z" />
                      </svg>
                    </div>
                    <p className="font-semibold">
                      Mēs sazināsimies tuvāko 1–2 darba dienu laikā!
                    </p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-4 pt-8 border-t border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">+371 20 123 456</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium">info@realspiedzivjums.lv</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <BrandCard className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <form className="space-y-6" role="form" aria-labelledby="contact-heading">
                  <fieldset>
                    <legend className="sr-only">Kontaktinformācija</legend>
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Vārds *
                      </label>
                      <input
                        type="text"
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Ievadiet savu vārdu"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Uzņēmuma nosaukums *
                      </label>
                      <input
                        type="text"
                        required
                        aria-required="true"
                        aria-describedby="company-error"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Uzņēmuma nosaukums"
                      />
                    </div>
                    </div>
                  </fieldset>
                  
                  <fieldset>
                    <legend className="sr-only">Kontaktinformācija - tālrunis un e-pasts</legend>
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Tālrunis *
                      </label>
                      <input
                        type="tel"
                        required
                        aria-required="true"
                        aria-describedby="phone-error"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="+371 20 123 456"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        E-pasts *
                      </label>
                      <input
                        type="email"
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="jūsu.epasts@example.com"
                      />
                    </div>
                    </div>
                  </fieldset>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Pasākuma veids *
                    </label>
                    <select 
                      required
                      aria-required="true"
                      aria-describedby="event-type-error"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900"
                    >
                      <option value="">Izvēlieties pasākuma veidu</option>
                      <option value="corporate">Korporatīvs pasākums</option>
                      <option value="family">Ģimenes pasākums</option>
                      <option value="school">Skolas pasākums</option>
                      <option value="birthday">Dzimšanas diena</option>
                      <option value="other">Cits</option>
                    </select>
                  </div>
                  
                  <fieldset>
                    <legend className="block text-sm font-semibold text-gray-800 mb-4">
                      Dalībnieku skaits pasākumā *
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-required="true">
                      {[
                        { value: 'up-to-30', label: 'Līdz 30' },
                        { value: '30-50', label: '30 - 50' },
                        { value: '50-100', label: '50 - 100' },
                        { value: '100-200', label: '100 - 200' },
                        { value: 'over-200', label: 'Virs 200' }
                      ].map((option, index) => (
                        <label key={option.value} className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-brand-primary transition-colors cursor-pointer group">
                          <input
                            type="radio"
                            name="participants"
                            value={option.value}
                            required
                            className="w-5 h-5 text-brand-primary border-gray-300 focus:ring-brand-primary"
                            defaultChecked={index === 1}
                          />
                          <span className="ml-3 text-gray-800 font-medium group-hover:text-brand-primary transition-colors">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Pasākuma vieta
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Pilsēta, adrese"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Pasākuma laiks
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Papildu informācija
                    </label>
                    <textarea
                      rows={4}
                      aria-describedby="additional-info-help"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary bg-white transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Pastāstiet vairāk par savām vēlmēm un prasībām..."
                    ></textarea>
                    <div id="additional-info-help" className="sr-only">Šis lauks nav obligāts. Jūs varat pievienot papildu informāciju par savām vēlmēm.</div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <input
                      type="checkbox"
                      id="marketing-consent"
                      className="w-5 h-5 text-brand-primary border-gray-300 rounded focus:ring-brand-primary mt-1 flex-shrink-0"
                    />
                    <label htmlFor="marketing-consent" className="text-sm text-gray-700 leading-relaxed">
                      Piekrītu saņemt reklāmas e-pastus. Datu apstrāde publicitātes pasākumu, akciju un
                      citu SIA &quot;Reāls Piedzīvojums&quot; mārketinga paziņojumu nosūtīšanai.
                    </label>
                  </div>
                  
                  <BrandButton 
                    type="submit"
                    aria-describedby="submit-help"
                    className="w-full py-5 text-lg font-bold rounded-xl bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-secondary/90 hover:to-brand-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    PIETEIKT PASĀKUMU
                  </BrandButton>
                  <div id="submit-help" className="sr-only">Nospiežot šo pogu, jūsu pieteikums tiks nosūtīts, un mēs sazināsimies ar jums 1-2 darba dienu laikā.</div>
                </form>
              </BrandCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

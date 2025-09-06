'use client';

import React from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-full pb-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-[44px] leading-[49px] tracking-[0.88px] font-['Poppins'] text-[#080808]">
                Veidojam stipras komandas un{' '}
                <br />
                radām laimi!
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-[24px] leading-[27px] font-['Poppins'] font-semibold text-[#080808]">
                  Reāls Piedzīvojums –{' '}
                  <br />
                  pasākumi, kas vieno.
                </h3>
                
                <div className="space-y-4 text-[16px] leading-[24px] font-['Poppins'] text-[#666666]">
                  <p>
                    Jau vairāk nekā 15 gadus mūsu veidotajiem pasākumiem
                    dalībnieki, ģimenes un uzņēmumi vērtē kā laiku, kad
                    komandas kļūst stiprākas un tuvākas. Mēs ticam
                    kolektīvajam kustībai un tāpēc veidojam pasākumus, kas
                    apvieno.
                  </p>
                  
                  <p>
                    Mūsu komandas locekļi ir Saeimas Kancelejas, Latvijas
                    Universitātes, Rīgas Tehniskās universitātes, Latvijas
                    Lauksaimniecības universitātes, Biznesa augstskolas
                    Turība mācībspēki un doktori, kā arī sporta enerģijas
                    un veselības eksperti.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="bg-[#c347fc] hover:bg-[#b33ee8] text-white font-['Poppins'] font-medium px-8 py-3 rounded-[5px] transition-colors duration-300 uppercase tracking-[0.5px]">
                  uzzināt vairāk par mūsu komandu
                </button>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative">
            <div className="relative aspect-[4/3.5] rounded-[20px] overflow-hidden">
              <Image
                src="/images/team-leader.png"
                alt="Reāls Piedzīvojums team leader"
                fill
                className="object-contain w-auto h-[700px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay with logo/branding */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#c347fc] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RP</span>
                    </div>
                    <div className="text-sm font-medium text-[#080808]">
                      Reāls Piedzīvojums
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#c347fc]/10 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#109afc]/10 rounded-full" />
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-[32px] font-['Poppins'] font-semibold text-[#c347fc]">
                15+
              </div>
              <div className="text-[14px] font-['Poppins'] text-[#666666] uppercase tracking-[0.5px]">
                Gadu pieredze
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-[32px] font-['Poppins'] font-semibold text-[#c347fc]">
                500+
              </div>
              <div className="text-[14px] font-['Poppins'] text-[#666666] uppercase tracking-[0.5px]">
                Iepriecinātas ģimenes
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-[32px] font-['Poppins'] font-semibold text-[#c347fc]">
                300+
              </div>
              <div className="text-[14px] font-['Poppins'] text-[#666666] uppercase tracking-[0.5px]">
                Uzņēmumi
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-[32px] font-['Poppins'] font-semibold text-[#109afc]">
                100%
              </div>
              <div className="text-[14px] font-['Poppins'] text-[#666666] uppercase tracking-[0.5px]">
                Mobilitāte
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#c347fc]/5 to-[#109afc]/5 rounded-[20px] p-8">
            <blockquote className="text-[20px] leading-[28px] font-['Poppins'] text-[#080808] italic">
              &quot;Mūsu mērķis ir radīt pasākumus, kas ne tikai izklaidē, bet arī stiprina komandas garu, 
              veicina sadarbību un rada neaizmirstamas atmiņas. Katrs pasākums ir unikāls piedzīvojums, 
              kas paliek atmiņā uz mūžu.&quot;
            </blockquote>
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-[#c347fc] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RP</span>
              </div>
              <div className="text-left">
                <div className="font-['Poppins'] font-semibold text-[#080808]">
                  Reāls Piedzīvojums komanda
                </div>
                <div className="text-[14px] font-['Poppins'] text-[#666666]">
                  Pasākumu organizēšanas eksperti
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
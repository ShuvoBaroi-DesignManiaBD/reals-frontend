import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white relative" style={{ width: '1440px', height: '946px', paddingLeft: '73px', paddingRight: '85px' }}>
      
      {/* Main Navigation Section */}
      <div className="flex items-start pt-4 pb-4">
        <div className="w-[176px] mr-[75px]">
          <h3 className="text-[20px] font-medium uppercase text-[#131313] mb-1 font-poppins leading-[30px]">
            SATURS
          </h3>
        </div>
        <div className="mr-[103px]">
          <h3 className="text-[20px] font-medium uppercase text-[#585757] opacity-85 mb-1 font-poppins leading-[30px]">
            UZŅĒMUMIEM
          </h3>
        </div>
        <div className="mr-[103px]">
          <h3 className="text-[20px] font-medium uppercase text-[#585757] opacity-85 mb-1 font-poppins leading-[30px]">
            SKOLĒNIEM
          </h3>
        </div>
        <div className="mr-[103px]">
          <h3 className="text-[20px] font-medium uppercase text-[#585757] opacity-85 mb-1 font-poppins leading-[30px]">
            ĢIMENĒM
          </h3>
        </div>
        <div className="mr-[86px]">
          <h3 className="text-[20px] font-medium uppercase text-[#585757] opacity-85 mb-1 font-poppins leading-[30px]">
            PAŠVALDĪBĀM
          </h3>
        </div>
        <div>
          <h3 className="text-[20px] font-medium uppercase text-[#585757] opacity-85 mb-1 font-poppins leading-[30px]">
            PATĪK VISIEM
          </h3>
        </div>
      </div>

      {/* Content Columns */}
      <div className="flex items-start mt-4">
        {/* Column 1: SATURS */}
        <div className="w-[176px] mr-[75px]">
          <div className="space-y-0">
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Par mums</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Mūsu komanda</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Paveiktais</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Pasākumi</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Portfolio</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Aktualitātes</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Kontakti</p>
            <p className="text-[16px] text-[#131313] font-poppins leading-[21px]">Blogs</p>
          </div>
        </div>

        {/* Column 2: UZŅĒMUMIEM */}
        <div className="mr-[8px]">
          <div className="space-y-0">
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Korporatīvie pasākumi</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Sporta spēles</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Programmas paraugs</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ziemas spēles</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Komandas veidošana</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Saliedēšana</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Kvests brīvā dabā</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Militārais piedzīvojums</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Workshop</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ekspedīcijas / Misijas / Leģendas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ziemassvētku pasākumi</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Šovi / Priekšnesumi</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Koncerti</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Nometnes darbinieku bērniem</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Gadadiena / dzimšanas diena</p>
          </div>
        </div>

        {/* Column 3: SKOLĒNIEM */}
        <div className="mr-[50px]">
          <div className="space-y-0">
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Dzimšanas diena</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Sporta diena</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Olimpiskā diena</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Piedzīvojumu diena</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Militārais piedzīvojums</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Kvests brīvā dabā</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Pasākumi bērniem</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Nometnes</p>
          </div>
        </div>

        {/* Column 4: ĢIMENĒM */}
        <div className="mr-[50px]">
          <div className="space-y-0">
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Dzimšanas diena</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Gadskārtu svētki</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Lieldienu atrakcijas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ziemassvētku pasākumi</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Pasākumi bērniem</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Kāzu atrakcijas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Sporta spēles</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Nometne mammām–meitām</p>
          </div>
        </div>

        {/* Column 5: PAŠVALDĪBĀM */}
        <div className="mr-[50px]">
          <div className="space-y-0">
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Pilsētu svētki</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Gadskārtu svētki</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Lieldienu atrakcijas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ziemassvētku pasākumi</p>
          </div>
        </div>

        {/* Column 6: PATĪK VISIEM */}
        <div>
          <div className="space-y-0">
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Bamper bumbas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Loka šaušana</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Ūdens bumbas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Kvests brīvā dabā</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Peintbols</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Laivu braucieni</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Radošās darbnīcas</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Aktīvā atpūta</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Velo orientēšanās</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Auto-foto orientēšanās</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Iesvētības</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Baiļu faktors</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Atrakciju saraksts</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Jautrās stafetes</p>
            <p className="text-[14px] text-[#585757] opacity-85 font-poppins leading-[21px]">Bezmaksas trase</p>
          </div>
        </div>
        </div>

        {/* Bottom Section with Company Info, Newsletter, Contact, and Social */}
        <div className="bg-[#081528] px-[60px] py-[40px] mt-[40px]">
          <div className="flex justify-between items-start">
            {/* Company Info */}
            <div className="flex-1 max-w-[300px]">
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
                SIA "REĀLS PIEDZĪVOJUMS"
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
                Reģistrācijas nr. 40203543954
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
                PVN nr. LV40203543954
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
                Juridiskā adrese: Liegu iela 6,
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px]">
                Ādaži, Ādažu nov., LV-2164
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="flex-1 max-w-[400px] mx-8">
              <h3 className="text-[20px] font-medium uppercase text-white mb-6 font-poppins leading-[30px]">
                NODERĪGI
              </h3>
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-4">
                Privātuma politika
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-4">
                Noteikumi un nosacījumi
              </p>
              <p className="text-[14px] text-white font-poppins leading-[21px]">
                BUJ
              </p>
            </div>

            {/* Contact and Social */}
            <div className="flex-1 max-w-[300px]">
              <h3 className="text-[20px] font-medium uppercase text-white mb-6 font-poppins leading-[30px]">
                KONTAKTINFORMĀCIJA
              </h3>
              <div className="mb-6">
                <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
                  info@realspiedzivvojums.lv
                </p>
                <p className="text-[14px] text-white font-poppins leading-[21px]">
                  +371 22 330 002
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <img src="/icons/Social Icons-1.svg" alt="TikTok" className="w-6 h-6" />
                <img src="/icons/Social Icons-2.svg" alt="Facebook" className="w-6 h-6" />
                <img src="/icons/Social Icons-3.svg" alt="Instagram" className="w-6 h-6" />
                <img src="/icons/Social Icons-4.svg" alt="LinkedIn" className="w-6 h-6" />
                <img src="/icons/Social Icons-5.svg" alt="YouTube" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="mt-[40px] flex justify-between items-center">
            <div className="flex-1">
              <p className="text-[14px] text-white font-poppins leading-[21px] mb-4">
                PIESAKIES JAUNUMIEM!
              </p>
              <div className="flex items-center space-x-4">
                <input 
                  type="email" 
                  placeholder="e-pasts" 
                  className="bg-transparent border border-white text-white placeholder-white px-4 py-2 text-[14px] font-poppins flex-1 max-w-[300px]"
                />
                <button className="bg-white text-[#081528] px-6 py-2 text-[14px] font-poppins font-medium uppercase">
                  PIETEIKTIES
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-[40px] text-center">
            <p className="text-[14px] text-white font-poppins leading-[21px]">
              2025 REĀLS PIEDZĪVOJUMS
            </p>
          </div>
        </div>
    </footer>
  );
}
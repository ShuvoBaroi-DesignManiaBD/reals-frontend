import Link from "next/link";
import Image from "next/image";

// TypeScript interfaces for type safety
interface NavigationItem {
  label: string;
  href?: string;
}

interface NavigationColumn {
  title: string;
  items: NavigationItem[];
  titleColor: string;
  itemColor: string;
  itemOpacity?: number;
  width?: string;
  marginRight?: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface SocialIcon {
  src: string;
  alt: string;
}

interface CompanyInfo {
  name: string;
  registrationNumber: string;
  vatNumber: string;
  address: string[];
}

// Structured footer data
const footerData = {
  navigation: [
    {
      title: "SATURS",
      items: [
        { label: "Par mums" },
        { label: "Mūsu komanda" },
        { label: "Paveiktais" },
        { label: "Pasākumi" },
        { label: "Portfolio" },
        { label: "Aktualitātes" },
        { label: "Kontakti" },
        { label: "Blogs" },
      ],
      titleColor: "#131313",
      itemColor: "#131313",
      width: "176px",
      marginRight: "75px",
    },
    {
      title: "UZŅĒMUMIEM",
      items: [
        { label: "Korporatīvie pasākumi" },
        { label: "Sporta spēles" },
        { label: "Programmas paraugs" },
        { label: "Ziemas spēles" },
        { label: "Komandas veidošana" },
        { label: "Saliedēšana" },
        { label: "Kvests brīvā dabā" },
        { label: "Militārais piedzīvojums" },
        { label: "Workshop" },
        { label: "Ekspedīcijas / Misijas / Leģendas" },
        { label: "Ziemassvētku pasākumi" },
        { label: "Šovi / Priekšnesumi" },
        { label: "Koncerti" },
        { label: "Nometnes darbinieku bērniem" },
        { label: "Gadadiena / dzimšanas diena" },
      ],
      titleColor: "#585757",
      itemColor: "#585757",
      itemOpacity: 0.85,
      marginRight: "8px",
    },
    {
      title: "SKOLĒNIEM",
      items: [
        { label: "Dzimšanas diena" },
        { label: "Sporta diena" },
        { label: "Olimpiskā diena" },
        { label: "Piedzīvojumu diena" },
        { label: "Militārais piedzīvojums" },
        { label: "Kvests brīvā dabā" },
        { label: "Pasākumi bērniem" },
        { label: "Nometnes" },
      ],
      titleColor: "#585757",
      itemColor: "#585757",
      itemOpacity: 0.85,
      marginRight: "50px",
    },
    {
      title: "ĢIMENĒM",
      items: [
        { label: "Dzimšanas diena" },
        { label: "Gadskārtu svētki" },
        { label: "Lieldienu atrakcijas" },
        { label: "Ziemassvētku pasākumi" },
        { label: "Pasākumi bērniem" },
        { label: "Kāzu atrakcijas" },
        { label: "Sporta spēles" },
        { label: "Nometne mammām–meitām" },
      ],
      titleColor: "#585757",
      itemColor: "#585757",
      itemOpacity: 0.85,
      marginRight: "50px",
    },
    {
      title: "PAŠVALDĪBĀM",
      items: [
        { label: "Pilsētu svētki" },
        { label: "Gadskārtu svētki" },
        { label: "Lieldienu atrakcijas" },
        { label: "Ziemassvētku pasākumi" },
      ],
      titleColor: "#585757",
      itemColor: "#585757",
      itemOpacity: 0.85,
      marginRight: "50px",
    },
    {
      title: "PATĪK VISIEM",
      items: [
        { label: "Bamper bumbas" },
        { label: "Loka šaušana" },
        { label: "Ūdens bumbas" },
        { label: "Kvests brīvā dabā" },
        { label: "Peintbols" },
        { label: "Laivu braucieni" },
        { label: "Radošās darbnīcas" },
        { label: "Aktīvā atpūta" },
        { label: "Velo orientēšanās" },
        { label: "Auto-foto orientēšanās" },
        { label: "Iesvētības" },
        { label: "Baiļu faktors" },
        { label: "Atrakciju saraksts" },
        { label: "Jautrās stafetes" },
        { label: "Bezmaksas trase" },
      ],
      titleColor: "#585757",
      itemColor: "#585757",
      itemOpacity: 0.85,
    },
  ] as NavigationColumn[],

  companyInfo: {
    name: 'SIA "REĀLS PIEDZĪVOJUMS"',
    registrationNumber: "40203543954",
    vatNumber: "LV40203543954",
    address: ["Juridiskā adrese: Liegu iela 6,", "Ādaži, Ādažu nov., LV-2164"],
  } as CompanyInfo,

  contact: {
    email: "info@realspiedzivvojums.lv",
    phone: "+371 22 330 002",
  } as ContactInfo,

  socialIcons: [
    { src: "/icons/Social Icons-1.svg", alt: "TikTok" },
    { src: "/icons/Social Icons-2.svg", alt: "Facebook" },
    { src: "/icons/Social Icons-3.svg", alt: "Instagram" },
    { src: "/icons/Social Icons-4.svg", alt: "LinkedIn" },
    { src: "/icons/Social Icons-5.svg", alt: "YouTube" },
  ] as SocialIcon[],

  usefulLinks: [
    { label: "Privātuma politika" },
    { label: "Noteikumi un nosacījumi" },
    { label: "BUJ" },
  ] as NavigationItem[],
};

// Reusable components
const NavigationColumn = ({
  column,
  index,
}: {
  column: NavigationColumn;
  index: number;
}) => {
  const isFirstColumn = index === 0;
  const fontSize = isFirstColumn ? "16px" : "14px";

  return (
    <div
      className={column.width ? `w-[${column.width}]` : ""}
      style={{
        width: column.width,
        marginRight: column.marginRight,
      }}
    >
      <div className="space-y-0">
        <h3
          className="text-[20px] font-medium uppercase mb-5 font-poppins leading-[30px]"
          style={{ color: column.titleColor, opacity: column.itemOpacity || 1 }}
        >
          {column.title}
        </h3>
        {column.items.map((item, itemIndex) => (
          <p
            key={itemIndex}
            className="font-poppins leading-[21px]"
            style={{
              fontSize,
              color: column.itemColor,
              opacity: column.itemOpacity || 1,
            }}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

const CompanyInfoSection = ({ companyInfo }: { companyInfo: CompanyInfo }) => (
  <div className="flex-1 max-w-[300px]">
    <Image src="/logo.svg" alt="logo" width={160} height={60} />
    <p className="text-[14px] text-white font-poppins leading-[21px] mb-1 mt-5">
      {companyInfo.name}
    </p>
    <p className="text-[14px] text-white font-poppins leading-[21px] mb-1">
      Reģistrācijas nr. {companyInfo.registrationNumber}
    </p>
    <p className="text-[14px] text-white font-poppins leading-[21px] mb-1">
      PVN nr. {companyInfo.vatNumber}
    </p>
    {companyInfo.address.map((line, index) => (
      <p
        key={index}
        className="text-[14px] text-white font-poppins leading-[21px] mb-1"
      >
        {line}
      </p>
    ))}
  </div>
);

const UsefulLinksSection = ({ links }: { links: NavigationItem[] }) => (
  <div className="flex-1 max-w-[400px] mx-8">
    <h3 className="text-[20px] font-medium uppercase text-white mb-6 font-poppins leading-[30px]">
      NODERĪGI
    </h3>
    {links.map((link, index) => (
      <p
        key={index}
        className="text-[14px] text-white font-poppins leading-[21px] mb-1"
      >
        {link.label}
      </p>
    ))}
  </div>
);

const ContactSection = ({
  contact,
  socialIcons,
}: {
  contact: ContactInfo;
  socialIcons: SocialIcon[];
}) => (
  <div className="flex-1 max-w-[300px]">
    <h3 className="text-[20px] font-medium uppercase text-white mb-6 font-poppins leading-[30px]">
      KONTAKTINFORMĀCIJA
    </h3>
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2">
        <Image
          src="/icons/vuesax/bold/sms.svg"
          alt="sms"
          width={24}
          height={24}
        />
        <p className="text-[14px] text-white font-poppins leading-[21px] mb-2">
          {contact.email}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Image
          src="/icons/vuesax/bold/call-calling.svg"
          alt="phone"
          width={24}
          height={24}
        />
        <p className="text-[14px] text-white font-poppins leading-[21px]">
          {contact.phone}
        </p>
      </div>
    </div>
  </div>
);

export function Footer() {
  return (
    <footer className="flex flex-col bg-white text-white">
      <div className="w-full bg-[#081528] py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-start">
            <CompanyInfoSection companyInfo={footerData.companyInfo} />
            <UsefulLinksSection links={footerData.usefulLinks} />
            <ContactSection
              contact={footerData.contact}
              socialIcons={footerData.socialIcons}
            />
            {/* Newsletter Signup Section */}
            <div className="flex justify-between items-center bg-[#081528]">
              <div className="flex-1 space-y-6">
                <p className="text-[20px] font-medium uppercase text-white mb-6 font-poppins leading-[30px]">
                  PIESAKIES JAUNUMIEM!
                </p>
                <div className="flex items-center border rounded-[6px] border-r-0 border-white h-[41px]">
                  <input
                    type="email"
                    placeholder="e-pasts"
                    className="bg-transparent text-white placeholder-white p-3 text-[14px] font-poppins flex-1 max-w-[251px]"
                  />
                  <button className="w-[128px] h-[41px] bg-transparent text-primary p-3.5 rounded-[6px] border-[2px] border-primary text-[14px] font-poppins font-medium uppercase leading-0">
                    PIETEIKTIES
                  </button>
                </div>
                {/* Social Icons */}
                <div className="flex space-x-4">
                  {footerData.socialIcons.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                      className="w-6 h-6"
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation Section */}
      <div className="max-w-screen-xl mx-auto py-16">
        {/* Content Columns */}
        <div className="flex items-start mt-4">
          {footerData.navigation.map((column, index) => (
            <NavigationColumn
              key={column.title}
              column={column}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Section with Company Info, Newsletter, Contact, and Social */}
      <div className="bg-[#081528] px-[60px] py-3 text-center">
        {/* Copyright */}
        <p className="text-[14px] text-white font-poppins leading-[21px]">
          2025 REĀLS PIEDZĪVOJUMS
        </p>
      </div>
    </footer>
  );
}

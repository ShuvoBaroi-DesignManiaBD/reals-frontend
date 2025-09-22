export interface ProgramItem {
  key?: string;
  icon?: string;
  alt?: string;
  id: string;
  title: string;
  image: string;
  categories: string[];
  description?: string;
}

export interface TabCategory {
  id: string;
  label: string;
  value: string;
}

export const tabCategories: TabCategory[] = [
  { id: "pie-dabas", label: "pie dabas", value: "pie-dabas" },
  { id: "pilseta", label: "pilsētā", value: "pilseta" },
  { id: "telpas", label: "telpās", value: "telpas" },
  { id: "ziema", label: "ziemā", value: "ziema" },
  { id: "vasara", label: "vasarā", value: "vasara" },
  { id: "top-pasakumi", label: "top pasākumi", value: "top-pasakumi" }
];

export const programItems: ProgramItem[] = [
  {
    id: "korporativie-pasakumi",
    title: "Korporatīvie pasākumi",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/komandas_saliedesana_teambuilding_www.realspiedzivojums.lv_3a.png",
    categories: ["pilseta", "telpas", "top-pasakumi"]
  },
  {
    id: "sporta-speles",
    title: "Sporta spēles",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/sporta_speles_www.realspiedzivojums.lv_1a.png",
    categories: ["pie-dabas", "pilseta", "vasara", "top-pasakumi"]
  },
  {
    id: "komandas-veidosana",
    title: "Komandas veidošana",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/komandas_saliedesana_teambuilding_www.realspiedzivojums.lv_6.png",
    categories: ["pie-dabas", "pilseta", "telpas", "top-pasakumi"]
  },
  {
    id: "komandas-saliedesana",
    title: "Komandas saliedēšana",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_3a.png",
    categories: ["pie-dabas", "pilseta", "vasara", "top-pasakumi"]
  },
  {
    id: "kvests-briva-daba",
    title: "Kvests brīvā dabā",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4.png",
    categories: ["pie-dabas", "vasara"]
  },
  {
    id: "militarie-pasakumi",
    title: "Militārie pasākumi",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-1.png",
    categories: ["pie-dabas", "pilseta"]
  },
  {
    id: "workshop",
    title: "Workshop",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-2.png",
    categories: ["telpas", "pilseta"]
  },
  {
    id: "ekspedicijas-misijas-legendas",
    title: "Ekspedīcijas, Misijas, Leģendas",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-3.png",
    categories: ["pie-dabas", "vasara"]
  },
  {
    id: "ziemassvētku-pasakumi",
    title: "Ziemassvētku pasākumi",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-4.png",
    categories: ["ziema", "telpas", "pilseta"]
  },
  {
    id: "sovi-prieknesumi",
    title: "Šovi - priekšnesumi",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-5.png",
    categories: ["telpas", "pilseta"]
  },
  {
    id: "koncerti",
    title: "Koncerti",
    description: "Lieliska iespēja stiprināt komandas garu, veicināt sadarbību un radīt pozitīvas emocijas ārpus ikdienas darba vides.",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_4-6.png",
    categories: ["pilseta", "telpas"]
  },
  {
    id: "nometnes-darbinieku-berniem",
    title: "Nometnes darbinieku bērniem",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_5a.png",
    categories: ["pie-dabas", "vasara"]
  },
  {
    id: "gadadiena-dzimsanas-diena",
    title: "Gadadiena / dzimšanas diena",
    image: "/images/berniem_pasakumi_ballites_nometne_dzimsanas-diena_www.realspiedzivojums.lv_15.png",
    categories: ["pilseta", "telpas"]
  },
  {
    id: "ziemas-speles",
    title: "Ziemas spēles",
    image: "/images/sporta_speles_www.realspiedzivojums.lv_2.png",
    categories: ["pie-dabas", "ziema"]
  }
];

export const heroData = {
  title: "Uzņēmumiem un pašvaldībām",
  description: "Pasākumi uzņēmumiem, kas iedvesmo, apvieno un rada ilgtermiņa attiecības. Saliedēšanas spēles, sporta aktivitātes, tematiskas misijas un mierīgāki vakari – izvēlies formātu, kas vislabāk der tavai komandai. Mēs parūpēsimies par pārējo.",
  buttonText: "pieteikt pasākumu",
  backgroundImage: "/images/komandas_saliedesana_teambuilding_www.realspiedzivojums.lv_3a.png"
};

export const programMenuData = {
  title: "Izvēlies sev piemērotāko programmu",
  description: "Mēs rīkojam pasākumus, kas saliedē, iedvesmo un paliek atmiņā. Neatkarīgi no tā, vai esi uzņēmuma vadītājs, skolotājs vai vecāks – pie mums atradīsi programmu, kas būs tieši jums.",
  ctaTitle: "Laiks piedzīvojumam!",
  ctaDescription: "Izvēlies savu programmu vai ļauj mums to radīt kopā ar Tevi.",
  ctaButtons: [
    { text: "Apskatīt visus pasākumus", variant: "primary" },
    { text: "pieteikt pasākumu", variant: "secondary" }
  ]
};
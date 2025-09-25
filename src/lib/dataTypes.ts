interface EventItem {
  date: string;
  title: string;
  participants: number;
}

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

export type { EventItem, galleryImages, FAQItem }

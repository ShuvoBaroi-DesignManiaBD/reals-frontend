interface EventItem {
  date: string;
  title: string;
  participants: number;
}


interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

export type { EventItem, FAQItem }

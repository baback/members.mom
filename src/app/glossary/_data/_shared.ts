export type GlossaryPageData = {
  term: string;
  h1: string;
  meta: string;
  definition: string;
  whyMatters: { label: string; text: string }[];
  howItWorks: { heading?: string; text: string }[];
  example: string;
  product: { intro: string; points: string[] };
  related: { term: string; slug: string }[];
  relatedNote: string;
};

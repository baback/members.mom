export type IndustryPageData = {
  name: string;
  h1: string;
  updated: string;
  meta: string;
  intro: string;
  challenges: { title: string; text: string }[];
  formats: { name: string; why: string; length: string; platform: string; outline: string[] }[];
  stats: { num: string; label: string; context: string }[];
  hooks: { line: string; why: string; tag: string }[];
  stories: { brand: string; challenge: string; did: string; result: string }[];
  faq: { q: string; a: string }[];
  ctaLine: string;
};

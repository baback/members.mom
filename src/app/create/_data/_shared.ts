export type CreatePageData = {
  title: string;
  readTime: string;
  meta: string;
  intro: string;
  what: { definition: string; reasons: { label: string; text: string }[] };
  framework: { step: string; time: string; what: string; examples: string[]; why: string; mistake?: string }[];
  exampleScript: string;
  hooks: { line: string; trigger: string; products: string }[];
  bestPractices: { label: string; text: string }[];
  whenToUse: { stage: string; audience: string; platforms: string; pairWith: string };
  ctaLine: string;
};

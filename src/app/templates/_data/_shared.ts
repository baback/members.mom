export type TemplatePageData = {
  niche: string;
  scriptCount: number;
  h1: string;
  meta: string;
  intro: string;
  scripts: { name: string; subtitle: string; duration: string; script: string; notes: string[] }[];
  hooks: { line: string; trigger: string; note: string }[];
  tips: string[];
  ctaLine: string;
};

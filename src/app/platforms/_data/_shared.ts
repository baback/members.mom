export type PlatformPageData = {
  platform: string;
  h1: string;
  verified: string;
  meta: string;
  intro: string;
  specs: { label: string; value: string }[];
  formats: { name: string; why: string; structure: { time: string; desc: string }[]; length: string; firstFrame: string }[];
  scripts: { name: string; bestFor: string; duration: string; script: string; why: string; customization: string }[];
  tips: { title: string; text: string }[];
  dos: string[];
  donts: string[];
  ctaLine: string;
};

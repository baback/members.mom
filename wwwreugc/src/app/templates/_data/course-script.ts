import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Online Courses",
  scriptCount: 3,
  h1: "UGC Video Script for Online Courses: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for online course creators — student success story, course preview, and objection-buster formats. Plus 5 hooks that drive enrollments.",
  intro: "Online courses sell on transformation — not curriculum. Nobody buys \"12 modules and 47 videos.\" They buy \"I went from zero to $5K/month freelancing.\" UGC-style testimonials from students who got results are the highest-converting ad format for course creators. Here are 3 scripts ready to use.",
  scripts: [
    {
      name: "The Student Success Story",
      subtitle: "Best for: Building trust with skeptical audiences. Cold traffic who've been burned by courses before.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"6 months ago I was working a job I hated making\n$45K. Last month I made $8,200 freelancing.\nHere's what happened in between."\n\n[SETUP — 3-10s]\n"I'd been wanting to learn web design for years\nbut every YouTube tutorial left me more confused.\nI'd start a project, get stuck, Google for 3\nhours, and give up. I had no structure and no\none to ask when I hit a wall."\n\n[PAYOFF — 10-20s]\n"I enrolled in this course and the difference\nwas night and day. It's not just videos — there's\na community, weekly office hours, and actual\nprojects you build along the way. By module 4\nI had a portfolio. By module 8 I landed my first\nclient. I quit my job 2 months later."\n\n[CTA — 20-25s]\n"If you've been stuck in tutorial hell, this\ncourse is the way out. It's not cheap but it\npaid for itself with my first client. Link\nin bio."`,
      notes: [
        "Leading with specific income numbers ($45K to $8,200/month) creates an undeniable transformation. Replace with results relevant to your course",
        "\"Tutorial hell\" is a widely understood concept in the learning space. Naming the problem validates the viewer's experience",
        "\"It's not cheap but it paid for itself\" addresses the price objection head-on. Honesty about cost builds trust",
        "The progression (portfolio by module 4, client by module 8, quit job 2 months later) creates a clear timeline that feels achievable",
      ],
    },
    {
      name: "The Course Preview",
      subtitle: "Best for: Mid-funnel audiences who are interested but want to see what's inside before committing.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"Let me show you what you actually get inside\nthis course because the sales page doesn't\ndo it justice"\n[Screen recording of course dashboard]\n\n[PREVIEW — 3-16s]\n"First — it's not just pre-recorded videos.\nEvery module has a hands-on project. You're\nnot watching someone code — you're coding\nalong and building something real."\n"Second — the community. There's a private\ngroup where people share wins, ask questions,\nand the instructor actually responds. Not a\nTA — the actual instructor."\n"Third — the templates. I saved probably 40\nhours using their client proposal template\nand contract template alone."\n[Show each element briefly on screen]\n\n[CTA — 16-21s]\n"This isn't a course you watch and forget.\nIt's a course you finish and have a business.\nLink in bio."`,
      notes: [
        "\"The sales page doesn't do it justice\" implies the course is even better than it looks — a powerful reframe",
        "Highlighting the community and instructor access addresses the isolation concern that kills online course completion rates",
        "\"I saved 40 hours\" quantifies a specific benefit beyond the core curriculum. Bonus materials often seal the deal",
        "\"A course you finish and have a business\" reframes the purchase from education to investment. This is the key mindset shift for high-ticket courses",
      ],
    },
    {
      name: "The Objection Buster",
      subtitle: "Best for: Retargeting audiences who visited the sales page but didn't enroll. Overcoming hesitation.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"If you're thinking 'I can learn this for free\non YouTube' — I thought the same thing. Here's\nwhy I was wrong."\n[Direct to camera, honest tone]\n\n[OBJECTION — 2-10s]\n"I spent 8 months trying to learn on my own.\nFree tutorials, blog posts, Reddit threads.\nI learned a lot of theory but I couldn't\nactually do anything. I had no portfolio, no\nconfidence, and no idea how to get clients.\nFree content teaches you concepts. It doesn't\nteach you how to build a career."\n\n[RESOLUTION — 10-16s]\n"This course gave me the structure, the\naccountability, and the real-world projects\nthat free content never could. 3 months in\nand I had paying clients. That's the difference."\n\n[CTA — 16-19s]\n"Stop collecting bookmarks and start building.\nLink in bio."`,
      notes: [
        "Naming the objection (\"I can learn this for free\") shows you understand the viewer's hesitation. It disarms them",
        "\"8 months trying to learn on my own\" quantifies the cost of the free path — time. This reframes the course price as a time-saving investment",
        "\"Free content teaches concepts, not careers\" is a sharp distinction that resonates with anyone stuck in tutorial hell",
        "\"Stop collecting bookmarks\" is a specific, relatable call-out. Everyone has a folder of saved tutorials they never finished",
      ],
    },
  ],
  hooks: [
    { line: "I dropped out of college and this $500 course taught me more than 2 years of classes", trigger: "anti-establishment", note: "Challenges traditional education. Resonates with self-taught learners and career changers." },
    { line: "My boss asked how I learned to do this so fast. I didn't tell him it was a $200 course.", trigger: "secret weapon", note: "Implies the course gives you an unfair advantage. The secrecy adds intrigue." },
    { line: "POV: you finally finish an online course and actually have skills to show for it", trigger: "aspiration", note: "Addresses the epidemic of unfinished courses. This hook promises a different outcome." },
    { line: "I made back the cost of this course within 2 weeks of finishing it", trigger: "ROI speed", note: "Fast ROI is the most compelling argument for any course. The specific timeframe makes it believable." },
    { line: "The course that made me stop saying 'I'll learn it eventually' and actually do it", trigger: "procrastination cure", note: "Speaks to the universal habit of postponing learning. The course becomes the catalyst for action." },
  ],
  tips: [
    "Lead with the transformation, not the curriculum. \"I went from X to Y\" converts 10x better than \"This course has 12 modules and 47 videos\"",
    "Address the price objection directly in the script. Course buyers need to justify the investment — help them by framing it as ROI, not cost",
    "Show the course interface briefly but don't linger. The human story is what sells — the platform screenshot just confirms it's real and professional",
    "Include a specific timeline: \"In 3 months I had clients\" or \"By week 6 I built my first project.\" Timelines make the transformation feel achievable",
    "Test different student personas: career changer, side hustler, complete beginner, experienced professional upskilling. Each resonates with a different segment of your audience",
  ],
  ctaLine: "Turn these course scripts into enrollment-driving UGC videos. No students on camera needed.",
};
export default data;

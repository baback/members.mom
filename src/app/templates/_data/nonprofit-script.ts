import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Nonprofits",
  scriptCount: 3,
  h1: "UGC Video Script for Nonprofits: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for nonprofit organizations — impact story, volunteer spotlight, and donation transparency formats. Plus 5 hooks that drive donations.",
  intro: "Nonprofits that show impact raise more than nonprofits that ask for money. UGC-style videos where a volunteer, beneficiary, or donor shares their personal connection to the cause convert because they make the mission tangible. People don't donate to organizations — they donate to stories. Here are 3 scripts built for nonprofits.",
  scripts: [
    {
      name: "The Impact Story",
      subtitle: "Best for: Fundraising campaigns. Cold audiences who don't know your organization yet.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"A year ago I couldn't read a menu at a\nrestaurant. Today I'm reading bedtime stories\nto my daughter. Here's what happened."\n\n[SETUP — 3-10s]\n"I dropped out of school in 8th grade. For 20\nyears I hid the fact that I couldn't read well.\nI'd memorize orders at restaurants, avoid forms,\nand pretend my phone was broken when someone\nasked me to look something up. I was ashamed\nevery single day."\n\n[PAYOFF — 10-20s]\n"Then someone told me about this organization.\nThey have free adult literacy classes — no\njudgment, no pressure, just patient tutors\nwho meet you where you are. I went twice a\nweek for 8 months."\n"Last week my daughter handed me a book and\nsaid 'Daddy, read this one.' And I did. The\nwhole thing. She doesn't know what that moment\nmeant to me."\n[Genuine emotion]\n\n[CTA — 20-25s]\n"Your donation keeps these classes free. $25\npays for one student's materials for a month.\nLink in bio to give."`,
      notes: [
        "The opening contrast (can't read a menu → reading bedtime stories) is emotionally devastating in the best way. It's the transformation in one sentence",
        "Specific details about hiding illiteracy (memorizing orders, avoiding forms) make the struggle real and relatable",
        "The daughter moment is the emotional peak. Personal, specific stories convert better than statistics",
        "\"$25 pays for one student's materials\" makes the donation tangible. Donors want to know exactly what their money does",
      ],
    },
    {
      name: "The Volunteer Spotlight",
      subtitle: "Best for: Recruiting volunteers and donors. Audiences who want to get involved but don't know how.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"I signed up to volunteer for 2 hours a week.\nIt turned into the most meaningful thing I do."\n\n[STORY — 3-16s]\n"I was looking for something beyond work and\nNetflix. I found this organization and signed\nup to mentor a high school student. Just 2\nhours every Saturday morning."\n"His name is Marcus. When we started, he was\nfailing 3 classes and had no plan after\ngraduation. We worked on study habits, talked\nabout careers, and I just showed up consistently."\n"He graduated last month with a 3.2 GPA and\ngot accepted to community college. He texted\nme 'thank you for not giving up on me' and\nI ugly-cried in my car."\n\n[CTA — 16-21s]\n"You don't need special skills to change\nsomeone's life. You just need to show up.\nLink in bio to volunteer."`,
      notes: [
        "\"2 hours a week\" makes volunteering feel manageable. The low time commitment removes the biggest barrier to signing up",
        "Naming the student (Marcus) and sharing specific details makes the story personal and memorable",
        "The GPA improvement (failing → 3.2) is a measurable result that proves the program works",
        "\"You don't need special skills\" removes the qualification barrier. Most people think they're not qualified to volunteer — this says otherwise",
      ],
    },
    {
      name: "The Donation Transparency",
      subtitle: "Best for: Building donor trust. Audiences who want to know their money is used well.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"Here's exactly where your $50 donation goes\nwhen you give to us. No vague promises."\n[Direct to camera, transparent tone]\n\n[BREAKDOWN — 2-13s]\n"$50 donation. Here's the split."\n"$38 goes directly to programs — that's meals,\nshelter supplies, and case worker hours."\n"$7 goes to operations — keeping the lights\non, maintaining the facility, basic admin."\n"$5 goes to fundraising — so we can reach\nmore people like you who want to help."\n"That's 76 cents of every dollar going directly\nto the people we serve. We publish our\nfinancials every quarter so you can verify it."\n\n[CTA — 13-17s]\n"Transparency isn't optional — it's how we\nearn your trust. Link in bio to donate or\nread our latest impact report."`,
      notes: [
        "\"No vague promises\" directly addresses donor skepticism. Transparency is the #1 factor in donation decisions",
        "Breaking down the dollar amount shows exactly where money goes. This level of detail is rare and impressive",
        "\"76 cents of every dollar\" is a strong efficiency metric. Donors compare this across organizations",
        "Offering the impact report as an alternative CTA serves donors who want to research before giving",
      ],
    },
  ],
  hooks: [
    { line: "I donated $25 and got a letter from the person it helped. I've been donating monthly ever since.", trigger: "personal connection", note: "The letter creates a tangible connection between donor and beneficiary. It transforms a transaction into a relationship." },
    { line: "I volunteered once to put it on my resume. 3 years later I'm still here because I can't leave.", trigger: "unexpected commitment", note: "The honest initial motivation (resume) makes the genuine commitment more believable and touching." },
    { line: "POV: you see exactly where your donation goes and it's not the CEO's salary", trigger: "transparency + humor", note: "Addresses the cynicism about nonprofit spending with humor. Transparency is the antidote to donor skepticism." },
    { line: "This organization helped my family when we had nothing. Now I help them help others.", trigger: "full circle", note: "Beneficiary-to-supporter stories are the most powerful nonprofit narratives. They prove the mission works." },
    { line: "The nonprofit that sends you photos of exactly what your money did", trigger: "accountability", note: "Visual proof of impact is the strongest donor retention tool. It makes giving feel tangible and rewarding." },
  ],
  tips: [
    "Lead with the human story, not the ask. \"Meet Maria\" converts better than \"Please donate.\" The story creates the emotional connection that motivates giving",
    "Make the donation amount tangible: \"$25 feeds a family for a week\" or \"$50 provides school supplies for 3 kids.\" Abstract amounts don't motivate — specific impacts do",
    "Show the people behind the organization — volunteers, staff, beneficiaries. Nonprofits are about people, and faces build trust faster than logos",
    "Transparency about finances is a competitive advantage. Donors who trust your spending become recurring donors. Publish and promote your efficiency metrics",
    "Test different emotional angles: hope (success stories), urgency (immediate need), gratitude (thank you from beneficiaries). Each triggers a different giving motivation",
  ],
  ctaLine: "Create nonprofit UGC videos from these scripts. No production budget needed.",
};
export default data;

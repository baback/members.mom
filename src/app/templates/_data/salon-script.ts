import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Salons & Spas",
  scriptCount: 3,
  h1: "UGC Video Script for Salons & Spas: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for salons and spas — transformation reveal, experience walkthrough, and stylist spotlight formats. Plus 5 hooks that book appointments.",
  intro: "Salon and spa content is inherently visual — before/afters, transformations, and relaxation moments are some of the most-saved content on social media. UGC-style videos convert because they show real results on real people, not airbrushed models. When someone says \"I finally found my stylist,\" that's the ad that fills your chair. Here are 3 scripts built for salons and spas.",
  scripts: [
    {
      name: "The Hair Transformation",
      subtitle: "Best for: Showcasing stylist skill. Cold audiences looking for a new salon.",
      duration: "20–26 seconds",
      script: `[HOOK — 0-3s]\n"I've been going to the same stylist for 4 years\nand this is why I'll never switch"\n[Show current hair — styled, healthy]\n\n[SETUP — 3-10s]\n"Before I found her, I was getting my hair done\nat a chain salon. Every time I asked for a\nbalayage they'd give me chunky highlights from\n2008. I showed up with Pinterest photos and\nleft looking nothing like them. I stopped\ntrusting stylists entirely."\n\n[PAYOFF — 10-18s]\n"My friend dragged me to this salon and the\nstylist actually listened. She looked at my\nhair texture, my skin tone, and said 'I know\nexactly what will work.' Three hours later I\nwalked out and cried in my car — happy tears.\nMy hair finally looked like the Pinterest\nboard."\n[Show before photo vs current]\n\n[CTA — 18-23s]\n"If you've given up on finding a good stylist,\ndon't. She's linked in my bio. Book a\nconsultation — it'll change everything."`,
      notes: [
        "\"I'll never switch\" is the ultimate loyalty statement. It signals the stylist is so good that the search is over",
        "\"Chunky highlights from 2008\" is specific, visual, and funny. It immediately communicates the problem without being mean",
        "\"Cried in my car — happy tears\" is an emotional peak that makes the transformation feel life-changing, not just cosmetic",
        "Recommending a consultation (not just a booking) lowers the commitment barrier. It starts a relationship, not a transaction",
      ],
    },
    {
      name: "The Spa Experience",
      subtitle: "Best for: Promoting spa services. Audiences looking for self-care and relaxation.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"I just had the most relaxing 2 hours of my\nlife and I need everyone to know about this\nplace"\n[Post-spa glow, relaxed demeanor]\n\n[EXPERIENCE — 3-16s]\n"They start you with a hot towel and tea in\nthis quiet room with ambient music. Already\ndecompressing before the treatment even starts."\n"I got the deep tissue massage and a hydrating\nfacial. The massage therapist found knots I\ndidn't even know I had — my shoulders have\nbeen up by my ears for months apparently."\n"The facial used this enzyme peel that made\nmy skin feel like actual silk. Not exaggerating\n— I keep touching my face."\n[Show relaxed expression, touch skin]\n\n[CTA — 16-21s]\n"If you haven't taken a self-care day in a\nwhile, this is your sign. Book the combo\npackage — it's worth every penny. Link in bio."`,
      notes: [
        "\"Most relaxing 2 hours of my life\" sets the bar high and creates aspiration. The viewer wants that experience",
        "Describing the pre-treatment ritual (hot towel, tea, quiet room) shows attention to detail that differentiates from basic spas",
        "\"My shoulders have been up by my ears\" is relatable physical tension that most working adults experience. It makes the massage feel necessary, not indulgent",
        "\"I keep touching my face\" is a genuine, involuntary reaction that communicates results better than any before/after photo",
      ],
    },
    {
      name: "The Stylist Spotlight",
      subtitle: "Best for: Building personal brand for individual stylists. Audiences who choose stylists over salons.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-2s]\n"Finding a stylist who actually listens is\nrare. Let me tell you about mine."\n[Direct to camera, genuine tone]\n\n[SPOTLIGHT — 2-13s]\n"She does a 15-minute consultation before every\nappointment — even if you've been coming for\nyears. She asks about your lifestyle, your\nmaintenance level, what products you actually\nuse at home."\n"Last time I said I wanted something low-\nmaintenance because I have a newborn. She\ngave me a color that grows out beautifully\ninstead of leaving a harsh root line."\n"That's the difference between a stylist who\nlistens and one who just does what they want."\n\n[CTA — 13-17s]\n"She's booked out 3 weeks but she's worth\nthe wait. Link in bio to get on her calendar."`,
      notes: [
        "\"A stylist who actually listens\" names the core desire. Most salon clients have experienced being ignored — this hook resonates deeply",
        "The 15-minute consultation detail shows a process that prioritizes the client. It differentiates from assembly-line salons",
        "\"Low-maintenance because I have a newborn\" is a real-life context that shows the stylist adapts to the client's life, not just their hair",
        "\"Booked out 3 weeks\" is social proof through scarcity. If she's in demand, she must be good",
      ],
    },
  ],
  hooks: [
    { line: "I showed my stylist a photo of what I wanted and she actually nailed it", trigger: "expectation met", note: "The gap between Pinterest inspiration and salon reality is a universal frustration. Closing that gap is the ultimate endorsement." },
    { line: "My husband noticed my haircut for the first time in 5 years. That's how good this stylist is.", trigger: "humor + validation", note: "Partner obliviousness to haircuts is a universal joke. Breaking through it signals an exceptional result." },
    { line: "POV: you leave the salon and actually like your hair instead of crying in the car", trigger: "pain reversal", note: "Salon disappointment is deeply emotional. This hook promises the opposite experience." },
    { line: "I used to spend $300 at a fancy salon. Now I spend $120 here and my hair looks better.", trigger: "value upgrade", note: "Price comparison with better results challenges the assumption that expensive = better." },
    { line: "The spa that made me realize I haven't relaxed in 3 years", trigger: "self-awareness", note: "Forces the viewer to consider when they last truly relaxed. Creates an emotional need for the service." },
  ],
  tips: [
    "Before/after content is the #1 performing format for salons. The transformation is the content — make sure the lighting is consistent between before and after shots",
    "Show the process, not just the result. Foil application, color mixing, the shampoo bowl moment — these behind-the-scenes clips build anticipation and showcase skill",
    "Mention the stylist by name. Salon clients choose stylists, not salons. Personal branding for individual stylists drives bookings",
    "Include maintenance details: \"This color lasts 8 weeks\" or \"This cut grows out beautifully.\" Clients want to know the ongoing commitment, not just the day-of result",
    "Test different service types: color transformation, precision cut, bridal styling, spa facial. Each service attracts a different client with different motivations",
  ],
  ctaLine: "Create salon and spa UGC videos from these scripts. No ring light needed.",
};
export default data;

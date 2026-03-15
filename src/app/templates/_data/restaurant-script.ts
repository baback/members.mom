import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Restaurants",
  scriptCount: 3,
  h1: "UGC Video Script for Restaurants: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for restaurants — first visit review, hidden gem, and menu highlight formats. Plus 5 hooks that fill tables.",
  intro: "Restaurant discovery happens on social media now — not Yelp. A 15-second UGC video of someone taking a first bite and reacting genuinely drives more reservations than a 5-star review. People eat with their eyes first, and UGC-style food content feels like a friend's recommendation. Here are 3 scripts built for restaurants.",
  scripts: [
    {
      name: "The First Visit Review",
      subtitle: "Best for: New restaurants or locations. Cold audiences in your delivery/dining radius.",
      duration: "20–26 seconds",
      script: `[HOOK — 0-3s]\n"I finally tried that restaurant everyone's been\ntalking about and I need to tell you about it"\n[Walking into restaurant, show exterior]\n\n[EXPERIENCE — 3-16s]\n"First — the vibe. It's got this warm, moody\nlighting with an open kitchen so you can watch\nthem cook. Already impressed."\n"I ordered the truffle mushroom pasta and the\nburrata appetizer. The burrata came out first\nand it was the creamiest I've ever had — they\nmake it in-house daily."\n[Show food, take a bite]\n"The pasta — okay. This is stupid good. The\ntruffle isn't overpowering, the pasta is\nhandmade, and the portion is actually generous\nfor the price."\n\n[CTA — 16-22s]\n"Go. Just go. Make a reservation because there\nwas a 45-minute wait when I walked in. It's\nworth it. I'll link their page below."`,
      notes: [
        "\"Everyone's been talking about\" creates social proof before the review even starts. It positions the restaurant as buzzy",
        "Describing the atmosphere (lighting, open kitchen) sets the scene. Restaurant content isn't just about food — it's about the experience",
        "\"They make it in-house daily\" is the kind of detail that elevates a restaurant from good to special. Include behind-the-scenes quality signals",
        "\"45-minute wait\" is social proof disguised as a warning. It signals demand while creating urgency to make a reservation",
      ],
    },
    {
      name: "The Hidden Gem",
      subtitle: "Best for: Smaller or newer restaurants. Audiences who love discovering new spots.",
      duration: "18–24 seconds",
      script: `[HOOK — 0-3s]\n"The best tacos in the city are in a gas station\nparking lot and I'm not joking"\n[Show unassuming exterior]\n\n[DISCOVERY — 3-14s]\n"My coworker told me about this place and I\nalmost didn't come because — look at it. But\nthen I saw the line."\n[Show line of people waiting]\n"I got the al pastor and the birria. The al\npastor is carved off the spit right in front\nof you — crispy edges, fresh pineapple, their\nhomemade salsa verde."\n[Close-up of food, take a bite]\n"$3.50 per taco and it's better than every\n$16 taco I've had at a sit-down restaurant."\n\n[CTA — 14-20s]\n"This is the kind of place you tell your\nfriends about. I'm telling you. Location\nis linked below — go before it blows up."`,
      notes: [
        "The contrast between the unassuming location and incredible food is the story. \"Best tacos in a gas station\" is inherently shareable",
        "Showing the line of people is visual social proof. If people are waiting, the food must be worth it",
        "\"$3.50 per taco\" with a comparison to $16 restaurant tacos creates powerful value perception",
        "\"Go before it blows up\" creates urgency and positions the viewer as an early discoverer. People love being first to find something",
      ],
    },
    {
      name: "The Menu Highlight",
      subtitle: "Best for: Promoting specific dishes or seasonal menus. Driving orders of high-margin items.",
      duration: "13–18 seconds",
      script: `[HOOK — 0-2s]\n"If you go to this restaurant and don't order\nthe short rib, you're doing it wrong"\n[Show dish arriving at table]\n\n[HIGHLIGHT — 2-11s]\n"12-hour braised short rib with garlic mashed\npotatoes and this red wine reduction that I\nwant to drink straight from the pan."\n[Close-up of food, steam rising]\n"The meat falls apart — look at that. You\ndon't even need a knife. And the portion is\nmassive for $24."\n[Take a bite, genuine reaction]\n"That's the best thing I've eaten this month.\nMaybe this year."\n\n[CTA — 11-15s]\n"They're on [delivery app] too if you can't\nmake it in. But honestly, eat this one in the\nrestaurant. Link below."`,
      notes: [
        "\"If you don't order this, you're doing it wrong\" is a strong, opinionated recommendation. It tells the viewer exactly what to get",
        "Describing the cooking method (12-hour braised) adds perceived value. Time and technique signal quality",
        "\"You don't even need a knife\" is a visual proof point that demonstrates tenderness better than any adjective",
        "Mentioning delivery expands the audience beyond dine-in, but recommending in-restaurant preserves the premium experience",
      ],
    },
  ],
  hooks: [
    { line: "I've eaten at 200+ restaurants this year. This one made my top 5.", trigger: "curation authority", note: "The volume of experience establishes credibility. Top 5 out of 200 is an exclusive endorsement." },
    { line: "The chef came out and told us how this dish is made and now I can't stop thinking about it", trigger: "behind-the-scenes", note: "Chef interaction elevates the dining experience. It signals a restaurant that cares about its craft." },
    { line: "POV: you find a restaurant where everything on the menu is actually good", trigger: "aspiration", note: "Most restaurants have hits and misses. A place where everything is good is rare and worth visiting." },
    { line: "This $14 lunch special is better than most $40 dinners I've had", trigger: "value shock", note: "Price-to-quality ratio is the most shareable restaurant content. The gap between $14 and $40 demands attention." },
    { line: "My friend who's a chef refuses to eat out — except at this place", trigger: "professional endorsement", note: "A chef choosing to eat somewhere is the highest compliment in the restaurant world." },
  ],
  tips: [
    "Food close-ups are non-negotiable. Steam rising, cheese pulling, sauce drizzling — these visceral moments trigger cravings and drive action",
    "Show the restaurant atmosphere, not just the food. Lighting, music, crowd energy — the dining experience is what separates a restaurant from delivery",
    "Include the price of dishes mentioned. Restaurant-goers want to know what to expect before they go. Transparency builds trust and sets expectations",
    "Mention the location or neighborhood. Restaurant content is hyper-local — viewers need to know if it's accessible to them",
    "Test different meal occasions: date night, family dinner, quick lunch, brunch. Each occasion targets a different audience and visit type",
  ],
  ctaLine: "Create restaurant UGC videos from these scripts. No food photographer needed.",
};
export default data;

import type { TemplatePageData } from "./_shared";

const data: TemplatePageData = {
  niche: "Fitness Apps",
  scriptCount: 3,
  h1: "UGC Video Script for Fitness Apps: Ready-to-Use Templates",
  meta: "3 ready-to-use UGC video scripts for fitness app marketing — transformation story, day-in-my-life, and feature callout formats. Plus 5 hooks that stop the scroll.",
  intro: "Fitness app ads that look like ads get skipped. The ones that look like someone sharing their workout journey? Those convert. UGC-style videos outperform polished brand content by 2-3x in the fitness space because people trust people who look like them. Here are 3 scripts plus 5 hooks ready to go.",
  scripts: [
    {
      name: "The Fitness Transformation Story",
      subtitle: "Best for: Cold audiences who haven't tried a fitness app. Emotional connection that drives downloads.",
      duration: "22–28 seconds",
      script: `[HOOK — 0-3s]\n"6 months ago I couldn't do a single push-up.\nNot a modified one. Not a wall push-up. Zero."\n\n[SETUP — 3-10s]\n"I'd tried YouTube workouts, gym memberships,\neven a personal trainer for two months. Nothing\nstuck because I never knew what to do next. I'd\nfinish a workout and think 'cool, now what?'"\n\n[PAYOFF — 10-20s]\n"This app changed that because it actually\nprograms for you. It adjusts based on what you\ndid last week, tells you exactly what to do today,\nand tracks everything automatically. I just show\nup and follow the screen."\n[Show app interface briefly]\n"Last week I did 15 push-ups. Unbroken."\n\n[CTA — 20-25s]\n"If you've been wanting to start but don't know\nwhere to begin, this is where you begin. Link\nin bio."`,
      notes: [
        "\"I couldn't do a single push-up\" is specific and vulnerable. Replace with whatever baseline metric fits your app's audience (couldn't run a mile, couldn't touch toes, etc.)",
        "The pain point isn't fitness — it's not knowing what to do. This resonates with beginners who feel overwhelmed by options",
        "Showing the app interface briefly (2-3 seconds max) is enough. The story sells, the app screenshot just confirms it's real",
        "\"I just show up and follow the screen\" is the key value prop for most fitness apps. Adapt to your app's core differentiator",
      ],
    },
    {
      name: "The Day-in-My-Life Workout",
      subtitle: "Best for: Mid-funnel audiences considering a fitness app. Showing the product integrated into real life.",
      duration: "20–25 seconds",
      script: `[HOOK — 0-2s]\n"5:30 AM workout with me using the app that\nactually keeps me consistent"\n[Show alarm, getting out of bed]\n\n[ROUTINE — 2-14s]\n"Okay so the app already has today's workout\nloaded — it's a 35-minute upper body session."\n[Show phone screen with workout]\n"I love that it shows me exactly how to do each\nmove. Like I didn't know what a face pull was\n3 months ago and now it's my favorite exercise."\n[Quick cuts of exercises, phone propped up]\n"It even tells me when to rest and for how long.\nI literally just follow along."\n\n[RESULT — 14-20s]\n"Done in 34 minutes. 280 calories. And it already\nscheduled tomorrow's session — legs. Can't wait."\n[Show completion screen, wipe sweat]\n\n[CTA — 20-24s]\n"If you need structure in your workouts, this\napp is it. Link in bio."`,
      notes: [
        "The \"workout with me\" format is native to fitness TikTok and Reels. It doesn't feel like an ad even though it is",
        "Quick cuts of exercises keep the energy high. Aim for 1-2 second clips of each movement",
        "Showing the completion screen with stats (time, calories) provides social proof and makes the result tangible",
        "\"I literally just follow along\" removes the intimidation factor. This is the message for people who don't know how to program workouts",
      ],
    },
    {
      name: "The Feature Callout",
      subtitle: "Best for: Competitive positioning. Audiences who already use a different fitness app.",
      duration: "15–20 seconds",
      script: `[HOOK — 0-3s]\n"3 things my fitness app does that yours probably\ndoesn't"\n[Hold up phone, confident energy]\n\n[FEATURES — 3-14s]\n"One — it adapts every workout based on how I\nperformed last time. If I crushed my squats on\nMonday, Wednesday's squat weight goes up\nautomatically."\n"Two — it deloads for me. Every 4th week it\ndrops the volume so I actually recover instead\nof burning out."\n"Three — the exercise library has video demos\nfrom actual coaches, not stock footage of\npeople doing curls wrong."\n\n[CTA — 14-18s]\n"I switched from [competitor category] 4 months\nago and I'm never going back. Link in bio if\nyou want to try it."`,
      notes: [
        "\"3 things\" listicle format is proven for retention — viewers stay to see all three. Don't do more than 3 in a short-form video",
        "Each feature is framed as a benefit, not a spec. \"It adapts every workout\" not \"it has adaptive programming algorithms\"",
        "The subtle competitor dig (\"that yours probably doesn't\") creates comparison without naming names",
        "Replace the three features with your app's actual differentiators. Keep each one to 2-3 sentences max",
      ],
    },
  ],
  hooks: [
    { line: "I deleted every other fitness app after finding this one", trigger: "exclusivity", note: "Implies this app is so good it replaced everything else. Strong for competitive positioning." },
    { line: "I've been working out for 90 days straight and here's what happened", trigger: "transformation tease", note: "The number creates credibility. The open loop (\"here's what happened\") keeps them watching." },
    { line: "This app just told me to take a rest day and honestly that's why I trust it", trigger: "unexpected angle", note: "Counterintuitive — an app telling you NOT to work out. Shows intelligence and care." },
    { line: "POV: you finally find a workout app that doesn't assume you're already fit", trigger: "relatability", note: "Speaks directly to beginners who feel excluded by most fitness content. High resonance with cold audiences." },
    { line: "My gym buddy pays $200/month for a trainer. I pay $12 for this app. We have the same results.", trigger: "value comparison", note: "Price anchoring against personal training. The specific numbers make it believable." },
  ],
  tips: [
    "Show the app interface but don't linger on it. 2-3 seconds of screen time is enough — the human story is what sells, the app is just the tool",
    "Film in real workout environments (home gym, apartment living room, park) not pristine studios. Relatability drives downloads",
    "Match the AI actor's fitness level to your target audience. A bodybuilder won't convert beginners. A normal-looking person who's made progress will",
    "Include the price if it's competitive. Fitness app buyers compare constantly — if you're $12/month vs $30/month competitors, say it",
    "Test vertical video (9:16) for TikTok/Reels and square (1:1) for feed ads. Same script, different crop — doubles your creative output",
  ],
  ctaLine: "Generate fitness app UGC videos from these scripts in minutes. No gym footage needed.",
};
export default data;

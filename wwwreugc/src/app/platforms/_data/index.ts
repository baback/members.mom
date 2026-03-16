import type { PlatformPageData } from "./_shared";

import tiktokAds from "./tiktok-ads";
import facebookAds from "./facebook-ads";
import instagramReels from "./instagram-reels";
import instagramStories from "./instagram-stories";
import youtubeShorts from "./youtube-shorts";
import youtubePreRoll from "./youtube-pre-roll";
import googleDemandGen from "./google-demand-gen";
import pinterestAds from "./pinterest-ads";
import snapchatAds from "./snapchat-ads";
import linkedinVideo from "./linkedin-video";
import twitterXAds from "./twitter-x-ads";
import amazonVideoAds from "./amazon-video-ads";
import connectedTv from "./connected-tv";
import whatsappVideo from "./whatsapp-video";
import emailVideo from "./email-video";

export type { PlatformPageData };

export const pages: Record<string, PlatformPageData> = {
  "tiktok-ads": tiktokAds,
  "facebook-ads": facebookAds,
  "instagram-reels": instagramReels,
  "instagram-stories": instagramStories,
  "youtube-shorts": youtubeShorts,
  "youtube-pre-roll": youtubePreRoll,
  "google-demand-gen": googleDemandGen,
  "pinterest-ads": pinterestAds,
  "snapchat-ads": snapchatAds,
  "linkedin-video": linkedinVideo,
  "twitter-x-ads": twitterXAds,
  "amazon-video-ads": amazonVideoAds,
  "connected-tv": connectedTv,
  "whatsapp-video": whatsappVideo,
  "email-video": emailVideo,
};

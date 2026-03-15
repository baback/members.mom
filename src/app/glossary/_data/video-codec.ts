import type { GlossaryPageData } from "./_shared";
const data: GlossaryPageData = {
  term: "Video Codec",
  h1: "What Is a Video Codec? H.264, H.265 & VP9 Explained",
  meta: "A video codec compresses and decompresses video data. Learn the differences between H.264, H.265, and VP9, and which codec to use for social media advertising.",
  definition: "A video codec (compressor-decompressor) is the algorithm that compresses raw video data into a manageable file size and decompresses it for playback. Different codecs offer different trade-offs between compression efficiency (smaller files), visual quality, encoding speed, and compatibility. For advertising, the codec determines whether your video plays correctly on every platform and device.",
  whyMatters: [
    { label: "Compatibility prevents rejected uploads", text: "Not all platforms accept all codecs. Uploading a video encoded with an unsupported codec results in rejection or playback errors. H.264 is universally accepted across every major ad platform — Meta, TikTok, YouTube, Snapchat, and Pinterest. Using H.264 eliminates compatibility concerns entirely." },
    { label: "Codec affects quality at a given file size", text: "Newer codecs like H.265 and VP9 achieve the same visual quality as H.264 at 30–50% smaller file sizes. This matters when you're working with platform file size limits or slow upload speeds. However, the quality advantage is minimal for short-form social content — H.264 at proper bitrate settings produces excellent results for 15–60 second ads." },
    { label: "Encoding speed matters for production", text: "H.265 produces smaller files but takes 2–5x longer to encode than H.264. For brands producing dozens of video variations per week, encoding speed adds up. H.264's faster encoding makes it the practical choice for high-volume production workflows where time-to-publish matters more than marginal file size savings." },
  ],
  howItWorks: [
    { heading: "Major Codecs Compared", text: "H.264 (AVC): The industry standard. Universal compatibility, fast encoding, good quality. Recommended for all social media advertising. H.265 (HEVC): 30–50% better compression than H.264. Supported by most modern platforms but not universally. Best for long-form content where file size matters. VP9: Google's open-source codec, primarily used on YouTube. Similar efficiency to H.265. AV1: The newest codec with the best compression, but slow encoding and limited platform support. Not yet practical for advertising workflows." },
    { heading: "Container vs. Codec", text: "A common confusion: MP4 is not a codec — it's a container format (the file wrapper). The codec is what's inside the container. An MP4 file can contain H.264, H.265, or other codecs. When platforms say they accept 'MP4,' they typically mean MP4 container with H.264 codec. When exporting video for ads, always specify both: MP4 container, H.264 codec. This combination is accepted everywhere and plays correctly on every device." },
  ],
  example: "A marketing team exports their ad video in three codec configurations and uploads to TikTok. H.264 at 10 Mbps: 18MB file, uploads in 5 seconds, plays perfectly, looks crisp. H.265 at 10 Mbps: 11MB file, uploads in 3 seconds, plays perfectly, looks identical to H.264. ProRes (professional codec): 450MB file, rejected by TikTok — file too large and codec not supported. The team standardizes on H.264 for all social media exports — universal compatibility, fast encoding, and quality that's indistinguishable from newer codecs at social media viewing sizes.",
  product: {
    intro: "ReUGC handles all codec and encoding decisions automatically:",
    points: [
      "Universal compatibility — All videos are exported with H.264 codec in MP4 container, ensuring acceptance on every major ad platform without compatibility issues or rejected uploads.",
      "Optimized encoding settings — Bitrate, profile, and level settings are automatically configured for the best balance of quality and file size. No manual encoding knowledge required.",
      "Fast rendering — H.264's efficient encoding means your videos render quickly, getting from script to finished video in minutes rather than hours. Plans from $49/mo.",
    ],
  },
  related: [
    { term: "Video Bitrate", slug: "video-bitrate" },
    { term: "Video Ad Specs", slug: "video-ad-specs" },
    { term: "Render Time", slug: "render-time" },
    { term: "Aspect Ratio", slug: "aspect-ratio" },
    { term: "Vertical Video", slug: "vertical-video" },
    { term: "Batch Video Generation", slug: "batch-generation" },
  ],
  relatedNote: "Video codec works alongside video bitrate to determine output quality and file size — both are key components of video ad specs. Codec choice affects render time (simpler codecs render faster) and is especially relevant for batch video generation where encoding speed multiplies across many videos.",
};
export default data;

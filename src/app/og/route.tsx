import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const section = searchParams.get("section") || "ReUGC";
  const title = searchParams.get("title") || "ReUGC — AI UGC Video Maker";
  const description =
    searchParams.get("description") ||
    "Create UGC videos with AI actors that convert 10x more — at 50x less cost.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo + section */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Simple text logo since we can't load local files in edge */}
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#0a0a0a",
              letterSpacing: "-0.5px",
            }}
          >
            ReUGC
          </div>
          {section !== "ReUGC" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "1px",
                  height: "20px",
                  backgroundColor: "#d4d4d4",
                }}
              />
              <div
                style={{
                  fontSize: "15px",
                  color: "#737373",
                  fontWeight: 500,
                }}
              >
                {section}
              </div>
            </div>
          )}
        </div>

        {/* Middle: title + description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? "38px" : "46px",
              fontWeight: 700,
              color: "#0a0a0a",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#737373",
              lineHeight: 1.5,
              maxWidth: "800px",
            }}
          >
            {description.length > 160
              ? description.slice(0, 157) + "..."
              : description}
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            fontSize: "15px",
            color: "#a3a3a3",
            fontWeight: 500,
          }}
        >
          reugc.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

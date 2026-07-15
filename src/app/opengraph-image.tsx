import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0F172A 0%, #0b1120 55%, #082032 100%)",
          color: "#FFFFFF",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFFFFF",
              color: "#0F172A",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            CR
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, display: "flex" }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.15, maxWidth: 950, display: "flex" }}>
          Land More Interviews With a Resume That Gets Results
        </div>
        <div style={{ display: "flex", gap: 28, marginTop: 48, fontSize: 24, color: "#94a3b8" }}>
          <span style={{ display: "flex" }}>ATS Optimized</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>CPRW Certified</span>
          <span style={{ display: "flex" }}>·</span>
          <span style={{ display: "flex" }}>US Hiring Standards</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

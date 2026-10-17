import { ImageResponse } from "next/og";

export const alt = "Guilherme Santos — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#080B12", color: "#F8FAFC", fontFamily: "sans-serif", border: "2px solid #263244" }}><div style={{ display: "flex", color: "#00D9FF", fontSize: 24, letterSpacing: 5, textTransform: "uppercase" }}>Software Engineer</div><div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 700, lineHeight: 1.05, marginTop: 28 }}><div style={{ display: "flex" }}>Guilherme</div><div style={{ display: "flex" }}>Santos<span style={{ display: "flex", color: "#00D9FF" }}>.</span></div></div><div style={{ display: "flex", marginTop: 50, color: "#94A3B8", fontSize: 28 }}>.NET · Java · React · Sistemas distribuídos</div></div>, size);
}

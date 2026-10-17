import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guilherme-santos-portfolio.goofycreek65.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Guilherme Santos | Software Engineer",
  description: "Portfólio de Guilherme Santos, engenheiro de software full stack com experiência em sistemas financeiros, .NET, Java, React e AWS.",
  keywords: ["Software Engineer", "Full Stack Developer", ".NET", "Java", "React", "AWS", "Guilherme Santos"],
  authors: [{ name: "Guilherme Santos" }],
  openGraph: { title: "Guilherme Santos | Software Engineer", description: "Sistemas financeiros, integrações e software confiável.", type: "website", locale: "pt_BR", url: siteUrl },
  twitter: { card: "summary_large_image", title: "Guilherme Santos | Software Engineer", description: "Sistemas financeiros, integrações e software confiável." },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body></html>;
}

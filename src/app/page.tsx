import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://guilherme-santos-portfolio.goofycreek65.chatgpt.site";
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: portfolio.person.name, jobTitle: "Software Engineer", email: `mailto:${portfolio.person.email}`, url: siteUrl, sameAs: [portfolio.person.linkedin], alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade São Judas Tadeu" }, address: { "@type": "PostalAddress", addressLocality: "Osasco", addressRegion: "SP", addressCountry: "BR" } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar /><main id="conteudo"><Hero /><About /><Skills /><Experience /><Approach /><Projects /><BeyondCode /><Contact /></main><Footer /></>;
}

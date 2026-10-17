import { GraduationCap, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section className="section container" id="sobre">
      <Reveal><p className="section-index">01 / SOBRE</p></Reveal>
      <div className="split-layout">
        <Reveal><h2>{portfolio.about.lead}</h2></Reveal>
        <Reveal className="about-copy" delay={0.1}>
          {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="fact-row"><span><GraduationCap size={18} /> Ciência da Computação</span><span><MapPin size={18} /> {portfolio.person.location}</span></div>
        </Reveal>
      </div>
    </section>
  );
}

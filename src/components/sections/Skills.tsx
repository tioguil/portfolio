import { Braces, CloudCog, Code2, Database, Network } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Braces, Code2, Database, Network, CloudCog];

export function Skills() {
  return (
    <section className="section container" id="stack">
      <Reveal><p className="section-index">02 / STACK</p><h2 className="section-title">Ferramentas certas.<br /><span>Decisões conscientes.</span></h2></Reveal>
      <div className="skills-grid">
        {portfolio.skills.map((skill, index) => {
          const Icon = icons[index];
          return <Reveal className="skill-group" delay={index * 0.05} key={skill.category}><div className="skill-heading"><Icon size={20} /><h3>{skill.category}</h3></div><div className="tag-list">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>;
        })}
      </div>
    </section>
  );
}

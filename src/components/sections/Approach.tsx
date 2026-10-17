import { Activity, Boxes, GitPullRequestArrow, LockKeyhole, Radio, ScanText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Boxes, ScanText, Activity, Radio, LockKeyhole, GitPullRequestArrow];

export function Approach() {
  return (
    <section className="section container approach" aria-labelledby="approach-title">
      <Reveal><p className="section-index">PRINCÍPIOS / ABORDAGEM</p><h2 className="section-title" id="approach-title">Engenharia é também<br /><span>como se decide.</span></h2></Reveal>
      <div className="principles-grid">{portfolio.principles.map((principle, index) => { const Icon = icons[index]; return <Reveal className="principle" delay={index * 0.04} key={principle.title}><span className="principle-number">0{index + 1}</span><Icon size={23} /><h3>{principle.title}</h3><p>{principle.text}</p></Reveal>; })}</div>
    </section>
  );
}

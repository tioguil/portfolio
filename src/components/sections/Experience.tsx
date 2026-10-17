import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section className="section container" id="experiencia">
      <Reveal><p className="section-index">03 / EXPERIÊNCIA</p><h2 className="section-title">Software em contextos<br /><span>onde confiança importa.</span></h2></Reveal>
      <div className="timeline">
        {portfolio.experiences.map((item, index) => (
          <Reveal className="timeline-item" delay={index * 0.05} key={`${item.company}-${item.period}`}>
            <div className="timeline-meta"><span>{item.period}</span><strong>{item.company}</strong></div>
            <div className="timeline-content"><p className="role">{item.role}</p><p>{item.summary}</p>{item.highlights.length > 0 && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}<div className="tag-list compact">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

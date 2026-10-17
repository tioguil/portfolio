import Image from "next/image";
import { ArrowUpRight, CircleCheckBig, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section className="section container" id="projetos">
      <Reveal><p className="section-index">04 / PROJETOS</p><h2 className="section-title">Ideias que saíram<br /><span>do papel.</span></h2><p className="section-note">Produtos reais, construídos com contexto, escolhas e aprendizado contínuo.</p></Reveal>
      {portfolio.projects.map((project) => (
        <Reveal className="featured-project" key={project.name}>
          <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.name}`}>
            <Image src={project.image} alt={project.imageAlt} fill unoptimized sizes="(max-width: 900px) 100vw, 55vw" />
            <span className="preview-overlay"><ArrowUpRight size={24} /></span>
          </a>
          <div className="project-details">
            <div className="production-badge"><CircleCheckBig size={15} /> {project.status}</div>
            <p className="project-label">{project.label}</p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-context">{project.context}</p>
            <div className="tag-list compact" aria-label="Tecnologias confirmadas">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visitar projeto <ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
      ))}
      <Reveal className="projects-next">
        <Sparkles size={18} />
        <p><strong>Em evolução.</strong> A estrutura está pronta para receber Pesquisa Facilitada, experimentos técnicos e projetos open source quando houver material público para apresentá-los.</p>
      </Reveal>
    </section>
  );
}

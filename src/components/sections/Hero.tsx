import { ArrowDown, ArrowUpRight, ContactRound, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero container" id="inicio">
      <div className="hero-copy">
        <Reveal><p className="eyebrow"><span className="status-dot" /> {portfolio.person.availability}</p></Reveal>
        <Reveal delay={0.08}>
          <h1><span>Guilherme</span><br />Santos<em>.</em></h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-role">{portfolio.person.role}</p>
          <p className="hero-intro">{portfolio.person.intro}</p>
        </Reveal>
        <Reveal className="hero-actions" delay={0.24}>
          <a className="button primary" href="#projetos">Conheça meu trabalho <ArrowDown size={17} /></a>
          <a className="button secondary" href={`mailto:${portfolio.person.email}?subject=Solicitação%20de%20currículo`}>Solicitar CV <Mail size={17} /></a>
        </Reveal>
        <Reveal className="social-row" delay={0.3}>
          <a href={portfolio.person.linkedin} target="_blank" rel="noreferrer"><ContactRound size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
        </Reveal>
      </div>
      <Reveal className="hero-console" delay={0.22}>
        <div className="console-bar"><i /><i /><i /><span>profile.ts</span></div>
        <pre aria-label="Resumo profissional em formato de código"><code><span className="violet">const</span> engineer = &#123;{"\n"}  name: <span className="cyan">&quot;Guilherme&quot;</span>,{"\n"}  focus: [{"\n"}    <span className="cyan">&quot;financial systems&quot;</span>,{"\n"}    <span className="cyan">&quot;distributed architecture&quot;</span>,{"\n"}    <span className="cyan">&quot;reliable software&quot;</span>{"\n"}  ],{"\n"}  mindset: <span className="cyan">&quot;always learning&quot;</span>{"\n"}&#125;;</code></pre>
        <div className="console-output"><span>$</span> building systems that matter<span className="cursor" /></div>
      </Reveal>
      <a className="scroll-cue" href="#sobre" aria-label="Rolar para a seção sobre"><span>scroll</span><ArrowDown size={15} /></a>
    </section>
  );
}

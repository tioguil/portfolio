"use client";

import { Gamepad2, Hammer, Telescope } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Gamepad2, Telescope, Hammer];

export function BeyondCode() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 65%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.25 });

  return (
    <section className="section container beyond" id="alem-do-codigo">
      <Reveal>
        <p className="section-index">05 / ALÉM DO CÓDIGO</p>
        <h2 className="section-title">{portfolio.beyondCode.title}</h2>
        <p className="beyond-subtitle">{portfolio.beyondCode.subtitle}</p>
      </Reveal>

      <div className="story-grid">
        {portfolio.beyondCode.cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="story-card" delay={index * 0.09} key={card.title}>
              <div className="story-icon"><Icon size={22} /></div>
              <p className="story-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Reveal>
          );
        })}
      </div>

      <div className="personal-timeline" ref={timelineRef}>
        <div className="personal-line" aria-hidden="true">
          <motion.span style={{ scaleY: reducedMotion ? 1 : progress }} />
        </div>
        {portfolio.beyondCode.timeline.map((item, index) => (
          <Reveal className="personal-milestone" delay={index * 0.05} key={item.marker}>
            <span className="milestone-dot" />
            <p className="milestone-marker">{item.marker}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Check, ContactRound, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    await navigator.clipboard.writeText(portfolio.person.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <section className="contact-section" id="contato">
      <div className="container contact-inner">
        <p className="section-index">06 / CONTATO</p>
        <h2>Vamos construir<br /><span>algo incrível?</span></h2>
        <p>Estou aberto a conversar sobre engenharia de software, desafios técnicos e oportunidades profissionais.</p>
        <a className="email-link" href={`mailto:${portfolio.person.email}`}><Mail size={20} />{portfolio.person.email}</a>
        <div className="contact-actions"><button className="button primary" onClick={copyEmail}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "E-mail copiado" : "Copiar e-mail"}</button><a className="button secondary" href={portfolio.person.linkedin} target="_blank" rel="noreferrer"><ContactRound size={17} /> LinkedIn</a><a className="button secondary" href={`mailto:${portfolio.person.email}?subject=Solicitação%20de%20currículo`}><Mail size={17} /> Solicitar CV</a></div>
      </div>
    </section>
  );
}

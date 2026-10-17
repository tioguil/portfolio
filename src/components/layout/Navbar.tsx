"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(`#${entry.target.id}`)),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">GS<span>/</span></a>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Navegação principal">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} className={active === item.href ? "active" : ""} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
      </nav>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

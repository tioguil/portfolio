import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer container">
      <p>© {new Date().getFullYear()} {portfolio.person.shortName}</p>
      <p className="muted">Built with Next.js & TypeScript</p>
      <a href={portfolio.person.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
    </footer>
  );
}

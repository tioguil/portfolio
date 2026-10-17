# Portfólio — Guilherme Santos

Portfólio profissional em Next.js, TypeScript, Tailwind CSS e Motion. O projeto usa exportação estática e está pronto para Vercel.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar e gerar produção

```bash
npm run typecheck
npm run lint
npm run build
```

O build estático é gerado em `out/`.

## Personalizar

- Dados pessoais, experiências, stack e projetos: `src/data/portfolio.ts`
- Tokens visuais e estilos globais: `src/app/globals.css`
- URL pública: copie `.env.example` para `.env.local` e altere `NEXT_PUBLIC_SITE_URL`
- Currículo: os botões abrem uma solicitação por e-mail. Para habilitar download público, adicione uma versão aprovada em `public/curriculo-guilherme-santos.pdf` e atualize os links nos componentes `Hero` e `Contact`.

O campo `github` foi deixado vazio de propósito, pois nenhum perfil foi fornecido. Adicione uma URL real antes de exibi-lo na interface.

## Deploy na Vercel

Importe o repositório na Vercel. O framework será detectado automaticamente. Configure `NEXT_PUBLIC_SITE_URL` com o domínio final.

# 🦷 Premium — Odontologia Digital Premium

Website premium de clínica odontológica, construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Recursos

- Hero cinematográfico com vídeo de fundo em tela cheia (parallax) — **vídeo original mantido, sem alterações**
- Design dark mode com paleta obsidian & gold
- Glassmorphism e gradientes premium
- Animações elegantes de entrada (Framer Motion)
- Comparador interativo "Antes / Depois" com lente dourada
- Totalmente responsivo (desktop, tablet, mobile)
- Acessível (WCAG, focus states em ouro, alvos de toque 48px)
- SEO otimizado (Schema.org LocalBusiness, Open Graph, Twitter Cards, sitemap, robots)

## 🚀 Como executar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## 🏗️ Estrutura

```
/app          → rotas e layout (Next.js App Router)
/components   → todas as seções e componentes reutilizáveis
/hooks        → hooks customizados
/lib          → utilitários e dados centralizados
/types        → tipagens TypeScript
/styles       → nota sobre estilos (globals.css está em /app)
/public       → arquivos estáticos
```

## 🎨 Design

- Background: `#050505` (Obsidian)
- Accent: `#C5A059` (Champagne Gold)
- Tech: `#007AFF` (Azure)
- Texto: `#F5F5F7` (Ivory)
- Headings: Instrument Sans
- Body: Inter

## 🛠️ Bugs corrigidos nesta versão

O código gerado anteriormente tinha alguns problemas que impediam o projeto de
funcionar corretamente fora do preview original. Veja o que foi corrigido:

1. **Todos os links quebrados (`href__=` em vez de `href=`)** — este era o bug mais
   grave. Em toda a Navbar, Hero, Footer e CTA final, os links usavam o atributo
   inválido `href__` (resquício do sanitizador do ambiente de preview original), o que
   fazia com que **nenhum link ou âncora de navegação funcionasse** em um projeto Next.js
   real. Todos foram corrigidos para `href=`.
2. **Refs quebradas (`ref__=` em vez de `ref=`)** — em `Hero.tsx` (parallax do vídeo) e
   `BeforeAfter.tsx` (comparador antes/depois), o atributo `ref__` também é inválido em
   React puro. Corrigido para `ref=` nos dois componentes, restaurando o efeito de
   parallax e o funcionamento do slider interativo.
3. **Divisão por zero no comparador Antes/Depois** — a lógica original recalculava a
   largura da imagem "antes" com `100 / (pos / 100)`, o que gerava `Infinity` quando o
   cursor chegava à borda esquerda do componente. Reescrito usando `clip-path`, que é
   mais simples, robusto e nunca quebra.
4. **`next.config.ts` incompatível com a versão do Next instalada** — o arquivo de
   configuração em TypeScript (`next.config.ts`) só é suportado nativamente a partir do
   Next.js 15; como o `package.json` fixa Next `^14.2.5`, isso poderia falhar o build.
   Trocado para `next.config.mjs`.
5. **Nome de arquivo inválido** — o hook utilitário estava salvo como
   `hooks/useScroll spy.ts` (com espaço no nome). Renomeado para
   `hooks/useActiveSection.ts`.
6. **Aspas retas dentro de JSX em `Testimonials.tsx`** — trocadas por entidades
   tipográficas (`&ldquo;`/`&rdquo;`) para evitar o aviso de lint
   `react/no-unescaped-entities` e manter a tipografia consistente com o resto do site.
7. **`viewport`/`themeColor` ausentes** — adicionado o export `viewport` em
   `app/layout.tsx`, conforme a API atual do Next.js (metadata e viewport são exports
   separados desde o Next 14).

O vídeo do Hero **não foi alterado** — a URL original fornecida continua exatamente a
mesma em `components/Hero.tsx`.

## ⚠️ Observação sobre as imagens

As seções "Sobre", "Resultados" e "Antes/Depois" usam URLs de exemplo do Unsplash como
placeholder. Como são links externos de terceiros, vale testar cada um após o `npm run
dev`; se algum retornar 404, basta substituir pela URL de uma foto sua ou por um arquivo
em `/public`.

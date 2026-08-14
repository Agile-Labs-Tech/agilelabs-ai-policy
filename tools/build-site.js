const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const anchor = require('markdown-it-anchor');

const SRC = process.argv[2];
const OUT = path.join(SRC, '_site');

const md = new MarkdownIt({ html: true, linkify: true, typographer: false })
  .use(anchor, { permalink: anchor.permalink.headerLink() });

// Keep mermaid fences intact for client-side rendering
const defaultFence = md.renderer.rules.fence;
md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
  const t = tokens[idx];
  if (t.info.trim() === 'mermaid') return `<pre class="mermaid">${t.content}</pre>`;
  return defaultFence(tokens, idx, opts, env, self);
};

// Folders published to the site, in sidebar order. Anything not listed here is
// walked but not published — README.md is deliberately excluded, being the GitHub
// landing page rather than a controlled document.
// The first document of the first section becomes the site landing page.
const SECTIONS = [
  ['00-framework', 'Framework'],
  ['01-policies', 'Policies'],
  ['02-registers', 'Registers'],
  ['03-audit-pack', 'Audit pack'],
];

let HOME = 'index.html';   // resolved to the first published page at build time

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return ['_site', 'tools', 'node_modules', '.git'].includes(e.name) ? [] : walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}

const files = walk(SRC).map(f => {
  const rel = path.relative(SRC, f);
  const dir = path.dirname(rel) === '.' ? '' : path.dirname(rel);
  const src = fs.readFileSync(f, 'utf8');
  const h1 = (src.match(/^#\s+(.+)$/m) || [, path.basename(rel, '.md')])[1];
  return { rel, dir, src, title: h1.replace(/[*_`]/g, ''), out: rel.replace(/\.md$/, '.html') };
});

const byDir = Object.fromEntries(SECTIONS.map(([d]) => [d, []]));
files.forEach(f => { (byDir[f.dir] ||= []).push(f); });
Object.values(byDir).forEach(a => a.sort((x, y) => x.rel.localeCompare(y.rel)));

const CSS = `
*{box-sizing:border-box}
:root{
  --bg:#fbfbfa; --panel:#fff; --ink:#21201c; --muted:#6b6a65; --line:#e5e3de;
  --accent:#b04a2c; --accent-soft:#fdf3ef; --code-bg:#f5f4f1; --warn-bg:#fdf6e9; --warn-line:#e0b871;
}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){
  --bg:#191917; --panel:#211f1d; --ink:#e9e6e0; --muted:#a09c94; --line:#36332f;
  --accent:#e0805c; --accent-soft:#2a211d; --code-bg:#26241f; --warn-bg:#2b2418; --warn-line:#7a6134;
}}
:root[data-theme=dark]{
  --bg:#191917; --panel:#211f1d; --ink:#e9e6e0; --muted:#a09c94; --line:#36332f;
  --accent:#e0805c; --accent-soft:#2a211d; --code-bg:#26241f; --warn-bg:#2b2418; --warn-line:#7a6134;
}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);
  font:16px/1.65 ui-sans-serif,-apple-system,"Segoe UI",Inter,system-ui,sans-serif;
  -webkit-font-smoothing:antialiased}
.layout{display:flex;min-height:100vh}
/* sidebar */
.side{width:290px;flex:0 0 290px;background:var(--panel);border-right:1px solid var(--line);
  padding:22px 0 60px;position:sticky;top:0;height:100vh;overflow-y:auto}
.brand{padding:0 20px 16px;border-bottom:1px solid var(--line);margin-bottom:14px}
.brand a{text-decoration:none;color:var(--ink)}
.brand b{display:block;font-size:14px;letter-spacing:.02em}
.brand span{display:block;font-size:11.5px;color:var(--muted);margin-top:3px;text-transform:uppercase;letter-spacing:.09em}
.sec{padding:14px 20px 4px;font-size:10.5px;font-weight:700;text-transform:uppercase;
  letter-spacing:.11em;color:var(--muted)}
.side a.nav{display:block;padding:6px 20px;font-size:13.2px;color:var(--ink);
  text-decoration:none;border-left:2.5px solid transparent;line-height:1.45}
.side a.nav:hover{background:var(--accent-soft)}
.side a.nav.on{border-left-color:var(--accent);background:var(--accent-soft);color:var(--accent);font-weight:600}
/* main */
main{flex:1;min-width:0;padding:46px 56px 120px;max-width:1000px}
h1,h2,h3,h4{line-height:1.25;font-weight:650}
h1{font-size:31px;margin:0 0 22px;letter-spacing:-.015em}
h2{font-size:21px;margin:38px 0 12px;padding-bottom:7px;border-bottom:1px solid var(--line)}
h3{font-size:16.5px;margin:26px 0 8px}
h4{font-size:14.5px;margin:20px 0 6px;color:var(--muted)}
a{color:var(--accent)}
h1 a,h2 a,h3 a,h4 a{color:inherit;text-decoration:none}
h1 a:hover,h2 a:hover,h3 a:hover,h4 a:hover{color:var(--accent)}
p,li{max-width:78ch}
table{border-collapse:collapse;width:100%;margin:16px 0;font-size:13.6px;display:block;overflow-x:auto}
th,td{border:1px solid var(--line);padding:8px 11px;text-align:left;vertical-align:top}
th{background:var(--code-bg);font-weight:650;white-space:nowrap}
tbody tr:nth-child(even){background:color-mix(in srgb,var(--code-bg) 45%,transparent)}
code{background:var(--code-bg);padding:1.5px 5px;border-radius:4px;font-size:.875em;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
pre{background:var(--code-bg);padding:15px 17px;border-radius:8px;overflow-x:auto;
  border:1px solid var(--line);font-size:12.8px;line-height:1.5}
pre code{background:none;padding:0}
pre.mermaid{background:var(--panel);text-align:center;border:1px solid var(--line)}
blockquote{margin:16px 0;padding:12px 18px;background:var(--warn-bg);
  border-left:3px solid var(--warn-line);border-radius:0 6px 6px 0}
blockquote>:first-child{margin-top:0}blockquote>:last-child{margin-bottom:0}
hr{border:0;border-top:1px solid var(--line);margin:34px 0}
.crumb{font-size:11.5px;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);margin-bottom:10px}
.toolbar{position:fixed;top:14px;right:18px;display:flex;gap:8px;z-index:20}
.toolbar button{background:var(--panel);border:1px solid var(--line);color:var(--muted);
  border-radius:7px;padding:6px 11px;font-size:12px;cursor:pointer;font-family:inherit}
.toolbar button:hover{color:var(--accent);border-color:var(--accent)}
.pager{display:flex;justify-content:space-between;gap:16px;margin-top:60px;
  padding-top:22px;border-top:1px solid var(--line);font-size:13.5px}
.pager a{text-decoration:none}
.filter{margin:0 20px 12px;width:calc(100% - 40px);padding:7px 10px;font:13px inherit;
  border:1px solid var(--line);border-radius:7px;background:var(--bg);color:var(--ink)}
@media print{.side,.toolbar,.pager{display:none}main{padding:0;max-width:none}}
@media (max-width:880px){
  .layout{flex-direction:column}
  .side{width:100%;flex:none;height:auto;position:static;border-right:0;border-bottom:1px solid var(--line)}
  main{padding:28px 20px 80px}
}
`;

function page(f, prev, next) {
  const depth = f.dir ? 1 : 0;
  const up = depth ? '../' : '';
  const nav = SECTIONS.map(([dir, label]) => {
    const items = byDir[dir] || [];
    if (!items.length) return '';
    return `<div class="sec">${label}</div>` + items.map(i =>
      `<a class="nav${i.rel === f.rel ? ' on' : ''}" href="${up}${i.out}">${i.title}</a>`).join('');
  }).join('');

  // rewrite .md links -> .html
  let body = md.render(f.src).replace(/href="([^"]+)\.md(#[^"]*)?"/g, 'href="$1.html$2"');

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${f.title} — Agile Labs AI Pillar</title><style>${CSS}</style></head><body>
<div class="toolbar">
  <button onclick="tg()">◐ Theme</button>
  <button onclick="print()">⎙ Print / PDF</button>
</div>
<div class="layout">
<nav class="side">
  <div class="brand"><a href="${up}${HOME}"><b>AI Pillar — ISMS / AIMS</b>
  <span>Agile Labs · Rev 1.0</span></a></div>
  <input class="filter" placeholder="Filter documents…" oninput="flt(this.value)">
  ${nav}
</nav>
<main>
  <div class="crumb">${f.dir || 'Overview'}</div>
  ${body}
  <div class="pager">
    <span>${prev ? `<a href="${up}${prev.out}">← ${prev.title}</a>` : ''}</span>
    <span>${next ? `<a href="${up}${next.out}">${next.title} →</a>` : ''}</span>
  </div>
</main></div>
<script type="module">
import m from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
const d=matchMedia('(prefers-color-scheme:dark)').matches||document.documentElement.dataset.theme==='dark';
m.initialize({startOnLoad:true,theme:d?'dark':'neutral'});
</script>
<script>
function tg(){const r=document.documentElement;
  const cur=r.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  r.dataset.theme=cur==='dark'?'light':'dark';localStorage.aiTheme=r.dataset.theme;location.reload()}
if(localStorage.aiTheme)document.documentElement.dataset.theme=localStorage.aiTheme;
function flt(q){q=q.toLowerCase();
  document.querySelectorAll('.side a.nav').forEach(a=>{
    a.style.display=a.textContent.toLowerCase().includes(q)?'':'none'});
  document.querySelectorAll('.sec').forEach(s=>{
    let n=s.nextElementSibling,any=false;
    while(n&&n.classList.contains('nav')){if(n.style.display!=='none')any=true;n=n.nextElementSibling}
    s.style.display=any?'':'none'})}
</script></body></html>`;
}

fs.rmSync(OUT, { recursive: true, force: true });
const ordered = SECTIONS.flatMap(([d]) => byDir[d] || []);
if (!ordered.length) { console.error('No pages to build — check SECTIONS.'); process.exit(1); }
HOME = ordered[0].out;
ordered.forEach((f, i) => {
  const dest = path.join(OUT, f.out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, page(f, ordered[i - 1], ordered[i + 1]));
});
fs.writeFileSync(path.join(OUT, 'index.html'),
  `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${HOME}">`);
console.log(`Built ${ordered.length} pages → ${OUT}  (landing: ${HOME})`);

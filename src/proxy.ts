import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Temporary-maintenance gate.
 *
 * Every request that is not a static asset, sitemap, robots.txt or the
 * homepage is answered with HTTP 503 Service Unavailable plus:
 *   - Retry-After: tells crawlers when to come back (no penalties applied).
 *   - X-Robots-Tag: noindex/nofollow/noarchive, so search engines keep the
 *     existing URLs indexed but do not update their records from this page.
 *
 * The homepage (`/`) renders the React + Tailwind + shadcn page (also
 * `noindex` via metadata) so the interface is a real app rather than a
 * static payload; every deep-linked URL the old WordPress site lives at is
 * answered here with 503, preserving the URL and its search equity.
 */

const RETRY_AFTER =
  process.env.MAINTENANCE_RETRY_AFTER && /^\d+$/.test(process.env.MAINTENANCE_RETRY_AFTER)
    ? process.env.MAINTENANCE_RETRY_AFTER
    : "604800";

const MAINTENANCE_TITLE = "BBINN Viñales — We'll be back soon";

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${MAINTENANCE_TITLE}</title>
<meta name="description" content="BBINN Viñales is under maintenance. We're renovating the site to make discovering casas particulares and hotels across Cuba easier. Coming back soon." />
<meta name="robots" content="noindex, nofollow, noarchive" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  :root{
    --forest-950:#1a201c;--forest-900:#123f27;--forest-800:#12562d;
    --forest-700:#2f6b47;--lime-400:#a8d65a;--lime-500:#97c54b;--lime-600:#7da53b;
    --sand-100:#f9f6ee;--sand-200:#f4efe4;--muted:#647066;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{height:100%;}
  body{
    font-family:"Inter",system-ui,-apple-system,sans-serif;
    background:var(--sand-100);color:var(--forest-950);
    -webkit-font-smoothing:antialiased;
  }
  .page{position:relative;display:flex;min-height:100dvh;flex-direction:column;overflow:hidden;}
  .page::before{
    content:"";position:absolute;inset:0;pointer-events:none;
    background:radial-gradient(circle at 78% 10%,rgba(168,214,90,.20),transparent 34%),
               radial-gradient(circle at 10% 86%,rgba(47,107,71,.09),transparent 30%);
  }
  .wrap{width:100%;max-width:1100px;margin:0 auto;padding:0 26px;}
  header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:26px 0;}
  .brand{display:flex;align-items:baseline;gap:10px;}
  .brand b{font-family:"Cormorant Garamond",serif;font-style:italic;font-weight:600;font-size:1.7rem;letter-spacing:-.01em;color:var(--forest-900);}
  .brand span{font-size:.7rem;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:var(--forest-700);}
  .dot{width:8px;height:8px;border-radius:50%;background:var(--lime-400);margin-left:6px;}
  .badge{
    display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;
    border:1px solid rgba(18,63,39,.22);background:var(--sand-200);
    font-size:.75rem;font-weight:500;letter-spacing:.02em;color:var(--forest-900);white-space:nowrap;
  }
  .badge i{width:6px;height:6px;border-radius:50%;background:var(--lime-500);display:inline-block;}
  main{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;padding:24px 0 40px;}
  .eyebrow{font-size:.72rem;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:var(--forest-700);}
  h1{
    margin-top:26px;font-family:"Cormorant Garamond",serif;
    font-weight:500;line-height:1.04;letter-spacing:-.01em;color:var(--forest-950);
    font-size:clamp(2.7rem,6.5vw,4.8rem);max-width:16ch;text-wrap:balance;
  }
  h1 em{font-style:italic;color:var(--lime-600);}
  .lede{max-width:60ch;margin-top:24px;color:var(--muted);font-size:clamp(.95rem,2vw,1.1rem);line-height:1.7;text-wrap:pretty;}
  .card{
    margin-top:34px;max-width:520px;width:100%;padding:22px 26px;
    border:1px solid rgba(18,63,39,.12);border-radius:16px;background:rgba(255,255,255,.82);
    box-shadow:0 22px 60px -28px rgba(18,63,39,.4);backdrop-filter:blur(6px);
  }
  .card h2{font-size:.95rem;font-weight:600;color:var(--forest-900);}
  .card p{margin-top:8px;font-size:.85rem;line-height:1.6;color:var(--muted);}
  .card b{color:var(--forest-800);font-weight:600;}
  .chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:26px;}
  .chip{
    display:inline-flex;align-items:center;gap:6px;padding:7px 15px;border-radius:999px;
    border:1px solid rgba(18,63,39,.16);background:var(--sand-200);
    font-size:.75rem;font-weight:500;color:var(--forest-800);
  }
  .chip b{color:var(--lime-500);font-weight:600;}
  .tl{border:0;}
  .landscape{position:relative;z-index:0;display:block;width:100%;}
  footer{position:relative;z-index:2;background:var(--forest-950);color:rgba(244,239,228,.8);}
  .foot{display:flex;flex-wrap:wrap;gap:6px 20px;justify-content:space-between;font-size:.75rem;padding:20px 26px;}
  .foot span{opacity:.85;}
  .foot em{font-style:normal;opacity:.55;}
</style>
</head>
<body>
<div class="page">
  <div class="wrap">
    <header>
      <div class="brand"><b>BBINN</b><span>Viñales</span><span class="dot"></span></div>
      <div class="badge"><i></i>503 · Temporarily under maintenance</div>
    </header>
  </div>
  <main>
    <p class="eyebrow">Under refurbishment · Viñales, Cuba</p>
    <h1>The valley is preparing <em>something beautiful.</em></h1>
    <p class="lede">We&apos;re giving BBINN Viñales a warmer, more personal look — simpler booking, more casas particulares, and all the heart of Cuban hospitality you already love. We&apos;ll be back before the next sunset in the mogotes.</p>
    <div class="card">
      <h2>This page is resting for a moment</h2>
      <p>Every URL on the site keeps its place — <b>503 Service Unavailable</b> simply tells search engines this is temporary. Google and the others have been asked to come back and check again soon. Your bookmarks will still work when we reopen.</p>
    </div>
    <div class="chips">
      <span class="chip"><b>✦</b>Refreshed design</span>
      <span class="chip"><b>✦</b>More curated casas</span>
      <span class="chip"><b>✦</b>Smarter booking</span>
    </div>
    <p class="eyebrow tl" style="margin-top:34px;font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;letter-spacing:.04em;text-transform:none;color:var(--forest-700);font-size:1.15rem;">En construcción — volvemos pronto.</p>
  </main>
  <svg class="landscape" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs>
      <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c4e58a"/><stop offset="100%" stop-color="#97c54b"/>
      </linearGradient>
    </defs>
    <circle cx="1130" cy="84" r="72" fill="#eaf6cd" opacity=".5"/>
    <circle cx="1130" cy="84" r="56" fill="url(#sun)"/>
    <path d="M0 160 C180 108 320 126 470 156 C620 186 760 150 920 136 C1080 122 1220 158 1440 108 L1440 220 L0 220 Z" fill="#cfdbb0" opacity=".95"/>
    <path d="M0 188 C150 152 300 170 470 158 C640 146 780 170 960 162 C1140 154 1290 172 1440 144 L1440 220 L0 220 Z" fill="#2f6b47"/>
    <path d="M0 216 L0 200 C120 180 260 192 430 190 C600 188 780 200 1000 196 C1180 192 1330 202 1440 200 L1440 220 Z" fill="#0f3a20"/>
    <path fill="#0a2517" d="M150 220 c-1 -30 2 -50 8 -72 c2 -11 7 -11 10 -1 c5 18 5 48 4 73 Z"/>
    <path fill="#0a2517" d="M116 164 c20 -12 38 -14 54 -12 c4 -8 12 -12 22 -14 c-10 6 -16 16 -16 26 c12 0 24 6 32 12 c-14 -2 -28 -2 -40 2 c2 6 6 12 8 16 c-10 -4 -18 -6 -26 -10 c-12 2 -24 2 -34 0 c2 -8 2 -12 -2 -20 Z"/>
    <path fill="#0a2517" d="M182 164 c-20 -12 -38 -14 -54 -12 c-4 -8 -12 -12 -22 -14 c10 6 16 16 16 26 c-12 0 -24 6 -32 12 c14 -2 28 -2 40 2 c-2 6 -6 12 -8 16 c10 -4 18 -6 26 -10 c12 2 24 2 34 0 c-2 -8 -2 -12 2 -20 Z"/>
    <path fill="#0a2517" d="M420 220 c-1 -26 2 -44 7 -64 c2 -10 7 -10 10 -1 c4 16 4 44 3 65 Z"/>
    <path fill="#0a2517" d="M390 176 c18 -10 34 -14 50 -12 c4 -8 12 -12 20 -12 c-10 6 -14 14 -14 24 c12 0 22 6 30 12 c-14 -2 -26 -2 -38 2 c2 6 6 12 8 14 c-8 -4 -16 -6 -24 -8 c-10 2 -22 2 -32 0 c2 -8 2 -12 0 -20 Z"/>
    <rect x="640" y="198" width="24" height="18" rx="1.5" fill="#f4efe4"/>
    <path d="M640 198 L652 189 L664 198 Z" fill="#0a2517"/>
    <rect x="656" y="203" width="5" height="13" fill="#e8ddcb"/>
    <rect x="645" y="203" width="6" height="6" fill="#c58a2a"/>
    <path d="M0 220 L1440 220" stroke="#0a2517" stroke-width="3"/>
  </svg>
  <footer>
    <div class="foot">
      <span>BBINN Viñales · The human side of Cuba</span>
      <em>© 2026 BBINN Viñales — all rights reserved</em>
    </div>
  </footer>
</div>
</body>
</html>`;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The homepage renders the real React + Tailwind + shadcn coming-soon page.
  if (pathname === "/") {
    return NextResponse.next();
  }

  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": RETRY_AFTER,
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "no-store, must-revalidate",
      "Pragma": "no-cache",
    },
  });
}

export const config = {
  matcher: [
    // Run for every path except static assets, metadata/SEO files and images.
    "/((?!api|_next|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.xml$|.*\\.(?:png|jpe?g|svg|gif|webp|ico|css|js|woff2?|ttf|json|txt)$|wp-content(?:/.*)?$|\\.well-known(?:/.*)?$|__nextjs).*)",
  ],
};
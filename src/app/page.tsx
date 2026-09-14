import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { TropicalLandscape } from "@/components/tropical-landscape";

function BrandMark() {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold italic tracking-tight text-forest-900">
        BBINN
      </span>
      <span className="text-xs font-medium tracking-[0.22em] text-forest-700 uppercase">
        Viñales
      </span>
      <span className="ml-1 inline-block h-2 w-2 rounded-full bg-lime-400" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-sand-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 12%, rgba(168,214,90,0.18), transparent 32%), radial-gradient(circle at 12% 88%, rgba(47,107,71,0.08), transparent 30%)",
        }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <BrandMark />
        <Badge
          variant="outline"
          className="h-8 rounded-full border-forest-800/25 bg-sand-100/70 px-4 text-xs font-medium tracking-wide text-forest-900"
        >
          <span className="mr-2 inline-block size-1.5 rounded-full bg-lime-500" />
          503 · Temporarily under maintenance
        </Badge>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-forest-700 uppercase">
          Under refurbishment · Viñales, Cuba
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight text-forest-950 sm:text-6xl md:text-7xl">
          The valley is preparing{" "}
          <em className="font-medium text-lime-600 italic">something beautiful.</em>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          We&apos;re giving BBINN Viñales a warmer, more personal look — simpler
          booking, more casas particulares, and all the heart of Cuban
          hospitality you already love. We&apos;ll be back before the next
          sunset in the mogotes.
        </p>

        <div className="mt-9 w-full max-w-xl">
          <Card className="border-forest-900/10 bg-white/80 px-5 py-6 shadow-[0_18px_50px_-24px_rgba(18,63,39,0.35)] backdrop-blur-sm sm:px-7">
            <p className="text-sm font-medium text-forest-900">
              Leave your email and be the first to know when we open.
            </p>
            <div className="mt-4 flex justify-center">
              <NewsletterForm />
            </div>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["Refreshed design", "More curated casas", "Smarter booking"].map(
            (label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-forest-800/15 bg-sand-100/70 px-3.5 py-1.5 text-xs font-medium text-forest-800"
              >
                <span className="text-lime-500">✦</span>
                {label}
              </span>
            ),
          )}
        </div>

        <p className="mt-10 font-display text-lg text-forest-700 italic">
          En construcción — volvemos pronto.
        </p>
      </main>

      <div className="relative z-0 -mb-px block">
        <TropicalLandscape />
      </div>

      <footer className="relative z-10 bg-forest-950 px-6 py-5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-sand-200/80">
            BBINN Viñales · The human side of Cuba
          </p>
          <p className="text-xs text-sand-200/50">
            © {new Date().getFullYear()} BBINN Viñales — all rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import manifest from "@/content/asset-manifest.json";
import { FadeUp, StaggerChildren, CardTiltLayer, ImageRevealMask } from "@/components/motion";

const images = (manifest as { images?: Record<string, string> }).images ?? {};
const heroImg =
  images["section-work"] ||
  resolveImage({ brandColor: "#1F3252", keyword: "formula one car racing podium celebration", fallbackTier: "gradient" });
const img = (slot: string, keyword: string) =>
  images[slot] || resolveImage({ brandColor: "#1F3252", keyword, fallbackTier: "gradient" });

const highlights = [
  { round: "Round 04", venue: "Silverstone Grand Prix", result: "P1 — Lights-to-flag victory", note: "A 1.9s stop sealed the undercut and the win." },
  { round: "Round 07", venue: "Monaco Street Circuit", result: "Pole position", note: "A perfect final sector — eleven thousandths clear." },
  { round: "Round 11", venue: "Spa-Francorchamps", result: "P2 — Double podium", note: "Aero package delivered through Eau Rouge all weekend." },
  { round: "Round 14", venue: "Suzuka International", result: "Fastest lap", note: "Hybrid deployment mapped corner by corner for the flyer." },
  { round: "Round 18", venue: "Circuit of the Americas", result: "P1 — Constructors' clincher", note: "Strategy call on lap 32 turned the championship." },
  { round: "Round 22", venue: "Yas Marina Finale", result: "P3 — Season-best pace", note: "Telemetry-led setup found three tenths overnight." },
];

export const metadata: Metadata = {
  title: "The Season",
  description: "Race-by-race highlights from the Velocity Racing championship campaign.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selected results"
        title="Won in the details"
        image={heroImg}
        intro="Every podium is the sum of a thousand decisions. A look at the weekends that defined the campaign."
      />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <StaggerChildren staggerDelay={0.12} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {highlights.map((c, i) => (
            <CardTiltLayer key={i} intensity={0.15} lift={8} className="group">
              <article className="overflow-hidden rounded-2xl border border-ink/10 bg-bg transition-all hover:border-primary/40">
                <ImageRevealMask
                  src={img(`section-work-${i + 1}`, `${c.venue} motorsport racing`)}
                  alt={c.venue}
                  aspectClass="aspect-video"
                  className="bg-surface"
                  duration={1.2}
                  delay={i * 0.05}
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {c.round}
                    </div>
                    <div className="font-mono text-[10px] text-ink/40">{c.venue}</div>
                  </div>
                  <h2 className="mb-2 font-display text-2xl text-ink transition-colors group-hover:text-primary">
                    {c.result}
                  </h2>
                  <p className="text-sm text-ink/65">{c.note}</p>
                </div>
              </article>
            </CardTiltLayer>
          ))}
        </StaggerChildren>

        <FadeUp>
          <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
            {siteConfig.stats.slice(0, 4).map((s, i) => (
              <span key={i}>
                {s.value} {s.label}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollCanvas from "@/components/ScrollCanvas";
import {
  HeroScrollText,
  FadeUp,
  StaggerChildren,
  TextReveal,
  ImageRevealMask,
  MagneticButton,
  NumberCounter,
  CardTiltLayer,
} from "@/components/motion";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import frames from "@/content/frames-manifest.json";
import manifest from "@/content/asset-manifest.json";

const images = (manifest as { images?: Record<string, string> }).images ?? {};
const img = (slot: string, keyword: string) =>
  images[slot] || resolveImage({ brandColor: "#1F3252", keyword, fallbackTier: "gradient" });

const FRAME_COUNT = (frames as { frameCount: number }).frameCount || 1;
const FRAME_PATTERN =
  (frames as { frameUrlTemplate?: string }).frameUrlTemplate || "/frames/frame-{NNNN}.jpg";

// Hero scroll chapters — inlined here (not via site-config) so the text
// demonstrably CHANGES across the scrub. `at` thresholds spread 0 → 0.85.
const HERO_CHAPTERS = [
  {
    at: 0,
    eyebrow: "Velocity Racing",
    headlineLines: ["Engineered", "to win"],
    subline:
      "An open-wheel team built around one obsession — finding time the rest of the grid can't.",
  },
  {
    at: 0.34,
    eyebrow: "Aero · Powertrain · Data",
    headlineLines: ["Every gram,", "every degree"],
    subline:
      "Thousands of CFD iterations and dyno hours distilled into a single perfect lap.",
  },
  {
    at: 0.62,
    eyebrow: "Race weekend",
    headlineLines: ["When it", "matters most"],
    subline:
      "Sub-two-second stops, live telemetry and split-second calls under the lights.",
  },
  {
    at: 0.85,
    eyebrow: "Join the team",
    headlineLines: ["Chase the", "apex with us"],
    cta: { label: "Partner with Velocity", href: "/contact" },
  },
];

export default function VideoHomepage() {
  return (
    <main className="relative">
      <ScrubHero />
      <StatsBand />
      <ManifestoSection />
      <ShowcaseSection />
      <ServicesGrid />
      <CtaSection />
    </main>
  );
}

// ── Section 1 — SCRUB-CINEMATIC HERO (ScrollCanvas + HeroScrollText) ──
function ScrubHero() {
  const [progress, setProgress] = useState(0);

  return (
    <ScrollCanvas
      frameCount={FRAME_COUNT}
      pattern={FRAME_PATTERN}
      padLength={4}
      scrollDistance={siteConfig.scrollHero.scrollDistance}
      loadingLabel={siteConfig.scrollHero.loadingLabel}
      loadingVariant={siteConfig.scrollHero.loadingVariant}
      onProgress={setProgress}
    >
      <HeroScrollText
        progress={progress}
        chapters={HERO_CHAPTERS as never}
        position="bottom-left"
        textColor="#FAF6EE"
        accentColor="#E8DFCF"
        accentTextColor="#0E1C33"
        showChapterDots
      />
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.4em] text-[#FAF6EE]/70 md:block">
        Scroll to drive
      </div>
    </ScrollCanvas>
  );
}

// ── Section 2 — STATS BAND (counter reveal, all performance stats) ──
function StatsBand() {
  return (
    <section className="relative border-y border-ink/10 bg-surface px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <div className="mb-12 font-mono text-[11px] uppercase tracking-[0.34em] text-primary">
            By the numbers
          </div>
        </FadeUp>
        <StaggerChildren
          staggerDelay={0.06}
          className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
        >
          {siteConfig.stats.map((stat, i) => {
            const num = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
            const suffix = stat.value.replace(/[0-9.]/g, "");
            return (
              <div key={i}>
                <div className="font-display text-4xl leading-none text-ink md:text-6xl">
                  {isNaN(num) ? (
                    stat.value
                  ) : (
                    <NumberCounter
                      to={num}
                      suffix={suffix}
                      decimals={stat.value.includes(".") ? 1 : 0}
                    />
                  )}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/55">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── Section 3 — OVERSIZED TYPE MANIFESTO (navy panel, cream type) ──
function ManifestoSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink px-6 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <FadeUp>
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-bg/60">
            {siteConfig.whyUs.heading}
          </div>
        </FadeUp>
        <TextReveal
          as="h2"
          className="break-words font-display text-[68px] leading-[0.9] tracking-tight text-bg sm:text-[120px] md:text-[200px] lg:text-[260px]"
          stagger={0.08}
        >
          {siteConfig.sectionThemeWord}
        </TextReveal>
        <FadeUp delay={0.3}>
          <p className="mt-10 max-w-xl text-lg text-bg/80 md:text-xl">
            {siteConfig.manifesto}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ── Section 4 — SHOWCASE / FEATURE SPLIT (image reveal) ──
function ShowcaseSection() {
  const feature = siteConfig.features[0];
  const rest = siteConfig.features.slice(1, 4);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <FadeUp>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Inside the garage
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mb-6 font-display text-4xl leading-[1.05] text-ink md:text-6xl">
              {feature.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mb-8 text-lg leading-relaxed text-ink/70">
              {feature.description}
            </p>
          </FadeUp>
          <StaggerChildren staggerDelay={0.08} initialDelay={0.3} className="space-y-3">
            {rest.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <div>
                  <div className="font-display text-sm text-ink">{f.title}</div>
                  <div className="mt-0.5 text-sm text-ink/60">{f.description}</div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
        <div className="relative">
          <ImageRevealMask
            src={img("section-garage", "formula one car garage engineering")}
            alt={feature.title}
            aspectClass="aspect-[4/3]"
            className="rounded-2xl border border-ink/10 bg-surface"
          />
        </div>
      </div>
    </section>
  );
}

// ── Section 5 — SERVICES GRID (cards stagger) ──
function ServicesGrid() {
  return (
    <section className="relative border-t border-ink/10 bg-surface px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <FadeUp>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              {siteConfig.servicesHeading}
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl text-ink md:text-6xl">
              Every department, one lap time
            </h2>
          </FadeUp>
        </div>

        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((svc) => (
            <CardTiltLayer key={svc.slug} intensity={0.2} lift={10} className="h-full">
              <Link
                href={`/services/${svc.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-bg transition-all hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img(`service-${svc.slug}`, `${svc.name} motorsport`)}
                    alt={svc.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-lg text-ink">{svc.name}</h3>
                  <p className="line-clamp-2 text-sm leading-snug text-ink/60">
                    {svc.description}
                  </p>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    Learn more →
                  </div>
                </div>
              </Link>
            </CardTiltLayer>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// ── Section 6 — CTA ──
function CtaSection() {
  return (
    <section className="relative bg-bg px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <h2 className="mb-6 font-display text-5xl leading-[1.0] text-ink md:text-7xl">
            {siteConfig.ctaBlock.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mx-auto mb-10 max-w-xl text-lg text-ink/70">
            {siteConfig.ctaBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
            <Link
              href="/about"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/20 px-8 py-4 font-display text-sm text-ink transition-colors hover:bg-ink/5"
            >
              {siteConfig.cta.secondary}
            </Link>
          </div>
        </FadeUp>
        <FadeUp delay={0.45}>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-ink/50">
            {siteConfig.trustBar.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

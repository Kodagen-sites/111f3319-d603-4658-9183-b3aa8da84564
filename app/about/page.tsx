import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import manifest from "@/content/asset-manifest.json";
import {
  FadeUp,
  StaggerChildren,
  CardTiltLayer,
  NumberCounter,
} from "@/components/motion";

const images = (manifest as { images?: Record<string, string> }).images ?? {};
const heroImg =
  images["section-about"] ||
  resolveImage({ brandColor: "#1F3252", keyword: "formula one pit crew team", fallbackTier: "gradient" });

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.aboutStory,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={`About ${siteConfig.company.name}`}
        title={siteConfig.aboutHeading}
        image={heroImg}
        intro={siteConfig.company.description}
      />

      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeUp>
          <p className="text-xl leading-relaxed text-ink/80">{siteConfig.aboutStory}</p>
        </FadeUp>

        <FadeUp>
          <section className="my-20 grid grid-cols-2 gap-8 border-y border-ink/10 py-10 md:grid-cols-4">
            {siteConfig.stats.slice(0, 4).map((stat, i) => {
              const num = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
              const suffix = stat.value.replace(/[0-9.]/g, "");
              return (
                <div key={i} className="text-center">
                  <div className="font-display text-4xl font-light text-ink md:text-5xl">
                    {isNaN(num) ? (
                      stat.value
                    ) : (
                      <NumberCounter to={num} suffix={suffix} decimals={stat.value.includes(".") ? 1 : 0} />
                    )}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/55">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </section>
        </FadeUp>

        <section className="mb-20">
          <FadeUp>
            <h2 className="mb-10 font-display text-3xl font-light text-ink md:text-4xl">Our values</h2>
          </FadeUp>
          <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.values.map((v, i) => (
              <CardTiltLayer
                key={i}
                intensity={0.2}
                lift={6}
                className="rounded-2xl border border-ink/10 bg-surface p-6 transition-colors hover:border-primary/30"
              >
                <div className="mb-2 font-mono text-xs text-primary">0{i + 1}</div>
                <h3 className="mb-2 font-display text-xl text-ink">{v.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{v.description}</p>
              </CardTiltLayer>
            ))}
          </StaggerChildren>
        </section>

        <section className="mb-20">
          <FadeUp>
            <h2 className="mb-10 font-display text-3xl font-light text-ink md:text-4xl">
              {siteConfig.whyUs.heading}
            </h2>
          </FadeUp>
          <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.whyUs.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <div>
                  <h3 className="mb-1 font-display text-lg text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </section>

        <FadeUp distance={60}>
          <section className="rounded-3xl border border-ink/10 bg-ink p-8 md:p-14">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-bg/60">
              Our manifesto
            </div>
            <p className="font-display text-2xl italic leading-[1.3] text-bg/90 md:text-4xl">
              &ldquo;{siteConfig.manifesto}&rdquo;
            </p>
            <div className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-bg/50">
              — {siteConfig.company.name}
            </div>
          </section>
        </FadeUp>
      </div>
    </main>
  );
}

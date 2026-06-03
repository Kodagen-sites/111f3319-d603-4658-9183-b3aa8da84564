import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import manifest from "@/content/asset-manifest.json";
import { FadeUp, StaggerChildren, CardTiltLayer, MagneticButton } from "@/components/motion";

const images = (manifest as { images?: Record<string, string> }).images ?? {};
const heroImg =
  images["section-services"] ||
  resolveImage({ brandColor: "#1F3252", keyword: "formula one car wind tunnel engineering", fallbackTier: "gradient" });
const img = (slot: string, keyword: string) =>
  images[slot] || resolveImage({ brandColor: "#1F3252", keyword, fallbackTier: "gradient" });

export const metadata: Metadata = {
  title: "What we engineer",
  description: `${siteConfig.servicesHeading} — ${siteConfig.company.description}`,
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow={siteConfig.servicesHeading}
        title="Every department, one lap time"
        image={heroImg}
        intro={siteConfig.company.description}
      />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <StaggerChildren
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((svc) => (
            <CardTiltLayer key={svc.slug} intensity={0.25} lift={12} className="h-full">
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
                <div className="p-6 md:p-7">
                  <h2 className="mb-3 font-display text-2xl text-ink">{svc.name}</h2>
                  <p className="mb-4 text-sm leading-relaxed text-ink/65">{svc.description}</p>
                  {svc.highlights && (
                    <ul className="mb-4 space-y-1.5">
                      {svc.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ink/60">
                          <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                    Learn more →
                  </div>
                </div>
              </Link>
            </CardTiltLayer>
          ))}
        </StaggerChildren>

        <FadeUp>
          <div className="mt-24 text-center">
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              {siteConfig.cta.primary}
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

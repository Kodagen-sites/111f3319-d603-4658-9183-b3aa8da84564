import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import manifest from "@/content/asset-manifest.json";
import { FadeUp, StaggerChildren, StickyScrollSection, MagneticButton } from "@/components/motion";

const images = (manifest as { images?: Record<string, string> }).images ?? {};

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.description };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const idx = siteConfig.services.findIndex((s) => s.slug === slug);
  const nextService = siteConfig.services[(idx + 1) % siteConfig.services.length];
  const heroImg =
    images[`service-${slug}`] ||
    resolveImage({ brandColor: "#1F3252", keyword: `${service.name} motorsport`, fallbackTier: "gradient" });

  return (
    <main>
      <PageHero eyebrow="Service" title={service.name} image={heroImg} intro={service.description} />

      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeUp>
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-ink"
          >
            ← All services
          </Link>
        </FadeUp>

        {service.highlights && (
          <section className="mb-16">
            <FadeUp>
              <h2 className="mb-8 font-display text-2xl text-ink md:text-3xl">What&apos;s included</h2>
            </FadeUp>
            <StaggerChildren staggerDelay={0.06} className="space-y-3">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-surface p-4 transition-colors hover:border-primary/30"
                >
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-ink/85">{h}</span>
                </div>
              ))}
            </StaggerChildren>
          </section>
        )}

        <section className="mb-20">
          <StickyScrollSection
            sticky={
              <div>
                <FadeUp>
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                    Our approach
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="mb-4 font-display text-4xl font-light leading-[1.05] text-ink md:text-5xl">
                    How we work
                  </h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="leading-relaxed text-ink/65">
                    A clear, repeatable process so the car arrives at every round quicker than the last.
                  </p>
                </FadeUp>
              </div>
            }
            scrolling={siteConfig.process.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink/10 bg-surface p-6 transition-colors hover:border-primary/30 md:p-7">
                  <div className="mb-3 font-mono text-sm text-primary">0{step.step}</div>
                  <h3 className="mb-2 font-display text-xl text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/65">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          />
        </section>

        <FadeUp>
          <div className="mb-12 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
              as="a"
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-sm text-bg transition-all hover:brightness-110"
            >
              Get started →
            </MagneticButton>
            <Link
              href={`/services/${nextService.slug}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink/20 px-8 py-4 font-display text-sm text-ink transition-colors hover:bg-ink/5"
            >
              Next: {nextService.name} →
            </Link>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

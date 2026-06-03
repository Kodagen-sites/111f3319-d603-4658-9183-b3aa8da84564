import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { resolveImage } from "@/lib/image-fallback";
import manifest from "@/content/asset-manifest.json";

const images = (manifest as { images?: Record<string, string> }).images ?? {};
const heroImg =
  images["section-contact"] ||
  resolveImage({ brandColor: "#1F3252", keyword: "formula one paddock pit lane", fallbackTier: "gradient" });

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner with Velocity Racing, or chase a seat. The conversation starts here.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Let's chase the apex."
        image={heroImg}
        intro="Whether you're a brand seeking the fastest billboard in sport or a driver chasing a seat, tell us what you have in mind."
      />
      <div className="mx-auto max-w-5xl px-6 py-24">
        <ContactForm />
      </div>
    </main>
  );
}

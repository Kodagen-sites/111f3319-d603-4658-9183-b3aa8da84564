import type { Metadata } from "next";
import VideoHomepage from "@/components/VideoHomepage";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
  description: siteConfig.company.description,
};

export default function HomePage() {
  return <VideoHomepage />;
}

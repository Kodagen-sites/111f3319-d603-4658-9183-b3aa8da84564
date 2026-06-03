"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { FadeUp, StaggerChildren, MagneticButton } from "@/components/motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New partnership inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`,
    );
    window.location.href = `mailto:${siteConfig.company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <FadeUp className="lg:col-span-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-ink/10 bg-surface p-8"
        >
          <StaggerChildren staggerDelay={0.05} className="space-y-5">
            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                Name
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-ink placeholder-ink/30 focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-ink placeholder-ink/30 focus:border-primary focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-ink placeholder-ink/30 focus:border-primary focus:outline-none"
                  placeholder="Acme Inc."
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
                How can we help?
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-y rounded-xl border border-ink/15 bg-bg px-4 py-3 text-ink placeholder-ink/30 focus:border-primary focus:outline-none"
                placeholder="Tell us about the partnership, seat, or project..."
              />
            </div>

            <MagneticButton
              as="button"
              className="w-full min-h-[48px] rounded-full bg-primary px-8 py-4 font-display text-sm text-bg transition-all hover:brightness-110"
              onClick={() => {
                const form = document.querySelector("form") as HTMLFormElement;
                form?.requestSubmit();
              }}
            >
              {submitted ? "Email opened — send when ready" : "Send message →"}
            </MagneticButton>

            <p className="text-center font-mono text-[10px] text-ink/40">
              This form opens your email client.
            </p>
          </StaggerChildren>
        </form>
      </FadeUp>

      <div className="space-y-4">
        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-ink/10 bg-surface p-6">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">Direct</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-primary" />
                <a href={`mailto:${siteConfig.company.email}`} className="text-sm text-ink hover:text-primary">
                  {siteConfig.company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-primary" />
                <a href={`tel:${siteConfig.company.phone}`} className="text-sm text-ink hover:text-primary">
                  {siteConfig.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-primary" />
                <span className="text-sm text-ink">{siteConfig.company.location}</span>
              </li>
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="rounded-2xl border border-ink/10 bg-surface p-6">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
              What to expect
            </div>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>• Response within one business day</li>
              <li>• An introductory call with the team</li>
              <li>• A tailored partnership proposal</li>
              <li>• Paddock access for serious enquiries</li>
            </ul>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}

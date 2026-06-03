import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

const company = siteConfig.company.name;
const email = siteConfig.company.email;
const jurisdiction = siteConfig.company.location;
const effectiveDate = new Date().toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company} collects, uses, and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">Legal</p>
      <h1 className="mt-4 font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-ink/60">Effective {effectiveDate}</p>

      <div className="mt-12 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_li]:text-ink/80 [&_p]:text-ink/80 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        <p>
          {company} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy.
          This policy explains what information we collect, how we use it, and the choices you have.
          By using this website you agree to this policy.
        </p>

        <div>
          <h2>Information we collect</h2>
          <ul>
            <li><strong>Information you provide</strong> — name, email, company, and any message you send through our contact forms.</li>
            <li><strong>Usage data</strong> — pages visited, time on site, referring URL, and approximate location, collected through standard analytics.</li>
            <li><strong>Cookies</strong> — small files that keep the site working and help us understand how it is used. You can disable cookies in your browser.</li>
          </ul>
        </div>

        <div>
          <h2>How we use your information</h2>
          <ul>
            <li>To respond to enquiries and partnership requests.</li>
            <li>To improve our website, content, and offerings.</li>
            <li>To send updates you have asked to receive. You can opt out at any time.</li>
            <li>To meet legal and regulatory obligations.</li>
          </ul>
        </div>

        <div>
          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. We share it only with service providers who
            help us operate this website (such as hosting and analytics providers), and only as
            needed for them to perform their work, or where required by law.
          </p>
        </div>

        <div>
          <h2>Data retention</h2>
          <p>
            We keep personal information only as long as needed for the purposes described above or
            as required by law, then delete or anonymise it.
          </p>
        </div>

        <div>
          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, or delete your
            personal information, or to object to certain processing. To exercise these rights,
            contact us at <a className="underline" href={`mailto:${email}`}>{email}</a>.
          </p>
        </div>

        <div>
          <h2>Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your information. No
            method of transmission over the internet is fully secure, so we cannot guarantee
            absolute security.
          </p>
        </div>

        <div>
          <h2>Children</h2>
          <p>This website is not directed to children under 13, and we do not knowingly collect their information.</p>
        </div>

        <div>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The effective date above shows when it was
            last revised. Material changes will be posted on this page.
          </p>
        </div>

        <div>
          <h2>Contact us</h2>
          <p>
            Questions about this policy or your data? Email{" "}
            <a className="underline" href={`mailto:${email}`}>{email}</a>. We operate in {jurisdiction}.
          </p>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Lock, ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useIsMobile, useScrollState } from "./hooks";

/**
 * Header #4 — MACBOOK BROWSER FRAME
 * The site appears to render inside a faux macOS browser window — traffic
 * lights, URL bar, tab chrome. Creates an "inside a laptop" product-demo feel.
 *
 * Best for: SaaS showcases, portfolios, product demos, dev tools
 *
 * Note: this header is TALLER than others (~80px vs 60px) to fit the browser
 * chrome. The generated site accounts for this via body padding-top: 80px in index.css.
 */
export default function HeaderMacBookFrame() {
  const scrolled = useScrollState(30);
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const domain = siteConfig.company.name.toLowerCase().replace(/\s+/g, "") + ".com";
  const currentPath = pathname === "/" ? "" : pathname;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)]" : ""
        }`}
      >
        {/* Traffic-light bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1c1c1e] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c841]" />
          </div>

          {!isMobile && (
            <div className="flex items-center gap-1 ml-4 text-white/40">
              <button className="p-1 hover:text-white/70"><ArrowLeft size={13} /></button>
              <button className="p-1 hover:text-white/70"><ArrowRight size={13} /></button>
              <button className="p-1 hover:text-white/70"><RotateCw size={12} /></button>
            </div>
          )}

          {/* Faux URL bar */}
          <div className="flex-1 mx-2 md:mx-4 max-w-xl mx-auto px-3 py-1 rounded-md bg-[#2c2c2e] flex items-center gap-2 text-[11px] text-white/60 font-mono">
            <Lock size={10} className="text-white/40" />
            <span className="truncate">
              <span className="text-white/40">https://</span>
              <span className="text-white">{domain}</span>
              <span className="text-white/50">{currentPath}</span>
            </span>
          </div>

          {!isMobile && (
            <div className="text-white/30 text-[10px] font-mono ml-2">⚡</div>
          )}
        </div>

        {/* Nav bar inside the "browser" */}
        <div className="bg-bg/95 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between px-6 py-3">
            <Link
              href="/"
              className="font-display font-bold tracking-[0.12em] uppercase text-sm text-white"
            >
              {siteConfig.company.name}
            </Link>

            {!isMobile ? (
              <>
                <nav className="flex gap-6">
                  {NAV_LINKS.slice(1).map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`relative font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                          active ? "text-primary" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="mb-underline"
                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
                          />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-md bg-primary text-bg text-xs font-display font-medium hover:brightness-110 transition-all"
                >
                  Start a Project
                </Link>
              </>
            ) : (
              <button
                onClick={() => setMenuOpen(true)}
                className="text-white"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-bg md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display font-bold tracking-[0.12em] uppercase text-sm text-white">
          {siteConfig.company.name}
        </div>
        <button onClick={onClose} className="text-white" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-white hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

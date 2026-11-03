"use client";

import { useSyncExternalStore } from "react";
import { Heart, MapPin, Sparkles, ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const subscribe = () => () => {};
const getSnapshot = () => new Date().getFullYear();
const getServerSnapshot = () => 2026;

export default function Footer() {
  const currentYear = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#4a1500] via-[#330d00] to-[#1f0800] text-amber-100 border-t border-orange-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-orange-500/20">
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="श्री भोमियाजी नन्दी गौशाला"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  हुणालनगर, बावड़ी सुरसिहान, खींवसर (नागौर)
                </p>
              </div>
            </div>

            <p className="text-amber-200/80 text-sm leading-relaxed max-w-md">
              {siteConfig.description}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-200 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>गौसेवा ही सच्ची सेवा है • गौमाता की जय</span>
            </div>
          </div>

          {/* Quick Links Column (Col 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full" />
              <span>त्वरित लिंक</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-amber-200/80 hover:text-white transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="text-amber-400 group-hover:translate-x-0.5 transition-all">
                      ›
                    </span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Address & Registration Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full" />
              <span>गौशाला विवरण</span>
            </h4>

            <div className="space-y-3 text-sm text-amber-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-1" />
                <p className="leading-relaxed text-xs sm:text-sm text-amber-200/90">
                  {siteConfig.trust.address}
                </p>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl border border-orange-500/20 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-amber-300/70">पंजीकरण संख्या:</span>
                  <span className="font-mono text-amber-200 font-semibold">
                    {siteConfig.trust.registrationNumber}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-1.5">
                  <span className="text-amber-300/70">G.P. कोड:</span>
                  <span className="font-mono text-amber-200 font-semibold">
                    {siteConfig.trust.gpCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/70">
          <p className="text-center sm:text-left">
            © {currentYear} {siteConfig.name}. सर्वाधिकार सुरक्षित।
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-200">
              <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
              <span>निस्वार्थ गौसेवा के लिए समर्पित</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/40 text-amber-200 transition-colors"
              aria-label="शीर्ष पर जाएं"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

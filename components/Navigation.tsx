"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, MapPin, Sparkles } from "lucide-react";
import { siteConfig, assetPath } from "@/config/site";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar in Sacred Bhagwa */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-gradient-to-r from-[#7c2200] via-[#c43c00] to-[#e65100] text-white py-2 px-4 text-center text-xs sm:text-sm border-b border-amber-300/20 overflow-hidden shadow-sm"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
              <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-amber-50 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse flex-shrink-0" />
                <span>गौसेवा ही सच्ची सेवा है</span>
                <span className="opacity-50">•</span>
                <span>आइए, गौमाता की सेवा में सहभागी बनें</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse hidden sm:inline flex-shrink-0" />
              </div>
              <div className="hidden lg:flex items-center gap-2 text-xs text-amber-200 font-mono">
                <MapPin className="w-3 h-3 text-amber-300" />
                <span>हुणालनगर, खींवसर (नागौर)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200/60 py-2"
            : "bg-white/90 md:bg-black/35 backdrop-blur-sm text-stone-800 md:text-white py-3 border-b border-amber-400/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#c43c00] rounded-xl p-1"
              aria-label="मुख्य पृष्ठ"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src={assetPath("/images/logo.svg")}
                  alt="श्री भोमियाजी नन्दी गौशाला प्रतीक"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-base md:text-lg tracking-tight leading-tight transition-colors ${
                    scrolled
                      ? "text-[#7c2200] group-hover:text-[#c43c00]"
                      : "text-stone-900 md:text-white group-hover:text-amber-300"
                  }`}
                >
                  {siteConfig.name}
                </span>
                <span
                  className={`text-[10px] md:text-xs font-medium tracking-wide ${
                    scrolled ? "text-stone-500" : "text-stone-600 md:text-amber-200"
                  }`}
                >
                  हुणालनगर, खींवसर (नागौर)
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    scrolled
                      ? "text-stone-700 hover:text-[#c43c00] hover:bg-orange-50"
                      : "text-stone-100 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("#gauseva")}
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-[#ff6d00] to-[#c43c00] text-white rounded-full font-bold text-sm shadow-md hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-amber-300/30"
              >
                <Heart className="w-4 h-4 fill-white" />
                गौसेवा करें
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors ${
                scrolled
                  ? "text-stone-800 hover:bg-orange-50"
                  : "text-stone-900 md:text-white hover:bg-white/20"
              }`}
              aria-label="मेनू खोलें/बंद करें"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#fffaf5] text-stone-800 border-t border-orange-200 shadow-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {siteConfig.nav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-3 text-stone-700 hover:text-[#c43c00] hover:bg-orange-100/70 rounded-xl font-semibold text-sm transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-orange-400">›</span>
                  </button>
                ))}

                <div className="pt-2">
                  <button
                    onClick={() => handleNavClick("#gauseva")}
                    className="w-full px-5 py-3.5 bg-gradient-to-r from-[#ff6d00] to-[#c43c00] text-white rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    गौसेवा में सहभागी बनें
                  </button>
                </div>

                <div className="pt-3 pb-1 border-t border-orange-200/60 text-xs text-stone-500 text-center">
                  <span>पंजीकरण संख्या: </span>
                  <span className="font-mono text-[#7c2200] font-semibold">
                    {siteConfig.trust.registrationNumber}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Shield, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={siteConfig.images.hero}
          alt="श्री भोमियाजी नन्दी गौशाला का मनोरम दृश्य"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        {/* Layered Gradients with warm saffron and deep dark tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-transparent" />
      </div>

      {/* Floating Decorative Elements in Sacred Gold/Bhagwa */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-40 right-16 w-20 h-20 opacity-30 pointer-events-none z-10"
      >
        <svg viewBox="0 0 100 100" className="text-[#ff9800] fill-current">
          <path d="M50 0 C60 30, 90 40, 100 50 C70 60, 60 90, 50 100 C40 70, 10 60, 0 50 C30 40, 40 10, 50 0 Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute bottom-28 right-36 w-28 h-28 opacity-25 pointer-events-none z-10"
      >
        <svg viewBox="0 0 100 100" className="text-[#e65100] fill-current">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M50 15 C65 35, 65 65, 50 85 C35 65, 35 35, 50 15 Z" />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7c2200]/80 to-[#c43c00]/80 backdrop-blur-md border border-amber-300/40 mb-6 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="text-amber-200 text-xs sm:text-sm font-bold tracking-wider">
              सेवा • समर्पण • संरक्षण
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-amber-100 text-xs hidden sm:inline">
              हुणालनगर, खींवसर (नागौर)
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md"
          >
            गौमाता की सेवा,
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
              हमारा परम धर्म
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-stone-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={() => handleScroll("#gauseva")}
              className="group px-7 py-4 bg-gradient-to-r from-[#ff6d00] to-[#c43c00] text-white rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-300 border border-amber-300/30"
            >
              <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
              <span>गौसेवा में सहभागी बनें</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScroll("#gallery")}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-amber-300/50 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>हमारी गौशाला देखें</span>
            </button>
          </motion.div>

          {/* Trust Highlights Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-amber-300/20"
          >
            <div className="flex items-center gap-2 text-stone-200 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>दैनिक हरा चारा व पोषण</span>
            </div>
            <div className="flex items-center gap-2 text-stone-200 text-xs sm:text-sm">
              <Shield className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>स्वच्छ व सुरक्षित आश्रय</span>
            </div>
            <div className="flex items-center gap-2 text-stone-200 text-xs sm:text-sm col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>बीमार गौवंश की चिकित्सा</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gentle Bottom Transition Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfaf6] to-transparent z-10 pointer-events-none" />
    </section>
  );
}

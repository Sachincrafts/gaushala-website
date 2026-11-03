"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function CTASection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background Image with Layered Bhagwa Gradient */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={siteConfig.images.ctaBackground}
          alt="गौसेवा में सहभागिता का संकल्प"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7c2200]/95 via-[#c43c00]/90 to-[#e65100]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-amber-200 text-xs sm:text-sm font-bold border border-amber-300/40 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>पुण्य और परोपकार का आह्वान</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            आइए, गौसेवा के इस
            <span className="block mt-2 text-amber-300">पावन कार्य से जुड़ें</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow">
            आपका स्नेह, समय और सहयोग गौमाता की सेवा के संकल्प को आगे बढ़ाने में सहायक हो सकता है।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleScroll("#about")}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-orange-50 text-[#7c2200] rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 border border-amber-300/40"
            >
              <span>गौशाला के बारे में जानें</span>
              <ArrowRight className="w-5 h-5 text-[#c43c00]" />
            </button>

            <button
              onClick={() => handleScroll("#contact")}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff6d00] to-[#c43c00] hover:from-[#c43c00] hover:to-[#7c2200] text-white rounded-full font-bold text-base sm:text-lg shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 border border-amber-300/40"
            >
              <Phone className="w-5 h-5" />
              <span>संपर्क जानकारी देखें</span>
            </button>
          </div>

          {/* Slogan pill */}
          <div className="mt-12 inline-flex items-center gap-2 text-xs sm:text-sm text-amber-200 font-medium">
            <Heart className="w-4 h-4 text-amber-300 fill-current" />
            <span>गौमाता की सेवा ही समस्त कष्टों का निवारण है</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

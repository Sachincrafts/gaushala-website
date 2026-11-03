"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#7c2200] via-[#c43c00] to-[#e65100] text-white py-2 px-4 text-center text-xs sm:text-sm border-b border-amber-300/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-amber-50 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-200 flex-shrink-0 animate-pulse" />
          <span>गौसेवा ही सच्ची सेवा है</span>
          <span className="opacity-50">•</span>
          <span>आइए, गौमाता की सेवा में सहभागी बनें</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-200 hidden sm:inline flex-shrink-0 animate-pulse" />
        </div>
        <div className="hidden lg:flex items-center gap-2 text-xs text-amber-200 font-mono">
          <MapPin className="w-3 h-3 text-amber-200" />
          <span>{siteConfig.trust.address}</span>
        </div>
      </div>
    </motion.div>
  );
}

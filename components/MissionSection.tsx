"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Stethoscope, Home, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  heart: Heart,
  leaf: Leaf,
  stethoscope: Stethoscope,
  home: Home,
};

export default function MissionSection() {
  return (
    <section id="mission" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/80 rounded-full text-[#7c2200] text-xs sm:text-sm font-bold border border-orange-300/40 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#e65100]" />
            <span>हमारा पावन उद्देश्य</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-4 leading-tight">
            गौमाता की सेवा के संकल्प
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            श्री भोमियाजी नन्दी गौशाला में हमारा प्रत्येक प्रयास असहाय, वृद्ध व बीमार गौवंश के संरक्षण, पोषण और स्वास्थ्य-कल्याण को समर्पित है।
          </p>
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.missions.map((mission, index) => {
            const Icon = iconMap[mission.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#fffaf5] hover:bg-white rounded-3xl p-7 border border-orange-200/80 hover:border-[#c43c00]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Highlight Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#c43c00] via-[#e65100] to-[#ff6d00] rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 border border-amber-300/30">
                      <Icon className="w-7 h-7 text-amber-100" />
                    </div>
                    <span className="text-[11px] font-bold text-[#7c2200] bg-orange-100 px-2.5 py-1 rounded-full border border-orange-200/60">
                      {mission.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#7c2200] mb-3 group-hover:text-[#c43c00] transition-colors">
                    {mission.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {mission.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-100 flex items-center justify-between text-xs text-[#c43c00] font-semibold">
                  <span>संकल्प {index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#c43c00]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white relative">
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
            <span>ट्रस्ट प्रबंधन समिति</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-4">
            हमारे पदाधिकारी
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            श्री भोमियाजी नन्दी गौशाला के संचालन, नीति-निर्धारण और गौसेवा व्यवस्था में समर्पित मुख्य पदाधिकारीगण।
          </p>
        </motion.div>

        {/* Office Bearers Grid - 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteConfig.officeBearers.map((member, index) => {
            const initialLetter = member.name.charAt(0);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-[#fffaf5] hover:bg-white rounded-3xl p-6 border border-orange-200/80 hover:border-[#c43c00]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  {/* Monogram Avatar with Sacred Bhagwa & Gold Ring */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c43c00] via-[#e65100] to-[#ff6d00] text-amber-100 flex items-center justify-center font-bold text-2xl shadow-md border-2 border-amber-300/60 group-hover:scale-105 transition-transform duration-300">
                      {initialLetter}
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title / Designation Badge in Bhagwa */}
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#c43c00] text-white shadow-sm mb-3">
                    {member.title}
                  </span>

                  {/* Member Name */}
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#7c2200] transition-colors mb-2">
                    {member.name}
                  </h3>

                  {/* Role Description */}
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {member.roleDescription}
                  </p>
                </div>

                {/* Bottom Trust Tag */}
                <div className="mt-5 pt-3 border-t border-orange-100 w-full text-[11px] text-orange-800/60 font-semibold">
                  गौशाला ट्रस्टी
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500 bg-orange-50 inline-block px-5 py-2.5 rounded-full border border-orange-200">
            * उपर्युक्त पदाधिकारीगण की सूची ट्रस्ट के आधिकारिक पंजीयन प्रपत्र व रसीद अनुसार संकलित है।
          </p>
        </div>
      </div>
    </section>
  );
}

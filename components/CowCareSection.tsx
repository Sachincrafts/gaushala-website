"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, HeartHandshake, Shield, Stethoscope, Utensils } from "lucide-react";
import { siteConfig } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

const careIcons = [Stethoscope, Utensils, Shield, HeartHandshake];

export default function CowCareSection() {
  return (
    <section className="py-20 md:py-28 bg-[#fdfaf6] relative overflow-hidden">
      {/* Decorative Blur Spheres in Bhagwa & Saffron */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#ff6d00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#c43c00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/80 rounded-full text-[#7c2200] text-xs sm:text-sm font-bold border border-orange-300/40 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#e65100]" />
              <span>समर्पित सेवा व्यवस्था</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-6 leading-tight">
              गौमाता की संपूर्ण
              <span className="block text-[#c43c00] mt-1">देखभाल और चिकित्सा</span>
            </h2>

            <p className="text-stone-700 text-base sm:text-lg mb-8 leading-relaxed">
              श्री भोमियाजी नन्दी गौशाला में गौमाता एवं नन्दी महाराज की प्रत्येक दिनचर्या का विशेष ध्यान रखा जाता है। बीमार गौवंश की त्वरित चिकित्सा, स्वच्छता, पोषण और संरक्षण हमारी सर्वोच्च प्राथमिकता है।
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.cowCareHighlights.map((item, index) => {
                const IconComponent = careIcons[index % careIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-orange-200/80 transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white flex items-center justify-center shadow-sm">
                          <IconComponent className="w-5 h-5 text-amber-100" />
                        </div>
                        <span className="text-[11px] font-bold text-[#7c2200] bg-orange-100 px-2.5 py-0.5 rounded-full border border-orange-200">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="font-bold text-[#7c2200] text-base mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-orange-100 flex items-center gap-1.5 text-xs text-[#c43c00] font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      <span>दैनिक सुनिश्चित व्यवस्था</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
              <ImageWithFallback
                src={siteConfig.images.cowCare}
                alt="गौमाता की प्रेमपूर्वक देखभाल एवं चिकित्सा"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              {/* Tag for sick cow care in Bhagwa */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-bold bg-[#c43c00]/95 text-white px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-sm flex items-center gap-1.5 border border-amber-300/40">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  बीमार व घायल गौसेवा
                </span>
              </div>

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white bg-black/45 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20">
                <p className="text-xs sm:text-sm font-medium leading-relaxed">
                  “गौसेवा केवल एक कर्तव्य नहीं, अपितु करुणा, दया और ईश्वर की साक्षात आराधना का पावन मार्ग है।”
                </p>
                <span className="text-[11px] text-amber-300 font-bold block mt-2">
                  — श्री भोमियाजी नन्दी गौशाला, हुणालनगर
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

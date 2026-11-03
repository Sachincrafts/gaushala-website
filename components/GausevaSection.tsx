"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart, Info, Check, ArrowRight, ShieldAlert } from "lucide-react";
import { siteConfig, GausevaType } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function GausevaSection() {
  const [selectedSeva, setSelectedSeva] = useState<GausevaType | null>(null);

  const handleContactScroll = () => {
    setSelectedSeva(null);
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="gauseva" className="py-20 md:py-28 bg-white relative">
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
            <Heart className="w-4 h-4 text-[#c43c00] fill-current" />
            <span>पावन गौसेवा प्रकल्प</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-4">
            आपकी सेवा, गौमाता का सहारा
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            गौशाला की आधिकारिक रसीद में उल्लिखित मुख्य सेवा श्रेणियां, जिनके माध्यम से बीमार, वृद्ध और निराश्रित गौवंश की निरंतर सेवा की जाती है।
          </p>
        </motion.div>

        {/* Gauseva Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.gausevaTypes.map((seva, index) => (
            <motion.div
              key={seva.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-[#fffaf5] hover:bg-white rounded-3xl overflow-hidden border border-orange-200/80 hover:border-[#c43c00]/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-48 w-full overflow-hidden bg-stone-800">
                  <ImageWithFallback
                    src={seva.image}
                    alt={seva.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold bg-[#7c2200]/90 backdrop-blur-md text-amber-100 px-3 py-1 rounded-full shadow border border-amber-300/30">
                    {seva.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#7c2200] mb-2 group-hover:text-[#c43c00] transition-colors">
                    {seva.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {seva.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedSeva(seva)}
                  className="w-full py-3 px-4 bg-white group-hover:bg-[#c43c00] text-[#c43c00] group-hover:text-white border border-[#c43c00]/30 group-hover:border-transparent rounded-xl font-bold text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>सेवा के बारे में जानें</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Informational Modal */}
      <AnimatePresence>
        {selectedSeva && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedSeva(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-orange-200 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#c43c00] tracking-wider uppercase bg-orange-100 px-3 py-1 rounded-full">
                    {selectedSeva.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#7c2200] mt-2">
                    {selectedSeva.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSeva(null)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors text-stone-500 hover:text-stone-800"
                  aria-label="बंद करें"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-5 text-stone-700">
                <p className="text-base sm:text-lg leading-relaxed text-stone-800">
                  {selectedSeva.fullDesc}
                </p>

                <div className="bg-orange-50/70 p-4 sm:p-5 rounded-2xl border border-orange-200">
                  <h4 className="font-bold text-[#7c2200] mb-1 text-sm sm:text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c43c00]" />
                    सेवा का धार्मिक एवं व्यावहारिक महत्व:
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {selectedSeva.importance}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-stone-900 text-sm mb-3">
                    गौशाला में इस सेवा के मुख्य घटक:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSeva.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-stone-600">
                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#c43c00]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clear Disclaimer */}
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <ShieldAlert className="w-5 h-5 text-[#c43c00] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>सूचना (प्रोटोटाइप):</strong> यह वेबसाइट वर्तमान में सूचनात्मक डिजाइन प्रोटोटाइप है। कोई भी ऑनलाइन भुगतान या गेटवे सक्रिय नहीं है। सेवा या दान सहयोग के संबंध में गौशाला पदाधिकारियों से प्रत्यक्ष संपर्क करें।
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-orange-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleContactScroll}
                  className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white rounded-xl font-bold text-sm shadow hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>गौशाला से संपर्क करें</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedSeva(null)}
                  className="py-3.5 px-6 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  बंद करें
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

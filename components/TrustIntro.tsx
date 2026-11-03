"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function TrustIntro() {
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fdfaf6] relative overflow-hidden">
      {/* Decorative background watermarks in warm Bhagwa */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6d00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c43c00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image & Trust Badge Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[340px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={siteConfig.images.about}
                alt="श्री भोमियाजी नन्दी गौशाला का वात्सल्यमय वातावरण"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm sm:text-base font-medium italic drop-shadow">
                  “गौमाता के प्रत्येक अंग में देवों का वास है, उनकी सेवा से जीवन में सुख, शांति और समृद्धि का संचार होता है।”
                </p>
              </div>
            </div>

            {/* Overlaid Floating Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:absolute -bottom-8 -right-4 sm:max-w-xs bg-white rounded-2xl p-5 shadow-xl border border-orange-200 mt-4 sm:mt-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#c43c00]">
                  <ShieldCheck className="w-5 h-5 text-[#c43c00]" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">पंजीकृत गौशाला ट्रस्ट</h4>
                  <p className="text-xs text-orange-700 font-mono font-semibold">COOP/2025/NAGAUR</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                हुणालनगर (खींवसर), राजस्थान में गौमाता एवं नन्दी महाराज की सेवा में पूर्णतः समर्पित।
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100/80 rounded-full text-[#7c2200] text-xs sm:text-sm font-bold shadow-sm border border-orange-300/40 mb-4">
              <Sparkles className="w-4 h-4 text-[#e65100]" />
              <span>हमारे बारे में</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-6 leading-[1.2]">
              सेवा और करुणा का
              <span className="block text-[#c43c00] mt-1">पवित्र संकल्प</span>
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">{siteConfig.name}</strong> की स्थापना
                हुणालनगर, बावड़ी सुरसिहान, खींवसर (नागौर) में गौमाता एवं नन्दी महाराज की निस्वार्थ सेवा, संरक्षण,
                और संवर्धन के उद्देश्य से की गई है।
              </p>

              <p>
                हमारी गौशाला में निराश्रित, वृद्ध, दुर्बल और दुर्घटनाग्रस्त गौवंश को सुरक्षित आश्रय, नियमित पौष्टिक हरा व सूखा चारा,
                स्वच्छ पेयजल और समय-समय पर आवश्यक चिकित्सा सुविधा उपलब्ध कराई जाती है। प्रत्येक गौवंश की देखरेख पारिवारिक स्नेह
                व श्रद्धा के साथ की जाती है।
              </p>

              <p className="text-stone-700 text-sm sm:text-base bg-orange-50/80 p-4 rounded-xl border-l-4 border-[#c43c00]">
                गौमाता की सेवा समस्त मानवीय कर्तव्यों में सर्वोच्च है। हम सभी गौभक्तों, समाजसेवियों और धर्मप्रेमियों से
                इस पावन कार्य में सहयोग और सहभागिता का विनम्र आह्वान करते हैं।
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setShowModal(true)}
                className="group px-7 py-3.5 bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white rounded-full font-bold text-base hover:shadow-lg hover:shadow-orange-600/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 border border-amber-300/30"
              >
                <span>हमारे बारे में जानें</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScroll("#mission")}
                className="px-6 py-3.5 bg-white hover:bg-orange-50 text-stone-800 rounded-full font-semibold text-base border border-orange-200 shadow-sm transition-colors"
              >
                हमारे संकल्प देखें
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Informational About Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 border-b border-orange-200 mb-6">
                <div>
                  <span className="text-xs font-bold text-[#c43c00] tracking-wider uppercase">
                    ट्रस्ट परिचय विवरण
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#7c2200] mt-1">
                    {siteConfig.name}
                  </h3>
                  <p className="text-sm text-stone-500">{siteConfig.trust.address}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors"
                  aria-label="बंद करें"
                >
                  <X className="w-6 h-6 text-stone-600" />
                </button>
              </div>

              <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
                <div className="bg-orange-50/70 p-4 rounded-2xl border border-orange-200">
                  <h4 className="font-bold text-[#7c2200] mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#c43c00] fill-current" />
                    हमारा मुख्य संकल्प
                  </h4>
                  <p className="text-stone-600 text-sm">
                    बीमार व लाचार गौमाता और नन्दी महाराज को बेसहारा न रहने देना, उनके जीवन की रक्षा करना, पौष्टिक चारा व शुद्ध जल देना,
                    और किसी भी प्रकार के रोग या चोट में त्वरित औषधीय सेवा प्रदान करना।
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-stone-50 rounded-xl border border-orange-200/60">
                    <span className="text-xs text-stone-500 block">पंजीकरण संख्या</span>
                    <span className="font-mono font-bold text-[#7c2200] text-xs sm:text-sm">
                      {siteConfig.trust.registrationNumber}
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-orange-200/60">
                    <span className="text-xs text-stone-500 block">G.P. कोड</span>
                    <span className="font-mono font-bold text-[#7c2200] text-xs sm:text-sm">
                      {siteConfig.trust.gpCode}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 italic bg-amber-50 p-3 rounded-xl border border-amber-200">
                  सूचना: यह वेबसाइट वर्तमान में ट्रस्ट का आधिकारिक UI प्रोटोटाइप है। गौशाला भ्रमण या प्रत्यक्ष सेवा हेतु कृपया खींवसर स्थित गौशाला परिसर में पधारें।
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-200 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    handleScroll("#contact");
                  }}
                  className="flex-1 py-3 px-5 bg-gradient-to-r from-[#c43c00] to-[#ff6d00] text-white rounded-xl font-bold text-sm text-center shadow"
                >
                  संपर्क जानकारी देखें
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold text-sm transition-colors"
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Copy, ExternalLink, Check, Sparkles, Building2, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function GaushalaInfo() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.trust.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMap = () => {
    const searchQuery = encodeURIComponent(
      "हुणालनगर, बावड़ी सुरसिहान, खींवसर, नागौर, राजस्थान"
    );
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${searchQuery}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="py-20 md:py-28 bg-[#fdfaf6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-200/80"
        >
          {/* Header Banner in Majestic Bhagwa */}
          <div className="bg-gradient-to-r from-[#7c2200] via-[#c43c00] to-[#e65100] p-6 sm:p-10 text-white relative">
            <div className="flex items-center gap-2 text-amber-200 text-xs sm:text-sm font-semibold mb-2">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>आधिकारिक ट्रस्ट सूचना पट्ट</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              {siteConfig.trust.name}
            </h2>
            <p className="text-amber-100 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              हुणालनगर, बावड़ी सुरसिहान, तहसील खींवसर (नागौर) में गौमाता की सेवा, संरक्षण और संवर्धन हेतु पंजीकृत न्यास।
            </p>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Address Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-orange-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 text-[#c43c00]">
                  <MapPin className="w-6 h-6 text-[#c43c00]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-orange-800/70 uppercase tracking-wider block mb-1">
                    गौशाला का आधिकारिक पता
                  </span>
                  <p className="text-stone-900 font-bold text-lg sm:text-xl leading-relaxed">
                    {siteConfig.trust.address}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 pl-16 md:pl-0">
                <button
                  onClick={handleCopyAddress}
                  className="px-5 py-3 bg-orange-50 hover:bg-orange-100 text-[#7c2200] rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 border border-orange-200 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#c43c00]" />
                      <span className="text-[#c43c00]">पता कॉपी हो गया!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-stone-600" />
                      <span>पता कॉपी करें</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleOpenMap}
                  className="px-5 py-3 bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white rounded-xl font-bold text-sm shadow hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>गूगल मानचित्र पर देखें</span>
                </button>
              </div>
            </div>

            {/* Official Credentials Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-4 bg-[#fffaf5] rounded-2xl border border-orange-200/80">
                <div className="flex items-center gap-2 text-[#c43c00] font-semibold text-xs mb-1.5">
                  <FileText className="w-4 h-4" />
                  <span>ट्रस्ट पंजीकरण संख्या</span>
                </div>
                <p className="font-mono font-bold text-[#7c2200] text-sm sm:text-base">
                  {siteConfig.trust.registrationNumber}
                </p>
              </div>

              <div className="p-4 bg-[#fffaf5] rounded-2xl border border-orange-200/80">
                <div className="flex items-center gap-2 text-[#c43c00] font-semibold text-xs mb-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>ग्राम पंचायत (G.P.) कोड</span>
                </div>
                <p className="font-mono font-bold text-[#7c2200] text-sm sm:text-base">
                  {siteConfig.trust.gpCode}
                </p>
              </div>

              <div className="p-4 bg-[#fffaf5] rounded-2xl border border-orange-200/80 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-[#c43c00] font-semibold text-xs mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c43c00]" />
                  <span>प्रशासनिक क्षेत्राधिकार</span>
                </div>
                <p className="font-semibold text-stone-900 text-sm sm:text-base">
                  तहसील खींवसर, जिला नागौर (राज.)
                </p>
              </div>
            </div>

            {/* Visitor Guidance Notice */}
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-xs sm:text-sm text-stone-800 leading-relaxed">
              <strong className="text-[#7c2200]">आगंतुक परामर्श:</strong> गौशाला दर्शन, प्रत्यक्ष गौसेवा एवं चारा अर्पण हेतु श्रद्धालु दिन के समय पधार सकते हैं। कृपया गौशाला प्रांगण में स्वच्छता एवं शांति बनाए रखें।
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

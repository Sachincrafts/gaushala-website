"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, MapPin, ExternalLink, Sparkles, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    mobile?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; mobile?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "कृपया अपना पूरा नाम दर्ज करें।";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "नाम कम से कम २ अक्षरों का होना चाहिए।";
    }

    const cleanMobile = formData.mobile.trim();
    if (!cleanMobile) {
      newErrors.mobile = "कृपया अपना मोबाइल नंबर दर्ज करें।";
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile = "कृपया १० अंकों का वैध मोबाइल नंबर दर्ज करें (उदा. 9876543210)।";
    }

    if (!formData.message.trim()) {
      newErrors.message = "कृपया अपना संदेश या विचार लिखें।";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "संदेश कम से कम १० अक्षरों का होना चाहिए।";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      setFormData({ name: "", mobile: "", message: "" });
      setErrors({});
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>संपर्क एवं संवाद</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7c2200] tracking-tight mb-4">
            हमसे संपर्क करें
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            गौशाला भ्रमण, सेवा कार्य, अथवा किसी भी सूचना हेतु हमसे संपर्क करें या अपना संदेश भेजें।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Trust Address Box */}
            <div className="bg-[#fffaf5] rounded-3xl p-6 sm:p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-[#7c2200] mb-2">
                {siteConfig.trust.name}
              </h3>
              <p className="text-xs text-[#c43c00] font-bold uppercase tracking-wider mb-6">
                पंजीकृत गौशाला न्यास
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 text-[#c43c00] shadow-sm mt-0.5">
                    <MapPin className="w-5 h-5 text-[#c43c00]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-orange-800/70 block mb-1">
                      गौशाला का पता
                    </span>
                    <p className="text-stone-800 text-sm sm:text-base font-medium leading-relaxed">
                      {siteConfig.trust.address}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-orange-100">
                  <button
                    onClick={handleOpenMap}
                    className="w-full py-3 px-4 bg-white hover:bg-orange-50 text-[#7c2200] rounded-xl font-bold text-sm border border-orange-200 shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>गूगल मैप्स पर दिशा-निर्देश देखें</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Prototype Notice Box in Bhagwa */}
            <div className="bg-gradient-to-br from-[#7c2200] to-[#c43c00] rounded-3xl p-6 sm:p-8 text-white shadow-lg">
              <div className="flex items-center gap-2 text-amber-200 font-bold text-sm mb-2">
                <ShieldAlert className="w-4 h-4 text-amber-200" />
                <span>सूचना (UI प्रोटोटाइप)</span>
              </div>
              <p className="text-amber-100 text-xs sm:text-sm leading-relaxed">
                यह वेबसाइट वर्तमान में एक डिजाइन प्रोटोटाइप है। संपर्क फॉर्म का उपयोग डेमो परीक्षण के लिए है। गौशाला के वास्तविक कार्यकलापों और सेवा में भाग लेने के लिए कृपया सीधे गौशाला परिसर में पधारें।
              </p>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#fffaf5] rounded-3xl p-6 sm:p-10 border border-orange-200"
          >
            <h3 className="text-2xl font-bold text-[#7c2200] mb-2">
              अपना संदेश भेजें (डेमो)
            </h3>
            <p className="text-stone-600 text-sm mb-8">
              कृपया नीचे दिया गया फॉर्म भरें। सभी फ़ील्ड आवश्यक हैं।
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-stone-800 mb-2">
                  आपका नाम <span className="text-[#c43c00]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="उदा. रमेश कुमार"
                  className={`w-full px-4 py-3.5 bg-white rounded-xl border text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
                    errors.name
                      ? "border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-orange-200 focus:border-[#c43c00] focus:ring-2 focus:ring-[#c43c00]/20"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-bold text-stone-800 mb-2">
                  मोबाइल नंबर <span className="text-[#c43c00]">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="१० अंकों का मोबाइल नंबर (उदा. 9876543210)"
                  maxLength={10}
                  className={`w-full px-4 py-3.5 bg-white rounded-xl border text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
                    errors.mobile
                      ? "border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-orange-200 focus:border-[#c43c00] focus:ring-2 focus:ring-[#c43c00]/20"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.mobile}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-stone-800 mb-2">
                  संदेश या सेवा विचार <span className="text-[#c43c00]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="अपना संदेश यहाँ लिखें..."
                  className={`w-full px-4 py-3.5 bg-white rounded-xl border text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-orange-200 focus:border-[#c43c00] focus:ring-2 focus:ring-[#c43c00]/20"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button in Bhagwa */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] hover:from-[#9e2a00] hover:to-[#c43c00] text-white rounded-xl font-bold text-base shadow-md hover:shadow-orange-600/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed border border-amber-300/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    <span>संदेश भेजा जा रहा है...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>संदेश भेजें (डेमो)</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Demo Submission Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center border border-orange-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#c43c00] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-[#7c2200] mb-2">
                संदेश दर्ज हुआ (डेमो)
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                धन्यवाद! आपका संदेश सफलतापूर्वक रिकॉर्ड कर लिया गया है। कृपया ध्यान दें कि यह एक फ्रंटेंड प्रोटोटाइप है, अतः कोई वास्तविक नेटवर्क संदेश प्रेषित नहीं हुआ है। गौशाला से संपर्क के लिए हुणालनगर स्थित पते पर पधारें।
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#c43c00] to-[#ff6d00] text-white rounded-xl font-bold text-sm shadow hover:shadow-orange-600/30 transition-colors"
              >
                समझ गया
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

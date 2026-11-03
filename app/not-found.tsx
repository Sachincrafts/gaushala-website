import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart } from "lucide-react";
import { siteConfig, assetPath } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfaf6] flex flex-col items-center justify-center p-4 text-center">
      <div className="relative w-20 h-20 mb-6">
        <Image
          src={assetPath("/images/logo.svg")}
          alt="श्री भोमियाजी नन्दी गौशाला प्रतीक"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="inline-block px-4 py-1.5 bg-orange-100 text-[#7c2200] text-xs font-bold rounded-full mb-4 border border-orange-200">
        त्रुटि ४०४ • पृष्ठ उपलब्ध नहीं है
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7c2200] mb-4">
        पृष्ठ नहीं मिला
      </h1>

      <p className="text-stone-600 max-w-md mx-auto text-sm sm:text-base mb-8 leading-relaxed">
        क्षमा करें, आप जिस पृष्ठ पर जाने का प्रयास कर रहे हैं वह इस समय उपलब्ध नहीं है या स्थानांतरित कर दिया गया है।
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3.5 bg-gradient-to-r from-[#c43c00] via-[#e65100] to-[#ff6d00] text-white rounded-full font-bold text-sm shadow hover:shadow-orange-600/30 transition-all inline-flex items-center justify-center gap-2 border border-amber-300/30"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>मुख्य पृष्ठ पर लौटें</span>
        </Link>
      </div>

      <div className="mt-12 text-xs text-stone-500 flex items-center gap-1.5">
        <Heart className="w-3.5 h-3.5 text-[#c43c00] fill-current" />
        <span>{siteConfig.name} • {siteConfig.trust.address}</span>
      </div>
    </div>
  );
}

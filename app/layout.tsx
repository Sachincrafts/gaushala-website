import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "श्री भोमियाजी नन्दी गौशाला | गौमाता की सेवा और संरक्षण",
  description: "श्री भोमियाजी नन्दी गौशाला में हम गौमाता की निस्वार्थ सेवा, संरक्षण और देखभाल के लिए समर्पित हैं। हुणालनगर, बावड़ी सुरसिहान, तहसील खींवसर, नागौर, राजस्थान।",
  keywords: "गौशाला, गौसेवा, गौमाता, नागौर, राजस्थान, गौ संरक्षण, cow shelter",
  openGraph: {
    title: "श्री भोमियाजी नन्दी गौशाला",
    description: "गौमाता की सेवा और संरक्षण के लिए समर्पित",
    type: "website",
    locale: "hi_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

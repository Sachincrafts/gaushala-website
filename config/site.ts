// Central configuration for Shri Bhomiyaji Nandi Gaushala website

export interface GalleryItem {
  id: number;
  title: string;
  category: "all" | "medical" | "cows" | "care" | "shelter";
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
}

export interface GausevaType {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  importance: string;
  features: string[];
  image: string;
  badge: string;
}

export interface MissionItem {
  id: string;
  title: string;
  description: string;
  icon: "heart" | "leaf" | "stethoscope" | "home";
  highlight: string;
}

export interface OfficeBearer {
  title: string;
  name: string;
  roleDescription: string;
}

export const siteConfig = {
  name: "श्री भोमियाजी नन्दी गौशाला",
  tagline: "गौसेवा ही सच्ची सेवा है • सेवा, समर्पण और संरक्षण का पावन संकल्प",
  description: "श्री भोमियाजी नन्दी गौशाला, हुणालनगर (खींवसर) में बीमार, वृद्ध, असहाय गौमाता एवं नन्दी महाराज की निस्वार्थ सेवा, त्वरित चिकित्सा, पोषण और आजीवन संरक्षण के लिए समर्पित एक पावन सेवा प्रकल्प।",

  // Trust Information from verified receipt
  trust: {
    name: "श्री भोमियाजी नन्दी गौशाला",
    locationVillage: "हुणालनगर, बावड़ी सुरसिहान",
    tehsil: "खींवसर",
    district: "नागौर",
    state: "राजस्थान",
    address: "हुणालनगर, बावड़ी सुरसिहान, तहसील: खींवसर (नागौर), राजस्थान",
    registrationNumber: "COOP/2025/NAGAUR/500372-03/10/2025",
    gpCode: "GP24/00469",
    mapSearchQuery: "Hunalnagar Khinvsar Nagaur Rajasthan",
  },

  // Office Bearers from verified receipt
  officeBearers: [
    {
      title: "अध्यक्ष",
      name: "मदनसिंह (राजलानी)",
      roleDescription: "गौशाला संचालन, समग्र मार्गदर्शन एवं व्यवस्था प्रबंधन",
    },
    {
      title: "उपाध्यक्ष",
      name: "कैलाशसिंह",
      roleDescription: "सह-संचालन, गौसेवा समन्वय एवं व्यवस्था सहयोग",
    },
    {
      title: "कोषाध्यक्ष",
      name: "मंगलालालसिंह",
      roleDescription: "वित्तीय पारदर्शिता, हिसाब-किताब एवं सेवा निधि प्रबंधन",
    },
    {
      title: "सचिव",
      name: "लखपतसिंह",
      roleDescription: "दैनिक कार्यप्रणाली, प्रशासनिक समन्वय एवं अभिलेख",
    },
    {
      title: "मंत्री",
      name: "बलदेवसिंह",
      roleDescription: "गौशाला विस्तार, जन-संपर्क एवं सेवक समन्वय",
    },
  ] as OfficeBearer[],

  // Navigation Links
  nav: [
    { label: "मुख्य पृष्ठ", href: "#home" },
    { label: "हमारे बारे में", href: "#about" },
    { label: "उद्देश्य", href: "#mission" },
    { label: "गौसेवा", href: "#gauseva" },
    { label: "गौशाला की झलक", href: "#gallery" },
    { label: "पदाधिकारी", href: "#team" },
    { label: "संपर्क करें", href: "#contact" },
  ],

  // Primary Authentic Cow Images (100% Real Indian Cattle & Gaushala photos)
  images: {
    hero: "/images/cows/gaushala-herd.jpg",
    about: "/images/cows/gaushala-shed.jpg",
    cowCare: "/images/cows/injured-cow.jpg",
    ctaBackground: "/images/cows/gaushala-chandigarh.jpg",
    fallback: "/images/cow-placeholder.svg",
  },

  // Gallery items - 100% authentic cows, sick/injured cow treatment, and gaushala
  gallery: [
    {
      id: 1,
      title: "दुर्घटनाग्रस्त व बीमार गौमाता की चिकित्सा",
      category: "medical",
      categoryLabel: "बीमार व घायल गौसेवा",
      src: "/images/cows/injured-cow.jpg",
      alt: "दुर्घटना में घायल गौमाता का उपचार",
      description: "सड़क दुर्घटना, चोट अथवा बीमारी से पीड़ित बेसहारा गौवंश को गौशाला में लाकर प्राथमिक उपचार, मरहम-पट्टी व दवाएं दी जाती हैं।",
    },
    {
      id: 2,
      title: "गौशाला में आश्रित विशाल गौवंश का झुंड",
      category: "shelter",
      categoryLabel: "गौशाला परिसर",
      src: "/images/cows/gaushala-herd.jpg",
      alt: "गौशाला परिसर में गायों का विशाल झुंड",
      description: "सैकड़ों असहाय, वृद्ध व बेसहारा गायों-नन्दियों को सुरक्षित आश्रय, धूप-छाया और संरक्षण का सुरक्षित वातावरण।",
    },
    {
      id: 3,
      title: "श्रद्धापूर्वक गौग्रास व ताजा चारा वितरण",
      category: "care",
      categoryLabel: "दैनिक चारा सेवा",
      src: "/images/cows/feeding-gomata.jpg",
      alt: "गौमाता को चारा खिलाते हुए",
      description: "प्रतिदिन प्रातः व सायं सेवकों व श्रद्धालुओं द्वारा गौमाता को ताजा हरा चारा और पौष्टिक आहार प्रेमपूर्वक खिलाया जाता है।",
    },
    {
      id: 4,
      title: "राजस्थान की सांचौरी देशी गौमाता व बछड़ा",
      category: "cows",
      categoryLabel: "गौमाता एवं नन्दी",
      src: "/images/cows/rajasthan-cow-calf.jpg",
      alt: "राजस्थान की देशी गौमाता और बछड़ा",
      description: "राजस्थान की पावन धरा पर ममतामयी देशी गौमाता और उसके नन्हे बछड़े का वात्सल्यमय और शांत दृश्य।",
    },
    {
      id: 5,
      title: "अशक्त व वृद्ध गौवंश की विशेष देखरेख",
      category: "medical",
      categoryLabel: "बीमार व घायल गौसेवा",
      src: "/images/cows/gaushala-resting.jpg",
      alt: "अशक्त गौमाता की देखभाल",
      description: "चलने-फिरने में असमर्थ, दुर्बल और वृद्ध गौवंश के लिए अलग शेड में कोमल बिछावन, सुपाच्य दलिया और निरंतर निगरानी।",
    },
    {
      id: 6,
      title: "गौशाला परिसर में सुरक्षित आश्रय शेड",
      category: "shelter",
      categoryLabel: "गौशाला परिसर",
      src: "/images/cows/gaushala-chandigarh.jpg",
      alt: "गौशाला का सुरक्षित टीन शेड परिसर",
      description: "गर्मी, शीत लहर व वर्षा से बचाव हेतु मजबूत हवादार शेड, जहाँ गौमाताएं निर्भय होकर विश्राम करती हैं।",
    },
    {
      id: 7,
      title: "स्वच्छ पेयजल कुंड व चारा खेलियां",
      category: "shelter",
      categoryLabel: "गौशाला परिसर",
      src: "/images/cows/gaushala-trough.jpg",
      alt: "गौवंश के लिए पानी की खेळ और चारा व्यवस्था",
      description: "गौवंश के लिए दिनभर स्वच्छ शीतल जल की पक्की खेलियां और उत्तम सूखे भूसे की नियमित व्यवस्था।",
    },
    {
      id: 8,
      title: "अनाथ बछड़ों का ममतामय संरक्षण",
      category: "cows",
      categoryLabel: "गौमाता एवं नन्दी",
      src: "/images/cows/calf-nursing.jpg",
      alt: "बछड़े का ममतामयी पोषण",
      description: "गौशाला में आश्रित नन्हे बछड़ों की विशेष देखरेख, संतुलित पोषण और स्नेहिल परिवेश।",
    },
  ] as GalleryItem[],

  // Mission Items
  missions: [
    {
      id: "seva",
      title: "गौमाता की सेवा",
      description: "बीमार, घायल और बेसहारा गौमाता व नन्दी महाराज की निस्वार्थ सेवा, सुरक्षा और आजीवन संरक्षण हमारा सर्वोपरि कर्तव्य है।",
      icon: "heart",
      highlight: "निस्वार्थ सेवा भाव",
    },
    {
      id: "nutrition",
      title: "चारा एवं पोषण",
      description: "प्रतिदिन ताजा हरा चारा, उत्तम सूखा भूसा, शुद्ध पेयजल और पोषक आहार की अटूट व्यवस्था।",
      icon: "leaf",
      highlight: "दैनिक पौष्टिक आहार",
    },
    {
      id: "medical",
      title: "गौ चिकित्सा एवं देखभाल",
      description: "दुर्घटनाग्रस्त व बीमार गायों का प्राथमिक उपचार, एंटीसेप्टिक ड्रेसिंग, दर्द निवारक दवाएं व नियमित डॉक्टर जांच।",
      icon: "stethoscope",
      highlight: "घायल व बीमार गौसेवा",
    },
    {
      id: "development",
      title: "गौशाला का विकास",
      description: "हवादार शेड, पेयजल खेळ, चारदीवारी और आपातकालीन चिकित्सा कक्ष का निरंतर विस्तार।",
      icon: "home",
      highlight: "सुदृढ़ बुनियादी ढांचा",
    },
  ] as MissionItem[],

  // Gauseva Donation Types (from receipt)
  gausevaTypes: [
    {
      id: "medical",
      title: "बीमार व घायल गौ चिकित्सा सेवा",
      badge: "प्राथमिकता सेवा",
      shortDesc: "दुर्घटनाग्रस्त, फ्रैक्चर, घाव व गंभीर बीमारियों से पीड़ित गौवंश के त्वरित इलाज, मरहम-पट्टी और दवाओं में सहयोग करें।",
      fullDesc: "सड़क दुर्घटनाओं में घायल, बीमार व असहाय गौवंश को लाकर गौशाला में त्वरित प्राथमिक चिकित्सा, मलहम-पट्टी, एंटीसेप्टिक ड्रेसिंग और आवश्यक एंटीबायोटिक्स व दर्द निवारक दवाएं दी जाती हैं। अनुभवी पशु चिकित्सक नियमित रूप से उनकी जांच करते हैं।",
      importance: "पीड़ित व दर्द से तड़पते बेसहारा गौवंश के प्राणों की रक्षा करना सबसे बड़ा पुण्य है।",
      features: [
        "दुर्घटनाग्रस्त गौवंश का रेस्क्यू एवं त्वरित प्राथमिक उपचार",
        "दैनिक घाव सफाई, मलहम, पट्टी एवं इंजेक्शन व्यवस्था",
        "पशु चिकित्सक द्वारा नियमित स्वास्थ्य परीक्षण एवं दवाइयां",
      ],
      image: "/images/cows/injured-cow.jpg",
    },
    {
      id: "fodder",
      title: "गौग्रास एवं चारा सेवा",
      badge: "दैनिक सेवा",
      shortDesc: "गौमाता के लिए दैनिक ताजा हरा चारा, सूखा भूसा और संतुलित पोषण की व्यवस्था में सहयोग करें।",
      fullDesc: "शास्त्रों में गौग्रास सेवा को समस्त पुण्यों में अग्रणी माना गया है। इस सेवा के अंतर्गत गौशाला के समस्त गौवंश के लिए प्रतिदिन सुबह-शाम उच्च गुणवत्ता का हरा चारा, सूखा भूसा और स्वच्छ जल उपलब्ध कराया जाता है।",
      importance: "दैनिक भूख तृप्ति एवं स्वास्थ्य संवर्धन हेतु परम आवश्यक।",
      features: [
        "दैनिक ताजा हरा चारा (बरसीम, ज्वार, बाजरा आदि)",
        "उच्च गुणवत्ता वाला सूखा भूसा व कुट्टी",
        "स्वच्छ व शीतल पेयजल की नियमित व्यवस्था",
      ],
      image: "/images/cows/feeding-gomata.jpg",
    },
    {
      id: "development",
      title: "गौशाला विकास सेवा",
      badge: "स्थाई निर्माण",
      shortDesc: "गौशाला के मजबूत शेड, चारदीवारी, पानी की खेळ और सुरक्षित आवास के निर्माण में भागीदार बनें।",
      fullDesc: "गौशाला परिसर में मौसम की प्रतिकूलताओं (कड़ाके की ठंड, तेज धूप, मूसलाधार बारिश) से गौवंश की सुरक्षा के लिए मजबूत टीन शेड, पक्के फर्श, बाउंड्री वॉल और पानी की पक्की खेलियों का निर्माण कार्य निरंतर चलता रहता है।",
      importance: "गौवंश के स्थाई व सुरक्षित भविष्य की आधारशिला।",
      features: [
        "हवादार व छायादार शेड का निर्माण व मरम्मत",
        "स्वच्छ पेयजल हेतु पक्की खेलियों का निर्माण",
        "चारा भंडारण गृह एवं सुरक्षित चारदीवारी",
      ],
      image: "/images/cows/gaushala-shed.jpg",
    },
    {
      id: "special",
      title: "लापसी एवं गुड़ सेवा",
      badge: "विशेष भोग",
      shortDesc: "विशेष पर्वों, जन्मदिवस, पुण्यतिथि एवं सेवा दिवसों पर गौमाता को स्वादिष्ट लापसी व गुड़ का भोग लगाएं।",
      fullDesc: "भारतीय परंपरा में गौमाता को मीठी लापसी (गेहूं का दलिया, देशी गुड़, घी) का भोग लगाना अत्यंत शुभ और पुण्यदायी माना गया है। विशेष अवसरों पर सभी गौवंश को यह पौष्टिक आहार प्रेमपूर्वक खिलाया जाता है।",
      importance: "ऊर्जा, मिठास व विशेष पोषण का पावन संकल्प।",
      features: [
        "शुद्ध देशी गुड़ एवं गेहूं के दलिये से बनी लापसी",
        "जन्मदिन, वर्षगांठ व पुण्यतिथि पर विशेष भोग व्यवस्था",
        "गौमाता के प्रति विशेष आदर एवं कृतज्ञता ज्ञापन",
      ],
      image: "/images/cows/cow-fodder.jpg",
    },
  ] as GausevaType[],

  // Cow care highlights
  cowCareHighlights: [
    {
      title: "बीमार व घायल गौवंश की त्वरित चिकित्सा",
      description: "सड़क हादसों या बीमारी से पीड़ित असहाय गौवंश का तुरंत उपचार, नियमित ड्रेसिंग और योग्य पशु चिकित्सक द्वारा देखभाल।",
      tag: "चिकित्सा सेवा",
    },
    {
      title: "समय पर ताजा चारा और स्वच्छ पानी",
      description: "नियमित समय सारणी के अनुसार हर गौवंश को पर्याप्त पौष्टिक चारा और दिनभर स्वच्छ जल उपलब्ध कराया जाता है।",
      tag: "नियमित पोषण",
    },
    {
      title: "स्वच्छ, सुरक्षित एवं हवादार आश्रय",
      description: "गौशाला प्रांगण की प्रतिदिन साफ-सफाई होती है तथा तेज धूप, वर्षा व शीत लहर से बचाव के पक्के टीन शेड हैं।",
      tag: "सदा स्वच्छता",
    },
    {
      title: "ममतामय आत्मीय देखभाल और संरक्षण",
      description: "समर्पित सेवकों द्वारा गायों, नन्दियों व बछड़ों की बिना किसी स्वार्थ के, पारिवारिक सदस्यों की भांति निरंतर सेवा की जाती है।",
      tag: "निस्वार्थ सेवा",
    },
  ],
};

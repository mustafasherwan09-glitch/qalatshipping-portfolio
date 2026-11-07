/* =========================================================================
   Qalat Shipping — ALL website text in Kurdish Sorani (ku), Arabic (ar) and English (en).
   Interface keys are flat ("hero.title1"); legal pages are objects ("legal.privacy").
   {tokens} are filled from CONFIG (assets/config.js). [Text in brackets] is a placeholder.
   ========================================================================= */
const I18N = { ku: {}, ar: {}, en: {} };

/* ---------- ui-en ---------- */
/* English interface text (master). Kurdish and Arabic files use exactly the same keys. */
Object.assign(I18N.en, {
  "lang.name": "English",

  /* ---------- Page titles & descriptions ---------- */
  "page.home.title": "Qalat Shipping | Shop SHEIN, delivered by Qalat — Iraq & Kurdistan Region",
  "page.home.desc": "Independent SHEIN shopping and shipping service in Erbil. Rate 1 USD = {rate} IQD, free shipping from the UAE to Iraq, door delivery from {feeKRG} IQD, customs on us, cash on delivery.",
  "page.about.title": "About us | Qalat Shipping",
  "page.about.desc": "Qalat Shipping is an independent personal-shopping and shipping service with a real office in Erbil. Learn our story, our name and why customers trust us.",
  "page.how.title": "How it works & SHEIN app guide | Qalat Shipping",
  "page.how.desc": "Order from SHEIN in four simple steps: choose your items, send your basket on WhatsApp, confirm the final price and pay cash on delivery.",
  "page.contact.title": "Contact us | Qalat Shipping",
  "page.contact.desc": "Contact Qalat Shipping on WhatsApp, phone, email, Instagram or Facebook, or visit our office on 40 Meter Street, Brayati, Erbil.",
  "page.privacy.title": "Privacy Policy | Qalat Shipping",
  "page.privacy.desc": "How Qalat Shipping collects, uses, shares and protects your personal information.",
  "page.terms.title": "Terms of Service | Qalat Shipping",
  "page.terms.desc": "The terms that apply when you order through Qalat Shipping.",
  "page.shipping.title": "Shipping & Delivery Policy | Qalat Shipping",
  "page.shipping.desc": "Shipping from the UAE to Iraq, delivery times, door delivery fees, customs and delivery attempts.",
  "page.returns.title": "Returns, Refunds & Cancellations | Qalat Shipping",
  "page.returns.desc": "How returns, refunds and cancellations work at Qalat Shipping.",
  "page.404.title": "Page not found | Qalat Shipping",
  "page.404.desc": "The page you are looking for does not exist.",

  /* ---------- Accessibility ---------- */
  "a11y.skip": "Skip to main content",
  "a11y.home": "Qalat Shipping — home",
  "a11y.logo": "Qalat Shipping logo",
  "a11y.nav": "Main navigation",
  "a11y.menu": "Menu",
  "a11y.lang": "Change language",
  "a11y.wa": "Chat with us on WhatsApp",
  "a11y.footer": "Footer navigation",
  "a11y.social": "Our social media",
  "a11y.toc": "Table of contents",

  /* ---------- Navigation ---------- */
  "nav.home": "Home",
  "nav.how": "How it works",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.shipping": "Shipping",
  "nav.returns": "Returns",
  "nav.privacy": "Privacy Policy",
  "nav.terms": "Terms of Service",
  "nav.safe": "Stay safe",
  "header.wa": "WhatsApp",

  /* ---------- Common words & labels ---------- */
  "currency": "IQD",
  "hours.text": "Saturday to Thursday, {time}. Friday closed.",
  "label.whatsapp": "WhatsApp",
  "label.phone": "Phone",
  "label.email": "Email",
  "label.instagram": "Instagram",
  "label.facebook": "Facebook",
  "label.facebookPage": "Facebook page",
  "label.address": "Office address",
  "label.hours": "Working hours",
  "label.map": "Open in Google Maps",
  "label.mapTitle": "Map showing the Qalat Shipping office in Erbil",
  "label.updated": "Last updated",
  "label.print": "Print this page",
  "label.backTop": "Back to top",

  /* ---------- Footer ---------- */
  "footer.desc": "An independent shopping and shipping service: you choose on SHEIN, we buy for you, ship from the UAE and deliver to your door across Iraq and the Kurdistan Region.",
  "footer.explore": "Explore",
  "footer.policies": "Policies",
  "footer.contact": "Contact",
  "footer.disclaimer": "Qalat Shipping is an independent shopping and shipping service. We are not affiliated with, endorsed by, or partnered with SHEIN. SHEIN is a trademark of its respective owner.",
  "footer.rights": "© {year} Qalat Shipping. All rights reserved.",

  /* ---------- Stay safe notice ---------- */
  "safe.title": "Stay safe from fake accounts",
  "safe.text": "We only contact you from WhatsApp {waLink}, Instagram {igLink} and our {fbLink}. We never ask for card numbers, passwords or verification codes. Prepayment is only requested for orders above {prepayLimit} USD and only through these official channels.",
  "safe.report": "Report a fake account",

  /* ---------- WhatsApp messages (plain text) ---------- */
  "wa.greet": "Hello Qalat Shipping 👋\nI would like to place an order from SHEIN.",
  "wa.size": "Hello Qalat Shipping 👋\nI have a question about sizes.",
  "wa.report": "Hello Qalat Shipping,\nI want to report a fake account that is using your name:",
  "wa.calc": "Hello Qalat Shipping 👋\nI would like to order from SHEIN:\n• SHEIN total: {usd} USD\n• Items: {items} IQD\n• Door delivery ({area}): {fee} IQD\n• Shipping UAE to Iraq: free\n• Customs: paid by Qalat\n• Total: {total} IQD{prepayLine}\nI will send my basket screenshots/links.",
  "wa.calcPrepay": "\n• Prepayment ({prepayPct}): {prepay} IQD\n• On delivery: {cod} IQD",
  "wa.contact": "Hello Qalat Shipping 👋\nName: {cname}\nCity: {ccity}\n\n{cmsg}",

  /* ---------- Home: hero ---------- */
  "hero.eyebrow": "Independent SHEIN shopping & shipping · Iraq & Kurdistan Region",
  "hero.title1": "Shop SHEIN, ",
  "hero.title2": "delivered by Qalat.",
  "hero.sub": "Choose your items in the SHEIN app and send us your basket on WhatsApp. We buy them for you, ship them from the UAE and deliver them to your door — you pay cash on delivery.",
  "hero.cta1": "Order on WhatsApp",
  "hero.cta2": "How it works",
  "hero.rateLabel": "Our exchange rate",
  "hero.shipNote": "Free shipping from the UAE to Iraq • Door delivery from {feeKRG} IQD",
  "stat.ship.v": "Free shipping UAE to Iraq",
  "stat.ship.l": "Door delivery from {feeKRG} IQD",
  "stat.customs.v": "Customs on us",
  "stat.customs.l": "No hidden fees",
  "stat.days.v": "{days} days",
  "stat.days.l": "Delivery to all of Iraq",
  "stat.cod.v": "Cash on delivery",
  "stat.cod.l": "No prepayment up to {prepayLimit} USD",

  /* ---------- Home: trust strip ---------- */
  "trust.1": "Independent service",
  "trust.2": "Real office in Erbil",
  "trust.3": "Delivery to all of Iraq",
  "trust.4": "Cash on delivery",

  /* ---------- Steps (home + how it works) ---------- */
  "how.title": "Four simple steps",
  "how.lead": "No international card and no hassle. You choose — we take care of the rest.",
  "step1.t": "Choose items in SHEIN",
  "step1.d": "Add the items you like to your basket in the SHEIN app or website.",
  "step2.t": "Send your basket on WhatsApp",
  "step2.d": "Send us screenshots of your basket or the product links.",
  "step3.t": "We confirm the final price & stock",
  "step3.d": "We check every item and send you the final total in IQD. We only buy after you clearly confirm.",
  "step4.t": "Delivered to your door",
  "step4.d": "Your order arrives in about {days} days. You pay cash on delivery.",
  "how.more": "Full guide & SHEIN app tips",

  /* ---------- Home: calculator ---------- */
  "calc.title": "Calculate your price",
  "calc.lead": "Enter your SHEIN basket total in US dollars and choose your delivery area.",
  "calc.usd": "SHEIN basket total (USD)",
  "calc.ph": "e.g. 100",
  "calc.area": "Delivery area",
  "calc.areaKRG": "Kurdistan Region",
  "calc.areaKRGsub": "Erbil, Sulaymaniyah, Duhok, Halabja",
  "calc.areaOther": "Other Iraqi city",
  "calc.areaOtherSub": "All other governorates",
  "calc.rateLine": "Rate: 1 USD = {rate} IQD · 100 USD = {rate100} IQD",
  "calc.result": "Your estimated total",
  "calc.items": "Items in IQD",
  "calc.shipping": "Shipping UAE to Iraq",
  "calc.shippingV": "Free",
  "calc.delivery": "Door delivery",
  "calc.customs": "Customs clearance",
  "calc.customsV": "On us",
  "calc.total": "Total",
  "calc.prepay": "Prepayment ({prepayPct})",
  "calc.cod": "On delivery",
  "calc.codOnly": "No prepayment — you pay everything on delivery.",
  "calc.prepayNote": "Orders above {prepayLimit} USD: {prepayPct} in advance, {restPct} on delivery.",
  "calc.note": "Final price is confirmed on WhatsApp before we purchase. Free shipping from the UAE to Iraq • Door delivery {feeKRG} IQD in the Kurdistan Region or {feeOther} IQD in other cities.",
  "calc.btn": "Send this breakdown on WhatsApp",
  "calc.invalid": "Please enter a valid amount (e.g. 49.99).",

  /* ---------- Home: delivery fees ---------- */
  "fees.title": "Delivery fees",
  "fees.lead": "Free shipping from the UAE to Iraq • You only pay door delivery inside Iraq.",
  "fees.krg": "Kurdistan Region",
  "fees.krgCities": "Erbil · Sulaymaniyah · Duhok · Halabja",
  "fees.other": "Other Iraqi cities",
  "fees.otherCities": "Baghdad, Basra, Mosul, Kirkuk and all other governorates",
  "fees.ship": "Shipping UAE to Iraq",
  "fees.shipV": "Free",
  "fees.shipSub": "Door delivery is charged separately",
  "fees.customs": "Customs clearance",
  "fees.customsV": "On us",
  "fees.customsSub": "You never pay customs",
  "fees.link": "Read the Shipping & Delivery Policy",

  /* ---------- Home: size guide ---------- */
  "size.title": "Size guide",
  "size.lead": "Measurements are in centimetres and approximate. Always check the size chart of each item in the SHEIN app.",
  "size.women": "Women",
  "size.men": "Men",
  "size.capW": "Women’s size chart in centimetres",
  "size.capM": "Men’s size chart in centimetres",
  "size.size": "Size",
  "size.chest": "Chest",
  "size.waist": "Waist",
  "size.hip": "Hip",
  "size.unit": "cm",
  "size.how": "Chest: fullest part · Waist: narrowest part · Hip: widest part",
  "size.note": "Not sure about your size? Ask us before you order.",
  "size.btn": "Ask us about your size",

  /* ---------- Home: customer feedback (placeholders — replace with real reviews) ---------- */
  "fb.title": "What our customers say",
  "fb.lead": "You can also see customer reviews and order photos on our Instagram.",
  "fb.badge": "Placeholder",
  "fb.text": "[Feedback]",
  "fb.name": "[Name]",
  "fb.city": "[City]",
  "fb.cta": "See reviews on Instagram",

  /* ---------- Home: FAQ ---------- */
  "faq.title": "Frequently asked questions",
  "faq.lead": "Short answers. The full rules are in our policies.",
  "faq.1.q": "What exchange rate do you use?",
  "faq.1.a": "1 USD = {rate} IQD, so 100 USD = {rate100} IQD. We multiply the SHEIN price at the time of purchase by this rate. The rate may change; the total you confirm on WhatsApp is final.",
  "faq.2.q": "How do I pay?",
  "faq.2.a": "Cash on delivery only. You pay the driver when your order arrives.",
  "faq.3.q": "Do I need to pay anything in advance?",
  "faq.3.a": "Not for orders up to {prepayLimit} USD. For orders above {prepayLimit} USD, {prepayPct} of the total is paid in advance and the remaining {restPct} is paid cash on delivery. Prepayment is only requested through our official channels.",
  "faq.4.q": "How long does delivery take?",
  "faq.4.a": "Usually {days} days. This is an estimate, not a guarantee — customs, flights, holidays or weather can cause delays. We keep you updated on WhatsApp.",
  "faq.5.q": "How much is delivery?",
  "faq.5.a": "Shipping from the UAE to Iraq is free. Door delivery inside Iraq costs {feeKRG} IQD in the Kurdistan Region (Erbil, Sulaymaniyah, Duhok, Halabja) and {feeOther} IQD in all other Iraqi cities.",
  "faq.6.q": "Do I pay customs?",
  "faq.6.a": "No. Customs clearance is paid by Qalat Shipping, and there are no hidden fees.",
  "faq.7.q": "What if an item is sold out?",
  "faq.7.a": "We remove it from your order, tell you with screenshots and adjust the price.",
  "faq.8.q": "What if the size is wrong?",
  "faq.8.a": "A refund is available if the item is unused, unwashed, with original tags and packaging. Underwear cannot be returned for hygiene reasons. Approved refunds are paid within {refundHours} hours.",
  "faq.9.q": "Can I cancel my order?",
  "faq.9.a": "Yes, for free before we purchase. After we purchase, cancellation is not guaranteed — we try when SHEIN still allows it, case by case.",
  "faq.10.q": "How do I send my basket?",
  "faq.10.a": "Send us screenshots of your SHEIN basket (showing each item, size, colour and price) or the product links on WhatsApp, together with your name, city, address and nearest landmark.",
  "faq.more": "Read all policies",

  /* ---------- Home: location ---------- */
  "loc.title": "Visit our office in Erbil",
  "loc.lead": "We are a real business with a real office. You are welcome to visit us during working hours.",
  "loc.office": "Our office",

  /* ---------- How it works page ---------- */
  "howp.title": "How it works",
  "howp.lead": "From your SHEIN basket to your door in four steps — with cash on delivery and the final price confirmed before we buy.",
  "howp.s1": "Browse the SHEIN app or website and add everything you like to your basket. Check photos, reviews, the material and the size chart of each item.",
  "howp.s2": "Send us clear screenshots of your basket or the product links on WhatsApp, together with your name, phone number, city, address and nearest landmark.",
  "howp.s3": "We check the price and stock of every item and send you the final total in IQD: items × our rate ({rate} IQD per USD) + door delivery. We only buy after you clearly confirm.",
  "howp.s4": "We ship your order from the UAE to Iraq (free), customs clearance is on us, and our driver brings it to your door in about {days} days. You pay cash on delivery.",
  "guide.title": "How to use the SHEIN app",
  "guide.lead": "New to SHEIN? Follow these steps to prepare your basket.",
  "guide.1": "Download the SHEIN app from the App Store or Google Play, or open the SHEIN website.",
  "guide.2": "Search or browse categories, and use filters for size, colour and price.",
  "guide.3": "Open each item and check the photos, customer reviews, material and size chart.",
  "guide.4": "Choose the colour and size, then tap “Add to Cart”.",
  "guide.5": "Open your cart and take clear screenshots that show each item, size, colour and price — or copy each product link using “Share”.",
  "guide.6": "Send the screenshots or links to us on WhatsApp. Do not pay inside the SHEIN app.",
  "tips.title": "Tips for a smooth order",
  "tips.1": "Double-check sizes with the size chart of each item.",
  "tips.2": "Give us a correct address and nearest landmark, and keep your phone reachable.",
  "tips.3": "If an item sells out, we tell you with screenshots and adjust the price.",
  "tips.4": "Never share your SHEIN password or verification codes with anyone — we will never ask for them.",
  "howp.cta": "Ready? Send us your basket",

  /* ---------- About page ---------- */
  "about.title": "About Qalat Shipping",
  "about.lead": "An independent personal-shopping and shipping service from Erbil, helping customers across Iraq and the Kurdistan Region shop on SHEIN with confidence.",
  "about.storyTitle": "Our story",
  "about.story1": "Many people in Iraq and the Kurdistan Region love shopping on SHEIN but cannot pay online or ship internationally. Qalat Shipping makes it simple: you choose your items, we buy them for you, ship them from the UAE and deliver them to your door.",
  "about.story2": "Everything happens on WhatsApp, in your language, with a clear final price before we purchase and payment in cash when your order arrives.",
  "about.nameTitle": "Why “Qalat”?",
  "about.name": "“Qalat” means citadel. Our name comes from the Erbil Citadel, the historic heart of our city and a UNESCO World Heritage Site. Like the citadel, we want to stand for strength, trust and Kurdish heritage — in every order we deliver.",
  "about.missionTitle": "Our mission",
  "about.mission": "To make international online shopping easy, transparent and safe for everyone in Iraq and the Kurdistan Region: clear prices, honest communication and reliable delivery.",
  "about.trustTitle": "Why customers can trust us",
  "about.t1.t": "Real office in Erbil",
  "about.t1.d": "Visit us at {address}.",
  "about.t2.t": "Cash on delivery",
  "about.t2.d": "No prepayment for orders up to {prepayLimit} USD.",
  "about.t3.t": "Customs on us",
  "about.t3.d": "Customs clearance is paid by Qalat Shipping, with no hidden fees.",
  "about.t4.t": "Transparent pricing",
  "about.t4.d": "1 USD = {rate} IQD and you confirm the final total before we buy.",
  "about.indTitle": "An independent service",
  "about.ind": "Qalat Shipping is an independent business. We are not SHEIN, and we are not a SHEIN partner, reseller, agent or official store. We buy from SHEIN on behalf of our customers. SHEIN is a trademark of its respective owner.",
  "about.cta": "Talk to us on WhatsApp",

  /* ---------- Contact page ---------- */
  "contact.title": "Contact us",
  "contact.lead": "WhatsApp is the fastest way to reach us. You can also call, email, message us on Instagram or Facebook, or visit our office.",
  "form.title": "Send us a message",
  "form.name": "Your name",
  "form.namePh": "Full name",
  "form.city": "City",
  "form.cityPh": "e.g. Erbil",
  "form.msg": "Message",
  "form.msgPh": "Write your question or paste your SHEIN links",
  "form.btn": "Open in WhatsApp",
  "form.note": "This form opens WhatsApp with your message ready to send. Nothing is stored on our website.",
  "form.err": "Please write your message.",
  "contact.mapTitle": "Find our office",

  /* ---------- 404 ---------- */
  "nf.title": "Page not found",
  "nf.text": "Sorry, this page does not exist or has moved.",
  "nf.home": "Back to home",

  /* ---------- Legal pages (shared) ---------- */
  "legal.updatedDate": "November 7, 2026",
  "legal.toc": "On this page"
});

/* ---------- ui-ku ---------- */
/* Kurdish (Sorani) interface text. Same keys as ui-en.js. */
Object.assign(I18N.ku, {
  "lang.name": "کوردی",

  /* ---------- Page titles & descriptions ---------- */
  "page.home.title": "قەڵات شیپینگ | لە SHEIN بکڕە، قەڵات بۆت دەگەیەنێت — عێراق و هەرێمی کوردستان",
  "page.home.desc": "خزمەتگوزارییەکی سەربەخۆی کڕین و ناردن لە SHEIN، لە هەولێر. نرخ: 1 دۆلار = {rate} دینار، ناردنی خۆڕایی لە ئیماراتەوە بۆ عێراق، گەیاندن تا بەردەم دەرگا لە {feeKRG} دینارەوە، گومرگ لەسەر ئێمە، پارەدان لە کاتی وەرگرتن.",
  "page.about.title": "دەربارەی ئێمە | قەڵات شیپینگ",
  "page.about.desc": "قەڵات شیپینگ خزمەتگوزارییەکی سەربەخۆی کڕینی کەسی و ناردنە و نووسینگەیەکی ڕاستەقینەی لە هەولێر هەیە. چیرۆکەکەمان، ناوەکەمان و هۆی متمانەی کڕیاران پێمان بناسە.",
  "page.how.title": "چۆن کار دەکات و ڕێبەری ئەپی SHEIN | قەڵات شیپینگ",
  "page.how.desc": "بە چوار هەنگاوی سادە لە SHEIN داوا بکە: کاڵاکانت هەڵبژێرە، سەبەتەکەت لە واتسئاپ بنێرە، نرخی کۆتایی پشتڕاست بکەرەوە و لە کاتی وەرگرتن پارە بدە.",
  "page.contact.title": "پەیوەندیمان پێوە بکە | قەڵات شیپینگ",
  "page.contact.desc": "لە ڕێگەی واتسئاپ، تەلەفۆن، ئیمەیڵ، ئینستاگرام یان فەیسبووکەوە پەیوەندی بە قەڵات شیپینگەوە بکە، یان سەردانی نووسینگەکەمان بکە لە شەقامی 40 مەتری، بەرایەتی، هەولێر.",
  "page.privacy.title": "سیاسەتی تایبەتمەندی | قەڵات شیپینگ",
  "page.privacy.desc": "قەڵات شیپینگ چۆن زانیارییە کەسییەکانت کۆدەکاتەوە، بەکاریان دەهێنێت، هاوبەشیان دەکات و دەیانپارێزێت.",
  "page.terms.title": "مەرجەکانی خزمەتگوزاری | قەڵات شیپینگ",
  "page.terms.desc": "ئەو مەرجانەی کاتێک لە ڕێگەی قەڵات شیپینگەوە داوا دەکەیت جێبەجێ دەبن.",
  "page.shipping.title": "سیاسەتی ناردن و گەیاندن | قەڵات شیپینگ",
  "page.shipping.desc": "ناردن لە ئیماراتەوە بۆ عێراق، ماوەی گەیاندن، کرێی گەیاندن تا بەردەم دەرگا، گومرگ و هەوڵەکانی گەیاندن.",
  "page.returns.title": "گەڕاندنەوەی کاڵا، گەڕاندنەوەی پارە و هەڵوەشاندنەوە | قەڵات شیپینگ",
  "page.returns.desc": "گەڕاندنەوەی کاڵا، گەڕاندنەوەی پارە و هەڵوەشاندنەوە لە قەڵات شیپینگ چۆن کار دەکەن.",
  "page.404.title": "پەڕەکە نەدۆزرایەوە | قەڵات شیپینگ",
  "page.404.desc": "ئەو پەڕەیەی بەدوایدا دەگەڕێیت بوونی نییە.",

  /* ---------- Accessibility ---------- */
  "a11y.skip": "بازدان بۆ ناوەڕۆکی سەرەکی",
  "a11y.home": "قەڵات شیپینگ — سەرەتا",
  "a11y.logo": "لۆگۆی قەڵات شیپینگ",
  "a11y.nav": "لیستی سەرەکی",
  "a11y.menu": "لیست",
  "a11y.lang": "گۆڕینی زمان",
  "a11y.wa": "لە واتسئاپ قسەمان لەگەڵ بکە",
  "a11y.footer": "لینکەکانی خوارەوەی پەڕە",
  "a11y.social": "تۆڕە کۆمەڵایەتییەکانمان",
  "a11y.toc": "پێڕستی ناوەڕۆک",

  /* ---------- Navigation ---------- */
  "nav.home": "سەرەتا",
  "nav.how": "چۆن کار دەکات",
  "nav.about": "دەربارەی ئێمە",
  "nav.contact": "پەیوەندی",
  "nav.shipping": "ناردن",
  "nav.returns": "گەڕاندنەوە",
  "nav.privacy": "سیاسەتی تایبەتمەندی",
  "nav.terms": "مەرجەکانی خزمەتگوزاری",
  "nav.safe": "خۆپاراستن",
  "header.wa": "واتسئاپ",

  /* ---------- Common words & labels ---------- */
  "currency": "دینار",
  "hours.text": "شەممە تا پێنجشەممە، {time}. هەینی پشوو.",
  "label.whatsapp": "واتسئاپ",
  "label.phone": "تەلەفۆن",
  "label.email": "ئیمەیڵ",
  "label.instagram": "ئینستاگرام",
  "label.facebook": "فەیسبووک",
  "label.facebookPage": "پەڕەی فەیسبووک",
  "label.address": "ناونیشانی نووسینگە",
  "label.hours": "کاتی کارکردن",
  "label.map": "لە نەخشەی گووگڵ بیکەرەوە",
  "label.mapTitle": "نەخشەی شوێنی نووسینگەی قەڵات شیپینگ لە هەولێر",
  "label.updated": "دوایین نوێکردنەوە",
  "label.print": "چاپکردنی ئەم پەڕەیە",
  "label.backTop": "گەڕانەوە بۆ سەرەوە",

  /* ---------- Footer ---------- */
  "footer.desc": "خزمەتگوزارییەکی سەربەخۆی کڕین و ناردن: تۆ لە SHEIN هەڵدەبژێریت، ئێمە بۆت دەکڕین، لە ئیماراتەوە دەینێرین و لە هەموو عێراق و هەرێمی کوردستان تا بەردەم دەرگاکەت دەیگەیەنین.",
  "footer.explore": "پەڕەکان",
  "footer.policies": "سیاسەتەکان",
  "footer.contact": "پەیوەندی",
  "footer.disclaimer": "قەڵات شیپینگ خزمەتگوزارییەکی سەربەخۆی کڕین و ناردنە. ئێمە سەر بە SHEIN نین، هاوبەشی SHEIN نین و SHEIN پشتگیری ئێمەی نەکردووە. SHEIN نیشانەیەکی بازرگانیی خاوەنەکەیەتی.",
  "footer.rights": "© {year} قەڵات شیپینگ. هەموو مافەکان پارێزراون.",

  /* ---------- Stay safe notice ---------- */
  "safe.title": "ئاگاداری هەژمارە ساختەکان بە",
  "safe.text": "ئێمە تەنها لەم کەناڵانەوە پەیوەندیت پێوە دەکەین: واتسئاپ {waLink}، ئینستاگرام {igLink} و {fbLink}. هەرگیز داوای ژمارەی کارت، وشەی نهێنی یان کۆدی پشتڕاستکردنەوە ناکەین. پارەی پێشەکی تەنها بۆ داواکارییەکانی سەرووی {prepayLimit} دۆلار داوا دەکرێت و تەنها لە ڕێگەی ئەم کەناڵە فەرمییانەوە.",
  "safe.report": "ڕاپۆرتکردنی هەژمارێکی ساختە",

  /* ---------- WhatsApp messages (plain text) ---------- */
  "wa.greet": "سڵاو قەڵات شیپینگ 👋\nدەمەوێت داواکارییەک لە SHEIN بکەم.",
  "wa.size": "سڵاو قەڵات شیپینگ 👋\nپرسیارێکم دەربارەی قەبارەکان هەیە.",
  "wa.report": "سڵاو قەڵات شیپینگ،\nدەمەوێت ڕاپۆرتی هەژمارێکی ساختە بدەم کە ناوی ئێوە بەکاردەهێنێت:",
  "wa.calc": "سڵاو قەڵات شیپینگ 👋\nدەمەوێت لە SHEIN داوا بکەم:\n• کۆی SHEIN: {usd} دۆلار\n• کاڵاکان: {items} دینار\n• گەیاندن تا بەردەم دەرگا ({area}): {fee} دینار\n• ناردن لە ئیماراتەوە بۆ عێراق: خۆڕایی\n• گومرگ: لەسەر قەڵات\n• کۆی گشتی: {total} دینار{prepayLine}\nوێنەی شاشە یان لینکی سەبەتەکەم دەنێرم.",
  "wa.calcPrepay": "\n• پێشەکی ({prepayPct}): {prepay} دینار\n• لە کاتی وەرگرتن: {cod} دینار",
  "wa.contact": "سڵاو قەڵات شیپینگ 👋\nناو: {cname}\nشار: {ccity}\n\n{cmsg}",

  /* ---------- Home: hero ---------- */
  "hero.eyebrow": "کڕین و ناردنی سەربەخۆ لە SHEIN · عێراق و هەرێمی کوردستان",
  "hero.title1": "لە SHEIN بکڕە، ",
  "hero.title2": "قەڵات بۆت دەگەیەنێت.",
  "hero.sub": "کاڵاکانت لە ئەپی SHEIN هەڵبژێرە و سەبەتەکەت لە واتسئاپ بۆمان بنێرە. ئێمە بۆت دەکڕین، لە ئیماراتەوە دەینێرین و تا بەردەم دەرگاکەت دەیگەیەنین — تۆش لە کاتی وەرگرتن پارە دەدەیت.",
  "hero.cta1": "داواکردن لە واتسئاپ",
  "hero.cta2": "چۆن کار دەکات",
  "hero.rateLabel": "نرخی دۆلار لای ئێمە",
  "hero.shipNote": "ناردنی خۆڕایی لە ئیماراتەوە بۆ عێراق • گەیاندن تا بەردەم دەرگا لە {feeKRG} دینارەوە",
  "stat.ship.v": "ناردنی خۆڕایی لە ئیماراتەوە بۆ عێراق",
  "stat.ship.l": "گەیاندن تا بەردەم دەرگا لە {feeKRG} دینارەوە",
  "stat.customs.v": "گومرگ لەسەر ئێمە",
  "stat.customs.l": "هیچ کرێیەکی شاراوە نییە",
  "stat.days.v": "{days} ڕۆژ",
  "stat.days.l": "گەیاندن بۆ هەموو عێراق",
  "stat.cod.v": "پارەدان لە کاتی وەرگرتن",
  "stat.cod.l": "بێ پێشەکی تا {prepayLimit} دۆلار",

  /* ---------- Home: trust strip ---------- */
  "trust.1": "خزمەتگوزاریی سەربەخۆ",
  "trust.2": "نووسینگەی ڕاستەقینە لە هەولێر",
  "trust.3": "گەیاندن بۆ هەموو عێراق",
  "trust.4": "پارەدان لە کاتی وەرگرتن",

  /* ---------- Steps (home + how it works) ---------- */
  "how.title": "چوار هەنگاوی سادە",
  "how.lead": "پێویستت بە کارتی نێودەوڵەتی نییە و هیچ ماندووبوونێکیش نییە. تۆ هەڵبژێرە — ئێمە ئەوانی تر جێبەجێ دەکەین.",
  "step1.t": "کاڵاکان لە SHEIN هەڵبژێرە",
  "step1.d": "ئەو کاڵایانەی بەدڵتن لە ئەپ یان ماڵپەڕی SHEIN بخەرە سەبەتەکەت.",
  "step2.t": "سەبەتەکەت لە واتسئاپ بنێرە",
  "step2.d": "وێنەی شاشەی سەبەتەکەت یان لینکی کاڵاکان بۆمان بنێرە.",
  "step3.t": "نرخی کۆتایی و بەردەستبوون پشتڕاست دەکەینەوە",
  "step3.d": "هەموو کاڵایەک دەپشکنین و کۆی کۆتاییت بە دینار بۆ دەنێرین. تەنها دوای ئەوەی بە ڕوونی پشتڕاستی دەکەیتەوە دەیکڕین.",
  "step4.t": "تا بەردەم دەرگاکەت دەگات",
  "step4.d": "داواکارییەکەت لە ماوەی نزیکەی {days} ڕۆژدا دەگات. لە کاتی وەرگرتن پارە دەدەیت.",
  "how.more": "ڕێبەری تەواو و ئامۆژگارییەکانی ئەپی SHEIN"
});

Object.assign(I18N.ku, {
  /* ---------- Home: calculator ---------- */
  "calc.title": "نرخەکەت هەژمار بکە",
  "calc.lead": "کۆی سەبەتەکەت لە SHEIN بە دۆلاری ئەمریکی بنووسە و ناوچەی گەیاندنەکەت هەڵبژێرە.",
  "calc.usd": "کۆی سەبەتەی SHEIN (دۆلار)",
  "calc.ph": "بۆ نموونە 100",
  "calc.area": "ناوچەی گەیاندن",
  "calc.areaKRG": "هەرێمی کوردستان",
  "calc.areaKRGsub": "هەولێر، سلێمانی، دهۆک، هەڵەبجە",
  "calc.areaOther": "شارێکی تری عێراق",
  "calc.areaOtherSub": "هەموو پارێزگاکانی تر",
  "calc.rateLine": "نرخ: 1 دۆلار = {rate} دینار · 100 دۆلار = {rate100} دینار",
  "calc.result": "کۆی گشتیی خەمڵێنراو",
  "calc.items": "کاڵاکان بە دینار",
  "calc.shipping": "ناردن لە ئیماراتەوە بۆ عێراق",
  "calc.shippingV": "خۆڕایی",
  "calc.delivery": "گەیاندن تا بەردەم دەرگا",
  "calc.customs": "گومرگ",
  "calc.customsV": "لەسەر ئێمە",
  "calc.total": "کۆی گشتی",
  "calc.prepay": "پێشەکی ({prepayPct})",
  "calc.cod": "لە کاتی وەرگرتن",
  "calc.codOnly": "بێ پێشەکی — هەمووی لە کاتی وەرگرتن دەدەیت.",
  "calc.prepayNote": "داواکارییەکانی سەرووی {prepayLimit} دۆلار: {prepayPct} پێشەکی، {restPct} لە کاتی وەرگرتن.",
  "calc.note": "نرخی کۆتایی پێش کڕین لە واتسئاپ پشتڕاست دەکرێتەوە. ناردنی خۆڕایی لە ئیماراتەوە بۆ عێراق • گەیاندن تا بەردەم دەرگا {feeKRG} دینار لە هەرێمی کوردستان یان {feeOther} دینار لە شارەکانی تر.",
  "calc.btn": "ئەم وردەکارییە لە واتسئاپ بنێرە",
  "calc.invalid": "تکایە بڕێکی دروست بنووسە (بۆ نموونە 49.99).",

  /* ---------- Home: delivery fees ---------- */
  "fees.title": "کرێی گەیاندن",
  "fees.lead": "ناردنی خۆڕایی لە ئیماراتەوە بۆ عێراق • تەنها کرێی گەیاندن تا بەردەم دەرگا لە ناو عێراق دەدەیت.",
  "fees.krg": "هەرێمی کوردستان",
  "fees.krgCities": "هەولێر · سلێمانی · دهۆک · هەڵەبجە",
  "fees.other": "شارەکانی تری عێراق",
  "fees.otherCities": "بەغدا، بەسرە، مووسڵ، کەرکووک و هەموو پارێزگاکانی تر",
  "fees.ship": "ناردن لە ئیماراتەوە بۆ عێراق",
  "fees.shipV": "خۆڕایی",
  "fees.shipSub": "کرێی گەیاندن تا بەردەم دەرگا جیایە",
  "fees.customs": "گومرگ",
  "fees.customsV": "لەسەر ئێمە",
  "fees.customsSub": "هەرگیز گومرگ نادەیت",
  "fees.link": "سیاسەتی ناردن و گەیاندن بخوێنەرەوە",

  /* ---------- Home: size guide ---------- */
  "size.title": "ڕێبەری قەبارە",
  "size.lead": "پێوانەکان بە سانتیمەترن و نزیکەیین. هەمیشە خشتەی قەبارەی هەر کاڵایەک لە ئەپی SHEIN بپشکنە.",
  "size.women": "ئافرەتان",
  "size.men": "پیاوان",
  "size.capW": "خشتەی قەبارەی ئافرەتان بە سانتیمەتر",
  "size.capM": "خشتەی قەبارەی پیاوان بە سانتیمەتر",
  "size.size": "قەبارە",
  "size.chest": "سنگ",
  "size.waist": "کەمەر",
  "size.hip": "سمت",
  "size.unit": "سم",
  "size.how": "سنگ: پڕترین بەش · کەمەر: باریکترین بەش · سمت: پانترین بەش",
  "size.note": "دڵنیا نیت لە قەبارەکەت؟ پێش داواکردن لێمان بپرسە.",
  "size.btn": "دەربارەی قەبارەکەت لێمان بپرسە",

  /* ---------- Home: customer feedback (placeholders) ---------- */
  "fb.title": "کڕیارانمان چی دەڵێن",
  "fb.lead": "دەتوانیت ڕای کڕیاران و وێنەی داواکارییەکان لە ئینستاگرامەکەشمان ببینیت.",
  "fb.badge": "نموونە",
  "fb.text": "[ڕای کڕیار]",
  "fb.name": "[ناو]",
  "fb.city": "[شار]",
  "fb.cta": "ڕای کڕیاران لە ئینستاگرام ببینە",

  /* ---------- Home: FAQ ---------- */
  "faq.title": "پرسیارە باوەکان",
  "faq.lead": "وەڵامی کورت. هەموو مەرجەکان لە سیاسەتەکانماندا هەن.",
  "faq.1.q": "چ نرخێکی دۆلار بەکاردەهێنن؟",
  "faq.1.a": "1 دۆلار = {rate} دینار، واتە 100 دۆلار = {rate100} دینار. نرخی کاڵا لە SHEIN لە کاتی کڕیندا بەم نرخە لێکدەدەین. نرخەکە لەوانەیە بگۆڕێت؛ ئەو کۆیەی لە واتسئاپ پشتڕاستی دەکەیتەوە کۆتاییە.",
  "faq.2.q": "چۆن پارە بدەم؟",
  "faq.2.a": "تەنها پارەدان لە کاتی وەرگرتن. کاتێک داواکارییەکەت دەگات، پارە بە شۆفێرەکە دەدەیت.",
  "faq.3.q": "پێویستە هیچ پارەیەک پێشەکی بدەم؟",
  "faq.3.a": "بۆ داواکارییەکانی تا {prepayLimit} دۆلار، نەخێر. بۆ داواکارییەکانی سەرووی {prepayLimit} دۆلار، {prepayPct}ی کۆی گشتی پێشەکی دەدرێت و {restPct}ی ماوە لە کاتی وەرگرتن بە نەختی دەدرێت. پارەی پێشەکی تەنها لە ڕێگەی کەناڵە فەرمییەکانمانەوە داوا دەکرێت.",
  "faq.4.q": "گەیاندن چەند دەخایەنێت؟",
  "faq.4.a": "زۆربەی جار {days} ڕۆژ. ئەمە خەمڵاندنە، نەک گەرەنتی — گومرگ، گەشتە ئاسمانییەکان، پشووەکان یان کەشوهەوا دەتوانن دواکەوتن دروست بکەن. لە واتسئاپ بەردەوام ئاگادارت دەکەینەوە.",
  "faq.5.q": "کرێی گەیاندن چەندە؟",
  "faq.5.a": "ناردن لە ئیماراتەوە بۆ عێراق خۆڕاییە. گەیاندن تا بەردەم دەرگا لە ناو عێراق {feeKRG} دینارە لە هەرێمی کوردستان (هەولێر، سلێمانی، دهۆک، هەڵەبجە) و {feeOther} دینارە لە هەموو شارەکانی تری عێراق.",
  "faq.6.q": "گومرگ دەدەم؟",
  "faq.6.a": "نەخێر. گومرگ لەلایەن قەڵات شیپینگەوە دەدرێت و هیچ کرێیەکی شاراوە نییە.",
  "faq.7.q": "ئەگەر کاڵایەک نەمابێت چی دەبێت؟",
  "faq.7.a": "لە داواکارییەکەت لای دەبەین، بە وێنەی شاشە ئاگادارت دەکەینەوە و نرخەکە ڕێک دەخەینەوە.",
  "faq.8.q": "ئەگەر قەبارەکە هەڵە بێت چی دەبێت؟",
  "faq.8.a": "گەڕاندنەوەی پارە بەردەستە ئەگەر کاڵاکە بەکارنەهاتبێت، نەشۆرابێت و تاگ و بەستەبەندییە ڕەسەنەکەی پێوە بێت. جلی ژێرەوە بەهۆی پاکوخاوێنییەوە ناگەڕێندرێتەوە. گەڕاندنەوەی پارەی پەسەندکراو لە ماوەی {refundHours} کاتژمێردا دەدرێت.",
  "faq.9.q": "دەتوانم داواکارییەکەم هەڵبوەشێنمەوە؟",
  "faq.9.a": "بەڵێ، پێش ئەوەی بیکڕین بەبێ هیچ تێچوونێک. دوای کڕین، هەڵوەشاندنەوە گەرەنتی نییە — ئەگەر SHEIN هێشتا ڕێگە بدات هەوڵ دەدەین، بەپێی هەر حاڵەتێک.",
  "faq.10.q": "چۆن سەبەتەکەم بنێرم؟",
  "faq.10.a": "وێنەی شاشەی سەبەتەکەت لە SHEIN (کە هەر کاڵایەک و قەبارە، ڕەنگ و نرخەکەی تێدا دیار بێت) یان لینکی کاڵاکان لە واتسئاپ بۆمان بنێرە، لەگەڵ ناو، شار، ناونیشان و نزیکترین نیشانەی ناسراو.",
  "faq.more": "هەموو سیاسەتەکان بخوێنەرەوە",

  /* ---------- Home: location ---------- */
  "loc.title": "سەردانی نووسینگەکەمان لە هەولێر بکە",
  "loc.lead": "ئێمە کارێکی ڕاستەقینەین و نووسینگەیەکی ڕاستەقینەمان هەیە. لە کاتی کارکردندا بەخێربێیت بۆ سەردانمان.",
  "loc.office": "نووسینگەکەمان"
});

Object.assign(I18N.ku, {
  /* ---------- How it works page ---------- */
  "howp.title": "چۆن کار دەکات",
  "howp.lead": "بە چوار هەنگاو، سەبەتەکەت لە SHEIN تا بەردەم دەرگاکەت دەگات — بە پارەدان لە کاتی وەرگرتن و پشتڕاستکردنەوەی نرخی کۆتایی پێش کڕین.",
  "howp.s1": "لە ئەپ یان ماڵپەڕی SHEIN بگەڕێ و هەرچی بەدڵتە بیخەرە سەبەتەکەت. وێنەکان، ڕای کڕیاران، جۆری قوماش و خشتەی قەبارەی هەر کاڵایەک بپشکنە.",
  "howp.s2": "وێنەی شاشەی ڕوونی سەبەتەکەت یان لینکی کاڵاکان لە واتسئاپ بۆمان بنێرە، لەگەڵ ناو، ژمارەی تەلەفۆن، شار، ناونیشان و نزیکترین نیشانەی ناسراو.",
  "howp.s3": "نرخ و بەردەستبوونی هەموو کاڵایەک دەپشکنین و کۆی کۆتاییت بە دینار بۆ دەنێرین: کاڵاکان × نرخی ئێمە ({rate} دینار بۆ هەر دۆلارێک) + گەیاندن تا بەردەم دەرگا. تەنها دوای ئەوەی بە ڕوونی پشتڕاستی دەکەیتەوە دەیکڕین.",
  "howp.s4": "داواکارییەکەت لە ئیماراتەوە بۆ عێراق دەنێرین (خۆڕایی)، گومرگ لەسەر ئێمەیە و شۆفێرەکەمان لە ماوەی نزیکەی {days} ڕۆژدا تا بەردەم دەرگاکەتی دەهێنێت. لە کاتی وەرگرتن پارە دەدەیت.",
  "guide.title": "چۆن ئەپی SHEIN بەکاربهێنیت",
  "guide.lead": "تازە SHEIN بەکاردەهێنیت؟ ئەم هەنگاوانە بگرەبەر بۆ ئامادەکردنی سەبەتەکەت.",
  "guide.1": "ئەپی SHEIN لە App Store یان Google Play دابەزێنە، یان ماڵپەڕی SHEIN بکەرەوە.",
  "guide.2": "بگەڕێ یان بەشەکان ببینە، و فلتەری قەبارە، ڕەنگ و نرخ بەکاربهێنە.",
  "guide.3": "هەر کاڵایەک بکەرەوە و وێنەکان، ڕای کڕیاران، جۆری قوماش و خشتەی قەبارە بپشکنە.",
  "guide.4": "ڕەنگ و قەبارە هەڵبژێرە، پاشان کرتە لە «Add to Cart» بکە.",
  "guide.5": "سەبەتەکەت بکەرەوە و وێنەی شاشەی ڕوون بگرە کە هەر کاڵایەک و قەبارە، ڕەنگ و نرخەکەی تێدا دیار بێت — یان لە ڕێگەی «Share» لینکی هەر کاڵایەک کۆپی بکە.",
  "guide.6": "وێنەکان یان لینکەکان لە واتسئاپ بۆمان بنێرە. لە ناو ئەپی SHEIN پارە مەدە.",
  "tips.title": "ئامۆژگاری بۆ داواکارییەکی بێ کێشە",
  "tips.1": "قەبارەکان لەگەڵ خشتەی قەبارەی هەر کاڵایەک دووبارە بپشکنە.",
  "tips.2": "ناونیشانێکی دروست و نزیکترین نیشانەی ناسراومان پێ بدە و تەلەفۆنەکەت بەردەست بێت.",
  "tips.3": "ئەگەر کاڵایەک نەما، بە وێنەی شاشە ئاگادارت دەکەینەوە و نرخەکە ڕێک دەخەینەوە.",
  "tips.4": "هەرگیز وشەی نهێنیی هەژماری SHEIN یان کۆدەکانی پشتڕاستکردنەوە بە کەس مەدە — ئێمە هەرگیز داوایان ناکەین.",
  "howp.cta": "ئامادەیت؟ سەبەتەکەت بۆمان بنێرە",

  /* ---------- About page ---------- */
  "about.title": "دەربارەی قەڵات شیپینگ",
  "about.lead": "خزمەتگوزارییەکی سەربەخۆی کڕینی کەسی و ناردن لە هەولێرەوە، کە یارمەتی کڕیاران لە سەرانسەری عێراق و هەرێمی کوردستان دەدات بە متمانەوە لە SHEIN بکڕن.",
  "about.storyTitle": "چیرۆکەکەمان",
  "about.story1": "زۆر کەس لە عێراق و هەرێمی کوردستان حەز دەکەن لە SHEIN بکڕن، بەڵام ناتوانن بە ئۆنلاین پارە بدەن یان کاڵا لە دەرەوەی وڵاتەوە بهێنن. قەڵات شیپینگ ئەمە ئاسان دەکات: تۆ کاڵاکانت هەڵدەبژێریت، ئێمە بۆت دەکڕین، لە ئیماراتەوە دەینێرین و تا بەردەم دەرگاکەت دەیگەیەنین.",
  "about.story2": "هەموو شتێک لە واتسئاپ و بە زمانی خۆت ئەنجام دەدرێت، بە نرخێکی کۆتایی ڕوون پێش کڕین و پارەدانی نەختی کاتێک داواکارییەکەت دەگات.",
  "about.nameTitle": "بۆچی «قەڵات»؟",
  "about.name": "«قەڵات» واتە قەڵا. ناوەکەمان لە قەڵای هەولێرەوە هاتووە، دڵی مێژوویی شارەکەمان و شوێنێکی میراتی جیهانیی یونسکۆ. وەک قەڵاکە، دەمانەوێت هێمای هێز، متمانە و میراتی کوردی بین — لە هەر داواکارییەک کە دەیگەیەنین.",
  "about.missionTitle": "ئامانجمان",
  "about.mission": "کڕینی ئۆنلاینی نێودەوڵەتی بۆ هەمووان لە عێراق و هەرێمی کوردستان ئاسان، ڕوون و سەلامەت بکەین: نرخی ڕوون، قسەی ڕاستگۆیانە و گەیاندنی جێی متمانە.",
  "about.trustTitle": "بۆچی کڕیاران دەتوانن متمانەمان پێ بکەن",
  "about.t1.t": "نووسینگەی ڕاستەقینە لە هەولێر",
  "about.t1.d": "سەردانمان بکە لە {address}.",
  "about.t2.t": "پارەدان لە کاتی وەرگرتن",
  "about.t2.d": "بێ پێشەکی بۆ داواکارییەکانی تا {prepayLimit} دۆلار.",
  "about.t3.t": "گومرگ لەسەر ئێمە",
  "about.t3.d": "گومرگ لەلایەن قەڵات شیپینگەوە دەدرێت، بێ هیچ کرێیەکی شاراوە.",
  "about.t4.t": "نرخی ڕوون",
  "about.t4.d": "1 دۆلار = {rate} دینار، و پێش ئەوەی بیکڕین کۆی کۆتایی پشتڕاست دەکەیتەوە.",
  "about.indTitle": "خزمەتگوزارییەکی سەربەخۆ",
  "about.ind": "قەڵات شیپینگ کارێکی سەربەخۆیە. ئێمە SHEIN نین، و هاوبەش، فرۆشیار، بریکار یان فرۆشگای فەرمیی SHEIN نین. ئێمە لە جیاتی کڕیارەکانمان لە SHEIN دەکڕین. SHEIN نیشانەیەکی بازرگانیی خاوەنەکەیەتی.",
  "about.cta": "لە واتسئاپ قسەمان لەگەڵ بکە",

  /* ---------- Contact page ---------- */
  "contact.title": "پەیوەندیمان پێوە بکە",
  "contact.lead": "واتسئاپ خێراترین ڕێگەیە بۆ گەیشتن پێمان. هەروەها دەتوانیت پەیوەندی تەلەفۆنی بکەیت، ئیمەیڵ بنێریت، لە ئینستاگرام یان فەیسبووک نامەمان بۆ بنێریت، یان سەردانی نووسینگەکەمان بکەیت.",
  "form.title": "نامەیەکمان بۆ بنێرە",
  "form.name": "ناوت",
  "form.namePh": "ناوی تەواو",
  "form.city": "شار",
  "form.cityPh": "بۆ نموونە هەولێر",
  "form.msg": "نامە",
  "form.msgPh": "پرسیارەکەت بنووسە یان لینکەکانی SHEIN لێرە دابنێ",
  "form.btn": "لە واتسئاپ بیکەرەوە",
  "form.note": "ئەم فۆرمە واتسئاپ دەکاتەوە و نامەکەت ئامادەی ناردن دەبێت. هیچ شتێک لە ماڵپەڕەکەماندا هەڵناگیرێت.",
  "form.err": "تکایە نامەکەت بنووسە.",
  "contact.mapTitle": "نووسینگەکەمان بدۆزەرەوە",

  /* ---------- 404 ---------- */
  "nf.title": "پەڕەکە نەدۆزرایەوە",
  "nf.text": "ببورە، ئەم پەڕەیە بوونی نییە یان گوازراوەتەوە.",
  "nf.home": "گەڕانەوە بۆ سەرەتا",

  /* ---------- Legal pages (shared) ---------- */
  "legal.updatedDate": "7ی تشرینی دووەمی 2026",
  "legal.toc": "لەم پەڕەیەدا"
});

/* ---------- ui-ar ---------- */
/* Arabic interface text. Same keys as ui-en.js. */
Object.assign(I18N.ar, {
  "lang.name": "العربية",

  /* ---------- Page titles & descriptions ---------- */
  "page.home.title": "قلات شيبينغ | تسوّق من SHEIN وقلات توصلها إليك — العراق وإقليم كردستان",
  "page.home.desc": "خدمة مستقلة للتسوّق من SHEIN والشحن في أربيل. سعر الصرف 1 دولار = {rate} دينار، شحن مجاني من الإمارات إلى العراق، التوصيل إلى الباب ابتداءً من {feeKRG} دينار، الجمارك علينا، والدفع عند الاستلام.",
  "page.about.title": "من نحن | قلات شيبينغ",
  "page.about.desc": "قلات شيبينغ خدمة مستقلة للتسوّق الشخصي والشحن، ولها مكتب حقيقي في أربيل. تعرّف على قصتنا ومعنى اسمنا ولماذا يثق بنا زبائننا.",
  "page.how.title": "طريقة الطلب ودليل تطبيق SHEIN | قلات شيبينغ",
  "page.how.desc": "اطلب من SHEIN بأربع خطوات بسيطة: اختر منتجاتك، أرسل سلتك عبر واتساب، أكّد السعر النهائي وادفع عند الاستلام.",
  "page.contact.title": "اتصل بنا | قلات شيبينغ",
  "page.contact.desc": "تواصل مع قلات شيبينغ عبر واتساب أو الهاتف أو البريد الإلكتروني أو إنستغرام أو فيسبوك، أو زر مكتبنا في شارع 40 متري، برايتي، أربيل.",
  "page.privacy.title": "سياسة الخصوصية | قلات شيبينغ",
  "page.privacy.desc": "كيف تجمع قلات شيبينغ معلوماتك الشخصية وتستخدمها وتشاركها وتحميها.",
  "page.terms.title": "شروط الخدمة | قلات شيبينغ",
  "page.terms.desc": "الشروط التي تنطبق عند الطلب عن طريق قلات شيبينغ.",
  "page.shipping.title": "سياسة الشحن والتوصيل | قلات شيبينغ",
  "page.shipping.desc": "الشحن من الإمارات إلى العراق، ومدة التوصيل، وأجور التوصيل إلى الباب، والجمارك، ومحاولات التوصيل.",
  "page.returns.title": "الإرجاع واسترداد المبالغ والإلغاء | قلات شيبينغ",
  "page.returns.desc": "كيف يتم الإرجاع واسترداد المبالغ وإلغاء الطلبات في قلات شيبينغ.",
  "page.404.title": "الصفحة غير موجودة | قلات شيبينغ",
  "page.404.desc": "الصفحة التي تبحث عنها غير موجودة.",

  /* ---------- Accessibility ---------- */
  "a11y.skip": "الانتقال إلى المحتوى الرئيسي",
  "a11y.home": "قلات شيبينغ — الصفحة الرئيسية",
  "a11y.logo": "شعار قلات شيبينغ",
  "a11y.nav": "القائمة الرئيسية",
  "a11y.menu": "القائمة",
  "a11y.lang": "تغيير اللغة",
  "a11y.wa": "راسلنا على واتساب",
  "a11y.footer": "روابط تذييل الصفحة",
  "a11y.social": "حساباتنا على مواقع التواصل",
  "a11y.toc": "جدول المحتويات",

  /* ---------- Navigation ---------- */
  "nav.home": "الرئيسية",
  "nav.how": "طريقة الطلب",
  "nav.about": "من نحن",
  "nav.contact": "اتصل بنا",
  "nav.shipping": "الشحن",
  "nav.returns": "الإرجاع",
  "nav.privacy": "سياسة الخصوصية",
  "nav.terms": "شروط الخدمة",
  "nav.safe": "احمِ نفسك",
  "header.wa": "واتساب",

  /* ---------- Common words & labels ---------- */
  "currency": "دينار",
  "hours.text": "من السبت إلى الخميس، {time}. الجمعة عطلة.",
  "label.whatsapp": "واتساب",
  "label.phone": "الهاتف",
  "label.email": "البريد الإلكتروني",
  "label.instagram": "إنستغرام",
  "label.facebook": "فيسبوك",
  "label.facebookPage": "صفحتنا على فيسبوك",
  "label.address": "عنوان المكتب",
  "label.hours": "أوقات العمل",
  "label.map": "افتح في خرائط Google",
  "label.mapTitle": "خريطة توضح موقع مكتب قلات شيبينغ في أربيل",
  "label.updated": "آخر تحديث",
  "label.print": "طباعة هذه الصفحة",
  "label.backTop": "العودة إلى الأعلى",

  /* ---------- Footer ---------- */
  "footer.desc": "خدمة مستقلة للتسوّق والشحن: أنت تختار من SHEIN، ونحن نشتري لك، ونشحن من الإمارات ونوصل إلى باب بيتك في كل أنحاء العراق وإقليم كردستان.",
  "footer.explore": "تصفّح",
  "footer.policies": "السياسات",
  "footer.contact": "تواصل معنا",
  "footer.disclaimer": "قلات شيبينغ خدمة مستقلة للتسوّق والشحن. لسنا تابعين لـ SHEIN ولا معتمدين منها ولا شركاء لها. SHEIN علامة تجارية مملوكة لأصحابها.",
  "footer.rights": "© {year} قلات شيبينغ. جميع الحقوق محفوظة.",

  /* ---------- Stay safe notice ---------- */
  "safe.title": "احذر من الحسابات المزيّفة",
  "safe.text": "نتواصل معك فقط من واتساب {waLink} وإنستغرام {igLink} و{fbLink}. لا نطلب أبداً أرقام البطاقات أو كلمات المرور أو رموز التحقق. نطلب الدفع المسبق فقط للطلبات التي تزيد على {prepayLimit} دولار، وعبر هذه القنوات الرسمية فقط.",
  "safe.report": "الإبلاغ عن حساب مزيّف",

  /* ---------- WhatsApp messages (plain text) ---------- */
  "wa.greet": "مرحباً قلات شيبينغ 👋\nأرغب في تقديم طلب من SHEIN.",
  "wa.size": "مرحباً قلات شيبينغ 👋\nلدي سؤال عن المقاسات.",
  "wa.report": "مرحباً قلات شيبينغ،\nأريد الإبلاغ عن حساب مزيّف يستخدم اسمكم:",
  "wa.calc": "مرحباً قلات شيبينغ 👋\nأرغب في الطلب من SHEIN:\n• مجموع SHEIN: {usd} دولار\n• المنتجات: {items} دينار\n• التوصيل إلى الباب ({area}): {fee} دينار\n• الشحن من الإمارات إلى العراق: مجاني\n• الجمارك: على قلات\n• المجموع: {total} دينار{prepayLine}\nسأرسل لكم صور السلة أو الروابط.",
  "wa.calcPrepay": "\n• الدفع المسبق ({prepayPct}): {prepay} دينار\n• عند الاستلام: {cod} دينار",
  "wa.contact": "مرحباً قلات شيبينغ 👋\nالاسم: {cname}\nالمدينة: {ccity}\n\n{cmsg}",

  /* ---------- Home: hero ---------- */
  "hero.eyebrow": "خدمة مستقلة للتسوّق من SHEIN والشحن · العراق وإقليم كردستان",
  "hero.title1": "تسوّق من SHEIN، ",
  "hero.title2": "وقلات توصلها إلى بابك.",
  "hero.sub": "اختر منتجاتك في تطبيق SHEIN وأرسل لنا سلتك عبر واتساب. نشتريها لك، ونشحنها من الإمارات، ونوصلها إلى باب بيتك — وتدفع نقداً عند الاستلام.",
  "hero.cta1": "اطلب عبر واتساب",
  "hero.cta2": "طريقة الطلب",
  "hero.rateLabel": "سعر الصرف لدينا",
  "hero.shipNote": "شحن مجاني من الإمارات إلى العراق • التوصيل إلى الباب ابتداءً من {feeKRG} دينار",
  "stat.ship.v": "شحن مجاني من الإمارات إلى العراق",
  "stat.ship.l": "التوصيل إلى الباب ابتداءً من {feeKRG} دينار",
  "stat.customs.v": "الجمارك علينا",
  "stat.customs.l": "بدون رسوم مخفية",
  "stat.days.v": "{days} يوماً",
  "stat.days.l": "توصيل إلى كل أنحاء العراق",
  "stat.cod.v": "الدفع عند الاستلام",
  "stat.cod.l": "بدون دفع مسبق حتى {prepayLimit} دولار",

  /* ---------- Home: trust strip ---------- */
  "trust.1": "خدمة مستقلة",
  "trust.2": "مكتب حقيقي في أربيل",
  "trust.3": "توصيل إلى كل أنحاء العراق",
  "trust.4": "الدفع عند الاستلام",

  /* ---------- Steps (home + how it works) ---------- */
  "how.title": "أربع خطوات بسيطة",
  "how.lead": "لا تحتاج إلى بطاقة دولية ولا إلى أي تعقيد. أنت تختار — ونحن نتكفّل بالباقي.",
  "step1.t": "اختر منتجاتك من SHEIN",
  "step1.d": "أضف المنتجات التي تعجبك إلى السلة في تطبيق SHEIN أو موقعه.",
  "step2.t": "أرسل سلتك عبر واتساب",
  "step2.d": "أرسل لنا صور شاشة لسلتك أو روابط المنتجات.",
  "step3.t": "نؤكد السعر النهائي والتوفّر",
  "step3.d": "نتحقق من كل منتج ونرسل لك المجموع النهائي بالدينار العراقي. لا نشتري إلا بعد تأكيدك الواضح.",
  "step4.t": "التوصيل إلى باب بيتك",
  "step4.d": "يصلك طلبك خلال {days} يوماً تقريباً. وتدفع نقداً عند الاستلام.",
  "how.more": "الدليل الكامل ونصائح تطبيق SHEIN"
});
Object.assign(I18N.ar, {
  /* ---------- Home: calculator ---------- */
  "calc.title": "احسب سعر طلبك",
  "calc.lead": "أدخل مجموع سلتك في SHEIN بالدولار الأمريكي واختر منطقة التوصيل.",
  "calc.usd": "مجموع سلة SHEIN (بالدولار)",
  "calc.ph": "مثلاً 100",
  "calc.area": "منطقة التوصيل",
  "calc.areaKRG": "إقليم كردستان",
  "calc.areaKRGsub": "أربيل، السليمانية، دهوك، حلبجة",
  "calc.areaOther": "مدينة عراقية أخرى",
  "calc.areaOtherSub": "جميع المحافظات الأخرى",
  "calc.rateLine": "السعر: 1 دولار = {rate} دينار · 100 دولار = {rate100} دينار",
  "calc.result": "المجموع التقديري لطلبك",
  "calc.items": "المنتجات بالدينار",
  "calc.shipping": "الشحن من الإمارات إلى العراق",
  "calc.shippingV": "مجاني",
  "calc.delivery": "التوصيل إلى الباب",
  "calc.customs": "التخليص الجمركي",
  "calc.customsV": "علينا",
  "calc.total": "المجموع",
  "calc.prepay": "الدفع المسبق ({prepayPct})",
  "calc.cod": "عند الاستلام",
  "calc.codOnly": "بدون دفع مسبق — تدفع المبلغ كاملاً عند الاستلام.",
  "calc.prepayNote": "الطلبات التي تزيد على {prepayLimit} دولار: {prepayPct} مقدماً و{restPct} عند الاستلام.",
  "calc.note": "نؤكد السعر النهائي عبر واتساب قبل الشراء. شحن مجاني من الإمارات إلى العراق • التوصيل إلى الباب {feeKRG} دينار في إقليم كردستان أو {feeOther} دينار في المدن الأخرى.",
  "calc.btn": "أرسل هذا التفصيل عبر واتساب",
  "calc.invalid": "يرجى إدخال مبلغ صحيح (مثلاً 49.99).",

  /* ---------- Home: delivery fees ---------- */
  "fees.title": "أجور التوصيل",
  "fees.lead": "شحن مجاني من الإمارات إلى العراق • تدفع فقط أجرة التوصيل إلى الباب داخل العراق.",
  "fees.krg": "إقليم كردستان",
  "fees.krgCities": "أربيل · السليمانية · دهوك · حلبجة",
  "fees.other": "المدن العراقية الأخرى",
  "fees.otherCities": "بغداد والبصرة والموصل وكركوك وجميع المحافظات الأخرى",
  "fees.ship": "الشحن من الإمارات إلى العراق",
  "fees.shipV": "مجاني",
  "fees.shipSub": "أجرة التوصيل إلى الباب تُحسب بشكل منفصل",
  "fees.customs": "التخليص الجمركي",
  "fees.customsV": "علينا",
  "fees.customsSub": "لن تدفع الجمارك أبداً",
  "fees.link": "اقرأ سياسة الشحن والتوصيل",

  /* ---------- Home: size guide ---------- */
  "size.title": "دليل المقاسات",
  "size.lead": "القياسات بالسنتيمتر وهي تقريبية. تحقّق دائماً من جدول المقاسات لكل منتج في تطبيق SHEIN.",
  "size.women": "نساء",
  "size.men": "رجال",
  "size.capW": "جدول مقاسات النساء بالسنتيمتر",
  "size.capM": "جدول مقاسات الرجال بالسنتيمتر",
  "size.size": "المقاس",
  "size.chest": "الصدر",
  "size.waist": "الخصر",
  "size.hip": "الورك",
  "size.unit": "سم",
  "size.how": "الصدر: عند أعرض نقطة · الخصر: عند أضيق نقطة · الورك: عند أعرض نقطة",
  "size.note": "لست متأكداً من مقاسك؟ اسألنا قبل أن تطلب.",
  "size.btn": "اسألنا عن مقاسك",

  /* ---------- Home: customer feedback (placeholders — replace with real reviews) ---------- */
  "fb.title": "ماذا يقول زبائننا",
  "fb.lead": "يمكنك أيضاً مشاهدة آراء الزبائن وصور طلباتهم على حسابنا في إنستغرام.",
  "fb.badge": "نموذج",
  "fb.text": "[رأي الزبون]",
  "fb.name": "[الاسم]",
  "fb.city": "[المدينة]",
  "fb.cta": "شاهد الآراء على إنستغرام",

  /* ---------- Home: FAQ ---------- */
  "faq.title": "الأسئلة الشائعة",
  "faq.lead": "إجابات مختصرة. القواعد الكاملة موجودة في سياساتنا.",
  "faq.1.q": "ما سعر الصرف الذي تعتمدونه؟",
  "faq.1.a": "1 دولار = {rate} دينار، أي أن 100 دولار = {rate100} دينار. نضرب سعر SHEIN وقت الشراء بهذا السعر. قد يتغيّر سعر الصرف، لكن المجموع الذي تؤكده عبر واتساب هو المجموع النهائي.",
  "faq.2.q": "كيف أدفع؟",
  "faq.2.a": "الدفع عند الاستلام فقط. تدفع للسائق نقداً عند وصول طلبك.",
  "faq.3.q": "هل أحتاج إلى دفع أي مبلغ مقدماً؟",
  "faq.3.a": "لا، للطلبات حتى {prepayLimit} دولار. أما الطلبات التي تزيد على {prepayLimit} دولار فيُدفع {prepayPct} من المجموع مقدماً، ويُدفع الباقي {restPct} نقداً عند الاستلام. نطلب الدفع المسبق عبر قنواتنا الرسمية فقط.",
  "faq.4.q": "كم يستغرق التوصيل؟",
  "faq.4.a": "عادةً {days} يوماً. هذه مدة تقديرية وليست مضمونة — فقد تتسبب الجمارك أو الرحلات الجوية أو العطل الرسمية أو الأحوال الجوية في التأخير. نُبقيك على اطلاع عبر واتساب.",
  "faq.5.q": "كم أجرة التوصيل؟",
  "faq.5.a": "الشحن من الإمارات إلى العراق مجاني. أما التوصيل إلى الباب داخل العراق فأجرته {feeKRG} دينار في إقليم كردستان (أربيل، السليمانية، دهوك، حلبجة) و{feeOther} دينار في جميع المدن العراقية الأخرى.",
  "faq.6.q": "هل أدفع الجمارك؟",
  "faq.6.a": "لا. قلات شيبينغ تتحمّل رسوم التخليص الجمركي، ولا توجد أي رسوم مخفية.",
  "faq.7.q": "ماذا لو نفد منتج من المخزون؟",
  "faq.7.a": "نحذفه من طلبك، ونبلغك بذلك مع صور شاشة، ونعدّل السعر.",
  "faq.8.q": "ماذا لو كان المقاس غير مناسب؟",
  "faq.8.a": "يمكنك استرداد المبلغ إذا كان المنتج غير مستعمل وغير مغسول، مع بطاقاته وتغليفه الأصلي. لا يمكن إرجاع الملابس الداخلية لأسباب صحية. تُدفع المبالغ المستردة الموافق عليها خلال {refundHours} ساعة.",
  "faq.9.q": "هل يمكنني إلغاء طلبي؟",
  "faq.9.a": "نعم، مجاناً قبل أن نشتري. بعد الشراء لا يكون الإلغاء مضموناً — نحاول ذلك ما دامت SHEIN تسمح به، وننظر في كل حالة على حدة.",
  "faq.10.q": "كيف أرسل سلتي؟",
  "faq.10.a": "أرسل لنا عبر واتساب صور شاشة لسلتك في SHEIN (يظهر فيها كل منتج ومقاسه ولونه وسعره) أو روابط المنتجات، مع اسمك ومدينتك وعنوانك وأقرب نقطة دالة.",
  "faq.more": "اقرأ جميع السياسات",

  /* ---------- Home: location ---------- */
  "loc.title": "زر مكتبنا في أربيل",
  "loc.lead": "نحن عمل حقيقي بمكتب حقيقي. أهلاً بك في زيارتنا خلال أوقات العمل.",
  "loc.office": "مكتبنا"
});
Object.assign(I18N.ar, {
  /* ---------- How it works page ---------- */
  "howp.title": "طريقة الطلب",
  "howp.lead": "من سلتك في SHEIN إلى باب بيتك بأربع خطوات — مع الدفع عند الاستلام وتأكيد السعر النهائي قبل أن نشتري.",
  "howp.s1": "تصفّح تطبيق SHEIN أو موقعه وأضف كل ما يعجبك إلى السلة. تحقّق من الصور والتقييمات والخامة وجدول المقاسات لكل منتج.",
  "howp.s2": "أرسل لنا عبر واتساب صور شاشة واضحة لسلتك أو روابط المنتجات، مع اسمك ورقم هاتفك ومدينتك وعنوانك وأقرب نقطة دالة.",
  "howp.s3": "نتحقق من سعر كل منتج وتوفّره، ونرسل لك المجموع النهائي بالدينار العراقي: المنتجات × سعر الصرف لدينا ({rate} دينار لكل دولار) + أجرة التوصيل إلى الباب. لا نشتري إلا بعد تأكيدك الواضح.",
  "howp.s4": "نشحن طلبك من الإمارات إلى العراق (مجاناً)، والتخليص الجمركي علينا، ويوصله سائقنا إلى باب بيتك خلال {days} يوماً تقريباً. وتدفع نقداً عند الاستلام.",
  "guide.title": "كيف تستخدم تطبيق SHEIN",
  "guide.lead": "جديد على SHEIN؟ اتبع هذه الخطوات لتجهيز سلتك.",
  "guide.1": "حمّل تطبيق SHEIN من App Store أو Google Play، أو افتح موقع SHEIN.",
  "guide.2": "ابحث أو تصفّح الأقسام، واستخدم الفلاتر لاختيار المقاس واللون والسعر.",
  "guide.3": "افتح كل منتج وتحقّق من الصور وآراء الزبائن والخامة وجدول المقاسات.",
  "guide.4": "اختر اللون والمقاس، ثم اضغط على «أضف إلى السلة».",
  "guide.5": "افتح السلة والتقط صور شاشة واضحة يظهر فيها كل منتج ومقاسه ولونه وسعره — أو انسخ رابط كل منتج عن طريق «مشاركة».",
  "guide.6": "أرسل الصور أو الروابط إلينا عبر واتساب. لا تدفع داخل تطبيق SHEIN.",
  "tips.title": "نصائح لطلب سلس",
  "tips.1": "تأكّد من المقاسات من خلال جدول المقاسات لكل منتج.",
  "tips.2": "أعطنا عنواناً صحيحاً وأقرب نقطة دالة، وأبقِ هاتفك متاحاً.",
  "tips.3": "إذا نفد منتج من المخزون، نبلغك بذلك مع صور شاشة ونعدّل السعر.",
  "tips.4": "لا تشارك كلمة مرور حسابك في SHEIN أو رموز التحقق مع أي أحد — لن نطلبها منك أبداً.",
  "howp.cta": "جاهز؟ أرسل لنا سلتك",

  /* ---------- About page ---------- */
  "about.title": "عن قلات شيبينغ",
  "about.lead": "خدمة مستقلة للتسوّق الشخصي والشحن من أربيل، تساعد الزبائن في كل أنحاء العراق وإقليم كردستان على التسوّق من SHEIN بثقة.",
  "about.storyTitle": "قصتنا",
  "about.story1": "كثيرون في العراق وإقليم كردستان يحبّون التسوّق من SHEIN، لكنهم لا يستطيعون الدفع عبر الإنترنت أو الشحن الدولي. قلات شيبينغ تجعل الأمر سهلاً: أنت تختار منتجاتك، ونحن نشتريها لك، ونشحنها من الإمارات، ونوصلها إلى باب بيتك.",
  "about.story2": "كل شيء يتم عبر واتساب وبلغتك، مع سعر نهائي واضح قبل الشراء، ودفع نقدي عند وصول طلبك.",
  "about.nameTitle": "لماذا «قلات»؟",
  "about.name": "«قلات» تعني القلعة. اسمنا مستوحى من قلعة أربيل، القلب التاريخي لمدينتنا وأحد مواقع التراث العالمي لليونسكو. ومثل القلعة، نريد أن نمثّل القوة والثقة والتراث الكردي — في كل طلب نوصله.",
  "about.missionTitle": "رسالتنا",
  "about.mission": "أن نجعل التسوّق الدولي عبر الإنترنت سهلاً وشفافاً وآمناً للجميع في العراق وإقليم كردستان: أسعار واضحة، وتواصل صادق، وتوصيل موثوق.",
  "about.trustTitle": "لماذا يمكن للزبائن أن يثقوا بنا",
  "about.t1.t": "مكتب حقيقي في أربيل",
  "about.t1.d": "زورونا في {address}.",
  "about.t2.t": "الدفع عند الاستلام",
  "about.t2.d": "بدون دفع مسبق للطلبات حتى {prepayLimit} دولار.",
  "about.t3.t": "الجمارك علينا",
  "about.t3.d": "قلات شيبينغ تتحمّل رسوم التخليص الجمركي، بدون أي رسوم مخفية.",
  "about.t4.t": "أسعار شفافة",
  "about.t4.d": "1 دولار = {rate} دينار، وتؤكد المجموع النهائي قبل أن نشتري.",
  "about.indTitle": "خدمة مستقلة",
  "about.ind": "قلات شيبينغ عمل مستقل. نحن لسنا SHEIN، ولسنا شريكاً أو موزّعاً أو وكيلاً أو متجراً رسمياً لـ SHEIN. نشتري من SHEIN نيابةً عن زبائننا. SHEIN علامة تجارية مملوكة لأصحابها.",
  "about.cta": "تحدّث معنا عبر واتساب",

  /* ---------- Contact page ---------- */
  "contact.title": "اتصل بنا",
  "contact.lead": "واتساب هو أسرع طريقة للتواصل معنا. ويمكنك أيضاً الاتصال بنا، أو مراسلتنا عبر البريد الإلكتروني أو إنستغرام أو فيسبوك، أو زيارة مكتبنا.",
  "form.title": "أرسل لنا رسالة",
  "form.name": "اسمك",
  "form.namePh": "الاسم الكامل",
  "form.city": "المدينة",
  "form.cityPh": "مثلاً أربيل",
  "form.msg": "الرسالة",
  "form.msgPh": "اكتب سؤالك أو الصق روابط SHEIN",
  "form.btn": "افتح في واتساب",
  "form.note": "يفتح هذا النموذج واتساب ورسالتك جاهزة للإرسال. لا يُحفظ أي شيء على موقعنا.",
  "form.err": "يرجى كتابة رسالتك.",
  "contact.mapTitle": "اعثر على مكتبنا",

  /* ---------- 404 ---------- */
  "nf.title": "الصفحة غير موجودة",
  "nf.text": "عذراً، هذه الصفحة غير موجودة أو تم نقلها.",
  "nf.home": "العودة إلى الرئيسية",

  /* ---------- Legal pages (shared) ---------- */
  "legal.updatedDate": "7 تشرين الثاني 2026",
  "legal.toc": "في هذه الصفحة"
});

/* ---------- privacy ---------- */
/* Privacy Policy — English, Kurdish (Sorani), Arabic */
I18N.en["legal.privacy"] = {
  title: "Privacy Policy",
  intro: "This policy explains, in plain language, what personal information {name} collects when you order through us, why we need it, who we share it with and how you can control it. We collect only what we need to deliver your order, and we never sell your data.",
  sections: [
    { h: "Who we are", b: [
      "{name} is an independent online personal-shopping and shipping service with an office at {address}. You choose items on the SHEIN app or website, send us your basket on WhatsApp, and we buy the items on your behalf, ship them from the UAE and deliver them to your door anywhere in Iraq and the Kurdistan Region.",
      "{name} is responsible for the personal information described in this policy. You can reach us at any time:",
      "- WhatsApp and phone: {waLink}",
      "- Email: {emailLink}",
      "<strong>We are not SHEIN.</strong> We are not a SHEIN partner, reseller, agent or official store, and we are not affiliated with or endorsed by SHEIN. SHEIN is a trademark of its owner and is mentioned only to describe where we buy your items."
    ] },
    { h: "Scope of this policy", b: [
      "This policy applies to personal information we receive through all of our official channels:",
      "- Our website ({site})",
      "- WhatsApp",
      "- Instagram",
      "- Facebook",
      "- Phone calls",
      "It does not cover the SHEIN website or app, or any other website or service that we do not operate."
    ] },
    { h: "Information we collect", b: [
      "## Information you give us",
      "When you contact us or place an order, you may give us:",
      "- Your full name",
      "- Your phone and WhatsApp number",
      "- Your delivery address, city and nearest landmark",
      "- SHEIN basket links or screenshots",
      "- Product details, such as colours, quantities and sizes",
      "- Your order history with us",
      "- The messages you send us",
      "## Our website",
      "Our website collects very little information:",
      "- Our hosting provider keeps only basic technical logs, used for security purposes.",
      "- Your language preference is saved in your own browser (localStorage) so the site opens in your chosen language next time. This stays on your device and is not sent to us.",
      "We use <strong>no advertising cookies, no analytics and no tracking pixels</strong>.",
      "## What we never ask for or store",
      "We will <strong>never</strong> ask you for, and we never store:",
      "- Bank card numbers",
      "- Passwords",
      "- SHEIN account passwords",
      "- Verification codes (such as codes sent to you by SMS)",
      "If anyone claiming to be {name} asks you for any of these, do not share them and contact us on {waLink}."
    ] },
    { h: "How we use your information", b: [
      "We use your information only to provide our service, specifically to:",
      "- Price, purchase and deliver your order",
      "- Contact you about order confirmation, sold-out items, delays, delivery and refunds",
      "- Provide customer support and answer your questions",
      "- Prevent fraud and protect our customers and our business",
      "We <strong>never sell</strong> your information. We will not send you marketing that is unrelated to your order without your consent."
    ] },
    { h: "Legal basis for using your information", b: [
      "We use your personal information on the following grounds:",
      "- <strong>To perform the order you requested:</strong> we cannot buy, ship or deliver your order without your name, phone number and address.",
      "- <strong>Your consent:</strong> for example, when you choose to contact us and send us your details.",
      "You can withdraw your consent at any time by contacting us. Withdrawing consent does not affect anything we did before you withdrew it, but we may no longer be able to complete an order that is in progress."
    ] },
    { h: "Who we share your information with", b: [
      "We do not sell, rent or give your personal information to anyone for their own use.",
      "We only pass on the minimum information needed to complete your order, and only to:",
      "- <strong>SHEIN</strong> — the product order details needed to make the purchase",
      "- <strong>Our shipping partner in the UAE</strong> — the details needed to ship your parcel to Iraq",
      "- <strong>Our local delivery drivers</strong> — your name, phone number and address only, so they can deliver your parcel",
      "We will share information with the authorities only if we are required to do so by law."
    ] },
    { h: "Third-party platforms", b: [
      "When you contact us through WhatsApp, Instagram or Facebook, or open our location on Google Maps, those platforms process your information under their own privacy policies, which we do not control. We recommend reading them:",
      "- <a href=\"https://www.whatsapp.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>",
      "- <a href=\"https://privacycenter.instagram.com/policy\" target=\"_blank\" rel=\"noopener\">Instagram</a>",
      "- <a href=\"https://www.facebook.com/privacy/policy\" target=\"_blank\" rel=\"noopener\">Facebook</a>",
      "- <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google (Maps)</a>"
    ] },
    { h: "International processing", b: [
      "Because your order is shipped from the UAE, your order details are processed in the UAE. This is done only to ship your order to Iraq and for no other purpose."
    ] },
    { h: "How long we keep your information", b: [
      "We keep order and customer data for {retention} months. After that, it is permanently deleted."
    ] },
    { h: "How we protect your information", b: [
      "We take reasonable steps to keep your information safe:",
      "- Only a limited number of staff can access customer information, and only when they need it for their work.",
      "- Our accounts are secured with two-factor authentication.",
      "- We do not store payment card details of any kind.",
      "No method of sending or storing information online is completely secure, but we work hard to protect your data."
    ] },
    { h: "Your rights", b: [
      "You have the right to:",
      "- Ask for a copy of the personal information we hold about you",
      "- Ask us to correct information that is wrong or incomplete",
      "- Ask us to delete your information",
      "- Withdraw your consent at any time",
      "- Ask us to stop sending you messages",
      "To make a request, contact us on WhatsApp at {waLink} or by email at {emailLink}. We will respond within {responseDays} days."
    ] },
    { h: "Children", b: [
      "Our service is for people aged {minAge} and over. Anyone under {minAge} must place their order through a parent or guardian."
    ] },
    { h: "Changes to this policy", b: [
      "We may update this policy from time to time, for example if our service or the law changes. The date at the top of this page shows the latest version.",
      "Last updated: {updated}"
    ] },
    { h: "Contact us", b: [
      "If you have any questions about this policy or your personal information, please contact us:",
      "- <strong>{name}</strong>",
      "- Office: {address}",
      "- WhatsApp and phone: {waLink}",
      "- Email: {emailLink}",
      "- Instagram: {igLink}",
      "- Facebook: {fbLink}",
      "- Working hours: {hours}"
    ] }
  ]
};

I18N.ku["legal.privacy"] = {
  title: "سیاسەتی تایبەتمەندی",
  intro: "ئەم سیاسەتە بە زمانێکی ساکار ڕوون دەکاتەوە کە {name} چ زانیارییەکی کەسی کۆدەکاتەوە کاتێک لە ڕێگەی ئێمەوە داواکاری دەکەیت، بۆچی پێویستمانە، لەگەڵ کێ بەشی دەکەین و چۆن دەتوانیت کۆنترۆڵی بکەیت. تەنها ئەوە کۆدەکەینەوە کە بۆ گەیاندنی داواکارییەکەت پێویستە، و هەرگیز زانیارییەکانت نافرۆشین.",
  sections: [
    { h: "ئێمە کێین", b: [
      "{name} خزمەتگوزارییەکی سەربەخۆی ئۆنلاینە بۆ کڕین لە جیاتی کڕیار و ناردن، و نووسینگەیەکمان هەیە لەم ناونیشانە: {address}. تۆ کاڵاکان لە ئەپ یان ماڵپەڕی SHEIN هەڵدەبژێریت، سەبەتەکەت لە ڕێگەی واتسئاپەوە بۆمان دەنێریت، ئێمەش کاڵاکان لە جیاتی تۆ دەکڕین، لە ئیماراتەوە دەیاننێرین و تا بەردەم دەرگاکەت لە هەر شوێنێکی عێراق و هەرێمی کوردستان دەیانگەیەنین.",
      "{name} بەرپرسە لەو زانیارییە کەسییانەی لەم سیاسەتەدا باسکراون. لە هەر کاتێکدا دەتوانیت پەیوەندیمان پێوە بکەیت:",
      "- واتسئاپ و تەلەفۆن: {waLink}",
      "- ئیمەیڵ: {emailLink}",
      "<strong>ئێمە SHEIN نین.</strong> ئێمە هاوبەش، فرۆشیار، بریکار یان فرۆشگای فەرمیی SHEIN نین، هیچ پەیوەندییەکمان بە SHEIN ەوە نییە و لەلایەن ئەوانەوە پشتگیری نەکراوین. SHEIN نیشانەیەکی بازرگانیی خاوەنەکەیەتی و تەنها بۆ ئەوە ناوی دەهێنین کە ڕوونی بکەینەوە کاڵاکانت لە کوێ دەکڕین."
    ] },
    { h: "بواری ئەم سیاسەتە", b: [
      "ئەم سیاسەتە ئەو زانیارییە کەسییانە دەگرێتەوە کە لە ڕێگەی هەموو کەناڵە فەرمییەکانمانەوە پێمان دەگات:",
      "- ماڵپەڕەکەمان ({site})",
      "- واتسئاپ",
      "- ئینستاگرام",
      "- فەیسبووک",
      "- پەیوەندیی تەلەفۆنی",
      "ئەم سیاسەتە ماڵپەڕ یان ئەپی SHEIN، و هیچ ماڵپەڕ یان خزمەتگوزارییەکی تر ناگرێتەوە کە ئێمە بەڕێوەی نابەین."
    ] },
    { h: "ئەو زانیارییانەی کۆیان دەکەینەوە", b: [
      "## ئەو زانیارییانەی خۆت پێمانی دەدەیت",
      "کاتێک پەیوەندیمان پێوە دەکەیت یان داواکاری دەکەیت، لەوانەیە ئەم زانیارییانەمان پێ بدەیت:",
      "- ناوی تەواوت",
      "- ژمارەی تەلەفۆن و واتسئاپەکەت",
      "- ناونیشانی گەیاندن، شار و نزیکترین شوێنی ناسراو",
      "- لینک یان وێنەی شاشەی (سکرینشۆتی) سەبەتەی SHEIN",
      "- وردەکاریی کاڵاکان، وەک ڕەنگ، ژمارە و قەبارە",
      "- مێژووی داواکارییەکانت لای ئێمە",
      "- ئەو نامانەی بۆمانی دەنێریت",
      "## ماڵپەڕەکەمان",
      "ماڵپەڕەکەمان زانیارییەکی زۆر کەم کۆدەکاتەوە:",
      "- دابینکەری هۆستینگەکەمان تەنها تۆمارە تەکنیکییە سەرەتاییەکان هەڵدەگرێت، کە بۆ مەبەستی پاراستن و ئاسایش بەکاردێن.",
      "- زمانی هەڵبژێردراوت لە وێبگەڕەکەی خۆتدا (localStorage) پاشەکەوت دەکرێت، تا جاری داهاتوو ماڵپەڕەکە بە هەمان زمان بکرێتەوە. ئەم زانیارییە لەسەر ئامێرەکەی خۆت دەمێنێتەوە و بۆ ئێمە نانێردرێت.",
      "ئێمە <strong>هیچ کووکیی ڕیکلام، هیچ ئامرازی شیکاری (ئەنالیتیکس) و هیچ پیکسڵی شوێنکەوتن</strong> بەکارناهێنین.",
      "## ئەوەی هەرگیز داوای ناکەین و هەڵی ناگرین",
      "ئێمە <strong>هەرگیز</strong> داوای ئەمانەت لێ ناکەین و هەرگیز هەڵیان ناگرین:",
      "- ژمارەی کارتی بانکی",
      "- وشەی نهێنی",
      "- وشەی نهێنیی هەژماری SHEIN",
      "- کۆدی پشتڕاستکردنەوە (وەک ئەو کۆدانەی بە نامەی SMS بۆت دێن)",
      "ئەگەر کەسێک خۆی بە {name} ناساند و داوای یەکێک لەمانەی لێ کردیت، مەیدەرێ و لە ڕێگەی {waLink} پەیوەندیمان پێوە بکە."
    ] },
    { h: "چۆن زانیارییەکانت بەکاردەهێنین", b: [
      "زانیارییەکانت تەنها بۆ پێشکەشکردنی خزمەتگوزارییەکەمان بەکاردەهێنین، بە تایبەتی بۆ:",
      "- دیاریکردنی نرخ، کڕین و گەیاندنی داواکارییەکەت",
      "- پەیوەندیکردن پێتەوە دەربارەی پشتڕاستکردنەوەی داواکاری، کاڵا تەواوبووەکان، دواکەوتن، گەیاندن و گەڕاندنەوەی پارە",
      "- پێشکەشکردنی خزمەتگوزاریی کڕیاران و وەڵامدانەوەی پرسیارەکانت",
      "- ڕێگرتن لە فێڵ و ساختەکاری و پاراستنی کڕیاران و کارەکەمان",
      "ئێمە <strong>هەرگیز</strong> زانیارییەکانت <strong>نافرۆشین</strong>. بەبێ ڕەزامەندیی خۆت هیچ ڕیکلامێکت بۆ نانێرین کە پەیوەندیی بە داواکارییەکەتەوە نەبێت."
    ] },
    { h: "بنەمای یاسایی بۆ بەکارهێنانی زانیارییەکانت", b: [
      "زانیارییە کەسییەکانت لەسەر ئەم بنەمایانە بەکاردەهێنین:",
      "- <strong>جێبەجێکردنی ئەو داواکارییەی خۆت داوات کردووە:</strong> بەبێ ناو، ژمارەی تەلەفۆن و ناونیشانەکەت ناتوانین داواکارییەکەت بکڕین، بینێرین یان بیگەیەنین.",
      "- <strong>ڕەزامەندیی خۆت:</strong> بۆ نموونە، کاتێک بە ویستی خۆت پەیوەندیمان پێوە دەکەیت و زانیارییەکانتمان بۆ دەنێریت.",
      "دەتوانیت لە هەر کاتێکدا بە پەیوەندیکردن پێمانەوە ڕەزامەندییەکەت بکشێنیتەوە. کشانەوەی ڕەزامەندی کار ناکاتە سەر ئەوەی پێشتر کراوە، بەڵام لەوانەیە ئیتر نەتوانین داواکارییەک تەواو بکەین کە لە ژێر کارکردندایە."
    ] },
    { h: "زانیارییەکانت لەگەڵ کێ بەش دەکەین", b: [
      "ئێمە زانیارییە کەسییەکانت نافرۆشین، بە کرێ نایدەین و نایدەین بە هیچ کەسێک بۆ بەکارهێنانی تایبەتیی خۆی.",
      "تەنها کەمترین بڕی زانیاری کە بۆ تەواوکردنی داواکارییەکەت پێویستە دەنێرین، ئەویش تەنها بۆ:",
      "- <strong>SHEIN</strong> — وردەکاریی داواکاریی کاڵاکان کە بۆ ئەنجامدانی کڕینەکە پێویستە",
      "- <strong>هاوبەشی ناردنمان لە ئیمارات</strong> — ئەو زانیارییانەی بۆ ناردنی بەستەکەت بۆ عێراق پێویستن",
      "- <strong>گەیەنەرە ناوخۆییەکانمان</strong> — تەنها ناو، ژمارەی تەلەفۆن و ناونیشانەکەت، تا بتوانن بەستەکەت بگەیەنن",
      "تەنها ئەگەر یاسا داوامان لێ بکات، زانیاری لەگەڵ دەسەڵاتداران بەش دەکەین."
    ] },
    { h: "پلاتفۆرمەکانی لایەنی سێیەم", b: [
      "کاتێک لە ڕێگەی واتسئاپ، ئینستاگرام یان فەیسبووکەوە پەیوەندیمان پێوە دەکەیت، یان شوێنەکەمان لەسەر گووگڵ مەپس دەکەیتەوە، ئەو پلاتفۆرمانە بەپێی سیاسەتی تایبەتمەندیی خۆیان مامەڵە لەگەڵ زانیارییەکانت دەکەن، کە لە ژێر کۆنترۆڵی ئێمەدا نین. پێشنیار دەکەین بیانخوێنیتەوە:",
      "- <a href=\"https://www.whatsapp.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>",
      "- <a href=\"https://privacycenter.instagram.com/policy\" target=\"_blank\" rel=\"noopener\">Instagram</a>",
      "- <a href=\"https://www.facebook.com/privacy/policy\" target=\"_blank\" rel=\"noopener\">Facebook</a>",
      "- <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google (Maps)</a>"
    ] }
  ]
};
I18N.ku["legal.privacy"].sections.push(
  { h: "مامەڵەکردنی نێودەوڵەتی", b: [
    "لەبەر ئەوەی داواکارییەکەت لە ئیماراتەوە دەنێردرێت، وردەکارییەکانی داواکارییەکەت لە ئیمارات مامەڵەیان لەگەڵ دەکرێت. ئەمەش تەنها بۆ ناردنی داواکارییەکەتە بۆ عێراق و بۆ هیچ مەبەستێکی تر نییە."
  ] },
  { h: "ماوەی هەڵگرتنی زانیارییەکانت", b: [
    "زانیارییەکانی داواکاری و کڕیاران بۆ ماوەی {retention} مانگ هەڵدەگرین. دوای ئەوە بە یەکجاری دەسڕدرێنەوە."
  ] },
  { h: "چۆن زانیارییەکانت دەپارێزین", b: [
    "هەنگاوی گونجاو دەنێین بۆ پاراستنی زانیارییەکانت:",
    "- تەنها ژمارەیەکی سنووردار لە کارمەندان دەستیان بە زانیاریی کڕیاران دەگات، ئەویش تەنها کاتێک بۆ کارەکەیان پێویستیان پێی بێت.",
    "- هەژمارەکانمان بە پشتڕاستکردنەوەی دوو هەنگاوی پارێزراون.",
    "- هیچ جۆرە زانیارییەکی کارتی پارەدان هەڵناگرین.",
    "هیچ ڕێگەیەکی ناردن یان هەڵگرتنی زانیاری لە ئینتەرنێتدا بە تەواوی پارێزراو نییە، بەڵام بە هەموو توانامانەوە کار دەکەین بۆ پاراستنی زانیارییەکانت."
  ] },
  { h: "مافەکانت", b: [
    "تۆ مافی ئەمانەت هەیە:",
    "- داوای کۆپییەک لەو زانیارییە کەسییانە بکەیت کە لامانە",
    "- داوا بکەیت ئەو زانیارییانەی هەڵە یان ناتەواون ڕاست بکەینەوە",
    "- داوا بکەیت زانیارییەکانت بسڕینەوە",
    "- لە هەر کاتێکدا ڕەزامەندییەکەت بکشێنیتەوە",
    "- داوا بکەیت ئیتر نامەت بۆ نەنێرین",
    "بۆ پێشکەشکردنی داواکارییەک، لە ڕێگەی واتسئاپەوە لەسەر {waLink} یان بە ئیمەیڵ لەسەر {emailLink} پەیوەندیمان پێوە بکە. لە ماوەی {responseDays} ڕۆژدا وەڵامت دەدەینەوە."
  ] },
  { h: "منداڵان", b: [
    "خزمەتگوزارییەکەمان بۆ کەسانی تەمەن {minAge} ساڵ و سەرووترە. هەر کەسێک تەمەنی لە {minAge} ساڵ کەمتر بێت، دەبێت لە ڕێگەی دایک و باوک یان سەرپەرشتیارەکەیەوە داواکاری بکات."
  ] },
  { h: "گۆڕانکاری لەم سیاسەتەدا", b: [
    "لەوانەیە جار جار ئەم سیاسەتە نوێ بکەینەوە، بۆ نموونە ئەگەر خزمەتگوزارییەکەمان یان یاساکان گۆڕان. ئەو بەروارەی لە سەرەوەی ئەم پەڕەیەدایە دوایین وەشان پیشان دەدات.",
    "دوایین نوێکردنەوە: {updated}"
  ] },
  { h: "پەیوەندیمان پێوە بکە", b: [
    "ئەگەر هەر پرسیارێکت دەربارەی ئەم سیاسەتە یان زانیارییە کەسییەکانت هەیە، تکایە پەیوەندیمان پێوە بکە:",
    "- <strong>{name}</strong>",
    "- نووسینگە: {address}",
    "- واتسئاپ و تەلەفۆن: {waLink}",
    "- ئیمەیڵ: {emailLink}",
    "- ئینستاگرام: {igLink}",
    "- فەیسبووک: {fbLink}",
    "- کاتەکانی کار: {hours}"
  ] }
);

I18N.ar["legal.privacy"] = {
  title: "سياسة الخصوصية",
  intro: "توضّح هذه السياسة بلغة بسيطة ما هي المعلومات الشخصية التي تجمعها {name} عندما تطلب عن طريقنا، ولماذا نحتاجها، ومع من نشاركها، وكيف يمكنك التحكم بها. نجمع فقط ما نحتاجه لتوصيل طلبك، ولا نبيع بياناتك أبداً.",
  sections: [
    { h: "من نحن", b: [
      "{name} خدمة مستقلة للتسوّق الشخصي والشحن عبر الإنترنت، ولدينا مكتب في العنوان التالي: {address}. تختار المنتجات من تطبيق أو موقع SHEIN، وترسل لنا سلّتك عبر واتساب، فنشتري المنتجات نيابةً عنك، ونشحنها من الإمارات، ونوصلها إلى باب منزلك في أي مكان في العراق وإقليم كردستان.",
      "{name} هي الجهة المسؤولة عن المعلومات الشخصية الموضّحة في هذه السياسة. يمكنك التواصل معنا في أي وقت:",
      "- واتساب والهاتف: {waLink}",
      "- البريد الإلكتروني: {emailLink}",
      "<strong>نحن لسنا SHEIN.</strong> لسنا شريكاً أو موزّعاً أو وكيلاً أو متجراً رسمياً لـ SHEIN، ولا تربطنا بها أي علاقة، ولا نحظى بتأييدها. إن SHEIN علامة تجارية مملوكة لصاحبها، ونذكرها فقط لتوضيح المكان الذي نشتري منه منتجاتك."
    ] },
    { h: "نطاق هذه السياسة", b: [
      "تنطبق هذه السياسة على المعلومات الشخصية التي نتلقّاها عبر جميع قنواتنا الرسمية:",
      "- موقعنا الإلكتروني ({site})",
      "- واتساب",
      "- إنستغرام",
      "- فيسبوك",
      "- المكالمات الهاتفية",
      "ولا تشمل هذه السياسة موقع أو تطبيق SHEIN، ولا أي موقع أو خدمة أخرى لا نديرها."
    ] },
    { h: "المعلومات التي نجمعها", b: [
      "## المعلومات التي تقدّمها لنا",
      "عند التواصل معنا أو تقديم طلب، قد تزوّدنا بما يلي:",
      "- اسمك الكامل",
      "- رقم هاتفك ورقم واتساب",
      "- عنوان التوصيل والمدينة وأقرب نقطة دالّة",
      "- روابط سلّة SHEIN أو لقطات الشاشة",
      "- تفاصيل المنتجات، مثل الألوان والكميات والمقاسات",
      "- سجلّ طلباتك لدينا",
      "- الرسائل التي ترسلها إلينا",
      "## موقعنا الإلكتروني",
      "يجمع موقعنا القليل جداً من المعلومات:",
      "- يحتفظ مزوّد الاستضافة لدينا بسجلات تقنية أساسية فقط، تُستخدم لأغراض الأمان.",
      "- يُحفظ اختيارك للغة في متصفحك أنت (localStorage) ليفتح الموقع بلغتك المختارة في المرة القادمة. تبقى هذه المعلومة على جهازك ولا تُرسل إلينا.",
      "لا نستخدم <strong>أي ملفات تعريف ارتباط (كوكيز) إعلانية، ولا أدوات تحليلات، ولا بكسلات تتبّع</strong>.",
      "## ما لا نطلبه ولا نحتفظ به أبداً",
      "لن نطلب منك <strong>أبداً</strong> ما يلي، ولا نحتفظ به مطلقاً:",
      "- أرقام البطاقات المصرفية",
      "- كلمات المرور",
      "- كلمات مرور حساب SHEIN",
      "- رموز التحقق (مثل الرموز التي تصلك برسالة SMS)",
      "إذا طلب منك أي شخص يدّعي أنه من {name} أياً من هذه المعلومات، فلا تشاركها وتواصل معنا على {waLink}."
    ] },
    { h: "كيف نستخدم معلوماتك", b: [
      "نستخدم معلوماتك فقط لتقديم خدمتنا، وتحديداً من أجل:",
      "- تسعير طلبك وشرائه وتوصيله",
      "- التواصل معك بشأن تأكيد الطلب، والمنتجات النافدة، والتأخير، والتوصيل، واسترداد المبالغ",
      "- تقديم خدمة العملاء والإجابة عن أسئلتك",
      "- منع الاحتيال وحماية عملائنا وأعمالنا",
      "نحن <strong>لا نبيع</strong> معلوماتك أبداً، ولن نرسل إليك رسائل تسويقية لا علاقة لها بطلبك دون موافقتك."
    ] },
    { h: "الأساس القانوني لاستخدام معلوماتك", b: [
      "نستخدم معلوماتك الشخصية على الأسس التالية:",
      "- <strong>تنفيذ الطلب الذي طلبته:</strong> لا يمكننا شراء طلبك أو شحنه أو توصيله دون اسمك ورقم هاتفك وعنوانك.",
      "- <strong>موافقتك:</strong> مثلاً عندما تختار التواصل معنا وإرسال بياناتك إلينا.",
      "يمكنك سحب موافقتك في أي وقت بالتواصل معنا. لا يؤثر سحب الموافقة على ما تمّ قبل سحبها، ولكن قد لا نتمكن بعد ذلك من إكمال طلب قيد التنفيذ."
    ] },
    { h: "مع من نشارك معلوماتك", b: [
      "لا نبيع معلوماتك الشخصية ولا نؤجّرها ولا نعطيها لأي جهة لاستخدامها الخاص.",
      "نمرّر فقط الحدّ الأدنى من المعلومات اللازمة لإتمام طلبك، وذلك فقط إلى:",
      "- <strong>SHEIN</strong> — تفاصيل طلب المنتجات اللازمة لإتمام الشراء",
      "- <strong>شريك الشحن لدينا في الإمارات</strong> — البيانات اللازمة لشحن طردك إلى العراق",
      "- <strong>مندوبي التوصيل المحليين لدينا</strong> — اسمك ورقم هاتفك وعنوانك فقط، لتوصيل طردك",
      "لن نشارك المعلومات مع السلطات إلا إذا كان القانون يُلزمنا بذلك."
    ] },
    { h: "منصّات الأطراف الثالثة", b: [
      "عندما تتواصل معنا عبر واتساب أو إنستغرام أو فيسبوك، أو تفتح موقعنا على خرائط Google، فإن هذه المنصات تعالج معلوماتك وفق سياسات الخصوصية الخاصة بها، والتي لا نتحكم بها. ننصحك بالاطلاع عليها:",
      "- <a href=\"https://www.whatsapp.com/legal/privacy-policy\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>",
      "- <a href=\"https://privacycenter.instagram.com/policy\" target=\"_blank\" rel=\"noopener\">Instagram</a>",
      "- <a href=\"https://www.facebook.com/privacy/policy\" target=\"_blank\" rel=\"noopener\">Facebook</a>",
      "- <a href=\"https://policies.google.com/privacy\" target=\"_blank\" rel=\"noopener\">Google (Maps)</a>"
    ] }
  ]
};
I18N.ar["legal.privacy"].sections.push(
  { h: "المعالجة الدولية", b: [
    "بما أن طلبك يُشحن من الإمارات، تتم معالجة تفاصيل طلبك في الإمارات، وذلك فقط لشحن طلبك إلى العراق وليس لأي غرض آخر."
  ] },
  { h: "مدة الاحتفاظ بمعلوماتك", b: [
    "نحتفظ ببيانات الطلبات والعملاء لمدة {retention} أشهر، ثم تُحذف نهائياً."
  ] },
  { h: "كيف نحمي معلوماتك", b: [
    "نتخذ خطوات معقولة للحفاظ على أمان معلوماتك:",
    "- يقتصر الوصول إلى معلومات العملاء على عدد محدود من الموظفين، وعند حاجتهم إليها في عملهم فقط.",
    "- حساباتنا محميّة بالمصادقة الثنائية (التحقق بخطوتين).",
    "- لا نحتفظ بأي بيانات لبطاقات الدفع من أي نوع.",
    "لا توجد وسيلة لإرسال المعلومات أو تخزينها عبر الإنترنت آمنة تماماً، لكننا نبذل قصارى جهدنا لحماية بياناتك."
  ] },
  { h: "حقوقك", b: [
    "يحق لك:",
    "- طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك",
    "- طلب تصحيح المعلومات الخاطئة أو غير المكتملة",
    "- طلب حذف معلوماتك",
    "- سحب موافقتك في أي وقت",
    "- طلب التوقف عن إرسال الرسائل إليك",
    "لتقديم طلب، تواصل معنا عبر واتساب على {waLink} أو عبر البريد الإلكتروني على {emailLink}. سنردّ عليك خلال {responseDays} يوماً."
  ] },
  { h: "الأطفال", b: [
    "خدمتنا مخصّصة للأشخاص الذين تبلغ أعمارهم {minAge} عاماً فأكثر. ويجب على من هم دون {minAge} عاماً تقديم طلباتهم عن طريق أحد الوالدين أو الوليّ."
  ] },
  { h: "التغييرات على هذه السياسة", b: [
    "قد نحدّث هذه السياسة من وقت لآخر، مثلاً إذا تغيّرت خدمتنا أو القوانين. ويوضّح التاريخ في أعلى هذه الصفحة أحدث إصدار.",
    "آخر تحديث: {updated}"
  ] },
  { h: "تواصل معنا", b: [
    "إذا كانت لديك أي أسئلة حول هذه السياسة أو معلوماتك الشخصية، يُرجى التواصل معنا:",
    "- <strong>{name}</strong>",
    "- المكتب: {address}",
    "- واتساب والهاتف: {waLink}",
    "- البريد الإلكتروني: {emailLink}",
    "- إنستغرام: {igLink}",
    "- فيسبوك: {fbLink}",
    "- ساعات العمل: {hours}"
  ] }
);

/* ---------- terms ---------- */
/* Terms of Service — English, Kurdish (Sorani), Arabic */
I18N.en["legal.terms"] = {
  title: "Terms of Service",
  intro: "These terms explain how ordering through {name} works: what we do for you, what you pay, how delivery, cancellations and refunds work, and what we each agree to. Please read them before you place an order.",
  sections: [
    { h: "Acceptance of these terms", b: [
      "These Terms of Service apply to every order you place with {name}. When you send us an order through any of our channels (WhatsApp, phone, Instagram, Facebook or email) and confirm it, you accept these terms.",
      "If you do not agree with these terms, please do not place an order with us."
    ] },
    { h: "Our service", b: [
      "{name} is an independent online personal-shopping and shipping service. We act as your purchasing and shipping agent: you choose items on the SHEIN app or website, we buy them from SHEIN on your behalf, ship them from the UAE and deliver them to your door anywhere in Iraq and the Kurdistan Region.",
      "- We do not manufacture, own or sell SHEIN products.",
      "- We are not SHEIN, and we are not a SHEIN partner, reseller, agent or official store.",
      "- We are not affiliated with or endorsed by SHEIN.",
      "«SHEIN» is a trademark of its owner. We use the name only to describe where we buy your items."
    ] },
    { h: "Who can order", b: [
      "To place an order you must be at least {minAge} years old, or order with the consent of your parent or guardian.",
      "You must give us your correct full name, phone number and delivery address. Orders with wrong or incomplete details may be delayed or cannot be delivered."
    ] },
    { h: "How ordering works", b: [
      "Every order follows these steps:",
      "- You send us your basket on WhatsApp (product links or screenshots).",
      "- We check the current price and stock of each item on SHEIN.",
      "- We send you the final total in Iraqi dinars (IQD).",
      "- Your order is confirmed <strong>only after you clearly confirm</strong> that total to us.",
      "- After your confirmation, we purchase the items from SHEIN.",
      "We do not buy anything before you have clearly confirmed the final total."
    ] },
    { h: "Prices and exchange rate", b: [
      "The price of your order is the SHEIN price at the time of purchase multiplied by our exchange rate. Our current rate is <strong>1 USD = {rate} IQD</strong> (for example, 100 USD = {rate100} IQD).",
      "The exchange rate may change. The total in IQD that you confirm with us is final for that order.",
      "All SHEIN discounts that are available at the time of purchase are applied to your order."
    ] },
    { h: "Fees", b: [
      "- <strong>International shipping from the UAE to Iraq is free.</strong>",
      "- <strong>Door-to-door delivery inside Iraq is paid:</strong> {feeKRG} IQD in the Kurdistan Region (Erbil, Sulaymaniyah, Duhok, Halabja) and {feeOther} IQD in all other Iraqi cities.",
      "- Customs clearance is paid by {name}. You never pay customs.",
      "There are no other hidden fees. The total we send you before you confirm shows what you will pay.",
      "| Item | Cost |",
      "| Shipping from the UAE to Iraq | Free |",
      "| Door delivery in the Kurdistan Region | {feeKRG} IQD |",
      "| Door delivery in other Iraqi cities | {feeOther} IQD |",
      "| Customs clearance | Paid by {name} |"
    ] },
    { h: "Payment", b: [
      "We accept <strong>cash on delivery only</strong>.",
      "- Orders up to {prepayLimit} USD: no prepayment is needed. You pay the full amount in cash when you receive your order.",
      "- Orders above {prepayLimit} USD: {prepayPct} of the total is paid in advance, and the remaining {restPct} is paid in cash on delivery.",
      "We only ask for prepayment through our official channels listed on this website. Never send money to any other account or person."
    ] },
    { h: "Sold-out or changed items", b: [
      "Sometimes an item sells out or its price or details change on SHEIN before we can buy it. If this happens:",
      "- the item is removed from your order;",
      "- we inform you and send you screenshots; and",
      "- the price of your order is adjusted.",
      "We are not responsible for changes to SHEIN stock or prices that happen before the purchase is made."
    ] },
    { h: "Product information", b: [
      "Product photos, descriptions, sizes and quality information come from SHEIN, not from us. We cannot change or guarantee this information.",
      "Before you order, please check the SHEIN size charts and customer reviews for each item."
    ] },
    { h: "Delivery", b: [
      "The estimated delivery time is <strong>{days} days</strong>. This is an estimate, not a guarantee. Delays can happen because of customs, flights, public holidays, weather or other events outside our control (force majeure).",
      "We send order updates on WhatsApp. Please keep your phone reachable and make sure your address and nearest landmark are correct. We recommend checking your parcel in front of the driver.",
      "For more details, see our <a href=\"shipping.html\">Shipping & Delivery Policy</a>."
    ] },
    { h: "Delivery attempts and refused orders", b: [
      "Our driver will try to deliver your order {attempts} times.",
      "If you cancel the order or refuse it at delivery, the order is returned to our office in Erbil and handled there. You may collect it from the office.",
      "Any prepayment you made is handled according to section 13 (Returns and refunds) and our <a href=\"returns.html\">Returns, Refunds & Cancellations</a> policy."
    ] }
  ]
};
I18N.en["legal.terms"].sections.push(
    { h: "Cancellations", b: [
      "You can cancel your order free of charge at any time <strong>before we purchase</strong> the items from SHEIN.",
      "After we have purchased the items, cancellation is not guaranteed. We will try to cancel when SHEIN still allows it, and we look at each request case by case.",
      "See our <a href=\"returns.html\">Returns, Refunds & Cancellations</a> policy for more information."
    ] },
    { h: "Returns and refunds (summary)", b: [
      "- <strong>Wrong, damaged or missing items:</strong> contact us on WhatsApp and send photos or a video of the opened parcel.",
      "- <strong>Wrong size:</strong> a refund is available if the item is unused, unwashed, and still has its original tags and packaging.",
      "- <strong>Underwear</strong> cannot be returned for hygiene reasons.",
      "- Approved refunds are paid within <strong>{refundHours} hours</strong>.",
      "Full details are in our <a href=\"returns.html\">Returns, Refunds & Cancellations</a> policy."
    ] },
    { h: "Prohibited items", b: [
      "We do not order or ship any item that is illegal in Iraq or the Kurdistan Region, or any item that our shipping partner refuses to carry."
    ] },
    { h: "Your responsibilities", b: [
      "When you use our service, you agree to:",
      "- give us accurate and complete information (name, phone number, address);",
      "- communicate with our team respectfully; and",
      "- not place fake or fraudulent orders."
    ] },
    { h: "Limitation of liability", b: [
      "Our maximum liability for any problem with an order is the amount you paid for the affected item.",
      "We are not liable for indirect losses, such as lost profit, lost time or other consequences that do not come directly from the affected item."
    ] },
    { h: "Official channels", b: [
      "We only operate through the channels listed on this website:",
      "- WhatsApp: {waLink}",
      "- Instagram: {igLink}",
      "- Facebook: {fbLink}",
      "- Email: {emailLink}",
      "We are not responsible for orders placed or payments made through fake accounts or anyone pretending to be {name}. If you are unsure, contact us through one of the channels above."
    ] },
    { h: "Intellectual property", b: [
      "The Qalat logo, designs and the content of this website belong to {name}. You may not copy or use them without our permission.",
      "«SHEIN» and other brand names belong to their owners."
    ] },
    { h: "Changes to these terms", b: [
      "We may update these terms from time to time. The «Last updated» date on this page shows the latest version ({updated})."
    ] },
    { h: "Governing law", b: [
      "These terms are governed by the laws of Iraq and the Kurdistan Region. Any dispute will be handled by the courts of Erbil."
    ] },
    { h: "Contact us", b: [
      "If you have any question about these terms, please contact us:",
      "- {name}",
      "- Office: {address}",
      "- WhatsApp: {waLink}",
      "- Phone: {phoneLink}",
      "- Email: {emailLink}",
      "- Working hours: {hours}"
    ] }
);

I18N.ku["legal.terms"] = {
  title: "مەرجەکانی خزمەتگوزاری",
  intro: "ئەم مەرجانە ڕوونی دەکەنەوە کە داواکردن لە {name} چۆن کار دەکات: ئێمە چی بۆ تۆ دەکەین، چەند پارە دەدەیت، گەیاندن و هەڵوەشاندنەوە و گەڕاندنەوەی پارە چۆنن، و هەریەکەمان پابەندی چین. تکایە پێش ناردنی داواکاری بیانخوێنەرەوە.",
  sections: [
    { h: "ڕەزامەندی لەسەر ئەم مەرجانە", b: [
      "ئەم مەرجانەی خزمەتگوزاری بەسەر هەموو ئەو داواکارییانەدا جێبەجێ دەبن کە لە {name} دەیکەیت. کاتێک لە ڕێگەی هەر یەکێک لە کەناڵەکانمانەوە (واتسئاپ، تەلەفۆن، ئینستاگرام، فەیسبووک یان ئیمەیڵ) داواکارییەک دەنێریت و پشتڕاستی دەکەیتەوە، ئەوا ئەم مەرجانە قبووڵ دەکەیت.",
      "ئەگەر لەگەڵ ئەم مەرجانەدا ڕازی نیت، تکایە داواکاری لە ئێمە مەکە."
    ] },
    { h: "خزمەتگوزارییەکەمان", b: [
      "{name} خزمەتگوزارییەکی سەربەخۆی ئۆنلاینە بۆ کڕینی کەسی و ناردن. ئێمە وەک بریکاری کڕین و ناردنی تۆ کار دەکەین: تۆ کاڵاکان لە ئەپ یان ماڵپەڕی SHEIN هەڵدەبژێریت، ئێمە لە جیاتی تۆ لە SHEIN دەیانکڕین، لە ئیماراتەوە دەیاننێرین و تا بەردەم دەرگای ماڵەکەت لە هەر شوێنێکی عێراق و هەرێمی کوردستان دەیانگەیەنین.",
      "- ئێمە بەرهەمەکانی SHEIN دروست ناکەین، خاوەنیان نین و نایانفرۆشین.",
      "- ئێمە SHEIN نین، و هاوبەش، فرۆشیار، بریکار یان فرۆشگای فەرمیی SHEIN نین.",
      "- هیچ پەیوەندییەکمان بە SHEIN نییە و SHEIN پشتگیریمان ناکات.",
      "«SHEIN» نیشانەیەکی بازرگانیی خاوەنەکەیەتی. ئێمە ئەم ناوە تەنها بۆ ئەوە بەکاردەهێنین کە ڕوونی بکەینەوە کاڵاکانت لە کوێ دەکڕین."
    ] },
    { h: "کێ دەتوانێت داواکاری بکات", b: [
      "بۆ ناردنی داواکاری دەبێت تەمەنت لانیکەم {minAge} ساڵ بێت، یان بە ڕەزامەندیی دایک و باوک یان سەرپەرشتیارەکەت داواکاری بکەیت.",
      "دەبێت ناوی تەواو، ژمارەی تەلەفۆن و ناونیشانی گەیاندنی دروستمان پێ بدەیت. داواکارییەک کە زانیاریی هەڵە یان ناتەواوی تێدا بێت، لەوانەیە دوا بکەوێت یان نەتوانرێت بگەیەنرێت."
    ] },
    { h: "داواکاری چۆن کار دەکات", b: [
      "هەموو داواکارییەک بەم هەنگاوانەدا تێدەپەڕێت:",
      "- سەبەتەکەت لە واتسئاپ بۆمان دەنێریت (لینکی کاڵاکان یان وێنەی شاشە).",
      "- ئێمە نرخ و بەردەستبوونی هەر کاڵایەک لە SHEIN دەپشکنین.",
      "- کۆی گشتیی کۆتایی بە دیناری عێراقی بۆت دەنێرین.",
      "- داواکارییەکەت <strong>تەنها دوای ئەوەی بە ڕوونی کۆی گشتییەکە پشتڕاست دەکەیتەوە</strong> جێگیر دەبێت.",
      "- دوای پشتڕاستکردنەوەکەت، کاڵاکان لە SHEIN دەکڕین.",
      "ئێمە پێش ئەوەی بە ڕوونی کۆی گشتیی کۆتایی پشتڕاست بکەیتەوە، هیچ شتێک ناکڕین."
    ] },
    { h: "نرخ و نرخی گۆڕینەوەی دراو", b: [
      "نرخی داواکارییەکەت بریتییە لە نرخی SHEIN لە کاتی کڕیندا، لێکدراو لە نرخی گۆڕینەوەی ئێمە. نرخی ئێستامان بریتییە لە <strong>1 دۆلار = {rate} دینار</strong> (بۆ نموونە، 100 دۆلار = {rate100} دینار).",
      "نرخی گۆڕینەوە لەوانەیە بگۆڕێت. ئەو کۆی گشتییەی بە دینار کە لەگەڵماندا پشتڕاستی دەکەیتەوە، بۆ ئەو داواکارییە کۆتایییە.",
      "هەموو ئەو داشکاندنانەی SHEIN کە لە کاتی کڕیندا بەردەستن، لەسەر داواکارییەکەت جێبەجێ دەکرێن."
    ] },
    { h: "تێچووەکان", b: [
      "- <strong>ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق خۆڕاییە.</strong>",
      "- <strong>گەیاندن تا بەردەم دەرگا لەناو عێراقدا بە پارەیە:</strong> {feeKRG} دینار لە هەرێمی کوردستان (هەولێر، سلێمانی، دهۆک، هەڵەبجە) و {feeOther} دینار لە هەموو شارەکانی تری عێراق.",
      "- پارەی ڕاییکردنی گومرگی {name} دەیدات. تۆ هەرگیز پارەی گومرگ نادەیت.",
      "هیچ تێچوویەکی شاراوەی تر نییە. ئەو کۆی گشتییەی پێش پشتڕاستکردنەوە بۆت دەنێرین، ئەوە نیشان دەدات کە چەند دەدەیت.",
      "| بابەت | تێچوو |",
      "| ناردن لە ئیماراتەوە بۆ عێراق | خۆڕایی |",
      "| گەیاندن تا بەردەم دەرگا لە هەرێمی کوردستان | {feeKRG} دینار |",
      "| گەیاندن تا بەردەم دەرگا لە شارەکانی تری عێراق | {feeOther} دینار |",
      "| ڕاییکردنی گومرگ | لەسەر {name} |"
    ] },
    { h: "پارەدان", b: [
      "ئێمە <strong>تەنها پارەدان لە کاتی وەرگرتن</strong> قبووڵ دەکەین.",
      "- داواکاری تا {prepayLimit} دۆلار: هیچ پێشەکییەک پێویست نییە. هەموو بڕەکە بە نەختینە لە کاتی وەرگرتنی داواکارییەکەت دەدەیت.",
      "- داواکاری سەروو {prepayLimit} دۆلار: ڕێژەی {prepayPct} لە کۆی گشتی پێشەکی دەدرێت، و ڕێژەی {restPct} کە دەمێنێتەوە بە نەختینە لە کاتی وەرگرتن دەدرێت.",
      "ئێمە تەنها لە ڕێگەی ئەو کەناڵە فەرمییانەمانەوە کە لەم ماڵپەڕەدا نووسراون داوای پێشەکی دەکەین. هەرگیز پارە بۆ هیچ هەژمار یان کەسێکی تر مەنێرە."
    ] },
    { h: "کاڵای نەماو یان گۆڕاو", b: [
      "هەندێک جار کاڵایەک نامێنێت، یان نرخ یان وردەکارییەکانی لە SHEIN دەگۆڕێن پێش ئەوەی بتوانین بیکڕین. ئەگەر ئەمە ڕوویدا:",
      "- کاڵاکە لە داواکارییەکەت لادەبرێت؛",
      "- ئاگادارت دەکەینەوە و وێنەی شاشەت بۆ دەنێرین؛",
      "- نرخی داواکارییەکەت ڕێک دەخرێتەوە.",
      "ئێمە بەرپرسیار نین لەو گۆڕانکارییانەی لە بەردەستبوون یان نرخەکانی SHEIN پێش کڕین ڕوودەدەن."
    ] },
    { h: "زانیاریی کاڵا", b: [
      "وێنە، وەسف، قەبارە و زانیاریی کوالیتیی کاڵاکان لە SHEIN وەرگیراون، نەک لە ئێمە. ناتوانین ئەم زانیارییانە بگۆڕین یان گەرەنتییان بکەین.",
      "پێش داواکردن، تکایە خشتەی قەبارەکانی SHEIN و هەڵسەنگاندنی کڕیاران بۆ هەر کاڵایەک بپشکنە."
    ] },
    { h: "گەیاندن", b: [
      "ماوەی خەمڵێنراوی گەیاندن نزیکەی <strong>{days} ڕۆژ</strong> دەبێت. ئەمە خەمڵاندنە، نەک گەرەنتی. لەوانەیە بەهۆی گومرگ، گەشتە ئاسمانییەکان، پشووە فەرمییەکان، کەشوهەوا یان ڕووداوی تری لەناکاو و دەرەوەی دەسەڵاتی ئێمە، دواکەوتن ڕووبدات.",
      "نوێکارییەکانی داواکاری لە واتسئاپ بۆت دەنێرین. تکایە تەلەفۆنەکەت هەمیشە بەردەست بێت و دڵنیابە کە ناونیشانەکەت و نزیکترین شوێنی ناسراو دروستن. پێشنیار دەکەین پاکێجەکەت لەبەردەم شۆفێرەکەدا بپشکنیت.",
      "بۆ زانیاریی زیاتر، سەیری <a href=\"shipping.html\">سیاسەتی ناردن و گەیاندن</a> بکە."
    ] },
    { h: "هەوڵەکانی گەیاندن و داواکاریی ڕەتکراوە", b: [
      "شۆفێرەکەمان {attempts} جار هەوڵ دەدات داواکارییەکەت بگەیەنێت.",
      "ئەگەر داواکارییەکە هەڵبوەشێنیتەوە یان لە کاتی گەیاندندا ڕەتی بکەیتەوە، داواکارییەکە دەگەڕێنرێتەوە بۆ نووسینگەکەمان لە هەولێر و لەوێ مامەڵەی لەگەڵ دەکرێت. دەتوانیت لە نووسینگەکە وەریبگریت.",
      "هەر پێشەکییەک کە داوتە، بەپێی بەشی 13 (گەڕاندنەوە و گەڕاندنەوەی پارە) و سیاسەتی <a href=\"returns.html\">گەڕاندنەوە، گەڕاندنەوەی پارە و هەڵوەشاندنەوە</a> مامەڵەی لەگەڵ دەکرێت."
    ] }
  ]
};
I18N.ku["legal.terms"].sections.push(
    { h: "هەڵوەشاندنەوە", b: [
      "دەتوانیت لە هەر کاتێکدا <strong>پێش ئەوەی کاڵاکان لە SHEIN بکڕین</strong>، بەبێ هیچ تێچوویەک داواکارییەکەت هەڵبوەشێنیتەوە.",
      "دوای ئەوەی کاڵاکانمان کڕی، هەڵوەشاندنەوە گەرەنتی نییە. ئەگەر SHEIN هێشتا ڕێگە بدات هەوڵی هەڵوەشاندنەوە دەدەین، و هەر داوایەک بە جیا هەڵدەسەنگێنین.",
      "بۆ زانیاریی زیاتر، سەیری سیاسەتی <a href=\"returns.html\">گەڕاندنەوە، گەڕاندنەوەی پارە و هەڵوەشاندنەوە</a> بکە."
    ] },
    { h: "گەڕاندنەوە و گەڕاندنەوەی پارە (کورتە)", b: [
      "- <strong>کاڵای هەڵە، زیانلێکەوتوو یان کەم:</strong> لە واتسئاپ پەیوەندیمان پێوە بکە و وێنە یان ڤیدیۆی پاکێجە کراوەکەمان بۆ بنێرە.",
      "- <strong>قەبارەی هەڵە:</strong> پارە دەگەڕێنرێتەوە ئەگەر کاڵاکە بەکارنەهاتبێت، نەشۆرابێت و تیکێت و بەستەبەندیی ڕەسەنی پێوە مابێت.",
      "- <strong>جلی ژێرەوە</strong> بەهۆی پاکوخاوێنییەوە ناگەڕێنرێتەوە.",
      "- ئەو پارانەی گەڕاندنەوەیان پەسەند دەکرێت، لە ماوەی <strong>{refundHours} کاتژمێر</strong>دا دەدرێنەوە.",
      "وردەکاریی تەواو لە سیاسەتی <a href=\"returns.html\">گەڕاندنەوە، گەڕاندنەوەی پارە و هەڵوەشاندنەوە</a>دا هەیە."
    ] },
    { h: "کاڵا قەدەغەکراوەکان", b: [
      "ئێمە ئەو کاڵایانە ناکڕین و نانێرین کە لە عێراق یان هەرێمی کوردستان نایاسایین، یان هاوبەشی ناردنەکەمان ڕەتیان دەکاتەوە."
    ] },
    { h: "بەرپرسیارێتییەکانی تۆ", b: [
      "کاتێک خزمەتگوزارییەکەمان بەکاردەهێنیت، ڕازی دەبیت بەوەی:",
      "- زانیاریی دروست و تەواومان پێ بدەیت (ناو، ژمارەی تەلەفۆن، ناونیشان)؛",
      "- بە ڕێزەوە لەگەڵ تیمەکەماندا قسە بکەیت؛",
      "- داواکاریی ساختە یان فێڵاوی نەکەیت."
    ] },
    { h: "سنووری بەرپرسیارێتی", b: [
      "زۆرترین بەرپرسیارێتیی ئێمە بۆ هەر کێشەیەک لە داواکارییەکدا، ئەو بڕە پارەیەیە کە بۆ کاڵا کێشەدارەکە داوتە.",
      "ئێمە بەرپرسیار نین لە زیانی ناڕاستەوخۆ، وەک قازانجی لەدەستچوو، کاتی بەفیڕۆچوو یان ئەنجامی تر کە ڕاستەوخۆ لە کاڵا کێشەدارەکەوە نەهاتبن."
    ] },
    { h: "کەناڵە فەرمییەکان", b: [
      "ئێمە تەنها لە ڕێگەی ئەو کەناڵانەوە کار دەکەین کە لەم ماڵپەڕەدا نووسراون:",
      "- واتسئاپ: {waLink}",
      "- ئینستاگرام: {igLink}",
      "- فەیسبووک: {fbLink}",
      "- ئیمەیڵ: {emailLink}",
      "ئێمە بەرپرسیار نین لەو داواکاری و پارەدانانەی لە ڕێگەی هەژماری ساختە یان هەر کەسێکەوە دەکرێن کە خۆی بە {name} دەناسێنێت. ئەگەر دڵنیا نیت، لە ڕێگەی یەکێک لەم کەناڵانەی سەرەوە پەیوەندیمان پێوە بکە."
    ] },
    { h: "مافی موڵکداریی هزری", b: [
      "{name} خاوەنی لۆگۆی قەڵات، دیزاینەکان و ناوەڕۆکی ئەم ماڵپەڕەیە. بەبێ ڕێگەپێدانی ئێمە ناتوانیت لەبەریان بگریتەوە یان بەکاریان بهێنیت.",
      "«SHEIN» و ناوە بازرگانییەکانی تر موڵکی خاوەنەکانی خۆیانن."
    ] },
    { h: "گۆڕانکاری لەم مەرجانەدا", b: [
      "لەوانەیە هەندێک جار ئەم مەرجانە نوێ بکەینەوە. بەرواری «دوایین نوێکردنەوە» لەم پەڕەیەدا دوایین وەشان نیشان دەدات ({updated})."
    ] },
    { h: "یاسای جێبەجێکراو", b: [
      "ئەم مەرجانە ملکەچی یاساکانی عێراق و هەرێمی کوردستانن. هەر ناکۆکییەک لەلایەن دادگاکانی هەولێرەوە چارەسەر دەکرێت."
    ] },
    { h: "پەیوەندیمان پێوە بکە", b: [
      "ئەگەر هەر پرسیارێکت دەربارەی ئەم مەرجانە هەیە، پەیوەندیمان پێوە بکە:",
      "- {name}",
      "- نووسینگە: {address}",
      "- واتسئاپ: {waLink}",
      "- تەلەفۆن: {phoneLink}",
      "- ئیمەیڵ: {emailLink}",
      "- کاتی کار: {hours}"
    ] }
);

I18N.ar["legal.terms"] = {
  title: "شروط الخدمة",
  intro: "توضّح هذه الشروط كيف يعمل الطلب عبر {name}: ما الذي نقوم به من أجلك، وما الذي تدفعه، وكيف يتم التوصيل والإلغاء واسترداد المبالغ، وما يلتزم به كلٌّ منا. يُرجى قراءتها قبل تقديم طلبك.",
  sections: [
    { h: "قبول هذه الشروط", b: [
      "تنطبق شروط الخدمة هذه على كل طلب تقدّمه إلى {name}. عندما ترسل إلينا طلباً عبر أيٍّ من قنواتنا (واتساب أو الهاتف أو إنستغرام أو فيسبوك أو البريد الإلكتروني) وتؤكده، فإنك توافق على هذه الشروط.",
      "إذا كنت لا توافق على هذه الشروط، يُرجى عدم تقديم أي طلب لدينا."
    ] },
    { h: "خدمتنا", b: [
      "{name} خدمة مستقلة عبر الإنترنت للتسوّق الشخصي والشحن. نحن نعمل بصفتنا وكيلك في الشراء والشحن: تختار المنتجات من تطبيق SHEIN أو موقعه، ونشتريها نيابةً عنك من SHEIN، ونشحنها من الإمارات، ثم نوصلها إلى باب منزلك في أي مكان في العراق وإقليم كردستان.",
      "- نحن لا نصنّع منتجات SHEIN ولا نملكها ولا نبيعها.",
      "- نحن لسنا SHEIN، ولسنا شريكاً أو موزّعاً أو وكيلاً أو متجراً رسمياً لـ SHEIN.",
      "- لا تربطنا أي علاقة بـ SHEIN، ولا تحظى خدمتنا بأي تأييد من SHEIN.",
      "«SHEIN» علامة تجارية مملوكة لصاحبها، ونستخدم هذا الاسم فقط لتوضيح المكان الذي نشتري منه منتجاتك."
    ] },
    { h: "من يحق له الطلب", b: [
      "لتقديم طلب، يجب ألا يقل عمرك عن {minAge} عاماً، أو أن تطلب بموافقة والديك أو وليّ أمرك.",
      "يجب أن تزوّدنا باسمك الكامل ورقم هاتفك وعنوان التوصيل بشكل صحيح. الطلبات التي تحتوي على معلومات خاطئة أو ناقصة قد تتأخر أو قد يتعذّر توصيلها."
    ] },
    { h: "كيف يتم الطلب", b: [
      "يمر كل طلب بالخطوات التالية:",
      "- ترسل إلينا سلّة مشترياتك عبر واتساب (روابط المنتجات أو لقطات الشاشة).",
      "- نتحقق من السعر الحالي وتوفّر كل منتج على SHEIN.",
      "- نرسل إليك المبلغ الإجمالي النهائي بالدينار العراقي.",
      "- يُعتبر طلبك مؤكداً <strong>فقط بعد أن تؤكد لنا هذا المبلغ بوضوح</strong>.",
      "- بعد تأكيدك، نشتري المنتجات من SHEIN.",
      "لا نشتري أي شيء قبل أن تؤكد المبلغ الإجمالي النهائي بوضوح."
    ] },
    { h: "الأسعار وسعر الصرف", b: [
      "سعر طلبك هو سعر SHEIN وقت الشراء مضروباً في سعر الصرف لدينا. سعر الصرف الحالي هو <strong>1 دولار = {rate} دينار</strong> (على سبيل المثال: 100 دولار = {rate100} دينار).",
      "قد يتغيّر سعر الصرف. المبلغ الإجمالي بالدينار الذي تؤكده معنا هو المبلغ النهائي لذلك الطلب.",
      "تُطبَّق على طلبك جميع خصومات SHEIN المتاحة وقت الشراء."
    ] },
    { h: "الرسوم", b: [
      "- <strong>الشحن الدولي من الإمارات إلى العراق مجاني.</strong>",
      "- <strong>التوصيل إلى الباب داخل العراق مدفوع:</strong> {feeKRG} دينار في إقليم كردستان (أربيل، السليمانية، دهوك، حلبجة) و{feeOther} دينار في جميع المدن العراقية الأخرى.",
      "- تتحمّل {name} رسوم التخليص الجمركي، ولن تدفع أنت أي رسوم جمركية.",
      "لا توجد أي رسوم مخفية أخرى. المبلغ الإجمالي الذي نرسله إليك قبل التأكيد يوضّح ما ستدفعه.",
      "| البند | التكلفة |",
      "| الشحن من الإمارات إلى العراق | مجاني |",
      "| التوصيل إلى الباب في إقليم كردستان | {feeKRG} دينار |",
      "| التوصيل إلى الباب في المدن العراقية الأخرى | {feeOther} دينار |",
      "| التخليص الجمركي | على حساب {name} |"
    ] },
    { h: "الدفع", b: [
      "نقبل <strong>الدفع عند الاستلام فقط</strong>.",
      "- الطلبات حتى {prepayLimit} دولار: لا حاجة إلى أي دفعة مسبقة، وتدفع المبلغ كاملاً نقداً عند استلام طلبك.",
      "- الطلبات التي تزيد على {prepayLimit} دولار: تُدفع نسبة {prepayPct} من المبلغ الإجمالي مقدماً، وتُدفع النسبة المتبقية {restPct} نقداً عند الاستلام.",
      "لا نطلب الدفعة المسبقة إلا عبر قنواتنا الرسمية المذكورة في هذا الموقع. لا ترسل المال أبداً إلى أي حساب أو شخص آخر."
    ] },
    { h: "المنتجات النافدة أو المتغيّرة", b: [
      "أحياناً تنفد كمية منتج ما، أو يتغيّر سعره أو تفاصيله على SHEIN قبل أن نتمكن من شرائه. إذا حدث ذلك:",
      "- يُحذف المنتج من طلبك؛",
      "- نُبلغك بذلك ونرسل إليك لقطات شاشة؛",
      "- ويُعدَّل سعر طلبك.",
      "لسنا مسؤولين عن التغييرات في توفّر منتجات SHEIN أو أسعارها التي تحدث قبل إتمام الشراء."
    ] },
    { h: "معلومات المنتجات", b: [
      "صور المنتجات وأوصافها ومقاساتها ومعلومات جودتها مصدرها SHEIN وليس نحن، ولا يمكننا تغيير هذه المعلومات أو ضمانها.",
      "قبل الطلب، يُرجى مراجعة جداول المقاسات وتقييمات العملاء على SHEIN لكل منتج."
    ] },
    { h: "التوصيل", b: [
      "مدة التوصيل المتوقعة هي <strong>{days} يوماً</strong>. هذه مدة تقديرية وليست مضمونة، فقد يحدث تأخير بسبب الجمارك أو الرحلات الجوية أو العطل الرسمية أو الأحوال الجوية أو ظروف أخرى خارجة عن إرادتنا (القوة القاهرة).",
      "نرسل تحديثات الطلب عبر واتساب. يُرجى إبقاء هاتفك متاحاً والتأكد من صحة عنوانك وأقرب نقطة دالّة. ننصحك بفحص طردك أمام السائق.",
      "لمزيد من التفاصيل، راجع <a href=\"shipping.html\">سياسة الشحن والتوصيل</a>."
    ] },
    { h: "محاولات التوصيل والطلبات المرفوضة", b: [
      "يحاول السائق توصيل طلبك {attempts} مرات.",
      "إذا ألغيت الطلب أو رفضته عند التوصيل، يُعاد الطلب إلى مكتبنا في أربيل ويُتعامل معه هناك، ويمكنك استلامه من المكتب.",
      "أي دفعة مسبقة دفعتها يُتعامل معها وفقاً للبند 13 (الإرجاع واسترداد المبالغ) وسياسة <a href=\"returns.html\">الإرجاع والاسترداد والإلغاء</a>."
    ] }
  ]
};
I18N.ar["legal.terms"].sections.push(
    { h: "الإلغاء", b: [
      "يمكنك إلغاء طلبك دون أي تكلفة في أي وقت <strong>قبل أن نشتري المنتجات</strong> من SHEIN.",
      "بعد شراء المنتجات، لا يكون الإلغاء مضموناً. سنحاول الإلغاء إذا كانت SHEIN لا تزال تسمح بذلك، وندرس كل طلب على حدة.",
      "لمزيد من المعلومات، راجع سياسة <a href=\"returns.html\">الإرجاع والاسترداد والإلغاء</a>."
    ] },
    { h: "الإرجاع واسترداد المبالغ (ملخّص)", b: [
      "- <strong>المنتجات الخاطئة أو التالفة أو الناقصة:</strong> تواصل معنا عبر واتساب وأرسل صوراً أو مقطع فيديو للطرد بعد فتحه.",
      "- <strong>المقاس غير المناسب:</strong> يمكن استرداد المبلغ إذا كان المنتج غير مستخدم وغير مغسول، وما زالت عليه بطاقاته وتغليفه الأصلي.",
      "- <strong>الملابس الداخلية</strong> لا يمكن إرجاعها لأسباب صحية.",
      "- تُدفع المبالغ المستردة الموافق عليها خلال <strong>{refundHours} ساعة</strong>.",
      "التفاصيل الكاملة موجودة في سياسة <a href=\"returns.html\">الإرجاع والاسترداد والإلغاء</a>."
    ] },
    { h: "المنتجات المحظورة", b: [
      "لا نطلب ولا نشحن أي منتج يُعدّ غير قانوني في العراق أو إقليم كردستان، أو أي منتج يرفض شريكنا في الشحن نقله."
    ] },
    { h: "مسؤولياتك", b: [
      "عند استخدامك لخدمتنا، فإنك توافق على:",
      "- تزويدنا بمعلومات صحيحة وكاملة (الاسم ورقم الهاتف والعنوان)؛",
      "- التواصل مع فريقنا باحترام؛",
      "- عدم تقديم طلبات وهمية أو احتيالية."
    ] },
    { h: "حدود المسؤولية", b: [
      "الحد الأقصى لمسؤوليتنا عن أي مشكلة في الطلب هو المبلغ الذي دفعته مقابل المنتج المتأثر.",
      "لسنا مسؤولين عن الخسائر غير المباشرة، مثل الأرباح الفائتة أو الوقت الضائع أو أي نتائج أخرى لا تنتج مباشرة عن المنتج المتأثر."
    ] },
    { h: "القنوات الرسمية", b: [
      "نعمل فقط عبر القنوات المذكورة في هذا الموقع:",
      "- واتساب: {waLink}",
      "- إنستغرام: {igLink}",
      "- فيسبوك: {fbLink}",
      "- البريد الإلكتروني: {emailLink}",
      "لسنا مسؤولين عن الطلبات أو المدفوعات التي تتم عبر حسابات مزيّفة أو عبر أي شخص ينتحل صفة {name}. إذا كنت غير متأكد، تواصل معنا عبر إحدى القنوات المذكورة أعلاه."
    ] },
    { h: "الملكية الفكرية", b: [
      "شعار قلات والتصاميم ومحتوى هذا الموقع ملك لـ {name}، ولا يجوز نسخها أو استخدامها دون إذن منا.",
      "«SHEIN» والعلامات التجارية الأخرى ملك لأصحابها."
    ] },
    { h: "التغييرات على هذه الشروط", b: [
      "قد نقوم بتحديث هذه الشروط من وقت لآخر. ويُظهر تاريخ «آخر تحديث» في هذه الصفحة أحدث نسخة منها ({updated})."
    ] },
    { h: "القانون الواجب التطبيق", b: [
      "تخضع هذه الشروط لقوانين العراق وإقليم كردستان، وتختص محاكم أربيل بالنظر في أي نزاع."
    ] },
    { h: "تواصل معنا", b: [
      "إذا كان لديك أي سؤال حول هذه الشروط، يُرجى التواصل معنا:",
      "- {name}",
      "- المكتب: {address}",
      "- واتساب: {waLink}",
      "- الهاتف: {phoneLink}",
      "- البريد الإلكتروني: {emailLink}",
      "- ساعات العمل: {hours}"
    ] }
);

/* ---------- shipping-returns ---------- */
/* Shipping & Delivery Policy + Returns, Refunds & Cancellations — en / ku / ar */

I18N.en["legal.shipping"] = {
  title: "Shipping & Delivery Policy",
  intro: "This page explains how your SHEIN order travels from the UAE to your door in Iraq, how long it usually takes and what delivery costs. International shipping from the UAE to Iraq is free, and door delivery inside Iraq is paid.",
  sections: [
    { h: "How shipping works", b: [
      "{name} is an independent personal-shopping and shipping service. We are not SHEIN and we are not connected to SHEIN.",
      "- We buy the items you chose from SHEIN on your behalf.",
      "- The items are shipped from the UAE to Iraq.",
      "- We then deliver your order to your door anywhere in Iraq and the Kurdistan Region.",
      "International shipping from the UAE to Iraq is free. Door delivery inside Iraq is paid — see the delivery fees below."
    ] },
    { h: "Delivery time", b: [
      "Delivery usually takes an estimated <strong>{days} days</strong> from the date we purchase your items.",
      "This is an estimate, not a guarantee. Customs checks, flight schedules, public holidays, bad weather and other events outside our control (force majeure) can cause delays.",
      "If your order is delayed, we will keep you updated on WhatsApp."
    ] },
    { h: "Where we deliver", b: [
      "We deliver to every governorate of Iraq and the Kurdistan Region.",
      "## Kurdistan Region",
      "- Erbil",
      "- Sulaymaniyah",
      "- Duhok",
      "- Halabja",
      "## Other governorates of Iraq",
      "- Baghdad",
      "- Basra",
      "- Nineveh",
      "- Kirkuk",
      "- Diyala",
      "- Anbar",
      "- Babil",
      "- Karbala",
      "- Najaf",
      "- Wasit",
      "- Saladin",
      "- Dhi Qar",
      "- Maysan",
      "- Muthanna",
      "- Al-Qadisiyyah"
    ] },
    { h: "Delivery fees", b: [
      "| Area | Door delivery fee |",
      "| Kurdistan Region (Erbil, Sulaymaniyah, Duhok, Halabja) | {feeKRG} IQD |",
      "| All other Iraqi cities | {feeOther} IQD |",
      "| International shipping UAE → Iraq | Free |",
      "In short: shipping from the UAE to Iraq is free, and door delivery inside Iraq costs {feeKRG} IQD in the Kurdistan Region or {feeOther} IQD in all other Iraqi cities."
    ] },
    { h: "Customs", b: [
      "Customs clearance is paid by {name}. You never pay customs.",
      "There are no hidden fees. The total you confirm with us is the amount you pay."
    ] },
    { h: "Order updates", b: [
      "We send you updates about your order on WhatsApp.",
      "Please make sure the WhatsApp number you gave us is correct and active."
    ] },
    { h: "Delivery attempts", b: [
      "Our drivers will try to deliver your order {attempts} times.",
      "Please keep your phone switched on and reachable so the driver can contact you when they arrive."
    ] },
    { h: "Address and nearest landmark", b: [
      "To deliver your order, we need a correct address and the nearest landmark (for example a well-known shop, school, mosque or street name).",
      "If your address or phone number changes, please tell us on WhatsApp as soon as possible."
    ] },
    { h: "Check your parcel", b: [
      "Please check your parcel in front of the driver when you receive it.",
      "If an item is wrong, damaged or missing, contact us on WhatsApp and send photos or a video of the opened parcel. You can read how we handle these cases in our <a href=\"returns.html\">returns policy</a>."
    ] },
    { h: "Refused or cancelled at delivery", b: [
      "If you refuse the order or cancel it at the time of delivery, the order is returned to our office in Erbil and handled there.",
      "You may collect the order from our office."
    ] },
    { h: "Payment on delivery", b: [
      "We accept cash on delivery.",
      "- Orders up to <strong>{prepayLimit} USD</strong>: no prepayment — you pay the full amount in cash when you receive your order.",
      "- Orders above <strong>{prepayLimit} USD</strong>: {prepayPct} of the total is paid in advance, and the remaining {restPct} is paid in cash on delivery.",
      "We only request prepayment through our official channels listed on our website."
    ] },
    { h: "Contact us", b: [
      "If you have any question about shipping or delivery, please contact us:",
      "- WhatsApp: {waLink}",
      "- Phone: {phoneLink}",
      "- Email: {emailLink}",
      "- Office: {address}",
      "- Working hours: {hours}"
    ] }
  ]
};

I18N.en["legal.returns"] = {
  title: "Returns, Refunds & Cancellations",
  intro: "This page explains what happens if an item is wrong, damaged, missing or the wrong size, which items cannot be returned, and how cancellations work.",
  sections: [
    { h: "Overview", b: [
      "Here is a short summary of our rules:",
      "- Wrong, damaged or missing item: contact us on WhatsApp with photos or a video of the opened parcel, and we will review it.",
      "- Wrong size: a refund is available if the item is unused, unwashed and has its original tags and packaging.",
      "- Underwear cannot be returned, for hygiene reasons.",
      "- Approved refunds are paid within {refundHours} hours.",
      "- Cancelling is free before we purchase your items. After purchase, cancellation is not guaranteed.",
      "The details are explained below."
    ] },
    { h: "Wrong, damaged or missing item", b: [
      "If you receive a wrong item, a damaged item, or an item is missing from your parcel, please contact us on WhatsApp ({waLink}).",
      "Send us photos or a video of the opened parcel showing the problem.",
      "We will review your case. If your refund is approved, it is paid within <strong>{refundHours} hours</strong>."
    ] },
    { h: "Wrong size", b: [
      "If an item does not fit, a refund is available only if the item is:",
      "- unused,",
      "- unwashed,",
      "- with its original tags still attached, and",
      "- in its original packaging.",
      "Tip: before ordering, please check the SHEIN size chart for each item, and ask us on WhatsApp if you are not sure."
    ] },
    { h: "Non-returnable items", b: [
      "For hygiene reasons, <strong>underwear</strong> cannot be returned or refunded."
    ] },
    { h: "Refund timing", b: [
      "Once your refund is approved, it is paid within <strong>{refundHours} hours</strong>."
    ] },
    { h: "Cancellations", b: [
      "- <strong>Before we purchase your items:</strong> you can cancel your order for free.",
      "- <strong>After we purchase your items:</strong> cancellation is not guaranteed. We handle each case individually and try to cancel when SHEIN still allows it."
    ] },
    { h: "Refused or cancelled at delivery", b: [
      "If you refuse the order or cancel it at the time of delivery, the order is returned to our office in Erbil and handled there.",
      "You may collect the order from our office."
    ] },
    { h: "How to request a return or refund", b: [
      "Send us a message on WhatsApp with:",
      "- your name,",
      "- your order details, and",
      "- photos or a video of the item and the opened parcel.",
      "We reply during our working hours ({hours})."
    ] },
    { h: "Contact us", b: [
      "If you have any question about returns, refunds or cancellations, please contact us:",
      "- WhatsApp: {waLink}",
      "- Email: {emailLink}",
      "- Office: {address}"
    ] }
  ]
};

I18N.ku["legal.shipping"] = {
  title: "سیاسەتی ناردن و گەیاندن",
  intro: "ئەم پەڕەیە ڕوونی دەکاتەوە کە داواکارییەکەت لە SHEIN چۆن لە ئیماراتەوە دەگاتە بەردەم دەرگاکەت لە عێراق، بە زۆری چەندی دەخایەنێت و تێچووی گەیاندن چەندە. ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق خۆڕاییە، و گەیاندن تا بەردەم دەرگا لەناو عێراقدا بە پارەیە.",
  sections: [
    { h: "ناردن چۆن کار دەکات", b: [
      "{name} خزمەتگوزارییەکی سەربەخۆی کڕینی کەسی و ناردنە. ئێمە SHEIN نین و سەر بە SHEIN نین.",
      "- ئێمە لە جیاتی تۆ ئەو کاڵایانەی هەڵتبژاردوون لە SHEIN دەکڕین.",
      "- کاڵاکان لە ئیماراتەوە بۆ عێراق دەنێردرێن.",
      "- پاشان داواکارییەکەت لە هەر شوێنێکی عێراق و هەرێمی کوردستان بیت، تا بەردەم دەرگاکەت دەیگەیەنین.",
      "ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق خۆڕاییە. گەیاندن تا بەردەم دەرگا لەناو عێراقدا بە پارەیە — بڕوانە نرخی گەیاندن لە خوارەوە."
    ] },
    { h: "ماوەی گەیاندن", b: [
      "گەیاندن بە شێوەیەکی خەمڵێنراو <strong>{days} ڕۆژ</strong> دەخایەنێت لە ڕۆژی کڕینی کاڵاکانەوە.",
      "ئەمە تەنها خەمڵاندنە، نەک گەرەنتی. پشکنینی گومرگ، خشتەی گەشتە ئاسمانییەکان، پشووە فەرمییەکان، کەشوهەوای خراپ و ڕووداوە نائاساییەکانی دەرەوەی دەسەڵاتی ئێمە دەکرێت ببنە هۆی دواکەوتن.",
      "ئەگەر داواکارییەکەت دواکەوت، لە ڕێگەی واتسئاپەوە ئاگادارت دەکەینەوە."
    ] },
    { h: "ئەو شوێنانەی گەیاندنیان بۆ دەکەین", b: [
      "گەیاندن بۆ هەموو پارێزگاکانی عێراق و هەرێمی کوردستان دەکەین.",
      "## هەرێمی کوردستان",
      "- هەولێر",
      "- سلێمانی",
      "- دهۆک",
      "- هەڵەبجە",
      "## پارێزگاکانی تری عێراق",
      "- بەغدا",
      "- بەسرە",
      "- نەینەوا",
      "- کەرکووک",
      "- دیالە",
      "- ئەنبار",
      "- بابل",
      "- کەربەلا",
      "- نەجەف",
      "- واست",
      "- سەڵاحەدین",
      "- زیقار",
      "- مەیسان",
      "- موسەننا",
      "- قادسیە"
    ] },
    { h: "نرخی گەیاندن", b: [
      "| ناوچە | نرخی گەیاندن تا بەردەم دەرگا |",
      "| هەرێمی کوردستان (هەولێر، سلێمانی، دهۆک، هەڵەبجە) | {feeKRG} دینار |",
      "| هەموو شارەکانی تری عێراق | {feeOther} دینار |",
      "| ناردنی نێودەوڵەتی لە ئیماراتەوە بۆ عێراق | خۆڕایی |",
      "بە کورتی: ناردن لە ئیماراتەوە بۆ عێراق خۆڕاییە، و گەیاندن تا بەردەم دەرگا لەناو عێراقدا لە هەرێمی کوردستان {feeKRG} دینار و لە هەموو شارەکانی تری عێراق {feeOther} دینار تێدەچێت."
    ] },
    { h: "گومرگ", b: [
      "تێچووی ڕاپەڕاندنی گومرگی {name} دەیدات. تۆ هەرگیز پارەی گومرگ نادەیت.",
      "هیچ تێچوویەکی شاراوە نییە. ئەو کۆی گشتییەی لەگەڵماندا پشتڕاستی دەکەیتەوە، هەمان ئەو بڕەیە کە دەیدەیت."
    ] },
    { h: "ئاگادارکردنەوەی داواکاری", b: [
      "لە ڕێگەی واتسئاپەوە ئاگادارکردنەوەکانی داواکارییەکەتت بۆ دەنێرین.",
      "تکایە دڵنیابە کە ئەو ژمارە واتسئاپەی پێتداوین دروست و چالاکە."
    ] },
    { h: "هەوڵەکانی گەیاندن", b: [
      "شۆفێرەکانمان {attempts} جار هەوڵی گەیاندنی داواکارییەکەت دەدەن.",
      "تکایە مۆبایلەکەت هەڵکراو و بەردەست بێت، تا شۆفێرەکە بتوانێت لە کاتی گەیشتندا پەیوەندیت پێوە بکات."
    ] },
    { h: "ناونیشان و نزیکترین نیشانە", b: [
      "بۆ گەیاندنی داواکارییەکەت، پێویستمان بە ناونیشانێکی دروست و نزیکترین نیشانە هەیە (بۆ نموونە دوکانێکی ناسراو، قوتابخانە، مزگەوت یان ناوی شەقام).",
      "ئەگەر ناونیشان یان ژمارەی مۆبایلەکەت گۆڕا، تکایە بە زووترین کات لە واتسئاپەوە پێمان بڵێ."
    ] },
    { h: "پشکنینی بەستەکەت", b: [
      "تکایە لە کاتی وەرگرتندا، بەستەکەت لەبەردەم شۆفێرەکەدا بپشکنە.",
      "ئەگەر کاڵایەک هەڵە بوو، زیانی پێگەیشتبوو یان کەم بوو، لە واتسئاپەوە پەیوەندیمان پێوە بکە و وێنە یان ڤیدیۆی بەستە کراوەکەمان بۆ بنێرە. دەتوانیت لە <a href=\"returns.html\">سیاسەتی گەڕاندنەوە</a>دا بخوێنیتەوە کە چۆن مامەڵە لەگەڵ ئەم حاڵەتانەدا دەکەین."
    ] },
    { h: "ڕەتکردنەوە یان هەڵوەشاندنەوە لە کاتی گەیاندندا", b: [
      "ئەگەر لە کاتی گەیاندندا داواکارییەکەت ڕەتکردەوە یان هەڵتوەشاندەوە، داواکارییەکە دەگەڕێندرێتەوە بۆ نووسینگەکەمان لە هەولێر و لەوێ مامەڵەی لەگەڵدا دەکرێت.",
      "دەتوانیت داواکارییەکە لە نووسینگەکەمان وەربگریت."
    ] },
    { h: "پارەدان لە کاتی وەرگرتن", b: [
      "ڕێگەی پارەدانمان پارەدان لە کاتی وەرگرتنە، بە نەختی.",
      "- داواکارییەکانی تا <strong>{prepayLimit} دۆلار</strong>: هیچ پارەیەکی پێشوەخت نییە — هەموو بڕەکە بە نەختی لە کاتی وەرگرتنی داواکارییەکەتدا دەدەیت.",
      "- داواکارییەکانی سەرووی <strong>{prepayLimit} دۆلار</strong>: {prepayPct} لە کۆی گشتی پێشوەخت دەدرێت، و بڕی ماوە ({restPct}) لە کاتی وەرگرتندا بە نەختی دەدرێت.",
      "پارەی پێشوەخت تەنها لە ڕێگەی کەناڵە فەرمییەکانمانەوە داوا دەکەین کە لە ماڵپەڕەکەماندا نووسراون."
    ] },
    { h: "پەیوەندیمان پێوە بکە", b: [
      "ئەگەر هەر پرسیارێکت دەربارەی ناردن یان گەیاندن هەیە، پەیوەندیمان پێوە بکە:",
      "- واتسئاپ: {waLink}",
      "- تەلەفۆن: {phoneLink}",
      "- ئیمەیڵ: {emailLink}",
      "- نووسینگە: {address}",
      "- کاتی کارکردن: {hours}"
    ] }
  ]
};

I18N.ku["legal.returns"] = {
  title: "گەڕاندنەوە، گەڕاندنەوەی پارە و هەڵوەشاندنەوە",
  intro: "ئەم پەڕەیە ڕوونی دەکاتەوە ئەگەر کاڵایەک هەڵە، زیانلێکەوتوو، کەم یان قەبارەکەی هەڵە بوو چی ڕوودەدات، کام کاڵا ناگەڕێندرێتەوە، و هەڵوەشاندنەوە چۆن کار دەکات.",
  sections: [
    { h: "کورتەیەک", b: [
      "ئەمە کورتەیەکی ڕێساکانمانە:",
      "- کاڵای هەڵە، زیانلێکەوتوو یان کەم: لە واتسئاپەوە لەگەڵ وێنە یان ڤیدیۆی بەستە کراوەکەدا پەیوەندیمان پێوە بکە، ئێمەش پێیدا دەچینەوە.",
      "- قەبارەی هەڵە: گەڕاندنەوەی پارە هەیە ئەگەر کاڵاکە بەکارنەهاتبێت، نەشۆرابێت و تیکێت و بەستەبەندییە ئەسڵییەکەی پێوە بێت.",
      "- جلی ژێرەوە بەهۆی پاکوخاوێنییەوە ناگەڕێندرێتەوە.",
      "- گەڕاندنەوەی پارەی پەسەندکراو لە ماوەی {refundHours} کاتژمێردا دەدرێت.",
      "- هەڵوەشاندنەوە پێش ئەوەی کاڵاکان بکڕین بێ بەرامبەرە. دوای کڕین، هەڵوەشاندنەوە گەرەنتی نییە.",
      "وردەکارییەکان لە خوارەوە ڕوونکراونەتەوە."
    ] },
    { h: "کاڵای هەڵە، زیانلێکەوتوو یان کەم", b: [
      "ئەگەر کاڵایەکی هەڵە یان زیانلێکەوتووت وەرگرت، یان کاڵایەک لە بەستەکەتدا کەم بوو، تکایە لە واتسئاپەوە ({waLink}) پەیوەندیمان پێوە بکە.",
      "وێنە یان ڤیدیۆی بەستە کراوەکەمان بۆ بنێرە کە کێشەکە نیشان بدات.",
      "ئێمە پێداچوونەوە بە حاڵەتەکەتدا دەکەین. ئەگەر گەڕاندنەوەی پارەکەت پەسەند کرا، لە ماوەی <strong>{refundHours} کاتژمێردا</strong> دەدرێت."
    ] },
    { h: "قەبارەی هەڵە", b: [
      "ئەگەر قەبارەی کاڵایەک گونجاو نەبوو، گەڕاندنەوەی پارە تەنها لەو حاڵەتەدا هەیە کە کاڵاکە:",
      "- بەکارنەهاتبێت،",
      "- نەشۆرابێت،",
      "- تیکێتە ئەسڵییەکانی هێشتا پێوە بێت، و",
      "- لەناو بەستەبەندییە ئەسڵییەکەیدا بێت.",
      "ئامۆژگاری: پێش داواکردن، تکایە خشتەی قەبارەی SHEIN بۆ هەر کاڵایەک بپشکنە، و ئەگەر دڵنیا نەبوویت لە واتسئاپەوە پرسیارمان لێ بکە."
    ] },
    { h: "ئەو کاڵایانەی ناگەڕێندرێنەوە", b: [
      "بەهۆی پاکوخاوێنییەوە، <strong>جلی ژێرەوە</strong> ناگەڕێندرێتەوە و پارەکەشی ناگەڕێندرێتەوە."
    ] },
    { h: "کاتی گەڕاندنەوەی پارە", b: [
      "کاتێک گەڕاندنەوەی پارەکەت پەسەند کرا، لە ماوەی <strong>{refundHours} کاتژمێردا</strong> دەدرێت."
    ] },
    { h: "هەڵوەشاندنەوە", b: [
      "- <strong>پێش ئەوەی کاڵاکانت بکڕین:</strong> دەتوانیت داواکارییەکەت بێ بەرامبەر هەڵبوەشێنیتەوە.",
      "- <strong>دوای کڕینی کاڵاکانت:</strong> هەڵوەشاندنەوە گەرەنتی نییە. هەر حاڵەتێک بە جیا مامەڵەی لەگەڵدا دەکەین و هەوڵ دەدەین هەڵیبوەشێنینەوە ئەگەر SHEIN هێشتا ڕێگە بدات."
    ] },
    { h: "ڕەتکردنەوە یان هەڵوەشاندنەوە لە کاتی گەیاندندا", b: [
      "ئەگەر لە کاتی گەیاندندا داواکارییەکەت ڕەتکردەوە یان هەڵتوەشاندەوە، داواکارییەکە دەگەڕێندرێتەوە بۆ نووسینگەکەمان لە هەولێر و لەوێ مامەڵەی لەگەڵدا دەکرێت.",
      "دەتوانیت داواکارییەکە لە نووسینگەکەمان وەربگریت."
    ] },
    { h: "چۆن داوای گەڕاندنەوە یان گەڕاندنەوەی پارە بکەیت", b: [
      "لە واتسئاپەوە نامەیەکمان بۆ بنێرە کە ئەمانەی تێدا بێت:",
      "- ناوت،",
      "- وردەکاری داواکارییەکەت، و",
      "- وێنە یان ڤیدیۆی کاڵاکە و بەستە کراوەکە.",
      "لە کاتی کارکردنماندا ({hours}) وەڵامت دەدەینەوە."
    ] },
    { h: "پەیوەندیمان پێوە بکە", b: [
      "ئەگەر هەر پرسیارێکت دەربارەی گەڕاندنەوە، گەڕاندنەوەی پارە یان هەڵوەشاندنەوە هەیە، پەیوەندیمان پێوە بکە:",
      "- واتسئاپ: {waLink}",
      "- ئیمەیڵ: {emailLink}",
      "- نووسینگە: {address}"
    ] }
  ]
};

I18N.ar["legal.shipping"] = {
  title: "سياسة الشحن والتوصيل",
  intro: "توضح هذه الصفحة كيف يصل طلبك من SHEIN من الإمارات إلى باب منزلك في العراق، والمدة المعتادة للتوصيل وتكلفته. الشحن الدولي من الإمارات إلى العراق مجاني، أما التوصيل إلى الباب داخل العراق فهو مدفوع.",
  sections: [
    { h: "كيف يتم الشحن", b: [
      "{name} خدمة مستقلة للتسوق الشخصي والشحن. نحن لسنا SHEIN ولا تربطنا أي علاقة بشركة SHEIN.",
      "- نشتري المنتجات التي اخترتها من SHEIN نيابةً عنك.",
      "- تُشحن المنتجات من الإمارات إلى العراق.",
      "- ثم نوصل طلبك إلى باب منزلك في أي مكان في العراق وإقليم كردستان.",
      "الشحن الدولي من الإمارات إلى العراق مجاني. أما التوصيل إلى الباب داخل العراق فهو مدفوع — راجع رسوم التوصيل أدناه."
    ] },
    { h: "مدة التوصيل", b: [
      "يستغرق التوصيل عادةً <strong>{days} يوماً</strong> تقريباً من تاريخ شراء منتجاتك.",
      "هذه مدة تقديرية وليست مضمونة؛ فقد تتسبب إجراءات الجمارك ومواعيد الرحلات الجوية والعطل الرسمية وسوء الأحوال الجوية وغيرها من الظروف القاهرة الخارجة عن إرادتنا في حدوث تأخير.",
      "إذا تأخر طلبك، سنبقيك على اطلاع عبر واتساب."
    ] },
    { h: "مناطق التوصيل", b: [
      "نوصل إلى جميع محافظات العراق وإقليم كردستان.",
      "## إقليم كردستان",
      "- أربيل",
      "- السليمانية",
      "- دهوك",
      "- حلبجة",
      "## محافظات العراق الأخرى",
      "- بغداد",
      "- البصرة",
      "- نينوى",
      "- كركوك",
      "- ديالى",
      "- الأنبار",
      "- بابل",
      "- كربلاء",
      "- النجف",
      "- واسط",
      "- صلاح الدين",
      "- ذي قار",
      "- ميسان",
      "- المثنى",
      "- القادسية"
    ] },
    { h: "رسوم التوصيل", b: [
      "| المنطقة | رسوم التوصيل إلى الباب |",
      "| إقليم كردستان (أربيل، السليمانية، دهوك، حلبجة) | {feeKRG} دينار |",
      "| جميع المدن العراقية الأخرى | {feeOther} دينار |",
      "| الشحن الدولي من الإمارات إلى العراق | مجاني |",
      "باختصار: الشحن من الإمارات إلى العراق مجاني، أما التوصيل إلى الباب داخل العراق فتكلفته {feeKRG} دينار في إقليم كردستان و{feeOther} دينار في جميع المدن العراقية الأخرى."
    ] },
    { h: "الجمارك", b: [
      "تتحمل {name} رسوم التخليص الجمركي، ولن تدفع أي رسوم جمركية أبداً.",
      "لا توجد رسوم مخفية. المبلغ الإجمالي الذي تؤكده معنا هو المبلغ الذي تدفعه."
    ] },
    { h: "تحديثات الطلب", b: [
      "نرسل لك تحديثات طلبك عبر واتساب.",
      "يرجى التأكد من أن رقم واتساب الذي زودتنا به صحيح ومفعّل."
    ] },
    { h: "محاولات التوصيل", b: [
      "يحاول سائقونا توصيل طلبك {attempts} مرات.",
      "يرجى إبقاء هاتفك مفتوحاً ومتاحاً ليتمكن السائق من الاتصال بك عند وصوله."
    ] },
    { h: "العنوان وأقرب نقطة دالة", b: [
      "لتوصيل طلبك، نحتاج إلى عنوان صحيح وأقرب نقطة دالة (مثل متجر معروف أو مدرسة أو جامع أو اسم الشارع).",
      "إذا تغيّر عنوانك أو رقم هاتفك، يرجى إبلاغنا عبر واتساب في أسرع وقت ممكن."
    ] },
    { h: "افحص طردك", b: [
      "يرجى فحص طردك أمام السائق عند استلامه.",
      "إذا كان أحد المنتجات خاطئاً أو تالفاً أو ناقصاً، تواصل معنا عبر واتساب وأرسل صوراً أو فيديو للطرد بعد فتحه. يمكنك الاطلاع على طريقة تعاملنا مع هذه الحالات في <a href=\"returns.html\">سياسة الإرجاع</a>."
    ] },
    { h: "رفض الطلب أو إلغاؤه عند التسليم", b: [
      "إذا رفضت الطلب أو ألغيته عند التسليم، يُعاد الطلب إلى مكتبنا في أربيل وتتم معالجته هناك.",
      "يمكنك استلام الطلب من مكتبنا."
    ] },
    { h: "الدفع عند الاستلام", b: [
      "نعتمد الدفع نقداً عند الاستلام.",
      "- الطلبات حتى <strong>{prepayLimit} دولار</strong>: لا يوجد دفع مسبق — تدفع المبلغ كاملاً نقداً عند استلام طلبك.",
      "- الطلبات التي تزيد على <strong>{prepayLimit} دولار</strong>: يُدفع {prepayPct} من المبلغ الإجمالي مقدماً، ويُدفع الباقي ({restPct}) نقداً عند الاستلام.",
      "لا نطلب الدفع المسبق إلا عبر قنواتنا الرسمية المذكورة في موقعنا."
    ] },
    { h: "تواصل معنا", b: [
      "إذا كان لديك أي سؤال عن الشحن أو التوصيل، تواصل معنا:",
      "- واتساب: {waLink}",
      "- الهاتف: {phoneLink}",
      "- البريد الإلكتروني: {emailLink}",
      "- المكتب: {address}",
      "- ساعات العمل: {hours}"
    ] }
  ]
};

I18N.ar["legal.returns"] = {
  title: "الإرجاع والاسترداد والإلغاء",
  intro: "توضح هذه الصفحة ما يحدث إذا كان المنتج خاطئاً أو تالفاً أو ناقصاً أو بمقاس غير مناسب، وما المنتجات التي لا يمكن إرجاعها، وكيف يتم الإلغاء.",
  sections: [
    { h: "نظرة عامة", b: [
      "إليك ملخصاً قصيراً لقواعدنا:",
      "- منتج خاطئ أو تالف أو ناقص: تواصل معنا عبر واتساب مع صور أو فيديو للطرد بعد فتحه، وسنراجع حالتك.",
      "- مقاس غير مناسب: يمكن استرداد المبلغ إذا كان المنتج غير مستخدم وغير مغسول ومعه بطاقاته الأصلية وتغليفه الأصلي.",
      "- لا يمكن إرجاع الملابس الداخلية لأسباب صحية.",
      "- تُدفع المبالغ المستردة الموافق عليها خلال {refundHours} ساعة.",
      "- الإلغاء دون أي تكلفة قبل أن نشتري منتجاتك، أما بعد الشراء فالإلغاء غير مضمون.",
      "التفاصيل موضحة أدناه."
    ] },
    { h: "منتج خاطئ أو تالف أو ناقص", b: [
      "إذا استلمت منتجاً خاطئاً أو تالفاً، أو كان أحد المنتجات ناقصاً من طردك، يرجى التواصل معنا عبر واتساب ({waLink}).",
      "أرسل لنا صوراً أو فيديو للطرد بعد فتحه يوضح المشكلة.",
      "سنراجع حالتك، وإذا تمت الموافقة على استرداد المبلغ، يُدفع خلال <strong>{refundHours} ساعة</strong>."
    ] },
    { h: "مقاس غير مناسب", b: [
      "إذا لم يناسبك مقاس المنتج، يمكن استرداد المبلغ فقط إذا كان المنتج:",
      "- غير مستخدم،",
      "- غير مغسول،",
      "- ولا تزال بطاقاته الأصلية مثبتة عليه،",
      "- وفي تغليفه الأصلي.",
      "نصيحة: قبل الطلب، يرجى مراجعة جدول المقاسات في SHEIN لكل منتج، واسألنا عبر واتساب إذا لم تكن متأكداً."
    ] },
    { h: "المنتجات غير القابلة للإرجاع", b: [
      "لأسباب صحية، لا يمكن إرجاع <strong>الملابس الداخلية</strong> أو استرداد ثمنها."
    ] },
    { h: "مدة استرداد المبلغ", b: [
      "بعد الموافقة على استرداد المبلغ، يُدفع خلال <strong>{refundHours} ساعة</strong>."
    ] },
    { h: "الإلغاء", b: [
      "- <strong>قبل أن نشتري منتجاتك:</strong> يمكنك إلغاء طلبك دون أي تكلفة.",
      "- <strong>بعد شراء منتجاتك:</strong> الإلغاء غير مضمون. ندرس كل حالة على حدة ونحاول الإلغاء إذا كانت SHEIN لا تزال تسمح بذلك."
    ] },
    { h: "رفض الطلب أو إلغاؤه عند التسليم", b: [
      "إذا رفضت الطلب أو ألغيته عند التسليم، يُعاد الطلب إلى مكتبنا في أربيل وتتم معالجته هناك.",
      "يمكنك استلام الطلب من مكتبنا."
    ] },
    { h: "كيفية طلب الإرجاع أو الاسترداد", b: [
      "أرسل لنا رسالة عبر واتساب تتضمن:",
      "- اسمك،",
      "- تفاصيل طلبك،",
      "- صوراً أو فيديو للمنتج وللطرد بعد فتحه.",
      "نرد خلال ساعات العمل ({hours})."
    ] },
    { h: "تواصل معنا", b: [
      "إذا كان لديك أي سؤال عن الإرجاع أو الاسترداد أو الإلغاء، تواصل معنا:",
      "- واتساب: {waLink}",
      "- البريد الإلكتروني: {emailLink}",
      "- المكتب: {address}"
    ] }
  ]
};

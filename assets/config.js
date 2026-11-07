/* =========================================================================
   Qalat Shipping — ALL business information lives here.
   Edit a value once and every page (and every language) updates.
   ========================================================================= */
const CONFIG = {
  name: { en: 'Qalat Shipping', ku: 'قەڵات شیپینگ', ar: 'قلات شيبينغ' },
  site: 'https://www.qalatshipping.com',
  siteLabel: 'www.qalatshipping.com',

  /* Contact */
  whatsapp: '9647746646565',                 // digits only, used in https://wa.me/ links
  phone: '+964 774 664 6565',
  phoneHref: 'tel:+9647746646565',
  email: 'info@qalatshipping.com',
  instagram: { handle: 'qalat.shipping', url: 'https://www.instagram.com/qalat.shipping' },
  facebook: 'https://www.facebook.com/share/1C8g9AsxWR/',

  /* Office */
  address: {
    en: '40 Meter Street, Brayati, near Pharma, Erbil, Kurdistan Region, Iraq',
    ku: 'شەقامی 40 مەتری، گەڕەکی بەرایەتی، نزیک فارما، هەولێر، هەرێمی کوردستان، عێراق',
    ar: 'شارع 40 متري، حي برايتي، قرب فارما، أربيل، إقليم كردستان، العراق'
  },
  geo: { lat: 36.2004780, lng: 44.0392230 },
  mapUrl: 'https://www.google.com/maps?q=36.2004780,44.0392230',
  mapEmbed: 'https://www.google.com/maps?q=36.2004780,44.0392230&z=16&output=embed',

  /* Working hours: Saturday to Thursday, Friday closed (day names are in i18n.js → "hours.text") */
  hours: { open: '09:00', close: '18:00' },

  /* Prices & policies */
  rate: 1450,                 // IQD for 1 USD
  deliveryMin: 15,            // days
  deliveryMax: 25,
  feeKurdistan: 5000,         // door delivery, IQD — Erbil, Sulaymaniyah, Duhok, Halabja
  feeOther: 7000,             // door delivery, IQD — all other Iraqi cities
  prepayThresholdUSD: 300,    // no prepayment up to this amount
  prepayPercent: 25,          // % of the total paid in advance above the threshold
  attemptsMin: 3,             // delivery attempts
  attemptsMax: 5,
  retentionMonths: 6,
  refundHours: '24–48',
  privacyResponseDays: 14,
  minAge: 18,
  updated: '2026-11-07',      // policies "Last updated" (localized text is in i18n.js → "legal.updatedDate")

  /* Calculator */
  calcMaxUSD: 100000,
  roundTo: 1,                 // IQD rounding for the calculator (1 = exact)

  defaultLang: 'ku'           // 'ku' | 'ar' | 'en'
};

/* Size guide (cm). Columns: size, chest/bust, waist, hip */
const SIZE_CHART = {
  women: [
    ['XS', '78–82', '60–64', '86–90'],
    ['S', '82–86', '64–68', '90–94'],
    ['M', '86–90', '68–72', '94–98'],
    ['L', '90–96', '72–78', '98–104'],
    ['XL', '96–102', '78–84', '104–110'],
    ['XXL', '102–108', '84–90', '110–116']
  ],
  men: [
    ['XS', '84–88', '70–74', '84–88'],
    ['S', '88–92', '74–78', '88–92'],
    ['M', '92–98', '78–84', '92–98'],
    ['L', '98–104', '84–90', '98–104'],
    ['XL', '104–110', '90–96', '104–110'],
    ['XXL', '110–116', '96–102', '110–116']
  ]
};


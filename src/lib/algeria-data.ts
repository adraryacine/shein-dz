// Complete list of 58 Algerian Wilayas with shipping data
export interface Wilaya {
  code: string;
  name: string;
  nameAr: string;
  shippingCost: number;
  freeShippingThreshold: number;
}

export interface Commune {
  name: string;
  nameAr: string;
}

export const wilayas: Wilaya[] = [
  { code: "01", name: "Adrar", nameAr: "أدرار", shippingCost: 900, freeShippingThreshold: 6000 },
  { code: "02", name: "Chlef", nameAr: "الشلف", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "03", name: "Laghouat", nameAr: "الأغواط", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "04", name: "Oum El Bouaghi", nameAr: "أم البواقي", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "05", name: "Batna", nameAr: "باتنة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "06", name: "Béjaïa", nameAr: "بجاية", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "07", name: "Biskra", nameAr: "بسكرة", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "08", name: "Béchar", nameAr: "بشار", shippingCost: 900, freeShippingThreshold: 6000 },
  { code: "09", name: "Blida", nameAr: "البليدة", shippingCost: 400, freeShippingThreshold: 5000 },
  { code: "10", name: "Bouira", nameAr: "البويرة", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "11", name: "Tamanrasset", nameAr: "تمنراست", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "12", name: "Tébessa", nameAr: "تبسة", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "13", name: "Tlemcen", nameAr: "تلمسان", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "14", name: "Tiaret", nameAr: "تيارت", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "15", name: "Tizi Ouzou", nameAr: "تيزي وزو", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "16", name: "Alger", nameAr: "الجزائر", shippingCost: 400, freeShippingThreshold: 5000 },
  { code: "17", name: "Djelfa", nameAr: "الجلفة", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "18", name: "Jijel", nameAr: "جيجل", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "19", name: "Sétif", nameAr: "سطيف", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "20", name: "Saïda", nameAr: "سعيدة", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "21", name: "Skikda", nameAr: "سكيكدة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "22", name: "Sidi Bel Abbès", nameAr: "سيدي بلعباس", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "23", name: "Annaba", nameAr: "عنابة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "24", name: "Guelma", nameAr: "قالمة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "25", name: "Constantine", nameAr: "قسنطينة", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "26", name: "Médéa", nameAr: "المدية", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "27", name: "Mostaganem", nameAr: "مستغانم", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "28", name: "M'Sila", nameAr: "المسيلة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "29", name: "Mascara", nameAr: "معسكر", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "30", name: "Ouargla", nameAr: "ورقلة", shippingCost: 900, freeShippingThreshold: 6000 },
  { code: "31", name: "Oran", nameAr: "وهران", shippingCost: 500, freeShippingThreshold: 5000 },
  { code: "32", name: "El Bayadh", nameAr: "البيض", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "33", name: "Illizi", nameAr: "إليزي", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "34", name: "Bordj Bou Arréridj", nameAr: "برج بوعريريج", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "35", name: "Boumerdès", nameAr: "بومرداس", shippingCost: 400, freeShippingThreshold: 5000 },
  { code: "36", name: "El Tarf", nameAr: "الطارف", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "37", name: "Tindouf", nameAr: "تندوف", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "38", name: "Tissemsilt", nameAr: "تيسمسيلت", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "39", name: "El Oued", nameAr: "الوادي", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "40", name: "Khenchela", nameAr: "خنشلة", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "41", name: "Souk Ahras", nameAr: "سوق أهراس", shippingCost: 700, freeShippingThreshold: 6000 },
  { code: "42", name: "Tipaza", nameAr: "تيبازة", shippingCost: 400, freeShippingThreshold: 5000 },
  { code: "43", name: "Mila", nameAr: "ميلة", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "44", name: "Aïn Defla", nameAr: "عين الدفلى", shippingCost: 500, freeShippingThreshold: 6000 },
  { code: "45", name: "Naâma", nameAr: "النعامة", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "46", name: "Aïn Témouchent", nameAr: "عين تموشنت", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "47", name: "Ghardaïa", nameAr: "غرداية", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "48", name: "Relizane", nameAr: "غليزان", shippingCost: 600, freeShippingThreshold: 6000 },
  { code: "49", name: "Timimoun", nameAr: "تيميمون", shippingCost: 1000, freeShippingThreshold: 7000 },
  { code: "50", name: "Bordj Badji Mokhtar", nameAr: "برج باجي مختار", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "51", name: "Ouled Djellal", nameAr: "أولاد جلال", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "52", name: "Béni Abbès", nameAr: "بني عباس", shippingCost: 1000, freeShippingThreshold: 7000 },
  { code: "53", name: "In Salah", nameAr: "عين صالح", shippingCost: 1100, freeShippingThreshold: 7000 },
  { code: "54", name: "In Guezzam", nameAr: "عين قزام", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "55", name: "Touggourt", nameAr: "تقرت", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "56", name: "Djanet", nameAr: "جانت", shippingCost: 1200, freeShippingThreshold: 8000 },
  { code: "57", name: "El M'Ghair", nameAr: "المغير", shippingCost: 800, freeShippingThreshold: 6000 },
  { code: "58", name: "El Meniaa", nameAr: "المنيعة", shippingCost: 900, freeShippingThreshold: 7000 },
];

// Sample communes for major wilayas (in real app, this would be from DB)
export const communesByWilaya: Record<string, Commune[]> = {
  "16": [ // Alger
    { name: "Alger Centre", nameAr: "الجزائر الوسطى" },
    { name: "Bab El Oued", nameAr: "باب الوادي" },
    { name: "Bir Mourad Raïs", nameAr: "بئر مراد رايس" },
    { name: "Birkhadem", nameAr: "بئر خادم" },
    { name: "Bordj El Kiffan", nameAr: "برج الكيفان" },
    { name: "Bouzareah", nameAr: "بوزريعة" },
    { name: "Chéraga", nameAr: "الشراقة" },
    { name: "Dar El Beïda", nameAr: "الدار البيضاء" },
    { name: "Dély Ibrahim", nameAr: "دالي ابراهيم" },
    { name: "Draria", nameAr: "الدرارية" },
    { name: "El Harrach", nameAr: "الحراش" },
    { name: "Hussein Dey", nameAr: "حسين داي" },
    { name: "Kouba", nameAr: "القبة" },
    { name: "Mohammadia", nameAr: "المحمدية" },
    { name: "Rouiba", nameAr: "الرويبة" },
    { name: "Sidi M'Hamed", nameAr: "سيدي امحمد" },
  ],
  "31": [ // Oran
    { name: "Oran", nameAr: "وهران" },
    { name: "Aïn El Türck", nameAr: "عين الترك" },
    { name: "Bir El Djir", nameAr: "بئر الجير" },
    { name: "Es Sénia", nameAr: "السانية" },
    { name: "Gdyel", nameAr: "قديل" },
    { name: "Hassi Bounif", nameAr: "حاسي بونيف" },
    { name: "Sidi Chami", nameAr: "سيدي الشحمي" },
  ],
  "25": [ // Constantine
    { name: "Constantine", nameAr: "قسنطينة" },
    { name: "Aïn Smara", nameAr: "عين سمارة" },
    { name: "Didouche Mourad", nameAr: "ديدوش مراد" },
    { name: "El Khroub", nameAr: "الخروب" },
    { name: "Hamma Bouziane", nameAr: "حامة بوزيان" },
    { name: "Zighoud Youcef", nameAr: "زيغود يوسف" },
  ],
  "19": [ // Sétif
    { name: "Sétif", nameAr: "سطيف" },
    { name: "Aïn Arnat", nameAr: "عين أرنات" },
    { name: "Aïn El Kebira", nameAr: "عين الكبيرة" },
    { name: "Beni Aziz", nameAr: "بني عزيز" },
    { name: "El Eulma", nameAr: "العلمة" },
    { name: "Guidjel", nameAr: "قجال" },
  ],
  "09": [ // Blida
    { name: "Blida", nameAr: "البليدة" },
    { name: "Boufarik", nameAr: "بوفاريك" },
    { name: "Bouinan", nameAr: "بوعينان" },
    { name: "Chréa", nameAr: "الشريعة" },
    { name: "El Affroun", nameAr: "العفرون" },
    { name: "Guerrouaou", nameAr: "قرواو" },
    { name: "Larbaâ", nameAr: "الأربعاء" },
    { name: "Meftah", nameAr: "مفتاح" },
    { name: "Mouzaïa", nameAr: "موزاية" },
    { name: "Oued El Alleug", nameAr: "وادي العلايق" },
  ],
};

// Helper to get wilaya by code
export const getWilayaByCode = (code: string): Wilaya | undefined => {
  return wilayas.find(w => w.code === code);
};

// Helper to get communes for a wilaya
export const getCommunesByWilaya = (wilayaCode: string): Commune[] => {
  return communesByWilaya[wilayaCode] || [];
};

// Helper to calculate shipping cost
export const calculateShipping = (wilayaCode: string, orderTotal: number): number => {
  const wilaya = getWilayaByCode(wilayaCode);
  if (!wilaya) return 600; // Default shipping cost
  
  if (orderTotal >= wilaya.freeShippingThreshold) {
    return 0;
  }
  
  return wilaya.shippingCost;
};

// Size conversion chart (EU/CN to Algerian standard)
export const sizeConversions = {
  tops: {
    XS: { eu: "32-34", cn: "155/80A", dz: "XS - صغير جدا" },
    S: { eu: "36-38", cn: "160/84A", dz: "S - صغير" },
    M: { eu: "40-42", cn: "165/88A", dz: "M - متوسط" },
    L: { eu: "44-46", cn: "170/92A", dz: "L - كبير" },
    XL: { eu: "48-50", cn: "175/96A", dz: "XL - كبير جدا" },
    XXL: { eu: "52-54", cn: "180/100A", dz: "XXL - كبير جدا جدا" },
  },
  bottoms: {
    XS: { eu: "32", cn: "155/64A", waist: "60-64 cm", dz: "XS - صغير جدا" },
    S: { eu: "34", cn: "160/68A", waist: "64-68 cm", dz: "S - صغير" },
    M: { eu: "36-38", cn: "165/72A", waist: "68-74 cm", dz: "M - متوسط" },
    L: { eu: "40-42", cn: "170/76A", waist: "74-80 cm", dz: "L - كبير" },
    XL: { eu: "44-46", cn: "175/80A", waist: "80-86 cm", dz: "XL - كبير جدا" },
    XXL: { eu: "48-50", cn: "180/84A", waist: "86-92 cm", dz: "XXL - كبير جدا جدا" },
  },
  shoes: {
    "36": { eu: "36", cn: "230", cm: "23.0 cm" },
    "37": { eu: "37", cn: "235", cm: "23.5 cm" },
    "38": { eu: "38", cn: "240", cm: "24.0 cm" },
    "39": { eu: "39", cn: "245", cm: "24.5 cm" },
    "40": { eu: "40", cn: "250", cm: "25.0 cm" },
    "41": { eu: "41", cn: "255", cm: "25.5 cm" },
    "42": { eu: "42", cn: "260", cm: "26.0 cm" },
    "43": { eu: "43", cn: "265", cm: "26.5 cm" },
    "44": { eu: "44", cn: "270", cm: "27.0 cm" },
    "45": { eu: "45", cn: "275", cm: "27.5 cm" },
  },
};

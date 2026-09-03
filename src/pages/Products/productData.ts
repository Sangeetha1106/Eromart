export type ProductCategory = 'Cash Counting Machine' | 'Billing Machine';
export type Product = { name: string; code: string; price: number; oldPrice: number; image: string; images?: string[]; tone: string; badge?: string; category: ProductCategory };

// Dynamically import all images from the specific folders
const cashCounterImagesObj = import.meta.glob('../../assets/images/cash counter machine/*.{jpeg,png,jpg}', { eager: true, import: 'default' });
const cashCounterImages = Object.values(cashCounterImagesObj) as string[];

const billingMachineImagesObj = import.meta.glob('../../assets/images/billing machine/*.{jpeg,png,jpg}', { eager: true, import: 'default' });
const billingMachineImages = Object.values(billingMachineImagesObj) as string[];

const tones = ['sand', 'graphite', 'blue', 'dark', 'cream', 'peach'];

const existingProductNames = [
  "EM-550 Smart Counter", "EM-320 Compact", "EM-720 Pro Counter", "EM-900 Heavy Duty",
  "EM-410 Currency Pro", "EM-610 Retail Plus", "EM-120 Lite", "EM-240 Core",
  "EM-380 Advance", "EM-450 Pro Series", "EM-520 Elite", "EM-680 Business",
  "EM-750 Commercial", "EM-820 Enterprise", "EM-890 Max", "EM-950 Heavy",
  "EM-1100 Industrial", "EM-1250 Pro Max", "EM-1500 Ultimate"
];

// Generate products automatically based on folder contents
export const cashCountingMachineProducts: Product[] = cashCounterImages.map((img, i) => ({
  name: existingProductNames[i] || `Cash Counter Pro ${i + 1}`,
  code: `EM-CC${100 + i * 10} / White`,
  price: 18990 + (i * 1000),
  oldPrice: 22490 + (i * 1000),
  image: img,
  images: [img],
  tone: tones[i % tones.length],
  badge: i === 0 ? 'Best seller' : undefined,
  category: 'Cash Counting Machine'
}));

export const billingMachineProducts: Product[] = billingMachineImages.map((img, i) => ({
  name: existingProductNames[i + 6] || `Billing Station ${i + 1}`,
  code: `EM-BM${200 + i * 10} / Graphite`,
  price: 12990 + (i * 1500),
  oldPrice: 15990 + (i * 1500),
  image: img,
  images: [img],
  tone: tones[i % tones.length],
  badge: i === 0 ? 'New' : undefined,
  category: 'Billing Machine'
}));

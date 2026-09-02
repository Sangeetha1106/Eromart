import img1 from '../../assets/images/image.png';
import img2 from '../../assets/images/image copy.png';
import img3 from '../../assets/images/image copy 2.png';
import img4 from '../../assets/images/image copy 3.png';
import img5 from '../../assets/images/image copy 4.png';
import img6 from '../../assets/images/image copy 5.png';

export type Product = { name: string; code: string; price: number; oldPrice: number; image: string; images?: string[]; tone: string; badge?: string };

export const products: Product[] = [
  { name: 'EM-550 Smart Counter', code: 'EM-550 / White', price: 18990, oldPrice: 22490, image: img1, images: [img1, img2, img3, img4], tone: 'sand', badge: 'Best seller' },
  { name: 'EM-320 Compact', code: 'EM-320 / Graphite', price: 12990, oldPrice: 15990, image: img2, images: [img2, img1, img5, img6], tone: 'graphite' },
  { name: 'EM-720 Pro Counter', code: 'EM-720 / Silver', price: 26990, oldPrice: 29990, image: img3, images: [img3, img4, img1, img5], tone: 'blue' },
  { name: 'EM-900 Heavy Duty', code: 'EM-900 / Black', price: 32990, oldPrice: 37990, image: img4, images: [img4, img3, img6, img2], tone: 'dark' },
  { name: 'EM-410 Currency Pro', code: 'EM-410 / White', price: 15990, oldPrice: 18990, image: img5, images: [img5, img6, img1, img2], tone: 'cream' },
  { name: 'EM-610 Retail Plus', code: 'EM-610 / Stone', price: 21990, oldPrice: 24990, image: img6, images: [img6, img5, img3, img4], tone: 'peach' },
];

import exp1 from '../../assets/images/explore images/exp1.jpeg';
import exp2 from '../../assets/images/explore images/exp2.jpeg';
import exp3 from '../../assets/images/explore images/exp3.jpeg';
import exp4 from '../../assets/images/explore images/exp4.jpeg';
import exp5 from '../../assets/images/explore images/exp5.jpeg';
import exp6 from '../../assets/images/explore images/exp6.jpeg';
import exp7 from '../../assets/images/explore images/exp7.jpeg';
import exp8 from '../../assets/images/explore images/exp8.jpeg';
import exp9 from '../../assets/images/explore images/exp9.jpeg';
import exp10 from '../../assets/images/explore images/exp10.jpeg';
import exp11 from '../../assets/images/explore images/exp11.jpeg';
import exp12 from '../../assets/images/explore images/exp12.jpeg';
import exp13 from '../../assets/images/explore images/exp13.jpeg';

export const extraProducts: Product[] = [
  { name: 'EM-120 Lite', code: 'EM-120 / White', price: 8990, oldPrice: 10990, image: exp1, tone: 'sand', badge: 'New' },
  { name: 'EM-240 Core', code: 'EM-240 / Silver', price: 11490, oldPrice: 13990, image: exp2, tone: 'blue' },
  { name: 'EM-380 Advance', code: 'EM-380 / Graphite', price: 14990, oldPrice: 17990, image: exp3, tone: 'graphite' },
  { name: 'EM-450 Pro Series', code: 'EM-450 / Dark', price: 17490, oldPrice: 19990, image: exp4, tone: 'dark' },
  { name: 'EM-520 Elite', code: 'EM-520 / Cream', price: 19990, oldPrice: 23490, image: exp5, tone: 'cream' },
  { name: 'EM-680 Business', code: 'EM-680 / Stone', price: 23990, oldPrice: 27990, image: exp6, tone: 'peach' },
  { name: 'EM-750 Commercial', code: 'EM-750 / Silver', price: 28990, oldPrice: 32990, image: exp7, tone: 'blue' },
  { name: 'EM-820 Enterprise', code: 'EM-820 / Black', price: 31990, oldPrice: 35990, image: exp8, tone: 'dark' },
  { name: 'EM-890 Max', code: 'EM-890 / Graphite', price: 34990, oldPrice: 39990, image: exp9, tone: 'graphite' },
  { name: 'EM-950 Heavy', code: 'EM-950 / Stone', price: 37990, oldPrice: 42990, image: exp10, tone: 'peach' },
  { name: 'EM-1100 Industrial', code: 'EM-1100 / White', price: 42990, oldPrice: 48990, image: exp11, tone: 'sand', badge: 'Premium' },
  { name: 'EM-1250 Pro Max', code: 'EM-1250 / Dark', price: 47990, oldPrice: 53990, image: exp12, tone: 'dark' },
  { name: 'EM-1500 Ultimate', code: 'EM-1500 / Silver', price: 54990, oldPrice: 62990, image: exp13, tone: 'blue' }
];

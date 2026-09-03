import imgCashCounter from '../../assets/images/gallery_cash_counter.png';
import imgPos from '../../assets/images/gallery_pos.png';
import imgShowroom from '../../assets/images/gallery_showroom.png';

const galleryImagesObj = import.meta.glob('../../assets/images/Gallery/*.{jpeg,png,jpg}', { eager: true, import: 'default' });
const galleryImages = Object.values(galleryImagesObj) as string[];

export const galleryItems = [
  ...galleryImages.map((img, i) => ({
    id: i + 1,
    image: img,
    title: `EROMART Installation ${i + 1}`,
    subtitle: 'Customer Setup'
  }))
];

import storePhotoImg from '../../assets/images/gallery_showroom.png';
export const storePhoto = storePhotoImg;

import { CircleCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import defaultHeroBg from '../assets/images/Home/image.png';

type HeroProps = {
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  openGallery: () => void;
  added: boolean;
  quantity: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  hideStats?: boolean;
  bgImage?: string;
};

export default function Hero({ 
  mobileMenu, setMobileMenu, setCartOpen, openGallery, added, quantity,
  title, description, hideStats, bgImage 
}: HeroProps) {
  const currentBgImage = bgImage || defaultHeroBg;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement">
        {/* <span>✨ Free delivery &amp; setup across India &bull; Certified Next-Gen Currency Technology</span> */}
        <span className="announcement-link">
          {/* Explore the EM-550 <ArrowRight size={14} /> */}
        </span>
      </div>

      {/* Full-width, edge-to-edge Hero section with 3D Beams Background */}
      <section className="hero-full-section" style={{ position: 'relative', width: '100%', minHeight: 'auto', paddingTop: 0, backgroundColor: 'var(--paper)', display: 'block' }}>
        
        <div style={{ position: 'relative', width: '100%' }}>
          <img 
            src={currentBgImage} 
            alt="Smart Solutions for Modern Businesses" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Invisible Clickable Overlays for Baked-in Image Buttons */}
          <Link to="/cash-counting-machine" style={{ position: 'absolute', top: '50%', left: '0%', width: '25%', height: '40%', zIndex: 999, display: 'block', cursor: 'pointer' }} aria-label="Explore Our Products" title="Explore Our Products" />
          <Link to="/contact-us" style={{ position: 'absolute', top: '50%', left: '25%', width: '25%', height: '40%', zIndex: 999, display: 'block', cursor: 'pointer' }} aria-label="Get Consultation" title="Get Consultation" />
        </div>

        {/* Hero Content (Only rendered if title/description props are passed, currently unused for Home) */}
        <div className="hero-main-content" style={{ display: 'none' }}>
        </div>
      </section>
    </>
  );
}

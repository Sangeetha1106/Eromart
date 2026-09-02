import { Suspense, lazy } from 'react';
import { CircleCheck, ArrowRight } from 'lucide-react';
const Beams = lazy(() => import('./Beams'));
import Navbar from './Navbar';

type HeroProps = {
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  openGallery: () => void;
  added: boolean;
  quantity: number;
};

export default function Hero({ mobileMenu, setMobileMenu, setCartOpen, openGallery, added, quantity }: HeroProps) {
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
      <section className="hero-full-section">
        {/* 3D Beams Background Canvas (100% full width and height) */}
        <div className="hero-beams-background" style={{ backgroundColor: '#433733' }}>
          <Suspense fallback={<div style={{ width: '100%', height: '100%', backgroundColor: '#433733' }} />}>
            <Beams
              beamWidth={2.2}
              beamHeight={16}
              beamNumber={14}
              lightColor="#F97316"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={-28}
              beamColor="#7c6d66"
              backgroundColor="#433733"
            />
          </Suspense>
          <div className="hero-beams-overlay-gradient" />
        </div>

        {/* Floating Glassmorphic Navbar */}
        <Navbar 
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          setCartOpen={setCartOpen}
          openGallery={openGallery}
          added={added}
          quantity={quantity}
        />

        {/* Hero Content */}
        <div className="hero-main-content">
          <div className="hero-badge-wrapper anim-fade-up">
            <div className="hero-pill-badge hover-lift">
              <span className="hero-pill-tag">NEW</span>
              <span className="hero-pill-text">Creative Components &amp; Smart Hardware</span>
            </div>
          </div>

          <h1 className="hero-title-text anim-fade-up delay-100">
            Radiant beams for creative<br />user interfaces
          </h1>

          <p className="hero-description-text anim-fade-up delay-200">
            The beautifully simple bill counter &amp; dynamic visual interface engineered for modern retail. Fast, accurate, and ready for every counter.
          </p>

          <div className="hero-cta-buttons anim-fade-up delay-300">
            <a href="#product" className="btn-get-started hover-lift">
              Get started
            </a>
            <button onClick={openGallery} className="btn-learn-more hover-lift">
              Learn more
            </button>
          </div>

          {/* Floating Live Badges */}
          <div className="hero-floating-badges anim-fade-up delay-400">
            <div className="hero-stat-card hover-lift">
              <CircleCheck size={16} className="text-emerald-400" />
              <div>
                <strong>99.9% Accuracy</strong>
                <small>Ultra-fast sensor precision</small>
              </div>
            </div>

            <div className="hero-stat-card hover-lift">
              <span className="live-indicator-dot" />
              <div>
                <strong>Live Counter Active</strong>
                <small>3,420 bills counted today</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle scroll indicator */}
        <div className="hero-bottom-scroll">
          <span>Scroll to discover</span>
          <div className="hero-scroll-bar" />
        </div>
      </section>
    </>
  );
}

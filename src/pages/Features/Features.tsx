import { 
  Zap, ShieldCheck, CheckCircle, Gauge, 
  Settings, Calculator, Wrench, Headphones,
  Check, Star, Truck, HeartHandshake, Shield
} from 'lucide-react';
import imgCashCounter from '../../assets/images/gallery_cash_counter.png';

export function FeaturesHero() {
  return (
    <section className="features-page" id="features" style={{ paddingBottom: '40px' }}>
      <div className="features-container">
        {/* 1. FEATURES HERO */}
        <div className="features-hero reveal-up">
          <div className="features-hero-content">
            <span className="features-label">WHY EROMART</span>
            <h2>Powerful Features.<br/>Built for <span className="text-accent">Modern Business.</span></h2>
            <p>Smart, reliable and efficient solutions designed to make cash handling and billing simpler for businesses.</p>
          </div>
          <div className="features-hero-visual reveal-up delay-100">
            <img src={imgCashCounter} alt="Eromart Cash Counting Machine" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesAdvantage() {
  return (
    <section className="features-page" id="advantages" style={{ paddingTop: '40px' }}>
      <div className="features-container">
        {/* 2. KEY FEATURES (8 Cards) */}
        <div className="key-features-section">
          <div className="section-header reveal-up delay-200">
            <h2>The Eromart Advantage</h2>
            <p>Everything you need for seamless business operations.</p>
          </div>
          <div className="features-grid-8">
            <div className="feature-card reveal-up delay-100 hover-lift">
              <span className="feature-num">01</span>
              <div className="feature-icon"><Zap size={24} /></div>
              <h4>Fast &amp; Accurate Counting</h4>
              <p>Quick and reliable currency counting with high accuracy.</p>
            </div>
            
            <div className="feature-card reveal-up delay-200 hover-lift">
              <span className="feature-num">02</span>
              <div className="feature-icon"><ShieldCheck size={24} /></div>
              <h4>Advanced Detection Technology</h4>
              <p>Reliable counterfeit detection and intelligent counting technology.</p>
            </div>
            
            <div className="feature-card reveal-up delay-300 hover-lift">
              <span className="feature-num">03</span>
              <div className="feature-icon"><CheckCircle size={24} /></div>
              <h4>Easy to Use</h4>
              <p>Simple controls and an easy-to-understand interface.</p>
            </div>
            
            <div className="feature-card reveal-up delay-400 hover-lift">
              <span className="feature-num">04</span>
              <div className="feature-icon"><Gauge size={24} /></div>
              <h4>High Performance</h4>
              <p>Designed for fast and efficient daily business operations.</p>
            </div>
            
            <div className="feature-card reveal-up delay-100 hover-lift">
              <span className="feature-num">05</span>
              <div className="feature-icon"><Settings size={24} /></div>
              <h4>Durable &amp; Reliable</h4>
              <p>Built for consistent performance and long-term usage.</p>
            </div>
            
            <div className="feature-card reveal-up delay-200 hover-lift">
              <span className="feature-num">06</span>
              <div className="feature-icon"><Calculator size={24} /></div>
              <h4>Professional Billing Solution</h4>
              <p>Efficient billing support for modern retail businesses.</p>
            </div>
            
            <div className="feature-card reveal-up delay-300 hover-lift">
              <span className="feature-num">07</span>
              <div className="feature-icon"><Shield size={24} /></div>
              <h4>Warranty Support</h4>
              <p>Reliable warranty coverage and customer assistance.</p>
            </div>
            
            <div className="feature-card reveal-up delay-400 hover-lift">
              <span className="feature-num">08</span>
              <div className="feature-icon"><Wrench size={24} /></div>
              <h4>After-Sales Service</h4>
              <p>Dedicated support for installation, service and maintenance.</p>
            </div>
          </div>
        </div>

        {/* 6. TRUST SECTION */}
        <div className="trust-strip reveal-up">
          <span>Trusted by the new age of retail</span>
          <div>
            <b>WORKSPACE</b>
            <b>r<span>e</span>tail club</b>
            <b>SHOPIFY</b>
            <b>kios<span>k</span></b>
            <b>the local</b>
          </div>
        </div>

        {/* 7. WHY EROMART */}
        <div className="why-eromart-section reveal-up">
          <h3>Why Businesses Choose EROMART</h3>
          <div className="why-eromart-grid">
            <div className="why-item hover-lift">
              <Star size={28} />
              <span>Quality Products</span>
            </div>
            <div className="why-item hover-lift delay-100">
              <Headphones size={28} />
              <span>Reliable Support</span>
            </div>
            <div className="why-item hover-lift delay-200">
              <Truck size={28} />
              <span>Pan-India Delivery</span>
            </div>
            <div className="why-item hover-lift delay-300">
              <HeartHandshake size={28} />
              <span>Customer-Focused Service</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <FeaturesHero />
      <FeaturesAdvantage />
    </>
  );
}

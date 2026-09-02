import { 
  Store, ShoppingCart, Building2, 
  MapPin, Phone, Mail, 
  MessageCircle, ArrowRight, Target, Presentation, Truck, Headphones 
} from 'lucide-react';
import { storePhoto } from '../Gallery/galleryData';

export default function AboutUs() {
  return (
    <section className="consultation-section" id="contact">
      <div className="consultation-container">
        
        {/* 1. HERO / INTRO SECTION */}
        <div className="consultation-hero">
          <div className="consultation-hero-content reveal-up">
            <span className="consultation-label">LET'S FIND YOUR PERFECT SETUP</span>
            <h2>Not sure which machine is <span className="text-accent">right for you?</span></h2>
            <p>Talk to our product specialists and find the right cash counting or billing solution for your business.</p>
          </div>
          <div className="consultation-hero-image reveal-up delay-100">
            <img src={storePhoto} alt="Eromart Professional Setup" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="consultation-main-grid">
          {/* 3. CONSULTATION FORM */}
          <div className="consultation-form-wrapper reveal-up">
            <h3 className="section-title">Talk to an EROMART Specialist</h3>
            <p className="form-description">Tell us what you need and we'll help you choose the right machine.</p>
            
            <form className="consultation-form" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:eromartindia@gmail.com"; }}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 00000 00000" required />
              </div>
              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <select id="businessType" required>
                  <option value="">Select your business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="supermarket">Supermarket</option>
                  <option value="office">Office / Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Interested In</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="interest" value="cash" required />
                    <span>Cash Counting Machine</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="interest" value="billing" required />
                    <span>Billing Machine</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="interest" value="both" required />
                    <span>Both</span>
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your specific requirements..."></textarea>
              </div>
              <button type="submit" className="submit-btn hover-lift">
                Request a Consultation <ArrowRight size={18} />
              </button>
            </form>
          </div>

          <div className="consultation-sidebar">
            {/* 4. WHY TALK TO EROMART */}
            <div className="sidebar-section reveal-up delay-100">
              <h3 className="section-title">Why Talk to EROMART?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <Target size={20} />
                  <span>Free Product Guidance</span>
                </div>
                <div className="feature-item">
                  <Presentation size={20} />
                  <span>Product Demonstration</span>
                </div>
                <div className="feature-item">
                  <Truck size={20} />
                  <span>Pan-India Delivery</span>
                </div>
                <div className="feature-item">
                  <Headphones size={20} />
                  <span>After-Sales Support</span>
                </div>
              </div>
            </div>

            {/* 5. QUICK CONTACT */}
            <div className="sidebar-section reveal-up delay-200">
              <h3 className="section-title">Need help right now?</h3>
              <div className="quick-contact-grid">
                <a href="https://wa.me/919444307037" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp hover-lift">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
                <a href="tel:+919444307037" className="quick-btn call hover-lift">
                  <Phone size={18} /> Call Us
                </a>
                <a href="mailto:eromartindia@gmail.com" className="quick-btn email hover-lift">
                  <Mail size={18} /> Send Enquiry
                </a>
              </div>
            </div>

            {/* 6. BRANCHES */}
            <div className="sidebar-section reveal-up delay-300">
              <h3 className="section-title">Visit EROMART</h3>
              <div className="branches-list">
                <div className="branch-card hover-lift">
                  <div className="branch-icon"><MapPin size={20} /></div>
                  <div className="branch-details">
                    <h4>Erode (Head Office)</h4>
                    <p>GH Roundana, Near SRC Hospital, Vasuki Street, Brough Rd, Erode, Tamil Nadu 638001</p>
                  </div>
                </div>
                <div className="branch-card hover-lift">
                  <div className="branch-icon"><MapPin size={20} /></div>
                  <div className="branch-details">
                    <h4>Chennai</h4>
                    <p>1st Floor, Haris Arcade, EroMart, No.93, Perambur Barracks Rd, near Doveton Signal, Purasaiwakkam, Chennai, Tamil Nadu 600007</p>
                  </div>
                </div>
                <div className="branch-card hover-lift">
                  <div className="branch-icon"><MapPin size={20} /></div>
                  <div className="branch-details">
                    <h4>Trichy</h4>
                    <p>S1, Krishna Plaza, 195/1, 1st Main Road, near PRABHU Hospital, Ponnagar Extension, Karumandapam, Tiruchirappalli, Tamil Nadu 620001</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

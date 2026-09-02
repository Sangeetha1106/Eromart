import { ArrowRight, ArrowUp, MapPin, Phone, Mail, Youtube, Instagram, Facebook, AtSign } from 'lucide-react';

type FooterProps = {
  scrollToTop: () => void;
  openGallery: () => void;
};

export default function Footer({ scrollToTop, openGallery }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 md:py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a className="inline-flex items-center gap-2" href="#top">
              <span className="text-2xl font-bold text-white tracking-wider">EROMART</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400 pr-4">
              Leading Manufacturer of Cash Counting & Billing Machines. Providing reliable, high-quality, and technologically advanced solutions for modern businesses.
            </p>

            {/* Social Media Section */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-3">Follow EROMART</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.youtube.com/@Eromart-Official" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 group" aria-label="YouTube">
                  <Youtube size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/eromartnow/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 group" aria-label="Instagram">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/EROMART.ERODE" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 group" aria-label="Facebook">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.threads.com/@eromarterode" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 group" aria-label="Threads">
                  <AtSign size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://x.com/eromart_india" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300 group" aria-label="X (formerly Twitter)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="group-hover:scale-110 transition-transform">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#top" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#product" className="hover:text-orange-400 transition-colors">Cash Counting Machines</a></li>
              <li><a href="#product" className="hover:text-orange-400 transition-colors">Billing Machines</a></li>
              <li><button onClick={openGallery} className="hover:text-orange-400 transition-colors">Gallery</button></li>
              <li><a href="#journal" className="hover:text-orange-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919444307037" className="flex items-center gap-3 hover:text-orange-400 transition-colors group">
                  <div className="p-1.5 bg-gray-900 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                    <Phone size={14} className="text-orange-400" />
                  </div>
                  <span>+91 94443 07037</span>
                </a>
              </li>
              <li>
                <a href="mailto:eromartindia@gmail.com" className="flex items-center gap-3 hover:text-orange-400 transition-colors group">
                  <div className="p-1.5 bg-gray-900 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                    <Mail size={14} className="text-orange-400" />
                  </div>
                  <span>eromartindia@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Branches Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide uppercase text-sm">Our Branches</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-0.5">Erode:</span>
                  <span className="text-gray-400 leading-tight">GH Roundana, Near SRC Hospital, Vasuki Street, Brough Rd, Erode, Tamil Nadu 638001</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-0.5">Chennai:</span>
                  <span className="text-gray-400 leading-tight">1st Floor, Haris Arcade, EroMart, No.93, Perambur Barracks Rd, near Doveton Signal, Purasaiwakkam, Chennai, Tamil Nadu 600007</span>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white mb-0.5">Trichy:</span>
                  <span className="text-gray-400 leading-tight">S1, Krishna Plaza, 195/1, 1st Main Road, near PRABHU Hospital, Ponnagar Extension, Karumandapam, Tiruchirappalli, Tamil Nadu 620001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Eromart. All rights reserved.
          </div>
          <button className="p-2.5 bg-gray-900 border border-gray-800 hover:border-orange-500/50 hover:bg-gray-800 text-gray-400 hover:text-orange-400 rounded-full transition-all group shadow-lg" onClick={scrollToTop} aria-label="Scroll back to top">
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}



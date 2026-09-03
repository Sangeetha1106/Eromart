import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react';
import logoImg from '../assets/images/logo image/logo_black.png';

type NavbarProps = {
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  openGallery: () => void;
  added: boolean;
  quantity: number;
};

export default function Navbar({ mobileMenu, setMobileMenu, setCartOpen, openGallery, added, quantity }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="site-header-glass">
      <div className="header-glass-inner">
        <a className="brand-link" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); setMobileMenu(false); window.scrollTo(0, 0); }} aria-label="Eromart Home">
          <img src={logoImg} alt="Eromart Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        </a>

        <nav className={`nav-menu-links ${mobileMenu ? 'open' : ''}`}>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/' ? 'active' : ''}>Home</a>
          <a href="/cash-counting-machine" onClick={(e) => { e.preventDefault(); navigate('/cash-counting-machine'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/cash-counting-machine' ? 'active' : ''}>Cash Counting Machine</a>
          <a href="/billing-machine" onClick={(e) => { e.preventDefault(); navigate('/billing-machine'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/billing-machine' ? 'active' : ''}>Billing Machine</a>
          <a href="/gallery" onClick={(e) => { e.preventDefault(); navigate('/gallery'); setMobileMenu(false); window.scrollTo(0, 0); }} className={`nav-btn-link ${location.pathname === '/gallery' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>Gallery</a>
          <a href="/about-us" onClick={(e) => { e.preventDefault(); navigate('/about-us'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/about-us' ? 'active' : ''}>About Us</a>
          <a href="/contact-us" onClick={(e) => { e.preventDefault(); navigate('/contact-us'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/contact-us' ? 'active' : ''}>Contact Us</a>
          <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); setMobileMenu(false); window.scrollTo(0, 0); }} className={location.pathname === '/blog' ? 'active' : ''}>Blog</a>
        </nav>

        <div className="header-actions-group">
          {/* <button className="currency-selector" aria-label="Currency Selector">
            IN <ChevronDown size={13} />
          </button> */}

          <button className="nav-cart-btn" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <ShoppingBag size={18} />
            <span>{added ? quantity : 0}</span>
          </button>

          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenu(!mobileMenu)} 
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

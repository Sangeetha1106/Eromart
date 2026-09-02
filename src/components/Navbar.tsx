import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react';

type NavbarProps = {
  mobileMenu: boolean;
  setMobileMenu: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  openGallery: () => void;
  added: boolean;
  quantity: number;
};

export default function Navbar({ mobileMenu, setMobileMenu, setCartOpen, openGallery, added, quantity }: NavbarProps) {
  return (
    <header className="site-header-glass">
      <div className="header-glass-inner">
        <a className="brand-link" href="#top" aria-label="Eromart Home">

          <span className="brand-title">Eromart <span className="brand-title-accent">Bits</span></span>
        </a>

        <nav className={`nav-menu-links ${mobileMenu ? 'open' : ''}`}>
          <a href="#product" onClick={() => setMobileMenu(false)}>Products</a>
          <button className="nav-btn-link" onClick={openGallery}>Gallery</button>
          <a href="#features" onClick={() => setMobileMenu(false)}>Features</a>
          <a href="#journal" onClick={() => setMobileMenu(false)}>Journal</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>About Us</a>
        </nav>

        <div className="header-actions-group">
          {/* <button className="currency-selector" aria-label="Currency Selector">
            IN <ChevronDown size={13} />
          </button> */}

          <a href="#product" className="nav-cta-btn">
            Sign up
          </a>

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

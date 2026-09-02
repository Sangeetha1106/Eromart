import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';

import Hero from './components/Hero';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Products from './pages/Products/Products';
import ProductDetails from './pages/Products/ProductDetails';
import ExploreMoreProductPage from './pages/Products/ExploreMoreProductPage';
import Checkout from './pages/Checkout/Checkout';
import Gallery from './pages/Gallery/Gallery';
import { FeaturesHero, FeaturesAdvantage } from './pages/Features/Features';
import Journal from './pages/Journal/Journal';
import AboutUs from './pages/AboutUs/AboutUs';

import { Product, products, extraProducts } from './pages/Products/productData';

// Wrapper to find the product by ID and render ProductDetails
function ProductRouteWrapper({ addToCart, buyNow, navigate }: any) {
  const { id } = useParams();
  const allProducts = [...products, ...extraProducts];
  const product = allProducts.find(p => p.code.toLowerCase().replace(/[\s/]+/g, '-') === id) || products[0];

  return (
    <ProductDetails 
      product={product} 
      goBack={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
      addToCart={addToCart}
      buyNow={buyNow}
      onProductSelect={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)}
      onExploreMore={() => navigate(`/explore-more/${product.code.toLowerCase().replace(/[\s/]+/g, '-')}`)}
    />
  );
}

// Home Page content
function HomePage({ mobileMenu, setMobileMenu, setCartOpen, openGallery, added, quantity, addToCart, navigate }: any) {
  return (
    <>
      <Hero 
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        setCartOpen={setCartOpen}
        openGallery={openGallery}
        added={added}
        quantity={quantity}
      />
      <main id="top">
        <FeaturesHero />
        <Products 
          addToCart={addToCart} 
          onProductClick={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)} 
          onExploreMore={() => { 
            // Just go to explore more for the first product or a general one
            navigate(`/explore-more/general`); 
          }} 
        />
        <FeaturesAdvantage />
        <Journal />
        <AboutUs />
      </main>
    </>
  );
}

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [galleryOpen, setGalleryOpen] = useState(false);
  
  // Selected product specifically for checkout/cart
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = (product: Product = selectedProduct) => {
    setSelectedProduct(product);
    setAdded(true);
    setCartOpen(true);
  };

  const buyNow = (product: Product) => {
    setSelectedProduct(product);
    setAdded(true);
    navigate('/checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGallery = () => {
    setGalleryOpen(true);
    setMobileMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.setTimeout(() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if we are in an alternate view that needs the light navbar
  const isAltView = location.pathname !== '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Global Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: observer.unobserve(entry.target) if you only want it to animate once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach(el => observer.observe(el));

    // Cleanup and re-run on location change so new pages get observed
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname, galleryOpen]);

  return (
    <div className="app-shell page-transition-enter">
      {isAltView && (
        <div className="navbar-light-theme" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
          <Navbar 
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            setCartOpen={setCartOpen}
            openGallery={openGallery}
            added={added}
            quantity={quantity}
          />
        </div>
      )}

      <div key={location.pathname} className="page-transition-enter" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <HomePage 
              mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}
              setCartOpen={setCartOpen} openGallery={openGallery}
              added={added} quantity={quantity} addToCart={addToCart}
              navigate={navigate}
            />
          } />
          
          <Route path="/product/:id" element={
            <main id="top">
              <ProductRouteWrapper addToCart={addToCart} buyNow={buyNow} navigate={navigate} />
            </main>
          } />

          <Route path="/explore-more/:productId" element={
            <main id="top">
              <ExploreMoreProductPage 
                addToCart={addToCart}
                onProductClick={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)}
              />
            </main>
          } />

          <Route path="/checkout" element={
            <main id="top">
              <Checkout 
                product={selectedProduct} 
                quantity={quantity} 
                goBack={() => navigate(-1)} 
              />
            </main>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Gallery galleryOpen={galleryOpen} setGalleryOpen={setGalleryOpen} />

      <Footer scrollToTop={scrollToTop} openGallery={openGallery} />

      <Cart 
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        added={added}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedProduct={selectedProduct}
        goToCheckout={() => navigate('/checkout')}
      />
    </div>
  );
}

export default App;

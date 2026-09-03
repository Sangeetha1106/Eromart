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

import { Product, cashCountingMachineProducts, billingMachineProducts } from './pages/Products/productData';

// Wrapper to find the product by ID and render ProductDetails
function ProductRouteWrapper({ addToCart, buyNow, navigate }: any) {
  const { id } = useParams();
  const allProducts = [...cashCountingMachineProducts, ...billingMachineProducts];
  const product = allProducts.find(p => p.code.toLowerCase().replace(/[\s/]+/g, '-') === id) || allProducts[0];

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
function HomePage({ mobileMenu, setMobileMenu, setCartOpen, added, quantity, addToCart, navigate }: any) {
  return (
    <>
      <Hero 
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        setCartOpen={setCartOpen}
        openGallery={() => navigate('/gallery')}
        added={added}
        quantity={quantity}
      />
      <main id="top">
        <FeaturesHero />
        <Products 
          productsList={[...cashCountingMachineProducts.slice(0, 3), ...billingMachineProducts.slice(0, 3)]}
          addToCart={addToCart} 
          onProductClick={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)} 
          onExploreCashCounting={() => { 
            navigate(`/cash-counting-machine`); 
          }}
          onExploreBilling={() => { 
            navigate(`/billing-machine`); 
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
  
  // Selected product specifically for checkout/cart
  const [selectedProduct, setSelectedProduct] = useState<Product>(cashCountingMachineProducts[0]);

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
    setMobileMenu(false);
    navigate('/gallery');
    window.scrollTo(0, 0);
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
  }, [location.pathname]);

  return (
    <div className="app-shell page-transition-enter">
      <div 
        className="navbar-light-theme" 
        style={{ 
          paddingBottom: '0', 
          paddingTop: '16px', 
          position: location.pathname === '/' ? 'absolute' : 'relative',
          width: '100%',
          zIndex: 50
        }}
      >
        <Navbar 
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          setCartOpen={setCartOpen}
          openGallery={openGallery}
          added={added}
          quantity={quantity}
        />
      </div>

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

          <Route path="/cash-counting-machine" element={
            <main id="top">
              <ExploreMoreProductPage 
                category="cash-counting-machine"
                addToCart={addToCart}
                onProductClick={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)}
              />
            </main>
          } />

          <Route path="/billing-machine" element={
            <main id="top">
              <ExploreMoreProductPage 
                category="billing-machine"
                addToCart={addToCart}
                onProductClick={(p: Product) => navigate(`/product/${p.code.toLowerCase().replace(/[\s/]+/g, '-')}`)}
              />
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

          <Route path="/gallery" element={
            <main id="top" style={{ paddingTop: '0px', minHeight: '80vh' }}>
              <Gallery galleryOpen={true} setGalleryOpen={() => navigate('/')} />
            </main>
          } />

          <Route path="/about-us" element={
            <main id="top" style={{ paddingTop: '0px' }}>
              <FeaturesHero />
              <FeaturesAdvantage />
            </main>
          } />

          <Route path="/contact-us" element={
            <main id="top" style={{ paddingTop: '0px' }}>
              <AboutUs />
            </main>
          } />

          <Route path="/blog" element={
            <main id="top" style={{ paddingTop: '0px' }}>
              <Journal />
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

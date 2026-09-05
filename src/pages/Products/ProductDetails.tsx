import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, cashCountingMachineProducts, billingMachineProducts } from './productData';
import ProductCard from './ProductCard';

type ProductDetailsProps = {
  product: Product;
  goBack: () => void;
  addToCart: (product: Product) => void;
  buyNow: (product: Product) => void;
  onProductSelect?: (product: Product) => void;
  onExploreMore?: () => void;
};

export default function ProductDetails({ product, goBack, addToCart, buyNow, onProductSelect, onExploreMore }: ProductDetailsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  let productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  useEffect(() => {
    if (productImages.includes(product.image)) {
      setActiveImageIndex(productImages.indexOf(product.image));
    } else {
      setActiveImageIndex(0);
    }
  }, [product.code, product.image]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveImageIndex((prev) => (prev <= 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const allProducts = [...cashCountingMachineProducts, ...billingMachineProducts];
  const relatedProducts = allProducts.filter(p => p.code !== product.code).slice(0, 4);

  return (
    <section className="product-details-view" id="product-details" style={{ padding: '60px 8vw 100px', minHeight: '80vh', background: 'var(--paper)' }}>
      <button 
        onClick={goBack} 
        style={{ marginBottom: '40px', display: 'inline-flex', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '13.5px', color: 'var(--muted)', fontWeight: '600', transition: '0.2s' }}
        onMouseOver={(e) => e.currentTarget.style.color = 'var(--orange)'}
        onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted)'}
      >
        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to range
      </button>

      <div 
        className="product-details-master-card"
        style={{ 
          background: '#fff', 
          borderRadius: '32px', 
          padding: 'clamp(24px, 4vw, 48px)', 
          border: '1px solid rgba(0,0,0,0.05)', 
          boxShadow: '0 12px 40px rgba(0,0,0,0.03)', 
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          marginBottom: '80px'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5vw', alignItems: 'start' }}>
          {/* Left: Image Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative' }}>
            <style>{`
              .gallery-main-container, .thumb-scroll-container, .gallery-nav-btn, .gallery-main-img, .gallery-thumb {
                user-select: none;
                -webkit-user-select: none;
                -webkit-user-drag: none;
              }
              .product-details-master-card:hover {
                transform: translateY(-6px);
                box-shadow: 0 24px 60px rgba(35, 31, 25, 0.08);
              }
              .product-details-master-card:hover .gallery-main-img {
                transform: scale(1.04);
              }
              .gallery-main-img {
                width: 100%;
                max-width: 480px;
                object-fit: contain;
                mix-blend-mode: multiply;
                filter: contrast(1.2) brightness(1.1);
                display: block;
                transition: transform 0.15s ease-out;
                animation: imageFade 0.15s ease-out;
              }
            @keyframes imageFade {
              0% { opacity: 0; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1); }
            }
            .gallery-thumb {
              transition: all 0.3s ease;
            }
            .gallery-thumb:hover {
              transform: translateY(-4px);
              box-shadow: 0 8px 16px rgba(0,0,0,0.08);
            }
            .gallery-thumb img {
              transition: transform 0.3s ease;
            }
            .gallery-thumb:hover img {
              transform: scale(1.1);
            }
            .gallery-nav-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: #fff;
              border: 1px solid rgba(0,0,0,0.05);
              border-radius: 50%;
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
              color: var(--ink);
              z-index: 10;
            }
            .gallery-nav-btn:hover {
              background: #fff;
              color: var(--orange);
              transform: translateY(-50%) scale(1.05);
              box-shadow: 0 6px 16px rgba(0,0,0,0.15);
            }
            .gallery-nav-btn:active {
              transform: translateY(-50%) scale(0.95);
            }
            .gallery-nav-btn.left { left: 16px; }
            .gallery-nav-btn.right { right: 16px; }
            
            .thumb-scroll-container::-webkit-scrollbar {
              height: 4px;
            }
            .thumb-scroll-container::-webkit-scrollbar-thumb {
              background: var(--line);
              border-radius: 4px;
            }
          `}</style>

          <div className="gallery-main-container" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.02)', padding: '12%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px' }}>
            {productImages.length > 1 && (
              <>
                <button type="button" className="gallery-nav-btn left" onClick={handlePrev} aria-label="Previous image"><ChevronLeft size={22} /></button>
                <button type="button" className="gallery-nav-btn right" onClick={handleNext} aria-label="Next image"><ChevronRight size={22} /></button>
              </>
            )}
            <img 
              src={productImages[activeImageIndex]} 
              alt={product.name} 
              className="gallery-main-img"
              draggable={false}
            />
          </div>
          
          {productImages.length > 1 && (
            <div className="thumb-scroll-container" style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '12px', scrollBehavior: 'smooth' }}>
              {productImages.map((imgSrc, idx) => (
                <button
                  type="button"
                  key={product.code + idx}
                  className="gallery-thumb"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  style={{
                    flexShrink: 0,
                    width: '85px',
                    height: '85px',
                    borderRadius: '16px',
                    border: activeImageIndex === idx ? '2px solid var(--orange)' : '1px solid rgba(0,0,0,0.05)',
                    backgroundColor: activeImageIndex === idx ? '#fff' : 'rgba(0,0,0,0.02)',
                    padding: '10px',
                    cursor: 'pointer',
                    opacity: activeImageIndex === idx ? 1 : 0.6,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img src={imgSrc} draggable={false} alt={`${product.name} thumbnail ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'contrast(1.2) brightness(1.1)', pointerEvents: 'none' }} />
                </button>
              ))}
            </div>
          )}


        </div>

        {/* Right: Info */}
        <div className="product-info" style={{ paddingTop: '1vw' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span className="product-code" style={{ padding: '6px 12px', background: 'rgba(20, 16, 14, 0.05)', borderRadius: '8px', fontWeight: '700', fontSize: '11px', color: 'var(--ink)' }}>
              {product.code}
            </span>
            {product.badge && <span className="product-badge" style={{ position: 'static' }}>{product.badge}</span>}
          </div>
          
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: '1.1', color: 'var(--ink)' }}>
            {product.name}
          </h2>
          
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
            <strong style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--ink)' }}>₹{product.price.toLocaleString('en-IN')}</strong>
            <del style={{ color: 'var(--muted)', fontSize: '18px', fontWeight: '500' }}>₹{product.oldPrice.toLocaleString('en-IN')}</del>
          </div>
          
          <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px', maxWidth: '480px' }}>
            The {product.name} is engineered to integrate flawlessly into your modern retail counter. Featuring state-of-the-art sensors for 99.9% accuracy and an intuitive visual interface, it turns everyday transactions into an effortless ritual.
          </p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => addToCart(product)}
              style={{ 
                flex: '1', minWidth: '180px', padding: '16px 24px', borderRadius: '100px', 
                border: '1.5px solid rgba(0,0,0,0.1)', color: 'var(--ink)', background: '#fff', 
                fontSize: '15px', fontWeight: '700', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'inline-flex', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--ink)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)'; }}
            >
              Add to Cart
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const text = `Hi, I am interested in ${product.name}. Please share more details and pricing.`;
                window.open(`https://wa.me/919444307037?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
              }}
              style={{ 
                flex: '1', minWidth: '180px', padding: '16px 24px', borderRadius: '100px', 
                border: '1.5px solid var(--orange)', background: 'var(--orange)', color: '#fff', 
                fontSize: '15px', fontWeight: '700', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
                boxShadow: '0 8px 24px rgba(238, 108, 45, 0.25)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(238, 108, 45, 0.35)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(238, 108, 45, 0.25)'; }}
            >
              Buy Now <ArrowRight size={17} style={{ marginLeft: '8px' }} />
            </button>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#fff', padding: '12px', borderRadius: '50%', border: '1px solid var(--line)', display: 'grid', placeItems: 'center' }}>
                <Truck size={18} color="var(--orange)" />
              </div>
              <div style={{ paddingTop: '2px' }}>
                <strong style={{ display: 'block', fontSize: '14.5px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>Free Express Delivery</strong>
                <small style={{ color: 'var(--muted)', fontSize: '13px' }}>Dispatches within 24 hours. Free doorstep setup.</small>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ background: '#fff', padding: '12px', borderRadius: '50%', border: '1px solid var(--line)', display: 'grid', placeItems: 'center' }}>
                <ShieldCheck size={18} color="var(--orange)" />
              </div>
              <div style={{ paddingTop: '2px' }}>
                <strong style={{ display: 'block', fontSize: '14.5px', fontWeight: '700', color: 'var(--ink)', marginBottom: '3px' }}>2-Year Comprehensive Warranty</strong>
                <small style={{ color: 'var(--muted)', fontSize: '13px' }}>100% hardware replacement guarantee included.</small>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div style={{ paddingTop: '60px', borderTop: '1px solid var(--line)' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px', color: 'var(--ink)' }}>You might also like</h3>
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.code}
                product={relatedProduct}
                onClick={() => onProductSelect?.(relatedProduct)}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
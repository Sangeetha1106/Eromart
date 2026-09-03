import { useState } from 'react';
import { Plus, ArrowLeft, Heart } from 'lucide-react';
import { Product, cashCountingMachineProducts, billingMachineProducts } from './productData';

type ProductsProps = {
  addToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onExploreCashCounting?: () => void;
  onExploreBilling?: () => void;
  isExploreMorePage?: boolean;
  goBack?: () => void;
  productsList?: Product[];
};

export default function Products({ addToCart, onProductClick, onExploreCashCounting, onExploreBilling, isExploreMorePage, goBack, productsList }: ProductsProps) {
  const displayedProducts = productsList ? productsList : (isExploreMorePage ? [...cashCountingMachineProducts.slice(3), ...billingMachineProducts.slice(3)] : [...cashCountingMachineProducts.slice(0, 3), ...billingMachineProducts.slice(0, 3)]);

  const [likedProducts, setLikedProducts] = useState<Record<string, boolean>>(() => {
    try {
      const stored = localStorage.getItem('eromart_wishlist');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  });

  const toggleLike = (e: React.MouseEvent, productCode: string) => {
    e.stopPropagation();
    setLikedProducts(prev => {
      const newState = { ...prev, [productCode]: !prev[productCode] };
      localStorage.setItem('eromart_wishlist', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <section className="catalog-section" id={isExploreMorePage ? "" : "product"} style={isExploreMorePage ? { paddingTop: '0px', minHeight: '80vh', background: 'var(--paper)' } : {}}>
      {isExploreMorePage && goBack && (
        <button 
          onClick={goBack} 
          style={{ marginTop: '40px', marginBottom: '40px', display: 'inline-flex', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '13.5px', color: 'var(--muted)', fontWeight: '600', transition: '0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--orange)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted)'}
        >
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to home
        </button>
      )}

      <div className="section-heading reveal-up">
        <div>
          <span className="section-kicker" style={{ position: 'relative', top: '10px' }}>{isExploreMorePage ? "More from Eromart" : "01 / The Eromart range"}</span>
          <h2>{isExploreMorePage ? "Explore More" : "One machine"}<br /><em>{isExploreMorePage ? "Machines" : "for every counter."}</em></h2>
        </div>
        <p>From the compact EM-320 to the heavy-duty EM-900, there is an Eromart built for the way you sell. Pick the one that fits your shop.</p>
      </div>
      <div className="product-grid">
        {displayedProducts.map((product, index) => (
          <article 
            key={product.code} 
            className={`product-card tone-${product.tone} reveal-up`}
            onClick={() => onProductClick(product)}
            style={{ cursor: 'pointer', transitionDelay: `${(index % 3) * 100}ms` }}
          >
            <div className="product-card-media">
              <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
              {product.badge && <span className="product-badge">{product.badge}</span>}
              <button 
                className={`like-button ${likedProducts[product.code] ? 'liked' : ''}`}
                onClick={(e) => toggleLike(e, product.code)}
                aria-label={likedProducts[product.code] ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart 
                  size={18} 
                  fill={likedProducts[product.code] ? "currentColor" : "none"} 
                  strokeWidth={2}
                />
              </button>
            </div>
            <div className="product-card-info">
              <div className="product-card-head">
                <span className="product-code">{product.code}</span>
                <div className="rating">★★★★★</div>
              </div>
              <h3>{product.name}</h3>
              <div className="product-card-price">
                <div>
                  <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                  <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>
                </div>
                <button 
                  className="add-button" 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }} 
                  aria-label={`Add ${product.name} to cart`}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!isExploreMorePage && (onExploreCashCounting || onExploreBilling) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '60px' }}>
          {onExploreCashCounting && (
            <button 
              onClick={onExploreCashCounting} 
              className="btn-explore-more" 
            >
              Explore More Cash Counting Machines
            </button>
          )}
          {onExploreBilling && (
            <button 
              onClick={onExploreBilling} 
              className="btn-explore-more secondary" 
            >
              Explore More Billing Machines
            </button>
          )}
        </div>
      )}
    </section>
  );
}

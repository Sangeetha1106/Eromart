import { useState } from 'react';
import { Product, cashCountingMachineProducts, billingMachineProducts } from './productData';
import ProductCard from './ProductCard';

type ProductsProps = {
  addToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  onExploreCashCounting?: () => void;
  onExploreBilling?: () => void;
  isExploreMorePage?: boolean;
  goBack?: () => void;
  productsList?: Product[];
  exploreTitle?: string;
  exploreSubtitle?: string;
};

export default function Products({ addToCart, onProductClick, onExploreCashCounting, onExploreBilling, isExploreMorePage, goBack, productsList, exploreTitle, exploreSubtitle }: ProductsProps) {
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
          style={{ marginTop: '40px', marginBottom: '40px', display: 'inline-flex', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '13.5px', color: 'var(--muted)', fontWeight: '600' }}
        >
          Back to home
        </button>
      )}

      <div className="section-heading reveal-up">
        <div>
          {!isExploreMorePage && <span className="section-kicker" style={{ position: 'relative', top: '10px' }}>01 / The Eromart range</span>}
          <h2>{isExploreMorePage ? (exploreTitle || "Explore More") : "One machine"}<br /><em>{isExploreMorePage ? (exploreSubtitle || "Machines") : "for every counter."}</em></h2>
        </div>
      </div>

      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            onClick={() => onProductClick(product)}
            addToCart={addToCart}
            liked={!!likedProducts[product.code]}
            onToggleLike={toggleLike}
          />
        ))}
      </div>

      {!isExploreMorePage && (onExploreCashCounting || onExploreBilling) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '60px' }}>
          {onExploreCashCounting && <button onClick={onExploreCashCounting} className="btn-explore-more">Explore More Cash Counting Machines</button>}
          {onExploreBilling && <button onClick={onExploreBilling} className="btn-explore-more secondary">Explore More Billing Machines</button>}
        </div>
      )}
    </section>
  );
}
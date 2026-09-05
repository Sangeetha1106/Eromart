import { Plus, Heart, ArrowRight, Monitor, Printer, Link2, BatteryCharging, Scissors, Database, Wifi, Zap, Target, ShieldCheck, Banknote, Gauge } from 'lucide-react';
import { Product, FeatureIconKey } from './productData';

const ICONS: Record<FeatureIconKey, any> = {
  display: Monitor, printer: Printer, link: Link2, battery: BatteryCharging,
  cutter: Scissors, storage: Database, connectivity: Wifi, speed: Zap,
  accuracy: Target, durability: ShieldCheck, sensor: Gauge, currency: Banknote,
};

const PALETTE: Record<string, { grad: string; soft: string; text: string }> = {
  sand:     { grad: 'linear-gradient(135deg,#fbbf24,#f97316)', soft: '#fff7ed', text: '#c2410c' },
  graphite: { grad: 'linear-gradient(135deg,#64748b,#334155)', soft: '#f1f5f9', text: '#334155' },
  blue:     { grad: 'linear-gradient(135deg,#3b82f6,#4f46e5)', soft: '#eff6ff', text: '#1d4ed8' },
  dark:     { grad: 'linear-gradient(135deg,#7c3aed,#4c1d95)', soft: '#f5f3ff', text: '#6d28d9' },
  cream:    { grad: 'linear-gradient(135deg,#eab308,#ca8a04)', soft: '#fefce8', text: '#a16207' },
  peach:    { grad: 'linear-gradient(135deg,#fb7185,#e11d48)', soft: '#fff1f2', text: '#be123c' },
};

type ProductCardProps = {
  product: Product;
  onClick: () => void;
  addToCart: (product: Product) => void;
  liked?: boolean;
  onToggleLike?: (e: React.MouseEvent, code: string) => void;
};

export default function ProductCard({ product, onClick, addToCart, liked, onToggleLike }: ProductCardProps) {
  const palette = PALETTE[product.tone] || PALETTE.blue;
  const discount = Math.round((1 - product.price / product.oldPrice) * 100);
  const rating = product.rating ?? 4.7;
  const reviews = product.reviewCount ?? 100;

  return (
    <article className="premium-card" onClick={onClick}>
      <style>{`
        .premium-card {
          background: #fff; border-radius: 28px; padding: 16px;
          border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 8px 24px rgba(20,16,14,0.05);
          cursor: pointer; transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          display: flex; flex-direction: column; height: 100%;
        }
        .premium-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(20,16,14,0.1); }
        .premium-card:hover .premium-media img { transform: scale(1.06); }
        .premium-media img { transition: transform 0.35s cubic-bezier(0.16,1,0.3,1); }
        .premium-badge {
          position: absolute; top: 14px; left: 14px; padding: 6px 12px; border-radius: 100px;
          font-size: 10.5px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase;
          color: #fff; z-index: 3;
        }
        .premium-like {
          position: absolute; top: 12px; right: 12px; width: 34px; height: 34px; border-radius: 50%;
          background: #fff; border: none; display: grid; place-items: center; cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1); color: #14100e; z-index: 3; transition: 0.2s;
        }
        .premium-like:hover { transform: scale(1.08); }
        .premium-like.liked { color: #e11d48; }
        .premium-feature {
          display: flex; align-items: center; gap: 6px; padding: 7px 9px; border-radius: 10px;
          background: rgba(0,0,0,0.03); font-size: 11px; font-weight: 600; color: #4b4640; flex: 1;
        }
        .premium-cta {
          border: none; color: #fff; font-weight: 700; font-size: 13.5px; border-radius: 100px;
          padding: 12px 16px; display: inline-flex; align-items: center; justify-content: center;
          gap: 6px; cursor: pointer; transition: all 0.25s ease; flex: 1;
        }
        .premium-cta:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .premium-cart-btn {
          width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid rgba(0,0,0,0.08);
          background: #fff; display: grid; place-items: center; cursor: pointer; color: #14100e;
          transition: all 0.25s ease; flex-shrink: 0;
        }
        .premium-cart-btn:hover { background: #14100e; color: #fff; border-color: #14100e; }
      `}</style>

      {/* Media */}
      <div className="premium-media" style={{ position: 'relative', height: '220px', borderRadius: '20px', background: '#ffffff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
        {product.badge && (
          <span className="premium-badge" style={{ background: palette.grad }}>{product.badge}</span>
        )}
        <button
          type="button"
          className={`premium-like ${liked ? 'liked' : ''}`}
          onClick={(e) => onToggleLike?.(e, product.code)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} strokeWidth={2} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          style={{ position: 'relative', zIndex: 2, maxHeight: '82%', maxWidth: '82%', objectFit: 'contain', filter: 'drop-shadow(0 18px 16px rgba(0,0,0,0.18))', mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ padding: '4px 10px', background: palette.soft, color: palette.text, borderRadius: '8px', fontWeight: 700, fontSize: '11px' }}>{product.code}</span>
        <span style={{ fontSize: '11.5px', color: '#9a938a', fontWeight: 600 }}>Graphite Series</span>
      </div>

      <h3 style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.01em', margin: '0 0 4px', color: '#14100e' }}>{product.name}</h3>
      <p style={{ fontSize: '13px', color: '#9a938a', margin: '0 0 16px', fontWeight: 500 }}>{product.category}</p>

      {product.features && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {product.features.map((f, idx) => {
            const Icon = ICONS[f.icon] || Zap;
            return (
              <div className="premium-feature" key={idx}>
                <Icon size={14} color={palette.text} />
                <span>{f.label}</span>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
        <span style={{ color: '#f59e0b', fontSize: '14px', letterSpacing: '1px' }}>★★★★★</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#14100e' }}>{rating}</span>
        <span style={{ fontSize: '12.5px', color: '#9a938a' }}>({reviews})</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
        <strong style={{ fontSize: '24px', fontWeight: 800, color: '#14100e', letterSpacing: '-0.02em' }}>₹{product.price.toLocaleString('en-IN')}</strong>
        <del style={{ color: '#b3aca3', fontSize: '14px', fontWeight: 500 }}>₹{product.oldPrice.toLocaleString('en-IN')}</del>
        {discount > 0 && (
          <span style={{ padding: '3px 9px', background: palette.soft, color: palette.text, borderRadius: '100px', fontSize: '11px', fontWeight: 700 }}>{discount}% OFF</span>
        )}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
        <button className="premium-cart-btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }} aria-label={`Add ${product.name} to cart`}>
          <Plus size={18} />
        </button>
        <button className="premium-cta" style={{ background: palette.grad, boxShadow: `0 10px 24px ${palette.text}33` }} onClick={(e) => { e.stopPropagation(); onClick(); }}>
          View Details <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
}
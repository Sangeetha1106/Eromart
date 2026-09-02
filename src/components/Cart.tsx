import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../pages/Products/productData';

type CartProps = {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  added: boolean;
  quantity: number;
  setQuantity: (quantity: number) => void;
  selectedProduct: Product;
  goToCheckout: () => void;
};

export default function Cart({ cartOpen, setCartOpen, added, quantity, setQuantity, selectedProduct, goToCheckout }: CartProps) {
  if (!cartOpen) return null;

  return (
    <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="cart-header">
          <div>
            <span className="section-kicker">Your order</span>
            <h2>Cart <em>({added ? quantity : 0})</em></h2>
          </div>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart"><X /></button>
        </div>
        {added ? (
          <>
            <div className="cart-product">
              <div className="cart-product-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2) brightness(1.1)' }} loading="lazy" decoding="async" />
              </div>
              <div>
                <b>{selectedProduct.name}</b>
                <span>{selectedProduct.code}</span>
                <div className="quantity-control">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={13} /></button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}><Plus size={13} /></button>
                </div>
              </div>
              <strong>₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}</strong>
            </div>
            <div className="cart-summary">
              <div><span>Subtotal</span><b>₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}</b></div>
              <div><span>Delivery</span><b>Free</b></div>
              <div className="cart-total"><span>Total</span><b>₹{(selectedProduct.price * quantity).toLocaleString('en-IN')}</b></div>
              <button className="primary-button checkout-button" onClick={() => { setCartOpen(false); goToCheckout(); }} style={{ marginTop: '12px', width: '100%', padding: '16px', background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold' }}>
                Proceed to Checkout <ArrowRight size={17} />
              </button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <ShoppingBag size={38} />
            <h3>Your cart is quiet.</h3>
            <p>When you're ready to make your counter better, we'll be here.</p>
            <button className="primary-button" onClick={() => setCartOpen(false)}>Explore the range</button>
          </div>
        )}
      </aside>
    </div>
  );
}

import { ArrowLeft, CircleCheck } from 'lucide-react';
import { Product } from '../Products/productData';

type CheckoutProps = {
  product: Product;
  quantity: number;
  goBack: () => void;
};

export default function Checkout({ product, quantity, goBack }: CheckoutProps) {
  const total = product.price * quantity;

  return (
    <section style={{ padding: '60px 8vw 100px', minHeight: '80vh', background: 'var(--paper)' }}>
      <button 
        onClick={goBack} 
        style={{ marginBottom: '40px', display: 'inline-flex', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '13.5px', color: 'var(--muted)', fontWeight: '600', transition: '0.2s' }}
        onMouseOver={(e) => e.currentTarget.style.color = 'var(--orange)'}
        onMouseOut={(e) => e.currentTarget.style.color = 'var(--muted)'}
      >
        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Cancel Checkout
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '6vw', alignItems: 'start' }}>
        
        {/* Left: Order Form */}
        <div style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid var(--line)', boxShadow: '0 24px 48px rgba(35, 31, 25, 0.06)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '30px' }}>Checkout</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact Information</label>
              <input type="email" placeholder="Email address" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shipping Address</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }} />
                <input type="text" placeholder="Street Address" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input type="text" placeholder="City" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }} />
                  <input type="text" placeholder="PIN Code" style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--line)', fontSize: '15px', background: 'var(--paper)', outline: 'none' }} />
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const message = `Hi, I would like to place an order for ${product.name} (Qty: ${quantity}). Total: ₹${total.toLocaleString('en-IN')}. Please help me complete this purchase.`;
                const whatsappUrl = `https://wa.me/919444307037?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              style={{ 
                marginTop: '20px', width: '100%', padding: '18px', borderRadius: '100px', 
                border: 'none', background: 'var(--orange)', color: '#fff', 
                fontSize: '16px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.25s',
                boxShadow: '0 8px 24px rgba(238, 108, 45, 0.25)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(238, 108, 45, 0.35)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(238, 108, 45, 0.25)'; }}
            >
              Place Order securely
            </button>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div style={{ padding: '30px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '24px', border: '1px solid var(--line)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Order Summary</h3>
          
          <div style={{ display: 'flex', gap: '20px', paddingBottom: '24px', borderBottom: '1px solid var(--line)' }}>
            <img src={product.image} alt={product.name} style={{ width: '80px', height: '80px', objectFit: 'contain', background: '#fff', borderRadius: '12px', padding: '8px', border: '1px solid var(--line)' }} />
            <div>
              <strong style={{ display: 'block', fontSize: '16px', fontWeight: '700' }}>{product.name}</strong>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>Qty: {quantity}</span>
              <strong style={{ display: 'block', fontSize: '16px', fontWeight: '700', marginTop: '8px' }}>₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
            </div>
          </div>

          <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}>
              <span>Subtotal</span>
              <span style={{ color: 'var(--ink)', fontWeight: '600' }}>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}>
              <span>Delivery</span>
              <span style={{ color: '#10b981', fontWeight: '700' }}>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '20px', borderTop: '1px solid var(--line)', fontSize: '20px' }}>
              <span style={{ fontWeight: '700' }}>Total</span>
              <span style={{ fontWeight: '800' }}>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '30px', padding: '16px', background: '#ecfdf5', color: '#065f46', borderRadius: '12px', fontSize: '13px', fontWeight: '600' }}>
            <CircleCheck size={18} />
            Safe & Secure Checkout
          </div>
        </div>

      </div>
    </section>
  );
}

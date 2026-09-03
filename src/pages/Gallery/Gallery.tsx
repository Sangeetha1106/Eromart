import { ArrowRight } from 'lucide-react';
import { galleryItems } from './galleryData';

type GalleryProps = {
  galleryOpen: boolean;
  setGalleryOpen: (open: boolean) => void;
};

export default function Gallery({ galleryOpen, setGalleryOpen }: GalleryProps) {
  if (!galleryOpen) return null;

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading gallery-heading reveal-up">
        <div>
          <span className="section-kicker">02 / In their element</span>
          <h2>Made for the<br /><em>daily ritual.</em></h2>
        </div>
        <button className="arrow-link" onClick={() => setGalleryOpen(false)}>
          Back to shop <ArrowRight size={17} />
        </button>
      </div>
      
      <div className="product-grid">
        {galleryItems.map((item, index) => (
          <article key={item.id} className="product-card reveal-up" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
            <div className="product-card-media" style={{ height: '300px' }}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            </div>
            <div className="product-card-info">
              <div className="product-card-head">
                <span className="product-code">{item.subtitle}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginTop: '8px', color: 'var(--ink)', letterSpacing: '-0.02em' }}>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

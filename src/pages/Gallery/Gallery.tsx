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
      
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <article key={item.id} className="gallery-card reveal-up hover-lift" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
            <div className="gallery-card-media">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            </div>
            <div className="gallery-card-info">
              <span className="gallery-subtitle">{item.subtitle}</span>
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

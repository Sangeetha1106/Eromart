import { ArrowRight } from 'lucide-react';
import { galleryItems } from './galleryData';

type GalleryProps = {
  galleryOpen: boolean;
  setGalleryOpen: (open: boolean) => void;
};

export default function Gallery({ galleryOpen, setGalleryOpen }: GalleryProps) {
  if (!galleryOpen) return null;

  // Display all images instead of slicing
  const displayItems = galleryItems;

  return (
    <section className="gallery-section" id="gallery" style={{ backgroundColor: '#fafafa', paddingBottom: '80px' }}>
      <div className="section-heading gallery-heading reveal-up">
        <div>
          <span className="section-kicker">02 / In their element</span>
          <h2>Made for the<br /><em>daily ritual.</em></h2>
        </div>
        <button className="arrow-link" onClick={() => setGalleryOpen(false)}>
          Back to shop <ArrowRight size={17} />
        </button>
      </div>
      
      <div className="custom-gallery-container" style={{ padding: '0 4vw' }}>
        <style>{`
          .custom-gallery-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 20px;
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
          }
          .custom-gallery-card {
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #eaeaea;
            cursor: pointer;
          }
          .custom-gallery-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .custom-gallery-card:hover .custom-gallery-img {
            transform: scale(1.05);
          }
          
          /* Text Overlay Gradient */
          .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60%;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
            display: flex;
            align-items: flex-end;
            padding: 24px;
            pointer-events: none;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
          .custom-gallery-card:hover .gallery-overlay {
            opacity: 1;
          }
          .gallery-title {
            color: #ffffff;
            font-size: 1.15rem;
            font-weight: 400;
            margin: 0;
            letter-spacing: 0.5px;
            font-family: inherit;
          }
          
          /* Proportions: Math ensures all heights in a row match perfectly 
             Width ratio / Height ratio = uniform height
             span 2 / 1.25 = 1.6
             span 3 / 1.875 = 1.6
          */
          .custom-gallery-card:nth-child(6n+1) { grid-column: span 2; aspect-ratio: 1.25; }
          .custom-gallery-card:nth-child(6n+2) { grid-column: span 3; aspect-ratio: 1.875; }
          .custom-gallery-card:nth-child(6n+3) { grid-column: span 2; aspect-ratio: 1.25; }
          
          .custom-gallery-card:nth-child(6n+4) { grid-column: span 3; aspect-ratio: 1.875; }
          .custom-gallery-card:nth-child(6n+5) { grid-column: span 2; aspect-ratio: 1.25; }
          .custom-gallery-card:nth-child(6n+6) { grid-column: span 2; aspect-ratio: 1.25; }

          @media (max-width: 1024px) {
            .custom-gallery-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .custom-gallery-card {
              grid-column: span 1 !important;
              aspect-ratio: 1.25 !important;
            }
          }
          @media (max-width: 640px) {
            .custom-gallery-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        
        <div className="custom-gallery-grid">
          {displayItems.map((item, index) => (
            <article key={item.id} className="custom-gallery-card reveal-up" style={{ transitionDelay: `${(index % 6) * 100}ms` }}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="custom-gallery-img" />
              <div className="gallery-overlay">
                <h3 className="gallery-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

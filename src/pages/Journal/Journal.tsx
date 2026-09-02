import { ArrowUpRight, ArrowRight } from 'lucide-react';
import img1 from '../../assets/images/journal images/image.png';
import img2 from '../../assets/images/journal images/images 4.png';
import img3 from '../../assets/images/journal images/image copy 2.png';

export default function Journal() {
  return (
    <section className="journal-section" id="journal">
      <div className="journal-ambient-glow" />
      <div className="journal-container">
        <div className="section-heading journal-heading reveal-up">
          <div>
            <span className="section-kicker kicker-amber">03 / From the journal</span>
            <h2>Notes from<br /><em>the counter.</em></h2>
          </div>
          <a className="arrow-link journal-arrow-link" href="#contact">
            Read all notes <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="journal-grid">
          <article className="journal-card reveal-up hover-lift">
            <div className="journal-image-wrapper">
              <div className="journal-image" style={{ backgroundImage: `url(${img1})` }} />
              <span className="journal-category-pill">Stories</span>
            </div>
            <div className="journal-card-body">
              <span className="journal-date">06.08.24 &bull; 4 min read</span>
              <h3>The art of a well-run retail counter</h3>
              <p className="journal-excerpt">Discover how precision hardware transformed everyday store workflows across 500+ Indian merchants.</p>
              <a href="#contact" className="journal-read-link">
                Read story <ArrowRight size={15} />
              </a>
            </div>
          </article>

          <article className="journal-card reveal-up delay-100 hover-lift">
            <div className="journal-image-wrapper">
              <div className="journal-image" style={{ backgroundImage: `url(${img2})` }} />
              <span className="journal-category-pill">Guides</span>
            </div>
            <div className="journal-card-body">
              <span className="journal-date">28.07.24 &bull; 6 min read</span>
              <h3>5 ways to make checkout feel effortless &amp; human</h3>
              <p className="journal-excerpt">Tips on reducing queue friction, preventing counterfeit bills, and creating pleasant checkout moments.</p>
              <a href="#contact" className="journal-read-link">
                Read story <ArrowRight size={15} />
              </a>
            </div>
          </article>

          <article className="journal-card reveal-up delay-200 hover-lift">
            <div className="journal-image-wrapper">
              <div className="journal-image" style={{ backgroundImage: `url(${img3})` }} />
              <span className="journal-category-pill">Insights</span>
            </div>
            <div className="journal-card-body">
              <span className="journal-date">12.07.24 &bull; 5 min read</span>
              <h3>Future-proofing your cash management</h3>
              <p className="journal-excerpt">How modern currency technology integrates perfectly into everyday business operations.</p>
              <a href="#contact" className="journal-read-link">
                Read story <ArrowRight size={15} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

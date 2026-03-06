function OurStory() {
  return (
    <section id="story" className="story">
      <div className="story__container">
        <div className="section-header">
          <span className="section-header__label">Our Journey</span>
          <h2 className="section-header__title">Our Love Story</h2>
          <div className="section-header__divider">
            <span className="section-header__line"></span>
            <span className="section-header__heart">?</span>
            <span className="section-header__line"></span>
          </div>
        </div>

        <div className="story__content">
          <div className="story__image-wrapper">
            <div className="story__image-placeholder">
              <span>Our Photo</span>
              <p>Add your photo here</p>
            </div>
          </div>
          <div className="story__text">
            <h3>How We Met</h3>
            <p>
              Every love story is beautiful, but ours is our favourite.
              We can't wait to share the beginning of our forever with you.
            </p>
            <p>
              More details coming soon…
            </p>
            <div className="story__signature">T &amp; D</div>
          </div>
        </div>

        <div className="story__timeline">
          <div className="story__timeline-item">
            <div className="story__timeline-dot"></div>
            <div className="story__timeline-content">
              <h4>First Met</h4>
              <p>The day everything changed…</p>
            </div>
          </div>
          <div className="story__timeline-item">
            <div className="story__timeline-dot"></div>
            <div className="story__timeline-content">
              <h4>Started Dating</h4>
              <p>When we knew it was special…</p>
            </div>
          </div>
          <div className="story__timeline-item">
            <div className="story__timeline-dot"></div>
            <div className="story__timeline-content">
              <h4>The Proposal</h4>
              <p>The moment we said yes to forever…</p>
            </div>
          </div>
          <div className="story__timeline-item">
            <div className="story__timeline-dot"></div>
            <div className="story__timeline-content">
              <h4>The Wedding</h4>
              <p>April 20–21, 2026 – Our forever begins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;

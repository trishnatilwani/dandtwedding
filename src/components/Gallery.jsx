function Gallery() {
  const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <div className="section-header">
          <span className="section-header__label">Moments</span>
          <h2 className="section-header__title">Our Gallery</h2>
          <div className="section-header__divider">
            <span className="section-header__line"></span>
            <span className="section-header__heart">?</span>
            <span className="section-header__line"></span>
          </div>
          <p className="section-header__subtitle">Photos coming soon — stay tuned!</p>
        </div>

        <div className="gallery__grid">
          {placeholders.map((num) => (
            <div className="gallery__item" key={num}>
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-icon">??</span>
                <span className="gallery__placeholder-text">Photo {num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

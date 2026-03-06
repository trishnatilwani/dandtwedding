function Venue() {
  return (
    <section id="venue" className="venue">
      <div className="venue__container">
        <div className="section-header">
          <span className="section-header__label">Location</span>
          <h2 className="section-header__title">The Venue</h2>
          <div className="section-header__divider">
            <span className="section-header__line"></span>
            <span className="section-header__heart">?</span>
            <span className="section-header__line"></span>
          </div>
        </div>

        <div className="venue__content">
          <div className="venue__info">
            <h3 className="venue__name">Deventures Shimla Hills</h3>
            <p className="venue__location">Shimla Hills, Himachal Pradesh, India</p>
            <p className="venue__description">
              Nestled in the heart of the majestic Shimla Hills, our wedding venue offers 
              breathtaking panoramic views of the Himalayas. Surrounded by lush deodar forests 
              and crisp mountain air, it's the perfect setting for our celebration of love.
            </p>
            <div className="venue__details">
              <div className="venue__detail">
                <span className="venue__detail-icon">??</span>
                <div>
                  <strong>Date</strong>
                  <p>April 20–21, 2026</p>
                </div>
              </div>
              <div className="venue__detail">
                <span className="venue__detail-icon">??</span>
                <div>
                  <strong>Address</strong>
                  <p>Deventures, Shimla Hills, Himachal Pradesh</p>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Shimla+Hills+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="venue__map-link"
            >
              Get Directions ?
            </a>
          </div>

          <div className="venue__map">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05662580093!2d77.09631028476703!3d31.10469835498697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff8cf07c!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Venue;

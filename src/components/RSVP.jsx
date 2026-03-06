import { useState } from 'react';

function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="rsvp">
      <div className="rsvp__overlay"></div>
      <div className="rsvp__container">
        <div className="section-header">
          <span className="section-header__label">Join Us</span>
          <h2 className="section-header__title">RSVP</h2>
          <div className="section-header__divider">
            <span className="section-header__line"></span>
            <span className="section-header__heart">?</span>
            <span className="section-header__line"></span>
          </div>
          <p className="section-header__subtitle">
            We would be honoured by your presence. Kindly respond by March 1, 2026.
          </p>
        </div>

        {submitted ? (
          <div className="rsvp__success">
            <div className="rsvp__success-icon">?</div>
            <h3>Thank You!</h3>
            <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
          </div>
        ) : (
          <form className="rsvp__form" onSubmit={handleSubmit}>
            <div className="rsvp__form-row">
              <div className="rsvp__form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="rsvp__form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="rsvp__form-row">
              <div className="rsvp__form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div className="rsvp__form-group">
                <label htmlFor="attending">Will You Attend?</label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>

            <div className="rsvp__form-group rsvp__form-group--full">
              <label htmlFor="message">Message for the Couple</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your wishes or any dietary requirements…"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="rsvp__submit">
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default RSVP;

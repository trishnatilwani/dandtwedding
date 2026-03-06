import { useState } from 'react';

function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(() => {
      onOpen();
    }, 2000);
  };

  return (
    <div className={`envelope-screen ${opened ? 'envelope-screen--opened' : ''}`}>
      {/* Decorative floating particles */}
      <div className="envelope-screen__particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="envelope-screen__particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}></span>
        ))}
      </div>

      <div className="envelope-screen__content">
        <p className="envelope-screen__top-text">You're Invited</p>

        <div className={`envelope ${opened ? 'envelope--opened' : ''}`}>
          {/* Envelope back shadow */}
          <div className="envelope__shadow"></div>

          {/* The card that slides up */}
          <div className="envelope__card">
            <div className="envelope__card-inner">
              <div className="envelope__card-ornament envelope__card-ornament--top">? ? ?</div>
              <p className="envelope__card-subtitle">Together with their families</p>
              <h2 className="envelope__card-names">
                <span>Trishna</span>
                <span className="envelope__card-amp">&amp;</span>
                <span>Deep</span>
              </h2>
              <p className="envelope__card-invite">Request the pleasure of your company</p>
              <div className="envelope__card-divider">
                <span></span>
                <span className="envelope__card-heart">?</span>
                <span></span>
              </div>
              <p className="envelope__card-date">20th – 21st April 2026</p>
              <p className="envelope__card-venue">Deventures Shimla Hills</p>
              <p className="envelope__card-location">Himachal Pradesh, India</p>
              <div className="envelope__card-ornament envelope__card-ornament--bottom">? ? ?</div>
            </div>
          </div>

          {/* Envelope body (front) */}
          <div className="envelope__body">
            {/* Envelope flap (triangle lid) */}
            <div className="envelope__flap"></div>

            {/* Envelope front face */}
            <div className="envelope__front"></div>
          </div>

          {/* Wax seal — click target */}
          <button
            className={`envelope__seal ${opened ? 'envelope__seal--broken' : ''}`}
            onClick={handleClick}
            aria-label="Open invitation"
          >
            <div className="envelope__seal-inner">
              <span className="envelope__seal-monogram">D &amp; T</span>
            </div>
          </button>
        </div>

        <p className={`envelope-screen__hint ${opened ? 'envelope-screen__hint--hidden' : ''}`}>
          Tap the seal to open
        </p>
      </div>
    </div>
  );
}

export default Envelope;

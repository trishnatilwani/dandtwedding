import { useState, useEffect } from 'react';

function Hero() {
  const weddingDate = new Date('2026-04-20T12:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <p className="hero__subtitle">We're Getting Married</p>
        <h1 className="hero__title">
          <span className="hero__name">Trishna</span>
          <span className="hero__ampersand">&amp;</span>
          <span className="hero__name">Deep</span>
        </h1>
        <div className="hero__date">
          <span className="hero__date-line"></span>
          <span>20th - 21st April 2026</span>
          <span className="hero__date-line"></span>
        </div>
        <p className="hero__venue-text">Deventures Shimla Hills, Himachal Pradesh</p>

        <div className="countdown">
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.days}</span>
            <span className="countdown__label">Days</span>
          </div>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.hours}</span>
            <span className="countdown__label">Hours</span>
          </div>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.minutes}</span>
            <span className="countdown__label">Minutes</span>
          </div>
          <div className="countdown__item">
            <span className="countdown__number">{timeLeft.seconds}</span>
            <span className="countdown__label">Seconds</span>
          </div>
        </div>

      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;

function Events() {
  const events = [
    {
      icon: '??',
      title: 'Welcome Lunch',
      date: 'April 20, 2026',
      time: '12:00 PM onwards',
      venue: 'Deventures Shimla Hills',
      description: 'Join us for the beautiful Mehendi celebration with music, colors, and joy.',
    },
    {
      icon: '??',
      title: 'Sangeet Night',
      date: 'April 20, 2026',
      time: '7:00 PM onwards',
      venue: 'Deventures Shimla Hills',
      description: 'An evening of dance, music, and celebration as we prepare for the big day.',
    },
    {
      icon: '??',
      title: 'Haldi',
      date: 'April 21, 2026',
      time: '9:00 AM onwards',
      venue: 'Deventures Shimla Hills',
      description: 'The moment we\'ve been waiting for — witness our union amidst the beautiful Shimla hills.',
      },
      {
          icon: '??',
          title: 'Shaadi',
          date: 'April 21, 2026',
          time: '5:00 PM onwards',
          venue: 'Deventures Shimla Hills',
          description: 'The moment we\'ve been waiting for — witness our union amidst the beautiful Shimla hills.',
      },
  ];

  return (
    <section id="events" className="events">
      <div className="events__container">
        <div className="section-header">
          <span className="section-header__label">Celebrations</span>
          <h2 className="section-header__title">Wedding Events</h2>
          <div className="section-header__divider">
            <span className="section-header__line"></span>
            <span className="section-header__heart">?</span>
            <span className="section-header__line"></span>
          </div>
        </div>

        <div className="events__grid">
          {events.map((event, index) => (
            <div className="events__card" key={index}>
              <div className="events__card-icon">{event.icon}</div>
              <h3 className="events__card-title">{event.title}</h3>
              <div className="events__card-date">{event.date}</div>
              <div className="events__card-time">{event.time}</div>
              <div className="events__card-venue">{event.venue}</div>
              <p className="events__card-desc">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

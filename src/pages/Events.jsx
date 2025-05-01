import { FaMapMarkerAlt } from 'react-icons/fa';

export const EventsPage = () => {
  // Fake sample events
  const events = [
    {
      _id: '1',
      title: 'Puppy Adoption Day',
      date: '2025-06-15T00:00:00',
      time: '2:00 PM',
      location: 'Downtown Park',
      description:
        'Bring the family and meet our adorable puppies looking for forever homes. Live music, refreshments, and instant meet-and-greets!',
      link: '#',
    },
    {
      _id: '2',
      title: 'Cat Cuddle Night',
      date: '2025-07-20T00:00:00',
      time: '6:00 PM',
      location: 'Rescue Shelter Lobby',
      description:
        'Relax with our sweetest cats. Light snacks and cozy blankets provided—perfect for cat lovers of all ages.',
      link: '#',
    },
    {
      _id: '3',
      title: 'Volunteer Orientation',
      date: '2025-08-05T00:00:00',
      time: '10:00 AM',
      location: 'One At A Time Rescue HQ',
      description:
        'Learn how to foster, transport, and care for our animals. All new volunteers welcome! Coffee and donuts on us.',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: '#073242' }}
      >
        <h1 className="display-4 section-title text-white">Events</h1>
        <p className="lead text-white">
          Check out what’s coming up—and join us!
        </p>
      </section>

      {/* Events List */}
      <section className="py-5" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container">
          {events.map((event) => {
            const dateObj = new Date(event.date);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('default', { month: 'short' });
            return (
              <div
                className="row mb-5 align-items-center"
                key={event._id}
              >
                {/* Date Badge */}
                <div className="col-sm-2 text-center">
                  <div
                    className="event-date-box p-3 rounded"
                    style={{ backgroundColor: '#FCB531' }}
                  >
                    <div
                      className="event-date-day"
                      style={{ fontSize: '2.5rem', color: '#073242' }}
                    >
                      {day}
                    </div>
                    <div
                      className="event-date-month"
                      style={{ color: '#073242', textTransform: 'uppercase' }}
                    >
                      {month}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="col-sm-10">
                  <h3 className="event-title mb-1">{event.title}</h3>
                  <p className="text-muted mb-2">
                    <FaMapMarkerAlt className="me-1" />
                    {event.location} &bull; {dateObj.toLocaleDateString()} @ {event.time}
                  </p>
                  <p className="event-desc mb-3">{event.description}</p>
                  <a
                    href={event.link}
                    className="btn btn-event px-4 py-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
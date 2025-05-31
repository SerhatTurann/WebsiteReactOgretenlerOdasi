// src/components/pages/Event.jsx
import { Link } from "react-router-dom";
import event1Image from "../../assets/image_1.jpg";
import event2Image from "../../assets/image_2.jpg";
import event3Image from "../../assets/image_3.jpg";
import "../../Css/Event.css";

const events = [
  {
    id: 1,
    image: event1Image,
    title: "Öğretenler Odası Lansmanı",
    description: "Öğretenler Odası dergimizin tanıtım gecesinde davetlilerimizle buluşuyoruz.",
  },
];

const Event = () => {
  return (
    <div className="event-page">
      <h1 className="event-page-title">Etkinlikler</h1>
      <div className="event-card-container">
        {events.map((event) => (
          <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
            <div className="event-card">
              <img src={event.image} alt={event.title} className="event-card-image" />
              <div className="event-card-content">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <span className="read-more">Devamını Oku →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;

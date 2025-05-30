// src/components/pages/EventDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import event1Image from "../../assets/image_1.jpg";
import event2Image from "../../assets/image_2.jpg";
import event3Image from "../../assets/image_3.jpg";
import "../../Css/EventDetail.css";

const events = [
  {
    id: 1,
    image: event1Image,
    title: "Öğretenler Odası Lansmanı",
    description: "Öğretenler Odası dergimizin tanıtım gecesinde davetlilerimizle buluşuyoruz.",
    content:
      "Öğretenler Odası dergimizin tanıtım gecesinde davetlilerimizle buluşuyoruz.",
    date: "11 Haziran 2025",
    location: "Ergün Koç Kültür Merkezi",
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <div className="event-container">Etkinlik bulunamadı.</div>;
  }

  return (
    <div className="event-detail-page">
      <h1 className="event-detail-title">{event.title}</h1>
      <div className="event-detail-container">
        <img src={event.image} alt={event.title} className="event-detail-image" />
        <div className="event-detail-content">
          <p><strong>Tarih:</strong> {event.date}</p>
          <p><strong>Yer:</strong> {event.location}</p>
          <p>{event.content}</p>
        </div>
      </div>

      <div className="event-detail-back">
        <button className="back-button" onClick={() => navigate("/event")}>
          ← Geri Dön
        </button>
      </div>
    </div>
  );
};

export default EventDetail;

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
    title: "Sanat ve Kültür Buluşması",
    description: "Sanatseverler için düzenlenen bu etkinlikte ünlü sanatçılarla söyleşi yapılacak.",
    content:
      "Bu etkinlikte sanatçılarla birebir söyleşi, atölye çalışmaları ve performanslar olacak. Kültürün her alanından isimlerle tanışma fırsatı sunulacak.",
    date: "15 Mayıs 2025",
    location: "İstanbul Modern Sanat Müzesi",
  },
  {
    id: 2,
    image: event2Image,
    title: "Teknoloji Zirvesi 2025",
    description: "Yapay zeka, blockchain ve geleceğin teknolojileri hakkında uzmanlarla buluşma fırsatı.",
    content:
      "Zirvede, yapay zekanın geleceği, blockchain uygulamaları ve metaverse gibi teknolojiler ele alınacak. Girişimciler için networking fırsatları sunulacak.",
    date: "20 Haziran 2025",
    location: "İTÜ Süleyman Demirel Kültür Merkezi",
  },
  {
    id: 3,
    image: event3Image,
    title: "Kitap ve Edebiyat Festivali",
    description: "Yazarlarla imza günü, paneller ve söyleşilerin olduğu eşsiz bir edebiyat festivali.",
    content:
      "Festival boyunca edebiyat dünyasından önemli yazarlar ve eleştirmenlerle paneller, atölyeler ve imza günleri düzenlenecek.",
    date: "1 Temmuz 2025",
    location: "Kadıköy Belediyesi Kültür Merkezi",
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
          <p><strong>Kısa Açıklama:</strong> {event.description}</p>
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

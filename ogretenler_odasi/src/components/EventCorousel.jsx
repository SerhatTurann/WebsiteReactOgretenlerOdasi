import { useNavigate } from "react-router-dom";
import "../Css/EventCarousel.css";
import event1Image from "../assets/image_1.jpg";
import event2Image from "../assets/image_2.jpg";
import event3Image from "../assets/image_3.jpg";
import { useState, useEffect } from "react";

const events = [
  {
    id: 1,
    image: event1Image,
    title: "Sanat ve Kültür Buluşması",
  },
  {
    id: 2,
    image: event2Image,
    title: "Teknoloji Zirvesi 2025",
  },
  {
    id: 3,
    image: event3Image,
    title: "Kitap ve Edebiyat Festivali",
  },
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="event-carousel-wrapper">
      <div className="event-carousel-header">
        <h2 className="event-carousel-title">Etkinlikler</h2>
        <div className="event-carousel-line"></div>
      </div>

      <div className="event-carousel-container">
        <div
          className="event-carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="event-carousel-item"
              onClick={() => navigate(`/event/${event.id}`)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="event-carousel-image"
              />
              <div className="event-title-overlay">
                {event.title}
              </div>
            </div>
          ))}
        </div>
        <button className="event-carousel-prev" onClick={prevImage}>
          &#10094;
        </button>
        <button className="event-carousel-next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;

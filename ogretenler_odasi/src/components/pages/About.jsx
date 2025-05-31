import React, { useEffect, useState } from "react";
import "../../Css/About.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/aboutData.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Veri yüklenirken hata oluştu");
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  const { aboutText, vision, mission, team } = aboutData;

  return (
    <div className="about-container">
      {/* Hakkımızda */}
      <section className="about-section">
        <h2>Hakkımızda</h2>
        <p>{aboutText}</p>
      </section>

      {/* Vizyon */}
      <div className="vision-mission">
        <div className="vision">
          <h3>{vision.title}</h3>
          <p>{vision.text}</p>
        </div>
        <img src={vision.image} alt="Vizyon" className="vision-mission-image vision-image" />
      </div>

      {/* Yönetim Kadrosu */}
      <section className="team-section">
        <h3>Yönetim Kadrosu</h3>
        <div className="team-cards">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.title} className="team-photo" />
              <h4>{member.title}</h4>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

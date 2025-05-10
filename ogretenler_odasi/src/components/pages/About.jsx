import "../../Css/About.css";
import visionImage from "../../assets/image_1.jpg";
import missionImage from "../../assets/image_1.jpg";

// Yönetici Fotoğrafları
import directorImg from "../../assets/image_1.jpg";
import editorImg from "../../assets/image_1.jpg";
import graphicDesignerImg from "../../assets/image_1.jpg";
import artDirectorImg from "../../assets/image_1.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hakkımızda Bölümü */}
      <section className="about-section">
        <h2>Hakkımızda</h2>
        <p>
          Biz, kaliteli içerik üretmeyi ve okurlarımıza en iyi deneyimi sunmayı amaçlayan yenilikçi bir ekibiz.
          Deneyimli yazarlarımız ve tasarımcılarımızla, her zaman özgün ve etkileyici yayınlar üretmeyi hedefliyoruz.
        </p>
      </section>

      {/* Vizyonumuz */}
      <div className="vision-mission">
        <div className="vision">
          <h3>Vizyonumuz</h3>
          <p>
            Yayıncılık dünyasında öncü olmak ve en güncel, yaratıcı içerikleri okurlarımıza sunmak.
          </p>
        </div>
        <img src={visionImage} alt="Vizyon" className="vision-mission-image vision-image" />
      </div>

      {/* Misyonumuz */}
      <div className="vision-mission">
        <img src={missionImage} alt="Misyon" className="vision-mission-image mission-image" />
        <div className="mission">
          <h3>Misyonumuz</h3>
          <p>
            Okuyucularımıza kaliteli içerik sağlamak, görsel estetiği ön planda tutarak bilgilendirici ve ilham verici yayınlar üretmek.
          </p>
        </div>
      </div>

      {/* Yönetim Kadrosu */}
      <section className="team-section">
        <h3>Yönetim Kadrosu</h3>
        <div className="team-cards">
          <div className="team-card">
            <img src={directorImg} alt="Yayın Direktörü" className="team-photo" />
            <h4>Yayın Direktörü</h4>
            <p>Ahmet Yılmaz</p>
          </div>
          <div className="team-card">
            <img src={editorImg} alt="Editör" className="team-photo" />
            <h4>Editör</h4>
            <p>Zeynep Kaya</p>
          </div>
          <div className="team-card">
            <img src={graphicDesignerImg} alt="Grafik Yönetmeni" className="team-photo" />
            <h4>Grafik Yönetmeni</h4>
            <p>Mehmet Demir</p>
          </div>
          <div className="team-card">
            <img src={artDirectorImg} alt="Sanat Yönetmeni" className="team-photo" />
            <h4>Sanat Yönetmeni</h4>
            <p>Elif Öz</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

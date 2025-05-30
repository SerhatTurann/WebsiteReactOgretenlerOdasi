import "../../Css/About.css";
import visionImage from "/assets/image_4.jpg";
import missionImage from "/assets/image_5.jpg";

// Yönetici Fotoğrafları
import directorImg from "/assets/image_1.jpg";
import editorImg from "/assets/nurseda.jpg";
import graphicDesignerImg from "/assets/miray.jpg";
import artDirectorImg from "/assets/sevilay.jpg";

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

      <div className="vision-mission">
        <div className="vision">
          <h3>Vizyonumuz</h3>
          <p>
            Öğrenmeyenlerin öğretme arzusuyla yanıp tutuştuğu, bu eşsiz bilmeden bildirme (had bilmeden had bildirenler) döneminde  neden böyle bir işe giriştiğimizi inanın biz de hiç bilmiyoruz. Şunu biliyoruz ki hiç böyle bir ulvi amaç gütmeden, izninize sığınarak, bir paylaşım kapısında buluşmak, naçizane düşlerimizi, düşlenenleri, zamanın kıyısındaki kalıntıları, zamanın dalgasında yüzenleri, beşeri olanı beşer kalarak siz sevgili okuyucularımızla paylaşmak istiyoruz.
          </p>
        </div>
        <img src={visionImage} alt="Vizyon" className="vision-mission-image vision-image" />
      </div>

      {/* Yönetim Kadrosu */}
      <section className="team-section">
        <h3>Yönetim Kadrosu</h3>
        <div className="team-cards">
          <div className="team-card">
            <img src={directorImg} alt="Yayın Direktörü" className="team-photo" />
            <h4>Genel Yayın Yönetmeni</h4>
            <p>Tuğba Karabacak</p>
          </div>
          <div className="team-card">
            <img src={editorImg} alt="Editör" className="team-photo" />
            <h4>Editör</h4>
            <p>Nurseda Okay</p>
          </div>
          <div className="team-card">
            <img src={graphicDesignerImg} alt="Grafik Yönetmeni" className="team-photo" />
            <h4>Grafik Tasarımcı - Video Editörü</h4>
            <p>Miray Ökçe</p>
          </div>
          <div className="team-card">
            <img src={artDirectorImg} alt="Sanat Yönetmeni" className="team-photo" />
            <h4>Sanat Danışmanı - İllüstratör</h4>
            <p>Sevilay Ökçe</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

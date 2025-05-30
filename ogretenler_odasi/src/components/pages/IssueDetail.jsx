import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Css/IssueDetail.css";
import TopicCard from "../TopicCard";
import TabButtons from "../TabButtons";
import ImageModal from "../ImageModal";

const IssueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issue, setIssue] = useState(null);
  const [activeTab, setActiveTab] = useState("articles");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/issues.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setIssue(found);
      })
      .catch((err) => console.error("Veri alınamadı", err));
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  if (!issue) {
    return (
      <div className="issue-detail-container">
        <h2>Konu başlığı bulunamadı!</h2>
        <button onClick={() => navigate(-1)} className="back-button">Geri Dön</button>
      </div>
    );
  }

  const tabs = [
    { key: "articles", label: "Yazılar" },
    { key: "illustrations", label: "İllüstrasyonlar" },
  ];

  return (
    <div className="issue-detail-container">
      <h2>{issue.title}</h2>

      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      {activeTab === "articles" && (
        <div className="topics-container">
          {issue.topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}

      {activeTab === "illustrations" && (
        <div className="illustrations-container">
          {issue.topics.map((topic) => (
            <div
              key={topic.id}
              className="illustration-card"
              onClick={() => setSelectedImage(topic.image)}
            >
              <img src={topic.image} alt={topic.title} className="illustration-image" />
            </div>
          ))}
        </div>
      )}

      <button onClick={() => navigate(-1)} className="back-button">Geri Dön</button>

      {selectedImage && (
        <ImageModal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default IssueDetail;

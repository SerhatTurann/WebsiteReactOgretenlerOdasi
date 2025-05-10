import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../Css/IssueDetail.css";

const IssueDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issue, setIssue] = useState(null);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/issues.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setIssue(found);
      })
      .catch((err) => console.error("Veri alınamadı", err));
  }, [id]);

  if (!issue) {
    return (
      <div className="issue-detail-container">
        <h2>Konu başlığı bulunamadı!</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Geri Dön
        </button>
      </div>
    );
  }

  const handleRating = (topicId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [topicId]: rating,
    }));
  };

  return (
    <div className="issue-detail-container">
      <h2>{issue.title}</h2>
      <div className="topics-container">
        {issue.topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <img src={topic.image} alt={topic.title} className="topic-image" />
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
            <div className="author-info">
              <Link to={`/author/${topic.authorId}`}>
                <img
                  src={topic.authorImage}
                  alt={topic.author}
                  className="author-image"
                />
                <span className="author-name">{topic.author}</span>
              </Link>
            </div>
            
            
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className="back-button">
        Geri Dön
      </button>
    </div>
  );
};

export default IssueDetail;

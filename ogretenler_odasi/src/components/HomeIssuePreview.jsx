// src/components/HomeIssuePreview.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/HomeIssuePreview.css";

const HomeIssuePreview = () => {
  const [issues, setIssues] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/issues.json`)
      .then((res) => res.json())
      .then((data) => setIssues(data.slice(0, 6))) // sadece ilk 5 sayıyı al
      .catch((err) => console.error("Veri alınamadı", err));
  }, []);

  return (
    <div className="home-issue-preview-container">
      <div className="home-issue-header">
        <h2>Yeni Sayılar</h2>
        <div className="home-issue-line"></div>
      </div>
      <div className="home-issue-cards">
        {issues.map((issue) => (
          <Link
            to={`/issue/${issue.id}`}
            key={issue.id}
            className="home-issue-card"
            style={{
              backgroundImage: `url(${
                hoveredId === issue.id ? issue.hoverImg : issue.defaultImg
              })`,
            }}
            onMouseEnter={() => setHoveredId(issue.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeIssuePreview;

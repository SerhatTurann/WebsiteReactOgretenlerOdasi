import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Issue.css";

const Issue = () => {
  const [issues, setIssues] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/issues.json`)
      .then((res) => res.json())
      .then((data) => setIssues(data))
      .catch((err) => console.error("Veri alınamadı", err));
  }, []);

  return (
    <div className="issue-container">
      <h2>Sayılar</h2>
      <div className="issue-cards">
        {issues.map((issue) => (
          <Link
            to={`/issue/${issue.id}`}
            key={issue.id}
            className="issue-card"
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

export default Issue;

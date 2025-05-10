import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../Css/HomeIssuePreview.css";

const HomeIssuePreview = () => {
  const [issues, setIssues] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const updateVisibleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width < 600) {
      setVisibleCount(2);
    } else if (width < 960) {
      setVisibleCount(3);
    }
      else if (width < 1200) {
      setVisibleCount(4);
    } else if(width < 1500){
      setVisibleCount(5);
    }else{
      setVisibleCount(6)
    }
  }, []);

  useEffect(() => {
    updateVisibleCount(); // ilk başta çalıştır
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [updateVisibleCount]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/issues.json`)
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((issue) => ({
          ...issue,
          defaultImg: `${issue.defaultImg}`,
          hoverImg: `${issue.hoverImg}`,
        }));
        setIssues(updatedData);
      })
      .catch((err) => console.error("Veri alınamadı", err));
  }, []);

  return (
    <div className="home-issue-preview-container">
      <div className="home-issue-header">
        <h2>Yeni Sayılar</h2>
        <div className="home-issue-line"></div>
      </div>
      <div className="home-issue-cards">
        {issues.slice(0, visibleCount).map((issue) => (
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

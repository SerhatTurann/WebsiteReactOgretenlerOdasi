import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../Css/HomeIssuePreview.css";

const HomeIssuePreview = () => {
  const [issues, setIssues] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [startIndex, setStartIndex] = useState(0);

  const updateVisibleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width < 600) setVisibleCount(2);
    else if (width < 960) setVisibleCount(3);
    else if (width < 1200) setVisibleCount(4);
    else if (width < 1500) setVisibleCount(5);
    else setVisibleCount(6);
  }, []);

  useEffect(() => {
    updateVisibleCount();
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

  const handleNext = () => {
    if (startIndex + visibleCount < issues.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    } else {
      setStartIndex(0);
    }
  };

  const visibleIssues = issues.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="home-issue-preview-container">
      <div className="home-issue-header">
        <h2>Yeni Sayılar</h2>
        <div className="home-issue-line"></div>
      </div>

      <div className="home-issue-nav">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          ◀
        </button>
        <div className="home-issue-cards">
          {visibleIssues.map((issue) => (
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
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= issues.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default HomeIssuePreview;

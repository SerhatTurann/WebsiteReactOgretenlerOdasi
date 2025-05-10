import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../Css/Author.css";




const Author = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authorId = parseInt(id);
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorAndArticles = async () => {
      try {
        const [authorRes, issuesRes] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/authors.json`),
          fetch(`${import.meta.env.BASE_URL}data/issues.json`)
        ]);

        const authorsData = await authorRes.json();
        const issuesData = await issuesRes.json();

        const foundAuthor = authorsData.find((a) => a.id === authorId);
        const foundArticles = issuesData
          .flatMap((issue) => issue.topics)
          .filter((topic) => topic.authorId === authorId);

        setAuthor(foundAuthor);
        setArticles(foundArticles);
      } catch (error) {
        console.error("Veri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorAndArticles();
  }, [authorId]);

  const handleRating = (rating) => {
    setUserRating(rating);
  };

  if (loading) {
    return <div className="author-container"><h2>Yükleniyor...</h2></div>;
  }

  if (!author) {
    return <div className="author-container"><h2>Yazar Bulunamadı</h2></div>;
  }

  const averageRating = articles.length > 0
    ? (
        articles.reduce((acc, curr) => acc + curr.rating, 0) / articles.length
      ).toFixed(1)
    : "Puan yok";

  return (
    <div className="author-container">
      <div className="author-header">
        <img src={author.image} alt={author.name} className="author-photo" />
        <div className="author-info">
          <h2>{author.name}</h2>
          <p className="author-bio">{author.bio}</p>
        </div>
      </div>

      <h3>Yazıları</h3>
      <div className="author-articles">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h4>{article.title}</h4>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
      

      {/* Geri Dön Butonu */}
      <button onClick={() => navigate(-1)} className="back-button">← Geri Dön</button>
    </div>
    
  );
};

export default Author;

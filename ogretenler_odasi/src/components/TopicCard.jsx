// components/TopicCard.jsx
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => (
  <div className="topic-card">
    <img src={topic.image} alt={topic.title} className="topic-image" />
    <h3>{topic.title}</h3>
    <p>{topic.summary}</p>
    <div className="author-info">
      <Link to={`/author/${topic.authorId}`}>
        <span className="author-name">{topic.author}</span>
      </Link>
    </div>
  </div>
);

export default TopicCard;

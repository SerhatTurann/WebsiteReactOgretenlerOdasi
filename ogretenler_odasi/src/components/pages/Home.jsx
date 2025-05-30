// src/components/pages/Home.jsx
import Carousel from "../Carousel";
import EventCarousel from "../EventCorousel";
import HomeIssuePreview from "../HomeIssuePreview";
//import "../../Css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <HomeIssuePreview/>
      <EventCarousel />
    </div>
  );
};

export default Home;

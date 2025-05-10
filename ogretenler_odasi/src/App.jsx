// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Issue from "./components/pages/Issue";
import IssueDetail from "./components/pages/IssueDetail";
import Event from "./components/pages/Event";
import EventDetail from "./components/pages/EventDetail";
import Contact from "./components/pages/Contact";
import Stores from "./components/pages/Stores";
import Author from "./components/pages/Author";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/author/:id" element={<Author />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

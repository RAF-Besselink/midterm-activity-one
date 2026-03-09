import {useState, useEffect} from "react";
import "./HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="home-title">Welcome to Student Dashboard</h2>
        <p className="home-text">
          This app demonstrates <strong>React Router</strong>, <strong>useState</strong>, and <strong>useEffect</strong>.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
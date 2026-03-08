import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      
      <div className="hero-section">
        <h1>COVID-19 Analytics Dashboard</h1>

        <p>
          Track global COVID statistics including cases, deaths and recoveries
          with interactive charts.
        </p>

        <Link to="/dashboard">
          <button className="start-btn">View Dashboard</button>
        </Link>
      </div>
  
    </div>
  );
}

export default Home;

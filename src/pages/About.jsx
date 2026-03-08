import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      
      <h1>About This Project</h1>

      <p>
        The COVID-19 Dashboard is a web application that displays global COVID
        statistics such as total cases, deaths, and recoveries. The dashboard
        visualizes data using interactive charts for easier understanding of
        pandemic trends.
      </p>

      <div className="about-features">
        <div className="feature-card">
          <h3>Real-Time Data</h3>
          <p>
            Data is fetched from the disease.sh API to provide updated global
            COVID statistics.
          </p>
        </div>

        <div className="feature-card">
          <h3>Interactive Charts</h3>
          <p>
            Charts help visualize COVID statistics including cases, deaths and
            recoveries.
          </p>
        </div>

        <div className="feature-card">
          <h3>Modern Web Technologies</h3>
          <p>
            Built using React, Redux Toolkit, and Chart.js for a responsive and
            scalable dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

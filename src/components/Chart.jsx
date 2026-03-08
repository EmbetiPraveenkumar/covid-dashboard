import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function Chart({ cases, deaths, recovered }) {
  const data = {
    labels: ["Cases", "Deaths", "Recovered"],
    datasets: [
      {
        label: "COVID Statistics",
        data: [cases, deaths, recovered],
        backgroundColor: ["#2563eb", "#dc2626", "#16a34a"],
      },
    ],
  };

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <Bar data={data} />
    </div>
  );
}

export default Chart;

import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCovidData } from "../redux/CovidSlice";

import Header from "./Header";
import StatCard from "./StatCard";
import Chart from "./Chart";



import "../styles/Dashboard.css";

function Dashboard() {
  const dispatch = useDispatch();
  const { data,loading } = useSelector((state) => state.covid);
 
  const [countrydetails,setCountrydata] = useState()

  const countrydata = async (country) => {
    if (!country) return
    const data = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
    const res = await data.json()
    setCountrydata(res)
  }

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  if(loading) return (
    <h3
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      loading...
    </h3>
  );
const displaydetails = countrydetails || data

  return (
    <div className="dashboard-container">

      <Header countrydata={countrydata} countrydetails={countrydetails} />

      {displaydetails && (
        <>
          <div className="stats-container">
            <StatCard title="📊 Total Cases" value={displaydetails.cases} />
            <StatCard title="💀 Deaths" value={displaydetails.deaths} />
            <StatCard title="💚 Recovered" value={displaydetails.recovered} />
          </div>

          <div className="chart-container">
            <Chart
              cases={displaydetails.cases}
              deaths={displaydetails.deaths}
              recovered={displaydetails.recovered}
            />
          </div>

        </>
      )}
    </div>
  );
}

export default Dashboard;

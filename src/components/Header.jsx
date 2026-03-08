import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import virus from "../assets/images/virus.png";
function Header({ countrydata ,countrydetails}) {
  const [selectcountry, setselectcountry] = useState("");
  const [countryname, setCountryname] = useState([]);
  
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await res.json();
      setCountryname(data);
    };

    fetchCountries();
  }, []);

  const handle = (e) => {
    const country = e.target.value;
    setselectcountry(country)
    countrydata(country)
  }

  return (
    <div className="header">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <img src={virus} alt="covid" width="30" />
        Global COVID-19 Dashboard
      </h1>
      <div className="country-select-container">
        <select
          value={selectcountry}
          onChange={handle}
          className="country-select"
          style={{ padding: "8px", marginTop: "10px" }}
        >
          <option value="">Select Country</option>

          {countryname.map((country) => (
            <option key={country.country} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img src={countrydetails?.countryInfo?.flag} alt="" width="30" />
          <p>Selected Country: {selectcountry}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

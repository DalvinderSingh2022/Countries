import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";

function Container() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    async function allCountriesData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        const data = [];
        result.forEach((country) => data.push(country.region));
        setRegions(
          data.filter((region, index) => data.indexOf(region) === index)
        );
      } catch (error) {
        console.error(error);
      }
    }
    allCountriesData();
  }, []);

  return (
    <>
      {regions.map((region, index) => {
        return <CardSection region={region} key={index} />;
      })}
    </>
  );
}

export default Container;

import React, { useEffect, useState } from "react";
import CardSection from "./CardSection";
import Section from "./Section";

function Container() {
  const [countries, setCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    async function allCountriesData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        const data = [];
        result.forEach((country) => data.push(country.region));
        setCountries(result);
        setRegions(data.filter((region, index) => data.indexOf(region) === index));
      } catch (error) {
        console.error(error);
      }
    }
    allCountriesData();
  }, []);

  useEffect(() => {
    const result = countries.filter((a) =>
      a.name.common.toLowerCase().replaceAll(" ", "").includes(search.toLowerCase().replaceAll(" ", ""))
    );
    (result.length > 0 && result.length < countries.length) ? setSearchResult(result) : setSearchResult([]);
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter country name..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchResult.length > 0 && <Section region={"Search"} countries={searchResult} />}
      {regions.length ?
        <>
          {regions.map(region => {
            return <CardSection region={region} key={region} />;
          })}
        </>
        : <div className="loading"><i></i><i></i><i></i></div>
      }
    </>
  );
}

export default Container;
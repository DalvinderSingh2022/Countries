import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardSection = ({ region }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function countryByRegion(region) {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        console.error(error);
      }
    }
    countryByRegion(region);
  }, []);

  const scrollEvent = (e) => {
    const parent = e.target.parentElement.parentElement.nextElementSibling;
    const card = parent.querySelector(".card");
    const width =
      (parent.clientWidth / card ? card.clientWidth : 1) *
      (card ? card.clientWidth : 1);

    e.target.classList.contains("fa-arrow-left")
      ? parent.scrollBy(-width, 0)
      : parent.scrollBy(width, 0);
  };

  return (
    <section>
      <div className="header">
        <p className="region-name">{region}</p>
        <div className="arrows">
          <button
            className="fa-solid fa-arrow-left"
            onClick={scrollEvent}
          ></button>
          <button
            className="fa-solid fa-arrow-right"
            onClick={scrollEvent}
          ></button>
        </div>
      </div>
      <div className="cards">
        {countries.map((country, index) => {
          return <Card countryApi={country} key={index} />;
        })}
      </div>
    </section>
  );
};

export default CardSection;

import React, { createContext, useState } from "react";
import Container from "./components/Container";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const select = (name) => setSelectedCountry(name);

  return (
    <AppContext.Provider value={{ select, country: selectedCountry }}>
      {selectedCountry?.name?.common ? <CountryInfo /> : <Container />}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
export default App;
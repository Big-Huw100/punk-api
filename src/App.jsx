import React, { useState, useEffect } from 'react';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";


const App = () => {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const jsonResponse = await response.json();
        setBeers(jsonResponse);
      } catch (error) {
        console.error(error);
      }
    }
    getBeers();
  }, []);

  const getBeerCard = (beer) => (
    <BeerCard key={beer.id} beer={beer} />
  );

  const [searchInput, setSearchInput] = useState("");
  const [highAbv, setHighAbv] = useState(false);
  const [beerAge, setBeerAge] = useState(false);
  const [acidity, setAcidity] = useState(false); 

  const filteredData = beers.filter((beer) => {
    const nameMatches = beer.name.toLowerCase().includes(searchInput.toLowerCase());
    const abvMatches = !highAbv || beer.abv >= 6.0;
    const ageMatches = !beerAge || beer.first_brewed < 2011;
    const acidityMatches = !acidity || beer.ph >= 4; 
    return nameMatches && abvMatches && ageMatches && acidityMatches;
  });

  return (
    <>
      <main className={styles.App}>
        <NavBar setSearchInput={setSearchInput} setHighAbv={setHighAbv} highAbv={highAbv} beerAge={beerAge} setBeerAge={setBeerAge} acidity={acidity} setAcidity={setAcidity} />
        <section className={styles.content}>
        {filteredData.map(getBeerCard)}
        </section>
      </main>
    </>
  );
}

export default App;



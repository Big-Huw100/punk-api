import React, { useState, useEffect } from 'react';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";


const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [highAbv, setHighAbv] = useState(false);
  const [beerAge, setBeerAge] = useState(false);
  const [acidity, setAcidity] = useState(false); 

  const cleanBeer = (beer) => {
    const beerAgeArr = [];
    Object.keys(beer).forEach(key => {
      if(key.includes("first_brewed") && beer[key]) {
        const year = parseInt(beer[key].split("/")[1]);
        beerAgeArr.push(year);
      }
    });
  
    console.log(beerAgeArr);
  
    return {
      beerAge: beerAgeArr.length > 0 ? beerAgeArr[0] : null,
      ...beer
    }
  }
  

  useEffect(() => {
    const fetchBeers = () => {
      fetch("https://api.punkapi.com/v2/beers")
        .then((res) => res.json())
        .then((jsonResponse) => {
          const cleanedBeers = jsonResponse.map(cleanBeer);
          console.log(cleanedBeers);
          setBeers(cleanedBeers);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    fetchBeers();
  
  }, []);
  
  

  const getBeerCard = (beer) => (
    <BeerCard key={beer.id} beer={beer} />
  );

  const filteredData = beers.filter((beer) => {
    const nameMatches = beer.name.toLowerCase().includes(searchInput.toLowerCase());
    const abvMatches = !highAbv || beer.abv >= 6.0;
    const ageMatches = !beerAge || beer.beerAge <= 2010;
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



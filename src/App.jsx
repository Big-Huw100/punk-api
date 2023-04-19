import React, { useState } from 'react';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";
import data from "../src/data/beers"

const App = () => {

  const getBeerCard = (beer) => (
    <BeerCard key={beer.id} beer={beer} />
  );

  const [searchInput, setSearchInput] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <main className={styles.App}>
        <NavBar setSearchInput={setSearchInput} />
        <section className={styles.content}>
          {filteredData.map(getBeerCard)}
        </section>
      </main>
    </>
  );
}

export default App;

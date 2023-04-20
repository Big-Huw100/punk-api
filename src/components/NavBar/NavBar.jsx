import React from 'react'
import styles from "./NavBar.module.scss"
import SearchBar from '../SearchBar/SearchBar'

const NavBar = ({ setSearchInput, highAbv, setHighAbv, beerAge, setBeerAge, acidity, setAcidity }) => {

  const handleABVCheckboxChange = (event) => {
    setHighAbv(event.target.checked);
  };

  const handleBeerAgeCheckboxChange = (event) => {
    setBeerAge(event.target.checked);
  };

  const handleAcidityCheckboxChange = (event) => {
    setAcidity(event.target.checked);
  };

  return (
    <div className={styles.NavBar}>
      <div className={styles.searchBar}>
        <SearchBar setSearchInput={setSearchInput} />
      </div>
      <div className={styles.toggleSection}>
        <label>
          <input type="checkbox" checked={highAbv} onChange={handleABVCheckboxChange} />
          <h2>High ABV (6.0% or higher)</h2>
        </label>
        <label>
        <input type="checkbox" checked={beerAge} onChange={handleBeerAgeCheckboxChange} />
        <h2>Classic Range</h2>
        </label>
        <label>
        <input type="checkbox" checked={acidity} onChange={handleAcidityCheckboxChange} />
        <h2>Acidic (ph 4 or higher)</h2>
        </label>
      </div>
    </div>
  )
}

export default NavBar;


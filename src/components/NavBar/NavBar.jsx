import React from 'react'
import styles from "./NavBar.module.scss"
import SearchBar from '../SearchBar/SearchBar'

const NavBar = ({ setSearchInput }) => {

  return (
    <div className={styles.NavBar}>
      <div className={styles.searchBar}>
        <SearchBar setSearchInput={setSearchInput} />
      </div>
      <div className={styles.toggleSection}>
        <h2>High ABV (6.0% or higher)</h2>
        <h2>Classic Range</h2>
        <h2>Acidic (ph 4 or higher)</h2>
      </div>
    </div>
  )
}

export default NavBar;

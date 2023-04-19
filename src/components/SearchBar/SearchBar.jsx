import React from 'react';
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchInput }) => {
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={styles.searchBar}> 
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  )
};

export default SearchBar;

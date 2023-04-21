import React from 'react';
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {

const {
  image_url,
  name,
  tagline,
} = props.beer

  return (
    <div className={styles.BeerCard}>
      <h1>{name}</h1>
      <img src={image_url} alt="" />
      <p>{tagline}</p>
    </div>
  )
}

export default BeerCard

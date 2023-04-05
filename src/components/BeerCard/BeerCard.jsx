import React from 'react';
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {

const {
  image_url,
  name,
  description,
} = props.beer

  return (
    <div className={styles.BeerCard}>
      <img src={image_url} alt="" />
      <h1>{name}</h1>
      <p>{description.slice(0,100)}(...)</p>
    </div>
  )
}

export default BeerCard

import './App.module.scss';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";

import beers from './data/beers';

const App = () => {

  const getBeerCard = (beer) => (
    <BeerCard key={beer.id} beer={beer} />
  );

  return (
    <>
    <main className={styles.App}>
      <NavBar />
      <section className={styles.content}>
      {beers.map(getBeerCard)}
      </section>
    </main>
    </>
  );
}

export default App;

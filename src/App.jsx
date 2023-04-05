import './App.module.scss';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss";

import beers from './data/beers';

const App = () => {
  return (
    <>
    <main className={styles.App}>
      <NavBar />
      <BeerCard beer={beers[0]}/>
    </main>
    </>
  );
}

export default App;

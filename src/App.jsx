import './App.module.scss';
import BeerCard from './components/BeerCard';
import NavBar from "./components/NavBar";
import styles from "./App.module.scss"

const App = () => {
  return (
    <>
    <main className={styles.App}>
      <NavBar />
      <BeerCard />
    </main>
    </>
  );
}

export default App;

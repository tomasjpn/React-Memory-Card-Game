import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import { fetchPokemonList } from "./utils/pokemonAPI";

function App() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  // Daten aus der API aufzurufen
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonData = await fetchPokemonList(10); // Liste mit 10 Elementen
        setPokemon(pokemonData); // Die abgerufenen Daten werden in den State gespeichert
        setLoading(false); // Das Laden wird beendet
      } catch (error) {
        console.log("Fehler beim Abrugen der Pokemon Daten: ", error);
        setLoading(false);
      }
    }

    return () => fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>; //Ladeanzeige, bis die Daten aufgerufen sind
  }

  return (
    <>
      <div className="gameBoard">
        <div className="containerScoreBoard">
          <ScoreBoard score={score} streak={streak} />
        </div>
        <div className="containerCards">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;

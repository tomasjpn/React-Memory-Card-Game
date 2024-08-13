import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import { fetchPokemonList } from "./utils/pokemonAPI";

function App() {
  // States für den Spielstand
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // States für die Pokemons
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  // State für den Spielstart
  const [gameStarted, setGameStarted] = useState(false);

  // Funktion um das Spiel zu starten
  function startGame() {
    setGameStarted(true);
  }

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

  //Ladeanzeige, bis die Daten aufgerufen sind
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      {!gameStarted && (
        <div className="start-screen">
          <button className="start-btn" onClick={startGame}>
            Spiel starten
          </button>
        </div>
      )}
      {gameStarted && (
        <div className="gameBoard">
          <div className="containerScoreBoard">
            <ScoreBoard score={score} streak={streak} />
          </div>
          <div className="containerCards">
            <div className="cards">
              {pokemon.map((pokemon, index) => (
                <Card key={index} name={pokemon.name} url={pokemon.url} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

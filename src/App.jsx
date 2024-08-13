import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import { fetchPokemonList } from "./utils/pokemonAPI";
import ShuffleCards from "./utils/Shufflecards";

function App() {
  // States für den Spielstand
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // States für die Pokemons
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  // State für den Spielstart
  const [gameStarted, setGameStarted] = useState(false);

  // State für das Speichern der bereits ausgewählten Karten
  const [trackPokemon, setTrackPokemon] = useState([]);

  // State für das Speichern der umgedrehten Karten
  const [flippedCards, setFlippedCards] = useState([]);

  // Funktion um die ausgewählten Karten zu speichern
  function handleSelectedCard(selectedPokemonName) {
    // Wenn im State trackPokemon das ausgehwählte Pokemon vorhanden ist
    if (trackPokemon.includes(selectedPokemonName)) {
      // Wenn das letzte Score höher ist als die aktuelle Streak, dann wird akteulle Streak aktualisiert
      if (score > streak) {
        setStreak(score);
      }
      setScore(0); // Score wird zurückgesetzt
      setTrackPokemon([]); // Das Array zum Tracken der Pokemons wird zurückgesetzt
      setGameStarted(false); // Spiel starten Button taucht auf
      return;
    }
    setTrackPokemon((prev) => [...prev, selectedPokemonName]); // vorheriges Array + das neue Pokemon
    setScore(score + 1); // Score wird jedes Mal erhöht
    const shuffledCards = ShuffleCards(pokemon);
    setPokemon(shuffledCards);
  }

  // Funktion um das Spiel zu starten
  function startGame() {
    setGameStarted(true);
  }

  // Daten aus der API aufzurufen
  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonData = await fetchPokemonList(10); // Liste mit 10 Elementen
        const shuffledCards = ShuffleCards(pokemonData);
        setPokemon(shuffledCards); // Die abgerufenen Daten werden in den State gespeichert
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
              {pokemon.map((pokemon) => (
                <Card
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  onClick={() => handleSelectedCard(pokemon.name)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

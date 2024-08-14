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
  const [loading, setLoading] = useState(false);

  // State für den Spielstart
  const [gameStarted, setGameStarted] = useState(false);

  // State für das Speichern der bereits ausgewählten Karten
  const [trackPokemon, setTrackPokemon] = useState([]);

  // State für das Speichern der umgedrehten Karten
  const [flippedCards, setFlippedCards] = useState(true);

  // State für das Schwierigkeitsniveau
  const [difficulty, setDifficulty] = useState(null);

  // State um zu bestimmen, ob die Schwierigkeit gesetzt wurde
  const [difficultyTrue, setDifficultyTrue] = useState(false);

  // Funktion um die ausgewählten Karten zu speichern
  function handleSelectedCard(selectedPokemonName) {
    // Wenn im State trackPokemon das ausgehwählte Pokemon vorhanden ist
    if (trackPokemon.includes(selectedPokemonName)) {
      // Wenn das letzte Score höher ist als die aktuelle Streak, dann wird akteulle Streak aktualisiert
      if (score > streak) {
        setStreak(score);
      }
      setScore(0); // Score wird zurückgesetzt
      setTrackPokemon([]); // Alle Karten zurückdrehen
      setGameStarted(false); // Spiel starten Button taucht auf
      return;
    }

    // Karten für 500ms umdrehen, bevor das Array aktualisiert wird -> Ansonsten ungleichmäßige Animation
    setFlippedCards(false);

    setTimeout(() => {
      setTrackPokemon((prev) => [...prev, selectedPokemonName]); // vorheriges Array + das neue Pokemon
      setScore((prevScore) => prevScore + 1); // Score wird jedes Mal erhöht

      // Karten mischen
      const shuffledCards = ShuffleCards(pokemon);
      setPokemon(shuffledCards);

      setTimeout(() => {
        setFlippedCards(true); // Karten nach dem Mischen wieder anzeigen
      }, 500);
    }, 500);
  }

  // Funktion um das Spiel zu starten
  function startGame() {
    setGameStarted(true);
  }

  function handleDifficulty(difficultyLevel) {
    setDifficulty(difficultyLevel);
  }

  // Daten aus der API aufzurufen
  useEffect(() => {
    async function fetchPokemon() {
      if (difficulty === null) return; // Wenn kein Schwierigkeitsgrad ausgewählt worden ist, return

      try {
        let numberOfPokemon; // Variable für die Anzahl der Elementen
        switch (difficulty) {
          case "Einfach":
            numberOfPokemon = 10;
            break;
          case "Mittel":
            numberOfPokemon = 15;
            break;
          case "Schwer":
            numberOfPokemon = 25;
            break;
          default:
            numberOfPokemon = 10;
        }
        const pokemonData = await fetchPokemonList(numberOfPokemon); // Liste mit 10 Elementen
        const shuffledCards = ShuffleCards(pokemonData);
        setPokemon(shuffledCards); // Die abgerufenen Daten werden in den State gespeichert
        setLoading(false); // Das Laden wird beendet
        setDifficultyTrue(true);
      } catch (error) {
        console.log("Fehler beim Abrugen der Pokemon Daten: ", error);
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [difficulty]); // Wird nur ausgelöst, wenn es sich difficulty ändert

  //Ladeanzeige, bis die Daten aufgerufen sind
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      {/* Wenn Spiel gestartet = false -> Wird der Button angezeigt*/}
      {!gameStarted && (
        <div className="start-screen">
          <button className="start-btn" onClick={startGame}>
            Spiel starten
          </button>
        </div>
      )}
      {/* Wenn Spiel gestartet = true, aber difficulty = false -> Werden die Buttons für die Schwierigkeiten angezeigt*/}
      {gameStarted && !difficultyTrue && (
        <div className="select-difficulty">
          <button
            className="easyBtn"
            onClick={() => handleDifficulty("Einfach")}
          >
            Einfach
          </button>
          <button className="midBtn" onClick={() => handleDifficulty("Mittel")}>
            Mittel
          </button>
          <button
            className="hardBtn"
            onClick={() => handleDifficulty("Schwer")}
          >
            Schwer
          </button>
        </div>
      )}
      {/* Wenn die difficulty = True -> Werden die Karten angezeigt*/}
      {difficultyTrue && (
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
                  flipped={flippedCards}
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

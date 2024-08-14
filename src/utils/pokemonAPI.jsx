// Pokemon API

// Base-URL der Pokémon-API
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// Funktion zum Abrufen einer Liste von Pokémon
export async function fetchPokemonList(limit = 25) {
  try {
    // Sendet eine GET-Anfrage an die API, um eine Liste von Pokémon abzurufen
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}`);

    // Überprüft, ob die Antwort erfolgreich war
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Die API Antwort wird in JSON umgewandelt
    const apiData = await response.json();

    console.log(apiData.results);
    return apiData.results.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url,
    }));
  } catch (error) {
    console.log("Fehler beim Abrufen der Pokemon Liste: ", error);
    throw error;
  }
}

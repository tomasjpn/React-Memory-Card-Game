// Funktion zum Durchmischen der Karten
function ShuffleCards(cards) {
  const shuffled = [...cards]; // Zuerst die Kopie der Liste
  // iterriert rückwärts -> Ende bis Anfang
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Eine Zufällige Zahl wird generiert =
    const j = Math.floor(Math.random() * (i + 1));
    // Fisher–Yates shuffle
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default ShuffleCards;

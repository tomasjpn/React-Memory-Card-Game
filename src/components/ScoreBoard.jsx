// ScoreBoard das gerade den Spielstand anzeigt
function ScoreBoard({ score, streak }) {
  return (
    <div className="scoreBoard">
      <p>Score: {score}</p>
      <p>Score Streak: {streak}</p>
    </div>
  );
}

export default ScoreBoard;

// ScoreBoard das gerade den Spielstand anzeigt
function ScoreBoard({ score, streak }) {
  return (
    <div className="scoreBoard">
      <p id="scoreTxt">
        Score: <span>{score}</span>
      </p>
      <p id="streakTxt">
        Score Streak: <span>{streak}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;

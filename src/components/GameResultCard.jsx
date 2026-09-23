function GameResultCard({ game, onAdd, alreadyAdded }) {
  const platforms = game.platforms
    ? game.platforms.map((p) => p.platform.name).join(", ")
    : "Unknown";

  return (
    <article className="card">
      {game.background_image && (
        <img src={game.background_image} alt={game.name} className="game-cover" />
      )}
      <h3>{game.name}</h3>
      <p>Released: {game.released ?? "TBA"}</p>
      <p>Rating: {game.rating ? `${game.rating} / 5` : "N/A"}</p>
      <p className="platforms">{platforms}</p>
      <button onClick={() => onAdd(game)} disabled={alreadyAdded}>
        {alreadyAdded ? "In your backlog" : "+ Add to backlog"}
      </button>
    </article>
  );
}

export default GameResultCard;
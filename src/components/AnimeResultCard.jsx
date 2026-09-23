function AnimeResultCard({ anime, onAdd, alreadyAdded }) {
  const info = anime.attributes;
  const title = info.titles.en || info.canonicalTitle;
  const poster = info.posterImage ? info.posterImage.small : "";

  return (
    <article className="card">
      {poster && <img src={poster} alt={title} className="poster" />}
      <h3>{title}</h3>
      <p>Episodes: {info.episodeCount ?? "Unknown"}</p>
      <p>Rating: {info.averageRating ? `${info.averageRating}%` : "N/A"}</p>
      <button onClick={() => onAdd(anime)} disabled={alreadyAdded}>
        {alreadyAdded ? "In your backlog" : "+ Add to backlog"}
      </button>
    </article>
  );
}

export default AnimeResultCard;
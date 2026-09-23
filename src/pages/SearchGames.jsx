import { useState } from "react";
import GameResultCard from "../components/GameResultCard";

const API_KEY = import.meta.env.VITE_RAWG_KEY;

function SearchGames({ items, addItem }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();

    if (!API_KEY) {
      setError("Missing RAWG API key. Check your .env.local file.");
      return;
    }

    if (query.trim() === "") {
      setError("Type a game name to search.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(
        query.trim()
      )}&page_size=12`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const json = await response.json();
      setResults(json.results);
      setSearched(true);
    } catch (err) {
      console.error(err);
      setError("Couldn't reach the game database. Wait a few seconds and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleAdd(game) {
    const newGame = {
      id: Date.now(),
      rawgId: game.id,
      title: game.name,
      type: "game",
      status: "planned",
      progress: 0,
      total: null,
      rating: 0,
      platform: game.platforms?.[0]?.platform.name || "Unknown",
      image: game.background_image || "",
    };
    addItem(newGame);
  }

  return (
    <section>
      <h2>Search Games</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <label>
          Game title
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Elden Ring"
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Searching...</p>}
      {error && <p className="error">{error}</p>}
      {searched && !loading && !error && results.length === 0 && (
        <p>No games found for "{query}".</p>
      )}

      <div className="card-grid">
        {results.map((game) => (
          <GameResultCard
            key={game.id}
            game={game}
            onAdd={handleAdd}
            alreadyAdded={items.some((item) => item.rawgId === game.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchGames;
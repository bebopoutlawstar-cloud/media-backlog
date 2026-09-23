import { useState } from "react";
import AnimeResultCard from "../components/AnimeResultCard";

function SearchAnime({ items, addItem }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();

    if (query.trim() === "") {
      setError("Type an anime name to search.");
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const url = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(
        query.trim()
      )}&page[limit]=12`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const json = await response.json();
      setResults(json.data);
      setSearched(true);
    } catch (err) {
      console.error(err);
      setError(
        "Couldn't reach the anime database. Wait a few seconds and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleAdd(anime) {
    const info = anime.attributes;

    const newAnime = {
      id: Date.now(),
      kitsuId: anime.id,
      title: info.titles.en || info.canonicalTitle,
      type: "anime",
      status: "planned",
      progress: 0,
      total: info.episodeCount,
      rating: 0,
      platform: "Streaming",
      image: info.posterImage ? info.posterImage.small : "",
    };
    addItem(newAnime);
  }

  return (
    <section>
      <h2>Search Anime</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <label>
          Anime title
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Cowboy Bebop"
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Searching...</p>}
      {error && <p className="error">{error}</p>}
      {searched && !loading && !error && results.length === 0 && (
        <p>No anime found for "{query}".</p>
      )}

      <div className="card-grid">
        {results.map((anime) => (
          <AnimeResultCard
            key={anime.id}
            anime={anime}
            onAdd={handleAdd}
            alreadyAdded={items.some((item) => item.kitsuId === anime.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchAnime;
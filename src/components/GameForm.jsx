import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GameForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("PC");
  const [status, setStatus] = useState("planned");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Please enter a game title.");
      return;
    }

    const newGame = {
      id: Date.now(),
      title: title.trim(),
      type: "game",
      status: status,
      progress: 0,
      total: null,
      rating: 0,
      platform: platform,
    };

    addItem(newGame);
    navigate("/");
  }

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Hollow Knight"
        />
      </label>

      <label>
        Platform
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="PC">PC</option>
          <option value="PS5">PS5</option>
          <option value="Xbox">Xbox</option>
          <option value="Switch">Switch</option>
          <option value="Mobile">Mobile</option>
        </select>
      </label>

      <label>
        Status
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="planned">Planned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      {error && <p className="error">{error}</p>}

      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
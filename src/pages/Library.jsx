import { useState } from "react";
import { Link } from "react-router-dom";
import BacklogCard from "../components/BacklogCard";
import FilterBar from "../components/FilterBar";
import StatsPanel from "../components/StatsPanel";

function Library({ items, addProgress, changeStatus, deleteItem }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filteredItems = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => typeFilter === "all" || item.type === typeFilter)
    .filter((item) => statusFilter === "all" || item.status === statusFilter);

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "progress") return b.progress - a.progress;
    return 0;
  });

  if (items.length === 0) {
    return (
      <section>
        <h2>My Library</h2>
        <p className="empty">
          Your backlog is empty. <Link to="/add-game">Add a game</Link> or{" "}
          <Link to="/search-anime">search for anime</Link> to get started.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>My Library</h2>

      <StatsPanel items={items} />

      <FilterBar
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {sortedItems.length === 0 ? (
        <p className="empty">No items match your filters.</p>
      ) : (
        <div className="card-grid">
          {sortedItems.map((item) => (
            <BacklogCard
              key={item.id}
              item={item}
              addProgress={addProgress}
              changeStatus={changeStatus}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Library;
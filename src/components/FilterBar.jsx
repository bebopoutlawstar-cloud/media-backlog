function FilterBar({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filter-bar">
      <label>
        Search
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your backlog..."
        />
      </label>

      <label>
        Type
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="game">Games</option>
          <option value="anime">Anime</option>
        </select>
      </label>

      <label>
        Status
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="planned">Planned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Sort
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Date added</option>
          <option value="title">Title (A-Z)</option>
          <option value="rating">Rating (high-low)</option>
          <option value="progress">Progress (most first)</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBar;
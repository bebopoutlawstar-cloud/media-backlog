function StatsPanel({ items }) {
  const total = items.length;
  const completed = items.filter((item) => item.status === "completed").length;
  const inProgress = items.filter((item) => item.status === "in-progress").length;

  const episodesWatched = items
    .filter((item) => item.type === "anime")
    .reduce((sum, item) => sum + item.progress, 0);

  const hoursPlayed = items
    .filter((item) => item.type === "game")
    .reduce((sum, item) => sum + item.progress, 0);

  return (
    <section className="stats-panel">
      <div className="stat">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat">
        <span className="stat-number">{inProgress}</span>
        <span className="stat-label">In Progress</span>
      </div>
      <div className="stat">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat">
        <span className="stat-number">{episodesWatched}</span>
        <span className="stat-label">Episodes Watched</span>
      </div>
      <div className="stat">
        <span className="stat-number">{hoursPlayed}</span>
        <span className="stat-label">Hours Played</span>
      </div>
    </section>
  );
}

export default StatsPanel;
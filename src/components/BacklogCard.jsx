function BacklogCard({ item, addProgress, changeStatus, deleteItem }) {
  const stars = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);

  return (
    <article className="card">
      <span className="badge">{item.type}</span>
      <h3>{item.title}</h3>
      <p>Platform: {item.platform}</p>

      <label>
        Status:{" "}
        <select
          value={item.status}
          onChange={(e) => changeStatus(item.id, e.target.value)}
        >
          <option value="planned">Planned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      {item.type === "anime" ? (
        <p>Episode {item.progress} / {item.total}</p>
      ) : (
        <p>{item.progress} hrs played</p>
      )}

      <p className="stars">{stars}</p>

      <div className="card-actions">
        <button onClick={() => addProgress(item.id)}>+1</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </article>
  );
}

export default BacklogCard;
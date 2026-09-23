import StarRating from "./StarRating";

function BacklogCard({ item, addProgress, changeStatus, deleteItem, changeRating }) {
  return (
    <article className="card">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className={item.type === "anime" ? "poster" : "game-cover"}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <span className="badge">{item.type}</span>
      <h3>{item.title}</h3>
      <p>Platform: {item.platform}</p>

      <label>
        Status
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
        <p>Episode {item.progress} / {item.total ?? "?"}</p>
      ) : (
        <p>{item.progress} hrs played</p>
      )}

      <StarRating
        rating={item.rating}
        onRate={(newRating) => changeRating(item.id, newRating)}
      />

      <div className="card-actions">
        <button onClick={() => addProgress(item.id)}>+1</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </article>
  );
}

export default BacklogCard;
function BacklogCard({ item }) {
  const stars = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);

  return (
    <article className="card">
      <span className="badge">{item.type}</span>
      <h3>{item.title}</h3>
      <p>Platform: {item.platform}</p>
      <p>Status: {item.status}</p>

      {item.type === "anime" ? (
        <p>Episode {item.progress} / {item.total}</p>
      ) : (
        <p>{item.progress} hrs played</p>
      )}

      <p className="stars">{stars}</p>
    </article>
  );
}

export default BacklogCard;
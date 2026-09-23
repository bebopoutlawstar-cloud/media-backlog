import BacklogCard from "../components/BacklogCard";

function Library({ items }) {
  return (
    <section>
      <h2>My Library</h2>
      <div className="card-grid">
        {items.map((item) => (
          <BacklogCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Library;
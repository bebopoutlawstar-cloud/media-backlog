import BacklogCard from "../components/BacklogCard";

function Library({ items, addProgress, changeStatus, deleteItem }) {
  return (
    <section>
      <h2>My Library</h2>
      <div className="card-grid">
        {items.map((item) => (
          <BacklogCard
            key={item.id}
            item={item}
            addProgress={addProgress}
            changeStatus={changeStatus}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </section>
  );
}

export default Library;
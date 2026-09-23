import GameForm from "../components/GameForm";

function AddGame({ addItem }) {
  return (
    <section>
      <h2>Add a Game</h2>
      <GameForm addItem={addItem} />
    </section>
  );
}

export default AddGame;
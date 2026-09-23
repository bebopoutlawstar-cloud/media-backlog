import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Library from "./pages/Library";
import AddGame from "./pages/AddGame";
import SearchAnime from "./pages/SearchAnime";
import NotFound from "./pages/NotFound";
import mockBacklog from "./data/mockBacklog";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("media-backlog");
    return saved ? JSON.parse(saved) : mockBacklog;
  });

  useEffect(() => {
    localStorage.setItem("media-backlog", JSON.stringify(items));
  }, [items]);

  function addProgress(id) {
    setItems(
      items.map((item) => {
        if (item.id !== id) return item;
        if (item.total && item.progress >= item.total) return item;
        return { ...item, progress: item.progress + 1 };
      })
    );
  }

  function changeStatus(id, newStatus) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function addItem(newItem) {
    setItems([...items, newItem]);
  }
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Library
                  items={items}
                  addProgress={addProgress}
                  changeStatus={changeStatus}
                  deleteItem={deleteItem}
                />
              }
            />
            <Route path="/add-game" element={<AddGame addItem={addItem} />} />
            <Route
              path="/search-anime"
              element={<SearchAnime items={items} addItem={addItem} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
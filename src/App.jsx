import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Library from "./pages/Library";
import AddGame from "./pages/AddGame";
import SearchAnime from "./pages/SearchAnime";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route path="/search-anime" element={<SearchAnime />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
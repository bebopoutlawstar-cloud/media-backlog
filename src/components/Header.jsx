import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Media Backlog</h1>
      <nav className="nav">
        <NavLink to="/" end>Library</NavLink>
        <NavLink to="/search-games">Search Games</NavLink>
        <NavLink to="/search-anime">Search Anime</NavLink>
        <NavLink to="/add-game">Add Game</NavLink>
      </nav>
    </header>
  );
}

export default Header;
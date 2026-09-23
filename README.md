# Media Backlog

A single backlog for your games **and** anime. Search real game and anime databases, add titles with one click, and track status, progress, and ratings — all wrapped in a late-90s street-racing, worn-VHS-tape look.

**Live site:** https://bebopoutlawstar-cloud.github.io/media-backlog/

## Features

- **Search Games** using the RAWG API (cover art, platforms, release date, rating)
- **Search Anime** using the Kitsu API (poster, episode count, rating)
- **Add Game manually** with form validation (no empty titles)
- Track **status** (Planned / In Progress / Completed), **progress** (+1 episode or hour), and **1–5 star ratings**
- **Search, filter, and sort** your library by title, type, status, rating, or progress
- **Stats dashboard:** total items, in progress, completed, episodes watched, hours played
- **Saves automatically** to localStorage — your list survives a refresh
- Loading, error, empty-list, and 404 states
- Responsive layout for desktop, tablet, and phone

## Technologies Used

- React 19 + Vite
- React Router (HashRouter)
- JavaScript (ES6+), CSS (custom properties, Flexbox, Grid, animations)
- RAWG Video Games Database API
- Kitsu Anime API
- localStorage
- Git, GitHub, GitHub Pages (`gh-pages`)

## Installation

```bash
git clone https://github.com/bebopoutlawstar-cloud/media-backlog.git
cd media-backlog
npm install
```

Game search needs a free RAWG API key from https://rawg.io/apidocs.
Create a file named `.env.local` in the project root:

```
VITE_RAWG_KEY=your_key_here
```

## Running Locally

```bash
npm run dev
```

Then open http://localhost:5173

## Deploying

```bash
npm run deploy
```

This builds the project and publishes the `dist` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── components/
│   ├── AnimeResultCard.jsx
│   ├── BacklogCard.jsx
│   ├── FilterBar.jsx
│   ├── GameForm.jsx
│   ├── GameResultCard.jsx
│   ├── Header.jsx
│   ├── StarRating.jsx
│   └── StatsPanel.jsx
├── data/
│   └── mockBacklog.js
├── pages/
│   ├── AddGame.jsx
│   ├── Library.jsx
│   ├── NotFound.jsx
│   ├── SearchAnime.jsx
│   └── SearchGames.jsx
├── App.css
├── App.jsx
└── main.jsx
```

## How It Works

- **App.jsx** holds the whole backlog in one `useState` array and defines every function that changes it (add, +1 progress, change status, rate, delete). These are passed down to pages and cards as props.
- A **`useEffect`** saves the array to localStorage whenever it changes; a lazy `useState` initializer loads it back on startup.
- **Search pages** use `fetch` with `async/await`, `try/catch`, and loading/error state, then convert each API result into the same item shape so one `BacklogCard` component can display both games and anime.
- **Library** derives what to show with `filter()` and `sort()` — filtered results are calculated on every render, not stored in state.
- **StatsPanel** uses `filter()` and `reduce()` to total up episodes and hours.

## Screenshots

![Library](docs/screenshots/library.png)
![Search Games](docs/screenshots/search-games.png)
![Search Anime](docs/screenshots/search-anime.png)

## Future Improvements

- User accounts and a real database (MySQL) instead of localStorage
- Anime detail page with synopsis
- Edit titles and platforms after adding
- "Pick something for me" random button
- Import/export your backlog

## AI Usage

I built this project with Claude as a coding mentor, following a step-by-step project prompt. Claude explained each concept (routing, props, state, `fetch`, localStorage), gave code for each step, and helped me debug errors from my own screenshots and console output. I typed and tested every step, committed after each feature, and made design decisions myself (combining games + anime, switching from the Jikan API to Kitsu when MyAnimeList went down, adding a game search page, and the Initial D / VHS visual theme). See `docs/ai-help/NOTES.md` for details.

## Author

**Cole** — [GitHub](https://github.com/bebopoutlawstar-cloud)

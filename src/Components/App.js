
import '../App.css';
import { useEffect, useState } from 'react';
import MoviePage from "./MoviePage"
import Header from './Header';
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import WatchList from "../Components/WatchList.js"
import Favorites from './Favorites';
function App() {
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState("2021")

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, []);

  const filteredMovies = movies.filter(movie => {
    return movie.year === filter
  })

  function handleFilter(e) {
    setFilter(e.target.name)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Navbar handleFilter={handleFilter} />
            <MoviePage movies={filteredMovies} />
          </div>
        } />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </>

  );
}

export default App;
import '../App.css';
import { useEffect, useState } from 'react';
import MoviePage from "./MoviePage"
import Header from './Header';
import Navbar from './Navbar'
import Favorites from './Favorites'
import WatchList from './WatchList'
import { Routes, Route } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState ([])
  const [filter, setFilter] = useState("2021")

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, []);

  const filteredMovies = movies.filter(movie => {
    return movie.year === filter
  });

  function handleFilter(e) {
    setFilter(e.target.name)
  };

  return (
    <>
      <Header />
      <Navbar handleFilter={handleFilter} />
      <br></br>
      <Routes>
        <Route path="/" element={
          <div className="App">
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

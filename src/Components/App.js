import '../App.css';
import { useEffect, useState } from 'react';
import MoviePage from "./MoviePage"
import Header from './Header';
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"

function App() {
  const [movies, setMovies] = useState ([])

  const [filter, setFilter] = useState("2021")
  //const [filterFaves, setFilterFaves] = useState(movie.liked)


  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, []);





  return (

  const filteredMovies = movies.filter(movie => {
    return movie.year === filter
  })

  function handleFilter(e) {
    setFilter(e.target.name)
  };

  // function handleFavorites() {
  //   setFilterFaves(movie.liked)
  // }

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
          <Route path="/favorites" element={
            <div className="App">
              {/* <Header />
              <Navbar handleFilter={handleFilter} /> */}
              <h2>HELLO</h2>
            </div>} />
          <Route path="/watchlist" element={
            <div className="App">
              {/* <Header />
              <Navbar handleFilter={handleFilter} /> */}
              <h2>testing</h2>
            </div>} />
          </Routes>
        </>
    );
  }
  

export default App;

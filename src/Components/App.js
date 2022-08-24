import '../App.css';
import { useEffect, useState } from 'react';
import MoviePage from "./MoviePage"
import Header from './Header';
import Navbar from './Navbar'

function App() {
  const [movies, setMovies] = useState ([])

  const [filter, setFilter] = useState("2021")


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
  }

  return (
    <div className="App">
      <Header />
      <Navbar handleFilter={handleFilter} />
      <MoviePage movies={filteredMovies} />
    </div>

  );
}

export default App;

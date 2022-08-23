import '../App.css';
import { useEffect, useState } from 'react';
import MoviePage from "./MoviePage"
import Header from './Header';

function App() {
  const [movies, setMovies] = useState ([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  return (

    <div className="App">
      <Header />
      <MoviePage movies={movies} />
    </div>

  );
}

export default App;

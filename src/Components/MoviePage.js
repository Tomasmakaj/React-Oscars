import React from 'react'
import MovieCard from "./MovieCard"

function MoviePage({ movies }) {
  const renderMovies = movies.map(movie => 
      <MovieCard
        movie={movie}
        key={movie.id}
      />
  )
  
  return (
    <div style={{display:"flex",width:"100vw",alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"flex",flexWrap:"wrap",width:"80vw",justifyContent:"center",alignContent:"center",gap:"2rem"}}>
          {renderMovies}
        </div>
    </div>
  )
}

export default MoviePage;
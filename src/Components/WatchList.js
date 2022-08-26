import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';

function WatchList() {
  const [watched, setWatched] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => {
        setWatched(data.filter(watch => {
          return watch.inWatchList
        }))
      })
  }, []);

  return (
    <div className="header">
      <h2>My Watch List</h2>
      <div style={{ display: "flex", width: "100vw", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", width: "80vw", justifyContent: "center", alignContent: "center", gap: "2rem" }}>
          {watched.map(watch => (
            <MovieCard movie={watch} key={watch.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WatchList;

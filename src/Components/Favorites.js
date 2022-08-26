import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(res => res.json())
            .then(data => {
                setFavorites(data.filter(favorite => {
                    return favorite.liked
                }))
            })
    }, []);

    return (
        <div className="header">
            <h2>My Favorites</h2>
                <div style={{ display: "flex", width: "100vw", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", flexWrap: "wrap", width: "80vw", justifyContent: "center", alignContent: "center", gap: "2rem" }}>
                    {favorites.map(fave => (
                        <MovieCard movie={fave} key={fave.id} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Favorites;
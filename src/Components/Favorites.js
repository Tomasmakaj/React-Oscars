import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Collapse } from 'bootstrap';
// import Stack from 'react-bootstrap/Stack';


function Favorites() {
    const [favorites, setFavorites] = useState ([]);

    useEffect(()=>{
        fetch('http://localhost:3000/movies')
        .then(res=>res.json())
        .then(data=>{
            setFavorites(data.filter(favorite => {
            return favorite.liked
            }))
        })
    }, []);

  return (
    <div>
        <Container>
            <Row sm={2} md={4}>
                    {favorites.map(fave=>(
                        <MovieCard  movie={fave} key={fave.id} />
                    ))}
            </Row>
        </Container>
    </div>
  )
};

export default Favorites;
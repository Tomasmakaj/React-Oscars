import React, {useState, useEffect} from 'react'
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WatchList() {
  const [watched, setWatched] = useState ([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(data =>{
      setWatched(data.filter(watch => {
        return watch.inWatchList
      }))
    })
  }, []);

  return (
    <div className="header">
      <h2>My Watch List</h2>
        <Container>
            <Row sm={2} md={4}>
              {watched.map(watch=>(
                <MovieCard movie={watch} key={watch.id} />
              ))}
            </Row>
        </Container>
      </div>
  )
}

export default WatchList;
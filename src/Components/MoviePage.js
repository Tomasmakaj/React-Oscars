import React from 'react'
import MovieCard from "./MovieCard"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MoviePage({ movies }) {
  const renderMovies = movies.map(movie => 
  <Col sm={2}md={4}>
  <MovieCard
    key={movie.id}
    movie={movie}
    />
    </Col>
  )
  
  return (
    <div>
      <Container>
        <Row>
          {renderMovies}
        </Row>
      </Container>
    </div>
  )
}

export default MoviePage
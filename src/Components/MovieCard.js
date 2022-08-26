import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MovieCard({movie}) {
  const {id, image, title, description, wins, nominations} = movie;
  const [isFront, setIsFront] = useState(true);
  const [isLiked, setIsLiked] = useState(movie.liked);
  const [isWatched, setIsWatched] = useState(movie.inWatchList)
  
  function handleClick() {
    setIsFront((isFront) => !isFront)
  };
  
  function handleLikeClick() {
    setIsLiked((isLiked) => {
      fetch(`http://localhost:3000/movies/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...movie,
          liked: !isLiked,
        })
      })
      .then(res => res.json())
      .then(data => setIsLiked(data.liked))
    })
  };
  
  function handleWatchedClick() {
    //setIsWatched((isWatched) => !isWatched)
    setIsWatched((isWatched) => {
      fetch(`http://localhost:3000/movies/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...movie,
          inWatchList: !isWatched,
        })
      })
      .then(res => res.json())
      .then(data => setIsWatched(data.inWatchList))
    })
  };
  
  return (
    <Card key={id} className="custom-class" style={{border: "solid 2px white",padding:"2rem", minWidth:"200px"}} >
      <Card.Title className="header">
        <h3>{title}</h3>
      </Card.Title>
      <div onClick={handleClick} className="image" style={{cursor:'pointer'}}>
        {isFront ?
          <img src={image} alt={title} height='350px'/> :
          <div className="info">{description} <br></br><br></br> {wins} wins | {nominations} nominations</div> 
        }
      </div>
      <div className="extra-content">
        <span>
          <Button onClick={handleLikeClick} variant="outline-light">
            {isLiked ? "❤️" : "♡"}
          </Button> {' '}
          <Button onClick={handleWatchedClick} variant="outline-light">
            {isWatched ? "In Watch List" : "Add to Watch List"}
          </Button>
        </span>
      </div>
    </Card>
  )
};

export default MovieCard;

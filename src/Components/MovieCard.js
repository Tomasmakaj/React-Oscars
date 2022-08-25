import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
// import Popover from 'react-bootstrap/Popover';
// import Overlay from 'react-bootstrap/Overlay';
// import Collapse from 'react-bootstrap/Collapse';

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
    <Card key={id} style={{border: "solid 1px black"}} >
      <Card.Title className="header">
        <h3>{title}</h3>
      </Card.Title>
      <div onClick={handleClick} className="image" style={{cursor:'pointer'}}>
        {isFront ?
          <img src={image} alt={title} height='350px'/> :
          <div>{description} <br></br><br></br> {wins} wins | {nominations} nominations</div> 
        }
      </div>
      <div className="extra content">
        <span>
          <button onClick={handleLikeClick}>
            {isLiked ? "❤️" : "♡"}
          </button>
          <button onClick={handleWatchedClick}>
            {isWatched ? "In Watch List" : "Add to Watch List"}
          </button>
        </span>
      </div>
    </Card>
  )
};
export default MovieCard;

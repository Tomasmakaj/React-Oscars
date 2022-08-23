import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Popover from 'react-bootstrap/Popover';

function MovieCard({movie}) {
  const {id, image, title, description, wins, nominations} = movie;
  const [isFront, setIsFront] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isWatched, setIsWatched] = useState(false)
  
  function handleClick() {
    setIsFront((isFront) => !isFront)
  };
  function handleLikeClick() {
    setIsLiked((isLiked) => !isLiked)
  };
  function handleWatchedClick() {
    setIsWatched((isWatched) => !isWatched)
  };
  return (
    <Card key={id} style={{border: "solid 1px black"}}>
      <Card.Title className="header">
        <h3>{title}</h3>
      </Card.Title>
      <div onClick={handleClick} className="image">
        {isFront ?
          <img src={image} alt={title} height='350px'/> :
          <Popover>{description} <br></br><br></br> {wins} wins | {nominations} nominations</Popover> 
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

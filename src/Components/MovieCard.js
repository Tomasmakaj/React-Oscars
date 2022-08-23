import React, {useState} from 'react'

function MovieCard({movie}) {
  
  const {id, image, nominations, title, description} = movie;
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
    <div id={id} style={{border: "solid 1px black"}}>
      <div className="content">
        <h3 className="header">{title}</h3>
      </div>
      <div onClick={handleClick} className="image">
        {isFront ?
          <img src={image} alt={title} height='350px'/> :
          <div>{description}</div>
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
    </div>
  )
};
export default MovieCard;

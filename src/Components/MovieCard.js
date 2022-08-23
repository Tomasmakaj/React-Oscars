import React, {useState} from 'react'

function MovieCard({movie}) {
  const {id, image, nominations, title, description} = movie;
  const [isFront, setIsFront] = useState(true);

  function handleClick() {
    setIsFront((isFront) => !isFront)
  }

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
          <button>♡</button>
          <button>Add to Watch List</button>
        </span>
      </div>
    </div>
  )
};

export default MovieCard;

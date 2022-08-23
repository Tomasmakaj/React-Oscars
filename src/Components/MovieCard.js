import React from 'react'

export default function MovieCard({movie}) {
  const {id, image, nominations, title,} = movie
  return (
    <div>
    <div>
      <div id={id} className="image">
        <img src={image} alt={title} height='350px'/>
      </div>
      <div className="content">
        <div className="header">{title}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
        </span>
      </div>
    </div>
  </div>
  )
}

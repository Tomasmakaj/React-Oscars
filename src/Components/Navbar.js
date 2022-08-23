import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    // <div>
    //   <span>
    //     <button>Favorites</button>
    //     <button>Watch List</button>
    //   </span>
    //   <br></br>
    //   <span>
    //     <button>2021</button>
    //     <button>2020</button>
    //     <button>2019</button>
    //     <button>2018</button>
    //     <button>2017</button>
    //   </span>
    // </div>
    <div className="topnav">
      <a className="active" href="#2021">2021</a>
      <a href="#2020">2020</a>
      <a href="#2019">2019</a>
      <a href="#2018">2018</a>
      <a href="#2017">2017</a>
      <button>Favorites</button>
      <button>Watch List</button>
    </div>
  )
}

import React from 'react'
import './Navbar.css'
import { useNavigate, Link } from "react-router-dom"

export default function Navbar( {handleFilter} ) {

  const navigate = useNavigate()

  return (
    <div className="topnav">
      <Link onClick={handleFilter} to="/#2021" name="2021">2021</Link>
      <Link onClick={handleFilter} to="/#2020" name="2020">2020</Link>
      <Link onClick={handleFilter} to="/#2019" name="2019">2019</Link>
      <Link onClick={handleFilter} to="/#2018" name="2018">2018</Link>
      <Link onClick={handleFilter} to="/#2017" name="2017">2017</Link>
      <button onClick={()=>navigate("/favorites")}>Favorites</button>
      <button onClick={()=>navigate("/watchlist")}>Watch List</button>
    </div>
  )
}

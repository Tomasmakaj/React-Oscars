import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar( {handleFilter} ) {
  
  const navigate = useNavigate()

  return (
    <div className="topnav">
      <a onClick={handleFilter} href="#2021" name="2021">2021</a>
      <a onClick={handleFilter} href="#2020" name="2020">2020</a>
      <a onClick={handleFilter} href="#2019" name="2019">2019</a>
      <a onClick={handleFilter} href="#2018" name="2018">2018</a>
      <a onClick={handleFilter} href="#2017" name="2017">2017</a>
      <button onClick={()=>navigate("/favorites")}>Favorites</button>
      <button onClick={()=>navigate("/watchlist")}>Watch List</button>
    </div>
  )
}

import React from 'react'
import './Navbar.css'
import { useNavigate, NavLink } from "react-router-dom"

export default function Navbar( {handleFilter} ) {

  const navigate = useNavigate()

  return (
    <div className="topnav" >
      <NavLink onClick={handleFilter} to="/#2021" name="2021">2021</NavLink>
      <NavLink onClick={handleFilter} to="/#2020" name="2020">2020</NavLink>
      <NavLink onClick={handleFilter} to="/#2019" name="2019">2019</NavLink>
      <NavLink onClick={handleFilter} to="/#2018" name="2018">2018</NavLink>
      <NavLink onClick={handleFilter} to="/#2017" name="2017">2017</NavLink>
      <NavLink onClick={handleFilter} to="/#2016" name="2016">2016</NavLink>
      <NavLink onClick={handleFilter} to="/#2015" name="2015">2015</NavLink>
      <div className="buttons">
        <button onClick={()=>navigate("/favorites")}>Favorites</button>
        <button onClick={()=>navigate("/watchlist")}>Watch List</button>
      </div>
    </div>
  )
}

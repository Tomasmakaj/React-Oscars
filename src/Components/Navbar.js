import React, { useState } from 'react'
import './Navbar.css'
import { useNavigate, NavLink } from "react-router-dom"

export default function Navbar({ handleFilter }) {
  const [navStyle, setNavStyle] = useState({
    "2021": "toBold",
  });

  const navigate = useNavigate();

  let boldYear = (e) => {
    let years = {
      "2021": "",
      "2020": "",
      "2019": "",
      "2018": "",
      "2017": "",
      "2016": "",
      "2015": "",
    }
    setNavStyle({
      ...years,
      [e.target.name]: "toBold"
    })
  };

  return (
    <div className="topnav">
      <NavLink className={navStyle["2021"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2021" name="2021" >2021</NavLink>

      <NavLink className={navStyle["2020"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2020" name="2020">2020</NavLink>

      <NavLink className={navStyle["2019"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2019" name="2019">2019</NavLink>

      <NavLink className={navStyle["2018"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2018" name="2018">2018</NavLink>

      <NavLink className={navStyle["2017"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2017" name="2017">2017</NavLink>

      <NavLink className={navStyle["2016"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2016" name="2016">2016</NavLink>

      <NavLink className={navStyle["2015"]} onClick={(e) => {
        boldYear(e)
        handleFilter(e)
      }} to="/#2015" name="2015">2015</NavLink>
      
      <div className="buttons">
        <button onClick={() => {
        setNavStyle({})
          navigate("/favorites")
        
        }}>Favorites</button>
        <button onClick={() => {
          setNavStyle({})
          navigate("/watchlist")
        }}>Watch List</button>
      </div>
    </div>
  )
}

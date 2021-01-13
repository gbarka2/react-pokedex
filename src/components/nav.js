import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h2>Pokedex</h2>
      </Link>
      <Link to="/">
        <h1>Pokemon</h1>
      </Link>
      <Link to="/myTeam">
        <h2>My Team</h2>
      </Link>
    </div>
  )
}

export default Nav
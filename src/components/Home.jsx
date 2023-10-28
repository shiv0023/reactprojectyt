import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
<h1> <Link to="/">home </Link></h1>
<h2> <Link to="/form">support</Link></h2>
<h3> <NavLink to="/Modified">modified </NavLink></h3>
<h4> <NavLink to='/reactproject'>react project </NavLink></h4>

    </div>
  )
}

export default Home
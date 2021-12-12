import React from 'react'
import {Link } from 'react-router-dom'
import Set from '../controllers/APIData'

const MainView = () => {
    return(
    <div className="">
        <h1>Main Menu</h1>
        <Link to="/DT/Bot">Daily Trade</Link>  <br/>
        <Link to="/DT/Config">Daily Trade Config</Link>  <br/>
        <Link to="/ST/Bot">Simple Trade</Link>  <br/>
        <Link to="/ST/Config">Simple Trade Config</Link>  <br/>
    </div>
    )
}

export default MainView
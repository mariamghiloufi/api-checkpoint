import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
                <ul className="menu">
                    <Link to="/"><li className="menu-item">Home</li></Link>
                    <Link to="/users"><li className="menu-item">Users</li></Link>
                   
                </ul>
        </div >
    )
}

export default Navbar

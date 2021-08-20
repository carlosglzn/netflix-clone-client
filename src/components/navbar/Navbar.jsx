import './navbar.scss'
import React, { useContext, useState } from 'react'
import { ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { logout } from '../../context/authContext/AuthActions'
import { AuthContext } from '../../context/authContext/AuthContex'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const { dispatch } = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }


    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                </div>
                <div className="right">
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar

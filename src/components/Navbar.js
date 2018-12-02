import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'
import logo from '../assets/icon.png';

const Navbar = () => {
    
    //probably good for a default error page after something
        // setTimeout(()=>{
    //     props.history.push('/contact')
    // }, 1500)

    return (//JSX
        <nav className="nav-wrapper green darken-4">
            <div className="container">
                <Link to="/" className="brand-logo right">Smasherz</Link>
                <ul className="left">
                    <li><Link to="/">Home</Link> </li>
                    <li><NavLink to="/about">About</NavLink> </li>
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                </ul>
                <ul className="center">
                    <li> <Link to="/" className="brand-logo center">
                        <img src={logo} alt="logo" height="42" width="42" align="center" />
                    </Link></li>
                </ul>
            </div>    
        </nav>
    )
}

//applies router, auto props to navbar
export default withRouter(Navbar);
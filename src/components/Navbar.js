import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {
    
    //probably good for a default error page after something
        // setTimeout(()=>{
    //     props.history.push('/contact')
    // }, 1500)

    return (//JSX
        <nav className="nav-wrapper pink darken-0">
            <div className="container">
                <a href="/" className="brand-logo">Smasherz</a>
                <ul className="right">
                    <li><Link to="/">Home</Link> </li>
                    <li><NavLink to="/about">About</NavLink> </li>
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                </ul>
            </div>    
        </nav>
    )
}

//applies router, auto props to navbar
export default withRouter(Navbar);
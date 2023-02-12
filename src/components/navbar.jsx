import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {

   
    return (<div className="navbar">

        <div className='left-column' >
        <img src={logo} alt='logo'  />
        </div>

        <div className = "links">
            <Link to ="/"> Shop</Link>
            <Link to="/contact">Kontakt </Link>
            <Link to="/about">O nama</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
    );
};
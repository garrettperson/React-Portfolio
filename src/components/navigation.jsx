import React, {useState} from "react";

import { Link, useLocation } from 'react-router-dom';

import './nav.css'

import { getImage } from "../utils/utils";

function Navigation(){
    const currentPage = useLocation().pathname;

    return (
    <nav className="navigation">
        <li className="title">
        <Link to="/">
            Home
        </Link>
        </li>
        <div className="menu">
                <li className="menuItems">
                    <Link to="/About">
                        About Me
                        </Link>
                </li>
                <li className="menuItems">
                    <Link to="/portfolio">
                        Portfolio
                        </Link>
                </li>
                <li className="menuItems">
                    <Link to="/contact">
                        Contact
                        </Link>
                </li>
                <li className="menuItems">
                    <Link to="/resume">
                        Resume
                        </Link>
                </li>
        </div> 
    </nav>
    );
};

export default Navigation;

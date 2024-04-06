import React, { useState } from "react";

import { Link, useLocation } from 'react-router-dom';

import { getImage } from "../../utils/utils";

import { FaLinkedin } from "react-icons/fa";

import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer style={{
            width: "100%",
            height: "20%"
        }}>
            <a href="https://www.linkedin.com/in/garrett-gutierrez-1b5ab8132/">
            <FaLinkedin style={{
                width: "200px",
                height: "250px",
                margin: "200px",
                fill: "white"
            }} /></a>
            <a href="https://github.com/garrettperson">
            <FaSquareGithub style={{
                width: "200px",
                height: "250px",
                marginLeft: "100px",
                marginBottom: "200px",
                fill: "white"
            }} /></a>

        </footer>

    )
}

export default Footer;
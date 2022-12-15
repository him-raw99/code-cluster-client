import React from 'react'

function Navbar() {
    return (
        <>
            <div id="navbar">
                <a href="#default" id="logo">CompanyLogo</a>
                <div id="navbar-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </>
    );
}

export default Navbar
import React from 'react'

function Navbar() {
    return (
        <>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="index.html" className="logo">
                                </a>
                                <ul className="nav">
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li><a href="listing.html">Languages</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><div className="main-white-button"><a href="#"><i className="fa fa-plus"></i> Sign Up / Log In</a></div></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
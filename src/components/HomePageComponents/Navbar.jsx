import React from 'react'

import Button from '@mui/material/Button';
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <img src="src/assets/logo.png" className='icon' alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse right-navbar" id="navbarSupportedContent" >
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search for users" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
                    </form>
                    
                    <Button variant='contained' color="success" sx={{ zIndex: "1", margin:"1rem 3rem"}}>
                            Login
                        </Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
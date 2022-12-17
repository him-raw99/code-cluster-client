import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'
import { Navigate, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <div id="navbar">
                <a href="#default" id="logo">Code Cluster</a>
                <div id="navbar-right">
                    <a>
                    <Button sx={{padding:"6px 15px",fontWeight:"4px",letterSpacing:"1px",color:"white"}} variant="outline" >Homepage</Button>
                    </a>
                    <a>
                    <Button sx={{padding:"6px 15px",fontWeight:"4px",letterSpacing:"1px",color:"white"}} variant="outline" >Search User</Button>
                    </a>
                    <a>
                    <NavLink to={"/login"}>
                    <Button sx={{padding:"6px 15px"}} color="primary" variant='contained' endIcon={<LoginIcon/>}>Login</Button>
                    </NavLink>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar
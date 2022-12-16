import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'

function Navbar() {
    return (
        <>
            <div id="navbar">
                <a href="#default" id="logo">CompanyLogo</a>
                <div id="navbar-right">
                    <a>
                    <Button sx={{padding:"6px 15px"}} >Homepage</Button>
                    </a>
                    <a>
                    <Button sx={{padding:"6px 15px"}} >Search User</Button>
                    </a>
                    <a>
                    <Button sx={{padding:"6px 15px"}} color="primary" variant='contained' endIcon={<LoginIcon/>}>Login</Button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar
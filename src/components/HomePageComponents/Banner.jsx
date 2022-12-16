import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';

function Banner() {
  return (
    <>
        <div className="banner row scroll-fix">
            <div className="col-lg-5 col-md-12 scroll-fix">
                <h1 className='banner__heading'>Dont know how to use github but want to host your code</h1>
                <Button variant='contained' color='inherit' className="banner__button1" endIcon={<SearchIcon/>}>Search User</Button>
                <Button variant='contained' className="banner__button2" endIcon={<LoginIcon/>}>Login / signup</Button>
            </div>
            <div className="col-lg-7 col-md-12 scroll-fix">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-v76g03YLcdwvzyZsdUu3lNoDfdAEKQhpPfK9CIRNA&s" alt="..." className='banner__image1' />
                <img src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=612x612&w=0&h=Ni1xaMtCOiGvH4NKnl7Y4uTMqXEjd8cYwBDDOjk4TKE=" className='banner__image2'  alt="..." />
            </div>
        </div>
    </>
  )
}

export default Banner
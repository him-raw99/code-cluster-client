import React from 'react'
import Banner from '../components/HomePageComponents/Banner'
import Features from '../components/HomePageComponents/Features'
import Footer from '../components/HomePageComponents/Footer'
import Navbar from '../components/HomePageComponents/Navbar'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Features/>
        <Footer/>
    </>
  )
}

export default HomePage
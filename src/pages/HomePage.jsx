import React from 'react'
import Banner from '../components/homePageComponents/Banner'
import Features from '../components/homePageComponents/Features'
import Navbar from '../components/homePageComponents/Navbar'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Features/>
    </>
  )
}

export default HomePage
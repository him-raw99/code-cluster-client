import React from 'react'
import Banner from '../components/HomePageComponents/Banner'
import Footer from '../components/HomePageComponents/Footer'
import LanguageInfo from '../components/HomePageComponents/LanguageInfo'
import Navbar from '../components/HomePageComponents/Navbar'

function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            <LanguageInfo/>
            <Footer />
        </>
    )
}

export default HomePage
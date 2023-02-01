import React from 'react'
import DashboardNavbar from '../components/DashboardComponents/DashboardNavbar'
import NewCodeForm from '../components/EditPageComponents/NewCodeForm'
import Footer from '../components/HomePageComponents/Footer'

function NewCode() {
  return (
    <>
        <DashboardNavbar/>
        <NewCodeForm/>
        <Footer/>
    </>
  )
}

export default NewCode
import React , {useEffect} from 'react'
import DashboardNavbar from '../components/DashboardComponents/DashboardNavbar'
import NewCodeForm from '../components/EditPageComponents/NewCodeForm'
import Footer from '../components/HomePageComponents/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function NewCode() {
  const navigate = useNavigate();
  const {isLogin} = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  return (
    <>
        <DashboardNavbar/>
        <NewCodeForm/>
        <Footer/>
    </>
  )
}

export default NewCode
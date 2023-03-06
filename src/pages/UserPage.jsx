import React, { useEffect } from "react";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import Loader from "../components/DashboardComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {reset, searchUser } from "../features/searchUser/searchUserSlice";
import UserCodes from "../components/UserPageComponents/UserCodes";

function UserPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoading , success ,error} = useSelector((state)=>state.searchUser);
  const { user } = useParams();
  useEffect(() => {
    dispatch(reset());
    dispatch(searchUser({ user }))
  }, []);
  useEffect(() => {
    {(!isLoading&&error)&&navigate("/search")}
  }, [isLoading]);
  return (
    <>
      {isLoading?<Loader/>:
      <div className="SearchPage__body">
        <Navbar />
        {success&&<UserCodes user={user} />}
        <Footer />
      </div>}
    </>
  );
}

export default UserPage;

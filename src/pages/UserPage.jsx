import React, { useEffect } from "react";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import Loader from "../components/DashboardComponents/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchUser } from "../features/searchUser/searchUserSlice";
import UserCodes from "../components/UserPageComponents/UserCodes";

function UserPage() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=>state.searchUser);
  const { user } = useParams();
  useEffect(() => {
    dispatch(searchUser({ user }));
  }, []);
  return (
    <>
      {isLoading?<Loader/>:<div className="SearchPage__body">
        <Navbar />
        <UserCodes user={user} />
        <Footer />
      </div>}
    </>
  );
}

export default UserPage;

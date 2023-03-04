import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/DashboardComponents/Loader";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import SearchedCode from "../components/UserPageComponents/SearchedCode";
import { searchFullCode } from "../features/searchUser/searchUserSlice";

function SearchFullCode() {
  const { user, id } = useParams();
  const {isLoading } = useSelector((state)=>state.searchUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(searchFullCode({user,id}));
  },[])
  return (
    <>
      {isLoading ? <Loader/> :
      <div className="search-code-body">
        <Navbar />
        <SearchedCode user={user} />
        <Footer />
      </div>
      }
    </>
  );
}

export default SearchFullCode;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchUser } from "../features/searchUser/searchUserSlice";


function UserPage() {
  const dispatch = useDispatch();
  const { user } = useParams();
  useEffect(()=>{
    dispatch(searchUser({user}));
  },[])
  return <>{user}</>;
}

export default UserPage;

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFullCode } from '../../features/editcode/editCodeSlice';

function SingleCodeModal() {
  const store = useSelector(state=>state);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFullCode(store));
  },[]);
  return (
    <div>SingleCodeModal</div>
  )
}

export default SingleCodeModal
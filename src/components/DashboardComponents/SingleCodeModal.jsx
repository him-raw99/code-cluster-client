import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFullCode } from '../../features/editcode/editCodeSlice';

function SingleCodeModal() {
  const editCodeStates = useSelector(state=>state.editCode);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getFullCode(editCodeStates));
  },[]);
  return (
    <div>SingleCodeModal</div>
  )
}

export default SingleCodeModal
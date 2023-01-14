import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getCode } from '../../features/dashboard/dashboardSlice'
import Card from "./Card"

function CardContainer() {
  const token = useSelector((state)=>state.auth.token);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCode(token));
  },[])
  const codes = useSelector((state)=>state.dashboard.codes);
  return (
    <>
    <div className="row">
      {codes.map((code)=>{return(<Card title={code.title} code={code.code} id={code._id} isPublic={code.isPublic} />)})}
    </div>
    </>
  )
}

export default CardContainer
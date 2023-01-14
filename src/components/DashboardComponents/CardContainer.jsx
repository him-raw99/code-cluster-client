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
  return (
    <>
    <div className="row">
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
      <Card title="Code Cluster" code={`lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 `} />
    </div>
    </>
  )
}

export default CardContainer
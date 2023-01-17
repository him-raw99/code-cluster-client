import React from 'react'
import { useSelector } from 'react-redux'
import Card from "./Card"

function CardContainer() {
  const codes = useSelector((state)=>state.dashboard.codes);
  return (
    <>
    <div className="row">
      {codes.map((code)=>{return(<Card key={code._id} title={code.title} code={code.code} id={code._id} isPublic={code.isPublic} />)})}
    </div>
    </>
  )
}

export default CardContainer
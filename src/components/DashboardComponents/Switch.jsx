import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function SwitchComp() {
  const {isPublic} = useSelector((store)=>store.editCode)
  console.log(isPublic);
  return (
    <>
    </>
  )
}

export default SwitchComp
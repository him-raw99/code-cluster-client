import React from 'react'
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from "react-redux";

function SwitchComp() {
  const {isPublic} = useSelector((store)=>store.editCode)
  console.log(isPublic);
  return (
    <>
    {isPublic ? <Switch color="success"  defaultChecked /> : <Switch color="success" />}
    </>
  )
}

export default SwitchComp
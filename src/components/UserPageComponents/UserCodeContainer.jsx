import React from 'react'
import { useSelector } from 'react-redux'
import UserCodeCard from "./UserCodeCard"
function UserCodeContainer() {
  const codes = useSelector((state)=>state.searchUser.codes);
  return (
    <>
        <UserCodeCard key={"1345"} title={"code.title"} code={"code.code"} id={"code._id"} isPublic={"code.isPublic"}/>
    </>
  )
}

export default UserCodeContainer
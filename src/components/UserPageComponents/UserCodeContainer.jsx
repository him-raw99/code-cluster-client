import React from "react";
import { useSelector } from "react-redux";
import UserCodeCard from "./UserCodeCard";
function UserCodeContainer() {
  const codes = useSelector((state) => state.searchUser.codes);
  return (
    <>
      <div className="row">
        {codes.map((code) => {
          return (
            <UserCodeCard
              key={code._id}
              title={code.title}
              code={code.code}
              id={code._id}
              isPublic={code.isPublic}
            />
          );
        })}
      </div>
    </>
  );
}

export default UserCodeContainer;

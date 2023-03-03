import React from "react";
import { useSelector } from "react-redux";
import UserCodeContainer from "./UserCodeContainer";
import "./UserCodes.css";
function UserCodes(props) {
  const { codes } = useSelector((state) => state.searchUser);
  return (
    <>
      <h1 className="username">@{props.user}</h1>
      {codes.length === 0 ? (
        <p className="no-code-message">
          It seems @{props.user} has no public codes for you to view
          <br />
          🥲🥲{" "}
        </p>
      ) : (
        <UserCodeContainer user={props.user} />
      )}
    </>
  );
}

export default UserCodes;

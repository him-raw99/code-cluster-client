import React from "react";
import "./ProfileContainer.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
function ProfileContainer(props) {
  return (
    <>
      <div className="profile-item"><h1>Username</h1> : {props.profile.username}</div>
      <div className="profile-item"><h1>Email</h1> : {props.profile.email}</div>
      <div className="profile-item"><h1>View count</h1> <VisibilityIcon fontSize="large" sx={{marginBottom:"6px"}} /> : {props.profile.viewCount}</div>
    </>
  );
}

export default ProfileContainer;

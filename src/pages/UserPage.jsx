import React from "react";
import { useParams } from "react-router-dom";
function UserPage() {
  const { user } = useParams();
  return <>{user}</>;
}

export default UserPage;

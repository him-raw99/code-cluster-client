import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <>
      <div id="navbar">
        <NavLink to={"/"} id="logo">
          Code Cluster
        </NavLink>
        <div id="navbar-right">
          <NavLink to={"/"}>
            <Button
              sx={{
                padding: "6px 15px",
                fontWeight: "500",
                letterSpacing: "1px",
                color: "white",
              }}
              variant="outline"
            >
              Homepage
            </Button>
          </NavLink>
          <NavLink to={"/search"}>
            <Button
              sx={{
                padding: "6px 15px",
                fontWeight: "500",
                letterSpacing: "1px",
                color: "white",
              }}
              variant="outline"
            >
              Search User
            </Button>
          </NavLink>
          <NavLink to={"/login"}>
            <Button
              sx={{ padding: "6px 15px" }}
              color="primary"
              variant="contained"
              endIcon={<LoginIcon />}
            >
              Login
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

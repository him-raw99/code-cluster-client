import React, { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./Navbar.css";
const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <nav className={scroll > 30 ? "navbar shrink" : "navbar"}>
      <NavLink to={"/"} className={scroll > 30 ? "logo shrink-logo" : "logo"}>
        Code Cluster
      </NavLink>
      <div className="navbar-right">
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
    </nav>
  );
};

export default Navbar;

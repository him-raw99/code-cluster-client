import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";
import "./Banner.css"
function Banner() {
  return (
    <>
      <div className="banner row scroll-fix">
        <div
          className="col-lg-5 col-md-12 scroll-fix"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1 className="banner__heading">
            Don't know how to use GitHub, but want to host your code?
          </h1>
          <NavLink to={"/search"}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "white" }}
              color="inherit"
              className="banner__button1"
              endIcon={<SearchIcon />}
            >
              Search User
            </Button>
          </NavLink>
          <NavLink to={"/login"}>
            <Button
              variant="contained"
              className="banner__button2"
              endIcon={<LoginIcon />}
            >
              Login / signup
            </Button>
          </NavLink>
        </div>
        <div className="col-lg-7 col-md-12 scroll-fix onSmallHide">
          <img
            data-aos="fade-right"
            data-aos-duration="1700"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-v76g03YLcdwvzyZsdUu3lNoDfdAEKQhpPfK9CIRNA&s"
            alt="..."
            className="banner__image1"
          />
          <img
            data-aos="fade-left"
            data-aos-duration="1700"
            src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=612x612&w=0&h=Ni1xaMtCOiGvH4NKnl7Y4uTMqXEjd8cYwBDDOjk4TKE="
            className="banner__image2"
            alt="..."
          />
        </div>
      </div>
    </>
  );
}

export default Banner;

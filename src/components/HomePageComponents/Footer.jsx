import React from "react";
import { NavLink } from "react-router-dom";
const year = new Date().getFullYear();
function Footer() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "5rem", fontSize: "1.1rem" }}
      >
        <footer className="py-1 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 scroll-fix">
            <li className="nav-item">
              <NavLink className="nav-link px-4 text-muted" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-4 text-muted" to={"/login"}>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-4 text-muted" to={"/login"}>
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-4 text-muted" to={"/search"}>
                Search User
              </NavLink>
            </li>
            <li className="nav-item">
              <a target={"_blank"} href="https://linktr.ee/_himanshu_rawat_" className="nav-link px-4 text-muted">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© {year} Code Cluster</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;

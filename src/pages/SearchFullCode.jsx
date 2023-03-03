import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import SearchedCode from "../components/UserPageComponents/SearchedCode";

function SearchFullCode() {
  const { user, id } = useParams();
  console.log(user);
  return (
    <>
      <div className="search-code-body">
        <Navbar />
        <SearchedCode user={user} />
        <Footer />
      </div>
    </>
  );
}

export default SearchFullCode;

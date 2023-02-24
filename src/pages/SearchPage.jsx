import React from "react";
import Footer from "../components/HomePageComponents/Footer";
import Navbar from "../components/HomePageComponents/Navbar";
import SearchComponent from "../components/SearchPageComponents/SearchComponent";

function SearchPage() {
  return (
    <>
      <div className="SearchPage__body">
        <Navbar />
        <SearchComponent/>
        <Footer />
      </div>
    </>
  );
}

export default SearchPage;

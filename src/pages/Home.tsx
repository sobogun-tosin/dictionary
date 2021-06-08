import React from "react";
import Banner from "../components/banner/Banner";
import Search from "../components/search/Search";
import SearchDetails from "../components/SearchDetails/SearchDetails";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container">
        <Search />
        <SearchDetails />
      </div>
    </div>
  );
};

export default Home;

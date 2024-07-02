import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Offers from "../../Components/Zones/Zones";
import Categories from "../../Components/Categories/Categories";
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Banner />
        <Categories/>
        <Offers />
      </div>
    </>
  );
};

export default Home;

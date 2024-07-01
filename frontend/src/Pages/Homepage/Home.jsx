import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Offers from "../../Components/Zones/Offers/Offers";
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Banner />
        <Offers />
      </div>
    </>
  );
};

export default Home;

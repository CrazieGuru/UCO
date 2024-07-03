import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Offers from "../../Components/Zones/Zones";
import Categories from "../../Components/Categories/Categories";
import Wrapper from "../../Components/Wrapper/Wrapper";
const Home = () => {
  return (
    <>
      <div className="home">
        <Banner />
        <Categories/>
        <Offers />
        <Wrapper/>
      </div>
    </>
  );
};

export default Home;

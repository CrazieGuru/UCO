import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Offers from "../../Components/Zones/Zones";
import Categories from "../../Components/Categories/Categories";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Zones from "../../Components/Zones/Zones";
const Home = () => {
    const zones_data = [
        {
          title_name: "Supersaver",
          title_sub_name: "Up to 50% Off",
          items: 12,
        },
        {
          title_name: "Vegitables & Fruits",
          title_sub_name: "",
          items: 6,
        },
        {
          title_name: "Cold Drinks & Juices",
          title_sub_name: "Up to 30% Off",
          items: 6,
        },
        {
          title_name: "Top",
          title_sub_name: "Selling",
          items: 6,
        },
        {
          title_name: "Recent Orders",
          title_sub_name: "",
          items: 6,
        },
    ]
  return (
    <>
      <div className="home">
        <Banner />
        <Categories/>
        <Zones data={zones_data}/>
        <Wrapper/>
      </div>
    </>
  );
};

export default Home;

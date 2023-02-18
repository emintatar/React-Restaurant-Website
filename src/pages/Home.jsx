import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/banner.jpg";

const Home = () => {
  return (
    <div 
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
      className="homePage"
    >
      <div className="headerContainer">
        <h1>Burger 33</h1>
        <p>Delicious Hamburgers with 33 Spicy Mix</p>
        <button>
          <Link to="/menu">Order Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;

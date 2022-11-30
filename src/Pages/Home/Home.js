import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-top d-flex justify-content-around mt-3">
        <h3 className="">
          Mono Super Markets <i class="fas fa-check-circle"></i>
        </h3>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider round ">
            <span className="text-online">Online</span>
          </span>
        </label>
      </div>
      <div className="home-banner">
        <h2>Share More to Earn More</h2>
        <p>
          Your organization should share the product more and more to get the
          exciting rewards.
        </p>
        <div className="d-flex justify-content-between">
          <p className="banner-address"> mydokan.io/mario </p>
          <button className="whatsapp-btn">
            <i class="fab fa-whatsapp"></i>Share
          </button>
        </div>
      </div>
      <div className="overview-part">
        <div className="overview-heading d-flex justify-content-between">
          <h2>Overview</h2>
          <p>
            Last Week <i class="fas fa-chevron-down"></i>
          </p>
        </div>
        <div className="overview-cards">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="overview-card">
                <h2 className="overview-card-title">ORDERS</h2>
                <h2 className="overview-card-amount">33</h2>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="overview-card">
                <h2 className="overview-card-title">ORDERS</h2>
                <h2 className="overview-card-amount">33</h2>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="overview-card">
                <h2 className="overview-card-title">ORDERS</h2>
                <h2 className="overview-card-amount">33</h2>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="overview-card">
                <h2 className="overview-card-title">ORDERS</h2>
                <h2 className="overview-card-amount">33</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="active-orders">
          <div className="overview-heading d-flex justify-content-between">
            <h2>Active Orders</h2>
            <p>
              View All <i class="fas fa-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

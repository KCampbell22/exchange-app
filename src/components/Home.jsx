import React, { Component } from "react";
import Converter from "./converter";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid px-0">
      <NavBar />
      <div className="col-12 d-flex my-3 justify-content-center">
        <div className="col-6 d-flex my-3 align-items-center flex-column">
          <h2>Currency Converter</h2>
          <h3>Compare currencies from different countries</h3>

          <div className="currency-box">
            <Link className="currency-link" to="/converter">
              Currency Converter
            </Link>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex my-3 justify-content-center">
        <div className="col-6 d-flex my-3 align-items-center flex-column">
          <h2>Exchange Rates</h2>
          <h3>Type in your amount and see the exchange rates.</h3>

          <div className="currency-box">
            <Link className="currency-link" to="/rates">
              Exchange Rates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

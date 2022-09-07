import React from "react";
import Menu from "./menu";
import { Link, Route, Switch } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-12">
        <nav className="navbar navbar-light bg-dark px-3">
          <button>NavBar</button>
          <Menu />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

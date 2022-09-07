import "./App.css";
import React from "react";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Converter from "./components/converter";
import Menu from "./components/menu";
import Rates from "./components/rates";

function App() {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/converter" component={Converter} />
          <Route path="/rates" component={Rates} />
          <Route path={"/menu"} component={Menu} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

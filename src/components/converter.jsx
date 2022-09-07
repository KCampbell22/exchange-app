import React, { Component } from "react";
import NavBar from "./navBar";
import "bootstrap/dist/css/bootstrap.css";
class Converter extends Component {
  state = {
    currencies: [],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: "",
  };

  render() {
    return (
      <div className="col-12 d-flex flex-column">
        <NavBar />
        <h2>Convert</h2>
        <form action="" className="form-group form d-flex flex-column col-7">
          <label className="me-3" htmlFor="amount">
            Amount
          </label>
          <input
            className="col-3"
            placeholder="Amount"
            type="text"
            name="amount"
            id="amount"
          />
          {/* will be its own component */}
          <select className="col-1 my-2" name="currencies" id="CurrencyList">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <button className="col-1 my-2">swap</button>
          <select className="col-1 my-2" name="currencies" id="CurrencyList">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <label htmlFor="total">Total</label>
          <input className="col-3" type="text" name="total" id="total" />
        </form>
      </div>
    );
  }
}
export default Converter;

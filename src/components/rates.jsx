import React, { Component } from "react";
import NavBar from "./navBar";

class Rates extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 p">
          <form>
            <div className="form-group my-4 mx-2">
              <label htmlFor="exchangeAmount">Amount</label>
              <input type="text" name="exchangeAmount" id="exchange-amount" />
            </div>
          </form>
        </div>
        <div className="table-responsive col-6">
          <table className="col-6 table">
            <thead>
              <tr>
                <th scope="col">Currency</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row">
                <td>USD</td>
                <td>1.00</td>
              </tr>
              <tr scope="row">
                <td>EUR</td>
                <td>0.89</td>
              </tr>
              <tr scope="row">
                <td>GBP</td>
                <td>0.78</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Rates;

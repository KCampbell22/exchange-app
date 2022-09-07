import React, { Component } from "react";
import NavBar from "./navBar";

class Rates extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-5 m-auto">
          <div className="col-12 p">
            <form>
              <div className="form-group my-4 mx-2 d-flex flex-column">
                <label className="me-2" htmlFor="exchangeAmount">
                  Amount
                </label>
                <input type="text" name="exchangeAmount" id="exchange-amount" />
                <p>1.00</p>
              </div>
            </form>
          </div>
          <div className="table-responsive col-12 m-auto">
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
        </div>
      </React.Fragment>
    );
  }
}

export default Rates;

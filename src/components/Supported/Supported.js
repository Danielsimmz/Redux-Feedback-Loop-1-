import React, { Component } from "react";
//import axios from "axios";
//import { connect } from "react-redux";
import { withRouter } from "react-router";
//this component is for taking input on how the user feels supported
class Supported extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <p>
          <b>How well are you being supported</b>
        </p>
        <form onSubmit={this.next}>
          <input
            placeholder="Choose from 1-10"
            type="number"
            min="1"
            max="10"
          ></input>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <button id="review" variant="container" color="primary" type="submit">
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Supported);

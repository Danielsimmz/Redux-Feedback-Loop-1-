import React, { Component } from "react";
//import axios from "axios";
//import { connect } from "react-redux";
import { withRouter } from "react-router";

class Feeling extends Component {
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/understanding");
  };

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
          <b>How are you feeling?</b>
        </p>
        <form onSubmit={this.next}>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="Choose from 1-10"
          ></input>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <button id="review" color="primary" type="submit">
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Feeling);

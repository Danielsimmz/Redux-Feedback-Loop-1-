import React, { Component } from "react";
//import axios from "axios";
//import { connect } from "react-redux";
import { withRouter } from "react-router";


class Understanding extends Component {
  //this is the function for the next button that takes
  //the user to the next page in the process
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/supported");
  };

  //this function takes user to previous page
  previous = (event) => {
    event.preventDefault();
    this.props.history.push("/");
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
          <b>How well are you understanding the content</b>
        </p>
        <form onSubmit={this.next}>
          <button variant="container" color="primary" onClick={this.previous}>
            Previous
          </button>
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

export default withRouter(Understanding);

import React, { Component } from "react";
//import axios from "axios";
//import { connect } from "react-redux";
import { withRouter } from "react-router";

class ReviewForm extends Component {
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
        <h2>Review your feedback</h2>
        <form onSubmit={this.next}>
          {/*<button variant="container" color="primary" onClick={this.previous}>
            Previous
    </button>*/}
          <ul>
            <li>Feeling: 5</li>
            <li>Understanding: 5</li>
            <li>Supported: 5</li>
            <li>Comments: Wadinda</li>
          </ul>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <br />
          <button id="review" variant="container" color="primary" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);

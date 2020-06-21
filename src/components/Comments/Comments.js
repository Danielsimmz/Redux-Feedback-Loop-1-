import React, { Component } from "react";
//import axios from "axios";
//import { connect } from "react-redux";
import { withRouter } from "react-router";
//this component is for taking input on how the user feels supported
class Comments extends Component {
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
          <b>Any comments you want to leave</b>
        </p>
        <form onSubmit={this.next}>
          <input
            placeholder="Add comments"
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

export default withRouter(Comments);

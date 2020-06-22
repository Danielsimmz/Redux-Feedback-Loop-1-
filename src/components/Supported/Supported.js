import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//this component is for taking input on how the user feels supported
class Supported extends Component {
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/comments");
  };

  //this function takes user to previous page
  previous = (event) => {
    event.preventDefault();
    this.props.history.push("/understanding");
  };
  
  //set state to local variable
  state = {
    input: {
      support: "",
    },
  };

  //capture input value
  handleChange = (event) => {
    this.setState({
      input: {
        support: Number(event.target.value),
      },
    });
  };
  //store input value in global state
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_SUPPORT", payload: this.state.input });
    //reset the state
    this.setState({
      input: {
        support: "",
      },
    });
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
          <b>How well are you being supported</b>
        </p>
        {/*on submission this form will take you to the next page in the process */}
        <form onSubmit={this.next}>
          <button variant="container" color="primary" onClick={this.previous}>
            Previous
          </button>
          <input
            placeholder="Choose from 1-10"
            //type="number"
            min="1"
            max="10"
            onChange={this.handleChange}
          ></input>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <button
            id="review"
            variant="container"
            color="primary"
            type="submit"
            onClick={(event) => this.handleClick(event)}
          >
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Supported));

import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Feeling extends Component {
//this is the function for the next button that takes
  //the user to the next page in the process
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/understanding");
  };

  //set state to local variable
  state = {
    input: {
      feeling: "",
    },
  };

  //capture input value
  handleChange = (event) => {
    this.setState({
      input: {
        feeling: Number(event.target.value),
      },
    });
  };
  //store input value in global state
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch({ type: "GET_FEELING", payload: this.state.input });
    //reset the state after submission
    this.setState({
      input: {
        feeling: "",
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
          <b>How are you feeling?</b>
        </p>
        {/*on submission this form will take you to the next page in the process */}
        <form onSubmit={this.next}>
          <input
            value={this.state.input.feeling}
            //type="number"
            min="1"
            max="10"
            placeholder="Choose from 1-10"
            onChange={this.handleChange}
          ></input>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <button
            id="review"
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

export default withRouter(connect()(Feeling));
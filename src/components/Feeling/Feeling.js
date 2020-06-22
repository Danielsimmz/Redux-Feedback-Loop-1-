import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Feeling extends Component {
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/understanding");
  };
  state = {
    input: {
      feeling: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: {
        feeling: event.target.value
      }
    })
  }

  handleSubmit = () => {
    const {dispatch} = this.props;
    dispatch({ type: 'GET_FEELING', payload: this.state.input});
    //reset the state
    this.setState({
      input: {
        feeling: ""
      }
    })
  }
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
          value={this.state.input.feeling}
            type="number"
            min="1"
            max="10"
            placeholder="Choose from 1-10"
            onChange={this}
          ></input>
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <button id="review" color="primary" type="submit"
          onClick={(event) => this.handleSubmit()}>
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(Feeling));
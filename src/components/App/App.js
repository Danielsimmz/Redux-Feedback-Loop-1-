import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
//import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import all the components:
import Feeling from "../Feeling/Feeling";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ReviewForm from '../ReviewForm/ReviewForm';

class App extends Component {
  // refreshPizzas gets the pizzas from the database and adds them to the Redux state
  // getFeedback = () => {
  //   // grab the dispatch function from props
  //   const { dispatch } = this.props;

  //   // axios server request
  //   axios
  //     .get("/feedback")
  //     .then((response) => {
  //       dispatch({ type: "GET_PIZZAS", payload: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }; // end refreshPizzas

  render() {
    return (
      //setup routes for the different page forms
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Feeling />
            </Route>
            <Route path="/understanding">
              <Understanding />
            </Route>
            <Route path="/supported">
              <Supported />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/review">
              <ReviewForm />
            </Route>
          </Switch>
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
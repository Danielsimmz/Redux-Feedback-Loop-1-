import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
//import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Feeling />
            </Route>
            <Route path="/understanding">
              <Understanding />
            </Route>
          </Switch>
          {/* <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header> */}
          <br />
        </div>
      </Router>
    );
  }
}

export default App;
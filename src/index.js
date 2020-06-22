import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//these are our dispatch actions
//put feedback from database onto page (GET)
const feedbackReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "GET_FEEDBACK") {
    // payload must be an array of FEEDBACK
    newState = [...action.payload];
  }else if (action.type === "GET_FEELING"){
      newState = [...state, action.type];
  }else if (action.type === "GET_UNDERSTANDING"){
      newState = [...state, action.type];
  }else if (action.type === "GET_SUPPORT"){
      newState = [...state, action.type];
  }else if (action.type === "GET_COMMENTS"){
      newState = [...state, action.type];
  }
  return newState;
};
//creating our store
const storeInstance = createStore(
  combineReducers({
    feedback: feedbackReducer,
    
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
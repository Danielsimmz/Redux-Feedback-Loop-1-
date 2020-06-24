import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
/* store = {
  feedbackReducer: [ 'feeling: 5', 'understanding: 2' , 'support: 3']
}
// { feeling: 5, understanding: 2, support: 3 }
// obj.feeling obj.understanding obj.support
*/
//these are our dispatch actions
//put feedback from database onto page (GET)
const feedbackReducer = (state = {}, action) => {
  let newState = {...state};
  if (action.type === "GET_FEELING") {
    newState = { ...state, feeling: action.payload };
  } else if (action.type === "GET_UNDERSTANDING") {
    newState = { ...state, understanding: action.payload };
  } else if (action.type === "GET_SUPPORT") {
    newState = { ...state, support: action.payload };
  } else if (action.type === "GET_COMMENTS") {
    newState = { ...state, comments: action.payload };
  }
  return newState;
};
//creating our store
const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
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
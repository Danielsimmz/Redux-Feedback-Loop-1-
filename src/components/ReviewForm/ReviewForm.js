import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class ReviewForm extends Component {
  //this is the function for the next button that takes
  //the user to the next page in the process
  next = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  //this function takes user to previous page
  previous = (event) => {
    event.preventDefault();
    this.props.history.push("/comments");
  };
//this function loops through the array of feedback and 
  postFeedback =() => {
    
    console.log(`FEEDBACK POST IS: `, this.props.feedback);
    axios
      .post("/feedback", this.props.feedback)
      .then(() => {
        console.log("SENDING:", this.props.feedback);
        //clear global state
        // this.props.dispatch({ type: 'GET_FEEDBACK', payload:this.props.feedback });
      })
      .catch((error) => {
        console.log("SORRY, couldnt send post", error);
      });
      }
    
  render() {
      console.log(this.props.feedback);
      
    //   const { feeling, understanding, support, comments } = this.props.feedback;
    return (
      <div>
        <h2>Review your feedback</h2>
        <form onSubmit={this.next}>
          {/*<button variant="container" color="primary" onClick={this.previous}>
            Previous
    </button>*/}
     {/* {this.props.feedback.map((feedbacks, index) => {
        return ( */}
            <ul>
                <li >Feeling: {this.props.feedback.feeling}
                <br/>Understanding: {this.props.feedback.understanding}
                <br/>Support: {this.props.feedback.support}
                <br/>Comments: {this.props.feedback.comments}
                </li>
            </ul>
        {/* )
    })} */}
          {/* <ul>
            <li>Feeling: 5</li>
            <li>Understanding: 5</li>
            <li>Supported: 5</li>
            <li>Comments: Wadinda</li>
          </ul> */}
          {/*<select>
            <menuitem value="number">Delivery</menuitem>
          </select>*/}
          <br />
          <button id="review" variant="container" color="primary" type="submit" onClick={this.postFeedback}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // we have to take the global state, and only pull out
    // what we care about. then return that object, which
    // will then be passed in as a prop of the same name.
    // pull feedback from Redux store
    feedback: state.feedbackReducer,
  };
};

export default withRouter(connect(mapStateToProps)(ReviewForm));
import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
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
//this function loops through the array of feedback and 
  postFeedback =() => {
    const { feedback } = this.props;
    let feeling = '';
    let understanding = '';
    let support = '';
    let comments = '';
    for (let obj of feedback){
        if (obj.feeling){
            feeling = obj.feeling
        }
        if (obj.understanding) {
          feeling = obj.understanding;
        }
        if (obj.support) {
          feeling = obj.support;
        }
        if (obj.comments) {
          feeling = obj.comments;
        }
    }
    const feedbackEntry = {
      feeling: feeling,
      understanding: understanding,
      support: support,
      comments: comments,
    };
    console.log(`FEEDBACK POST IS: `, feedbackEntry);
    axios.post('/feedback', feedbackEntry)
          .then(() =>{
            console.log('SENDING:', feedbackEntry);
            //clear global state
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: [ ]});
          }).catch((error) => {
              console.log('SORRY, couldnt send post', error);
          });
      }
    
  render() {
      
    //   const { feeling, understanding, support, comments } = this.props.feedback;
    return (
      <div>
        <h2>Review your feedback</h2>
        <form onSubmit={this.next}>
          {/*<button variant="container" color="primary" onClick={this.previous}>
            Previous
    </button>*/}
     {this.props.feedback.map((feedbacks, index) => {
        return (
            <ul>
                <li key={`feedbacks-input${index}`}>Feeling:{feedbacks.feeling}
                <br/>Understanding:{feedbacks.understanding}
                <br/>Support:{feedbacks.support}
                <br/>Comments:{feedbacks.comments}
                </li>
            </ul>
        )
    })}
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
          <button id="review" variant="container" color="primary" type="submit">
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
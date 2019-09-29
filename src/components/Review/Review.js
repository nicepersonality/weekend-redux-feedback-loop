import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  handleSubmit = (event) => {
    // Post the feedback upon form submission…
    event.preventDefault();
    // console.log('handleSubmit');
    const feedback = this.props.reduxState.feedbackReducer;
    const newFeedback = {
      feeling: feedback.feeling,
      understanding: feedback.understanding,
      support: feedback.support,
      comments: feedback.comments
    }
    alert(`newFeedback: ${JSON.stringify(newFeedback)}`);
    axios({
      method: 'POST',
      url: '/feedback',
      data: newFeedback
    }).then((response) => {
      alert(`server response: ${JSON.stringify(response)}`);
    }).catch(function (error) {
      console.log('error posting image:', error);
    }); // end POST /gallery
  } // end handleSubmit

  render() {
    return (
      <section className="Review-component">
        <h2>Feedback Review</h2>
        <p>Please review your answers. If you are satisfied with your feedback, go ahead and submit it!</p>
        <h3>Your Feedback:</h3>
        <ul className="Review-list">
          <li>Feeling: <strong>{this.props.reduxState.feedbackReducer.feeling}</strong></li>
          <li>Understanding: <strong>{this.props.reduxState.feedbackReducer.understanding}</strong></li>
          <li>Support: <strong>{this.props.reduxState.feedbackReducer.support}</strong></li>
          <li>Comments: <strong>{this.props.reduxState.feedbackReducer.comments}</strong></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Review);
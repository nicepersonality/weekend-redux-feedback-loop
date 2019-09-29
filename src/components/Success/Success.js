import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    // clear the feedback
    const reset = {
      feeling: null,
      understanding: null,
      support: null,
      comments: null
    };
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: reset
    });
    // return home
    this.props.history.push('/');
  }

  render() {
    return (
      <section className="Success-component">
        <h2>Success!</h2>
        <p>Thank you! Your feedback was posted successfully.</p>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Create More Feedback</button>
        </form>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Success);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputNumber extends Component {

  handleChange = (event) => {
    const feedbackObject = {
      [this.props.feedbackType]: event.target.value
    }
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: feedbackObject
    });
  }


  render() {
    return (
      <div className="InputNumber-component">
        <input
          type="number"
          inputMode="numeric"
          min="1" max="5" step="1"
          placeholder="1–5: 5 is best"
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(InputNumber);
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
      <div className="InputTextarea-component">
        <textarea
          rows="6" cols="80"
          placeholder={this.props.placeholder}
          onChange={(event) => this.handleChange(event)}
        ></textarea>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(InputNumber);
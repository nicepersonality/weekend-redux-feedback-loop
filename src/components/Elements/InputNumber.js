import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputNumber extends Component {
  state = {
    feedback: undefined
  }
  componentDidMount = () => {
    // if there’s already feedback, load it into the input field
    if (this.props.reduxState.feedbackReducer[this.props.feedbackType]) {
      this.setState({feedback: this.props.reduxState.feedbackReducer[this.props.feedbackType]})
    }
  }

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
          defaultValue={this.state.feedback}
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
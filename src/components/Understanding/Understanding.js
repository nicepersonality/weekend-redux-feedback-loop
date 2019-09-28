import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputNumber from '../Elements/InputNumber';
import NextButton from '../Elements/NextButton';

class Understanding extends Component {
  render() {
    return (
      <section className="Understanding-component">
        <h2>Understanding Feedback</h2>
        <p>How are you <strong>understanding</strong> today’s material?</p>
        <div><label>My understanding is at a…
          <InputNumber feedbackType="understanding" />
        </label></div>
        <NextButton
          required="true"
          requiredValue={this.props.reduxState.feedbackReducer.understanding}
          history={this.props.history}
          nextPage="/support"
        />
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Understanding);
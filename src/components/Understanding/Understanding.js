import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputNumber from '../Elements/InputNumber';
import NextButton from '../Elements/NextButton';
import BackButton from '../Elements/BackButton';

class Understanding extends Component {
  render() {
    return (
      <section className="Understanding-component">
        <h2>Understanding Feedback</h2>
        <p>How are you <strong>understanding</strong> today’s material?</p>
        <div><label>My understanding is at a…
          <InputNumber feedbackType="understanding" />
        </label></div>
        <BackButton
          history={this.props.history}
          prevPage="/feeling"
        />
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
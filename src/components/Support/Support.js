import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputNumber from '../Elements/InputNumber';
import NextButton from '../Elements/NextButton';
import BackButton from '../Elements/BackButton';

class Support extends Component {
  render() {
    return (
      <section className="Support-component">
        <h2>Support Feedback</h2>
        <p>How <strong>supported</strong> by Prime staff were you today?</p>
        <div><label>My support was…
          <InputNumber feedbackType="support" />
        </label></div>
        <BackButton
          history={this.props.history}
          prevPage="/understanding"
        />
        <NextButton
          required="true"
          requiredValue={this.props.reduxState.feedbackReducer.support}
          history={this.props.history}
          nextPage="/comments"
        />
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Support);
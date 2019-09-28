import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputNumber from '../Elements/InputNumber';
import NextButton from '../Elements/NextButton';

class Feeling extends Component {
  render() {
    return (
      <section className="Feeling-component">
        <h2>Feeling Feedback</h2>
        <p>How are you <strong>feeling</strong> today?</p>
        <div><label>I’m feeling…
          <InputNumber feedbackType="feeling" />
        </label></div>
        <NextButton
          required="true"
          requiredValue={this.props.reduxState.feedbackReducer.feeling}
          history={this.props.history}
          nextPage="/understanding"
        />
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Feeling);
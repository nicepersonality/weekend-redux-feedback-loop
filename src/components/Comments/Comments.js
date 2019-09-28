import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTextarea from '../Elements/InputTextarea';
import NextButton from '../Elements/NextButton';

class Comments extends Component {
  render() {
    return (
      <section className="Comments-component">
        <h2>Feedback Comments</h2>
        <p>Do you have any other <strong>comments</strong> for us?</p>
        <div><label>My comments:
          <InputTextarea 
            feedbackType="comments" 
            placeholder="(Optional)"
          />
        </label></div>
        <NextButton
          required="false"
          history={this.props.history}
          nextPage="/review"
        />
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Comments);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NextButton extends Component {

  handleClick = () => {
    // make sure the current feedback has been completed
    // (if applicable)
    if ( (this.props.required === false) || (this.props.requiredValue > 0) ) {
      this.props.history.push(this.props.nextPage);
    } else {
      alert ('You must enter your feedback to proceed!');
    }
  }


  render() {
    return (
      <div className="NextButton-component">
        <button onClick={this.handleClick}>Next ▶︎</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(NextButton);
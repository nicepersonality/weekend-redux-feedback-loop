import React, { Component } from 'react';
import { connect } from 'react-redux';
import NextButton from '../Elements/NextButton';

class Home extends Component {
  render() {
    return (
      <section className="Home-component">
        <h2>Welcome!</h2>
        <p>Your feedback is <strong>extremely h*ckin’ important</strong> to us, and Luke will be sad if you don’t provide it. Don’t make Luke sad!</p>
        <NextButton
          required="false"
          history={this.props.history}
          nextPage="/feeling"
        />
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Home);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {
  render() {
    return (
      <section className="Success-component">
        <h2>Success</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Success);
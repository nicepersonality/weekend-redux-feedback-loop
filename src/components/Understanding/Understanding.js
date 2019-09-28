import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  render() {
    return (
      <section className="Understanding-component">
        <h2>Understanding</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Understanding);
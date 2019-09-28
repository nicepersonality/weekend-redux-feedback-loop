import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <section className="Feeling-component">
        <h2>Feeling</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Feeling);
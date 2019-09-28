import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  render() {
    return (
      <section className="Comments-component">
        <h2>Comments</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Comments);
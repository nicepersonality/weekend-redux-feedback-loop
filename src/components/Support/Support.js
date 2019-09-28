import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return (
      <section className="Support-component">
        <h2>Support</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Support);
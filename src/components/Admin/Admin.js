import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <section className="Admin-component">
        <h2>Admin</h2>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Admin);
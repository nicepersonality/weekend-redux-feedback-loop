import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer-component">
        <h4>&copy;2019 Lilith Štefánia Bentley</h4>
      </footer>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Footer);
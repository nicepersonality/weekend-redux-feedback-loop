import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h2>Don't forget it!</h2>
        </header>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
}) // put the redux store values in component props
export default connect (putReduxStateOnProps) (App);
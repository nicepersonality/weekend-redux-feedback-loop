import React, { Component } from 'react';
import { connect } from 'react-redux';

class BackButton extends Component {

  handleClick = () => {
      this.props.history.push(this.props.prevPage);
  }


  render() {
    return (
      <div className="BackButton-component">
        <button onClick={this.handleClick}>◀︎ Back</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(BackButton);
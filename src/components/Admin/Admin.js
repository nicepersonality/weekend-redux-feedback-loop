import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Admin.css';

class Admin extends Component {
  state = {
    feedbackData: []
  }

  componentDidMount = () => {
    this.getFeedback();
  }

  getFeedback = () => {
    // retrieve the feedback from the server
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      // populate state with the feedback
      // console.log('response:', JSON.stringify(response.data));
      this.setState({
        feedbackData: response.data
      })
    }).catch(function (error) {
      console.log('error getting feedback:', error);
      alert('There was a problem retrieving the feedback. Try again later maybe?')
    }); // end GET /feedback
  }

  render() {
    return (
      <section className="Admin-component">
        <h2>Admin</h2>
        <table className="Admin-table">
          <thead>
            <tr>
              <th className="feelingCol"><span>Feeling</span></th>
              <th className="understandingCol"><span>Understanding</span></th>
              <th className="supportCol"><span>Support</span></th>
              <th className="commentsCol"><span>Comments</span></th>
            </tr>
          </thead>
          <tbody>
            {/* build table rows from the feedback in state */}
            {this.state.feedbackData.map(item => (
              <tr key={item.id}>
                <td className="feelingCol">{item.feeling}</td>
                <td className="understandingCol">{item.understanding}</td>
                <td className="supportCol">{item.support}</td>
                <td className="commentsCol">{item.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Admin);
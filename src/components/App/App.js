import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/feeling" component={Feeling}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/review" component={Review}/>
          <Route exact path="/success" component={Success}/>
          <Route exact path="/admin" component={Admin} />
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
}) // put the redux store values in component props
export default connect (putReduxStateOnProps) (App);
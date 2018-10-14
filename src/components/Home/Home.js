import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';

class Home extends Component {
  
    render() {
      return (
        <Router>
          <div>
            <h1>Leave Feedback Here!</h1>
            
              <Link to="/feeling">Click here to begin leaving feedback</Link>
            
            <Route exact path='/feeling' component={Feeling} />
            
          </div>
        </Router>
      );
    }
  }
  
  export default (Home);
  

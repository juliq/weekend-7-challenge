import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          {/* The links below were moved into their own components */}
          {/* <ul>
            <li><Link to="/feeling">Feeling</Link></li>
            <li><Link to="/understanding">Understanding</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/success">Success</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/feeling' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/admin' component={Admin} />
          
        </div>
      </Router>
    );
  }
}

export default connect()(App);

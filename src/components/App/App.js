import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';


class App extends Component {


  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.feedback })
  }

  // currying -- to handle putting events for different properties on the DOM
  // handleChangeFor = (property) => (event) => {
  //   this.setState({
  //     feedback: {
  //       ...this.state.feedback,
  //       [property]: event.target.value
  //     }
  //   });
  // }

  // GET Request for responses from the database
  getFeedback = () => {
    axios.get('/feedback').then((response) => {
      this.props.dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data
      })
    }).catch((error) => {
      console.log('error making get', error);
    });
  }

  // enables function to run on page load
  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <ul>
            <li><Link to="/"></Link></li>
            <li><Link to="/understanding">Understanding</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/comment">Comments</Link></li>
            <li><Link to="/success">Success</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <Route exact path='/' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comment' component={Comment} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/admin' component={Admin} />

          <form onSubmit={this.handleClick}>


            {/* <input type="text" placeholder="How well are you understanding the content?" onChange={this.handleChangeFor('understanding')} value={this.state.feedback.understanding} /> */}
            {/* <input type="text" placeholder="How well are you being supported?" onChange={this.handleChange('support')} value={this.state.feedback.support} /> */}
            {/* <input type="text" placeholder="Any comments you want to leave?" onChange={this.handleChange('comments')} value={this.state.feedback.comments} /> */}
            <input type="submit" value="Next" />
            {/* if the type of input is "submit" it will show up on the dom as a button */}
          </form>
          
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(App);

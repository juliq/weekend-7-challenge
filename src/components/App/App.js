import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  state = {
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
      flagged: '',
      date: '',
    }
  }


  handleClick = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.feedback })
  }

  // currying -- to handle putting events for different properties on the DOM
  handleChangeFor = (property) => (event) => {
    this.setState({
      feedback: {
        ...this.state.feedback,
        [property]: event.target.value
      }
    });
  }

  // GET Request for responses from the database
  // getAnswers() {
  //   axios.get('/feedback').then((response) => {
  //     this.props.dispatch({
  //       type: 'GET_ANSWER_1'
  //       payload: response.data  //////////////////////////////???????????
  //     })
  //   })
  // }

  // componentDidMount() {
  //   axios({
  //     method: 'GET',
  //     url: '/feedback',
  //   }).then(response => {
  //     this.props.dispatch({ type: 'GET_ANSWERS', payload: response.data.results })
  //   }).catch(error => {
  //     console.log('error', error);
  //     alert('error');
  //   });
  // }

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
            <li><Link to="/content">Content</Link></li>
            <li><Link to="/support">Admin</Link></li>
            <li><Link to="/comments">Admin</Link></li>
            <li><Link to="/success">Admin</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <Route exact path='/' component={Feeling}/>
          <Route exact path='/support' component={Support}/>
          <Route exact path='/comments' component={Comment}/>
          <Route exact path='/success' component={Success}/>
          <Route exact path='/admin' component={Admin}/>

          <form onSubmit={this.handleClick}>

            
            <input type="text" placeholder="How well are you understanding the content?" onChange={this.handleChangeFor('understanding')} value={this.state.feedback.understanding} />
            <input type="text" placeholder="How well are you being supported?" onChange={this.handleChangeFor('support')} value={this.state.feedback.support} />
            <input type="text" placeholder="Any comments you want to leave?" onChange={this.handleChangeFor('comments')} value={this.state.feedback.comments} />
            <input type="submit" value="Next" /> 
            {/* if the type of input is "submit" it will show up on the dom as a button */}
          </form>
          <Route exact path="/" component={Feeling} />
        </div>
      </Router>
    );
  }
}
export default connect()(App);

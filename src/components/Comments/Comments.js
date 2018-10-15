import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// This page displays question 4
class Comments extends Component {

    state = {
        comments: '',
    }

    handleSubmit = async event => {  // after clicking submit feedback, anything after await will wait until the thing before it runs
        event.preventDefault();
        await this.props.dispatch({ // dispatch is the action to the redux store
            type: 'ADD_COMMENTS',
            payload: this.state.comments
        });
        await this.sendFeedback();
        await this.props.history.push('/success')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    // sendFeedback sends all feedback to server/router at one time
    sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.answers
        }).then(response => {
            console.log(response);
        }).catch(error => {
            alert('Error making POST: ', error);
        });
    }

    render() {
        return (
            <div className="Comments">
                <h3>Any comments you would like to leave?</h3>
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus type="text"    // autoFocus is . . .
                        placeholder="Any comments you would like to leave?"
                        onChange={this.handleChange}
                        value={this.state.comments}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    answers: state.answers
})

export default connect(mapStateToProps)(Comments);
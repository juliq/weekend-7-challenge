import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 2
class Understanding extends Component {

    state = {
        understanding: 0,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.feedback })
    }

    handleContent = (event) => {
        this.setState({
            content: event.target.value
        }
        );
    }

    render() {
        return (
            <div className="Understanding">
                <form onSubmit={this.handleSubmit}></form>
                <input type="number"
                    placeholder="How well are you understanding the content?"
                    onChange={this.handleContent('understanding')}
                    value={this.state.feedback.content}
                />
                <input type="submit" value="Next" />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    understanding: state.understanding

})

export default Understanding;
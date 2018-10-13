import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 3
class Comment extends Component {

    state = {
        comment: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.feedback })
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
        this.props.history.push('/success')
    }

    render() {
        return (
            <div className="Comment">
                <form onSubmit={this.handleSubmit}></form>
                <input autoFocus type="text"
                    placeholder="Any comments you would like to leave?"
                    onChange={this.handleChange('support')}
                    value={this.state.feedback.support}
                />
                <input type="submit" value="Submit" />
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     support: state.support
// })

export default connect()(Comment);
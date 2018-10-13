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

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
        this.props.history.push('/support')
    }

    render() {
        return (
            <div className="Understanding">
                <form onSubmit={this.handleSubmit}></form>
                <input autoFocus type="number"
                    placeholder="How well are you understanding the content?"
                    onChange={this.handleChange('understanding')}
                    value={this.state.feedback.content}
                />
                <input type="submit" value="Next" />
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     understanding: state.understanding
// })

export default connect()(Understanding);
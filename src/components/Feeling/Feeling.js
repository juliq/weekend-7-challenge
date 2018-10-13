import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 1
class Feeling extends Component {

    state = {
        feeling: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENT', payload: this.state.feedback })
    }

    handleFeeling = (event) => {
        this.setState({
            feedback: event.target.value
        }
        );
    }

    render() {
        return (
            <div className="Feeling">
                <form onSubmit={this.handleSubmit}></form>
                <input type="text"
                    placeholder="How are you feeling today?"
                    onChange={this.handleChangeFor('feeling')}
                    value={this.state.feedback.feeling}
                />
                <input type="submit" value="Next" />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    feeling: state.feeling

})

export default Feeling;
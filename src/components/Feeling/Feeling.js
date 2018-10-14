import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 1
class Feeling extends Component {

    state = {
        feeling:'',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feedback });
        this.props.history.push('/understanding');
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    render() {
        return (
            <div className="Feeling">
                <form onSubmit={this.handleSubmit}>
                <input autoFocus type="number"
                    placeholder="How are you feeling today?"
                    onChange={this.handleChange}
                    value={this.state.feeling}
                />
                <input type="submit" value="Next" />
                </form>
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     feeling: state.feeling
// })

export default connect()(Feeling);
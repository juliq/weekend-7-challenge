import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 2
class Understanding extends Component {

    state = {
        understanding: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding });
        this.props.history.push('/support')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        });
    }

    render() {
        return (
            <div className="Understanding">
                <form onSubmit={this.handleSubmit}>
                <input autoFocus type="number"
                    placeholder="How well are you understanding the content?"
                    onChange={this.handleChange}
                    value={this.state.understanding}
                />
                <input type="submit" value="Next" />
                </form>
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     understanding: state.understanding
// })

export default connect()(Understanding);
import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 3
class Support extends Component {

    state = {
        support: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
        this.props.history.push('/comments')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        });
    }

    render() {
        return (
            <div className="Support">
                <h3>How well are you being supported? Please rate on a scale of 1-5.</h3>
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus type="number"
                        placeholder="How well are you being supported?"
                        onChange={this.handleChange}
                        value={this.state.support}
                    />
                    <input type="submit" value="Next" />
                </form>
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     support: state.support
// })

export default connect()(Support);
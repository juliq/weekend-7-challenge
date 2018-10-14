import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 3
class Comments extends Component {

    state = {
        comments: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.feedback });
        this.props.history.push('/success')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        });
    }

    render() {
        return (
            <div className="Comments">
                <form onSubmit={this.handleSubmit}>
                <input autoFocus type="text"    // autoFocus . . .
                    placeholder="Any comments you would like to leave?"
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     support: state.support
// })

export default connect()(Comments);
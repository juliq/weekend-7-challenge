import React, { Component } from 'react';
import { connect } from 'react-redux';

// This page displays question 3
class Success extends Component {


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/feeling')
    }

    render() {
        return (
            <div className="Success">
            <h1>Thank You!</h1>
                <button type="submit" value="" onClick={this.handleSubmit}><h1>Leave New Feedback</h1></button>
            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     support: state.support
// })

export default connect()(Success);
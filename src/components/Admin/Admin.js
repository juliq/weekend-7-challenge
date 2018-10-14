import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Admin extends Component {

    // GET Request for responses from the database
    getFeedback = () => {
        axios.get('/feedback').then((response) => {
            this.props.dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data
            })
        }).catch((error) => {
            console.log('error making get', error);
        });
    }

    // DELETE -- request to delete a feedback entry


    // enables function to run on page load
    componentDidMount() {
        this.getFeedback();
    }


    render() {
        return (
            <React.Fragment>
                {JSON.stringify(this.props.state)}
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.feedback.map(feedback => {
                            return (
                                <tr>
                                    <td>{feedback.feeling}</td>
                                    <td>{feedback.understanding}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td><button type="delete" value="" onClick={this.handleSubmit}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ feedback: state.feedback });

export default connect(mapStateToProps)(Admin);
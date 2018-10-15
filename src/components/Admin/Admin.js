import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import './Admin.css';


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
    handleDelete = (data) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this feedback file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            if (willDelete) {
                axios({
                    method: 'DELETE',
                    url: `/feedback/${data.id}`,
                    params: data
                }).then(() => {
                    this.getFeedback(); // getFeedback updates the page
                }).catch((error) => {
                    console.log('error deleting info', error);
                });
            } else {
                swal("Your feedback file is safe!");
            }
        });
    }


    // enables function to run on page load
    componentDidMount() {
        this.getFeedback();
    }


    render() {
        return (
                <React.Fragment>
                    {/* {JSON.stringify(this.props.state)} */}
                    <table className="Feedback">
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
                                    <tr key={feedback.id}>
                                        <td>{feedback.feeling}</td>
                                        <td>{feedback.understanding}</td>
                                        <td>{feedback.support}</td>
                                        <td>{feedback.comments}</td>
                                        <td><button type="delete" value="" onClick={() => this.handleDelete(feedback)}>Delete</button></td>
                                        {/* Be sure to curry the onClick event by adding an anonymous function before the handleDelete to prevent 
                                    the handleDelete running page load which would delete the entire database. */}
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
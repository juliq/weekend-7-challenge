import React, { Component } from 'react';
import { connect } from 'react-redux';


class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                {JSON.stringify(this.props.state)}
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
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
                                    <td>{feedback.comprehension}</td>
                                    <td>{feedback.support}</td>
                                    <td>{feedback.comments}</td>
                                    <td>{feedback.delete}</td>
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
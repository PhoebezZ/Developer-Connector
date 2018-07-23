import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Developer Connector</h1>
                                <p className="lead"> Create a developer profile, share posts and get connected from other developers</p>
                                <hr />
                                <Link
                                    to="/register"
                                    className="btn btn-lg mr-2"
                                    style={{ backgroundColor: '#62B8B1', color: 'white' }}
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    to="/login"
                                    className="btn btn-lg"
                                    style={{ backgroundColor: 'white', color: '#62B8B1' }}
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
    };
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Landing);

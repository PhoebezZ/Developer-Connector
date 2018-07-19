import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import icon from '../../img/icon.png';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm mb-4 navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" ><img className="icon mr-2" src={icon} alt="icon" />DevConnector</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles"> Developers</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
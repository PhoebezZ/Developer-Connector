import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import store from './store/configureStore';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Navbar />
                        {/* <Landing /> */}
                        <Route exact={true} path='/' component={Landing} />
                        <div className="container">
                            <Route exact={true} path='/register' component={Register} />
                            <Route exact={true} path='/login' component={Login} />
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

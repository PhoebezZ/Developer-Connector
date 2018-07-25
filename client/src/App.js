import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import store from './store/configureStore';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        // this.props.history.push('/login');
        window.location.href = '/login';
    }
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
                            <Route exact={true} path='/profiles' component={Profiles} />
                            <Route exact={true} path='/profile/:handle' component={Profile} />
                            <Switch>
                                <PrivateRoute exact={true} path='/dashboard' component={Dashboard} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/create-profile' component={CreateProfile} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/edit-profile' component={EditProfile} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/add-experience' component={AddExperience} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/add-education' component={AddEducation} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/feed' component={Posts} />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact={true} path='/post/:id' component={Post} />
                            </Switch>
                            <Route exact={true} path='/not-found' component={NotFound} />
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;
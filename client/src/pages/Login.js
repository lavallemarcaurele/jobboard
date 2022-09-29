import React from 'react';
import Navigation from '../components/Navigation';
import LoginSystem from '../components/LoginSystem';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Login = () => {
    return (
        <div>
            <Navigation />
            <br />
            <div className="container">
                <div class="row justify-content-center">
                    <LoginSystem />
                </div>
            </div>
        </div>
    );
};

export default Login;
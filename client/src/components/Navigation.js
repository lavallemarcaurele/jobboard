import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">employ me 😎</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><NavLink to="/">Home</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink to="/Login">Login</NavLink></a>
                        </li>
                    </ul>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </nav>
    );
};

export default Navigation;
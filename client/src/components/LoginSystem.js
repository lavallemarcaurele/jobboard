import React, { useState } from 'react';
import Axios from 'axios';

function LoginSystem() {
    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const register = () => {
        Axios.post('http://localhost:5000/register', {
            name: nameReg,
            username: usernameReg, 
            email: emailReg,
            password: passwordReg
        }).then((response)  => {
            console.log(response);
        })
    }

    const login = () => {
        Axios.post('http://localhost:5000/login', {
            email: email,
            password: password
        }).then((response)  => {
            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].email)
            }
            console.log(response);
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="card">
                    <h1 className="text-center">Login</h1>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" onChange={(e)  => {setEmail(e.target.value)}}/>
                            <label className="form-label" for="loginName">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" onChange={(e)  => {setPassword(e.target.value)}}/>
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
                    </form>
                </div>
            </div>

            <div className="col-xs-6 col-sm-6 col-md-6">
                <div className="card">
                    <h1 className="text-center">Register</h1>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control" onChange={(e)  => {setNameReg(e.target.value)}}/>
                            <label className="form-label" for="registerName">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" onChange={(e)  => {setUsernameReg(e.target.value)}}/>
                            <label className="form-label" for="registerUsername">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" onChange={(e)  => {setEmailReg(e.target.value)}}/>
                            <label className="form-label" for="registerEmail">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control"/>
                            <label className="form-label" for="registerPassword">Password</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" onChange={(e)  => {setPasswordReg(e.target.value)}}/>
                            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={register}>Sign up</button>
                    </form>
                </div>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    );
};

export default LoginSystem;
import React from 'react';
import './Register.css';

function Login() {
    return (
        <div className="Register"> 
            <div style={{ width : '100%' }}>
                <div style={{ minHeight : '100vh', display : 'flex', justifyContent : 'center' }}>
                    <div className="Register-Container"> 
                        <div className="LogoBox">
                            <a href="/" className="Register-Link" style={{ fontSize : '1.5rem' }}>
                                California Chargemasters
                            </a>
                        </div>
                        {/* Begin Login Form */}
                        <form action="/login" method="post" style={{ padding : "0px 1.8em" }}>
                            <div className="FormGroup">
                                <div className="FormField">
                                    <div className="InputLabelText">Username or Email</div>
                                    <input type="text" name="firstName" className="InputPretty" />
                                </div> 
                                <div className="FormField">
                                    <div className="InputLabelText">Password</div>
                                    <input type="password" name="password" className="InputPretty" />
                                </div> 
                                <div className="FormField">
                                    <div style={{ display : 'flex' }}>
                                        <div className="Login-ResetBox">
                                            <a href="/reset_password" className="Login-ResetLink">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div> 
                                <button type="submit" className="Login-Button">Sign In</button> 
                            </div>
                        </form>
                        {/* End Login Form */}
                        <div style={{ fontSize : '.8rem', marginTop : '1rem' }}>
                            Don't have an account? <a href="/register" className="Register-Link">Click here to sign up</a> 
                        </div>
                        <div style={{ height : '55px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

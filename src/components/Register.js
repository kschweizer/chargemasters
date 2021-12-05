import React from 'react';
import './Register.css';

function Register() {
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
                        {/* Begin Register Form */}
                        <form action="/register" style={{ padding : "0px 1.8em" }}>
                            <div className="FormGroup">
                                <div className="FormField">
                                    <div className="InputLabelText">Name</div>
                                    <input type="text" name="firstName" className="InputPretty" />
                                </div> 
                                <div className="FormField">
                                    <div className="InputLabelText">Email</div>
                                    <input type="email" name="email" className="InputPretty" />
                                </div> 
                                <div className="FormField">
                                    <div className="InputLabelText">Password</div>
                                    <input type="password" name="password" className="InputPretty" />
                                </div> 
                            </div>
                            <div> 
                                <button type="submit" className="Register-Button">Sign Up</button> 
                            </div>
                        </form>
                        {/* Begin Register Form */}
                        <div style={{ fontSize : '.8rem', marginTop : '1rem' }}>
                            Already have an account? <a href="/login" className="Register-Link">Click here to sign in</a> 
                        </div>
                        <div style={{ height : '55px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;

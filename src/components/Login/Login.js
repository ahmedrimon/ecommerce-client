import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div>
            
            <div className="container">
                <div className="row content">
                    <div className="col-md-6">
                        <h3 className="signin-text mb-3">Login</h3>
                        <form>
                            <div className="form-group">
                                <label for="email"> Email </label>
                                <input type="email" name="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="password"> Password </label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            <div className="form-group from-check">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox"/>
                                <label className="form-check-label" for="checkbox">Remember Me</label>
                            </div>
                            <button className="btn btn-success">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
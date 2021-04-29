import React from 'react';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div>
            <div className="container">
                <div className="row content">
                    <div className="col-md-6">
                        <h3 className="signin-text mb-3">Create an account</h3>
                        <form>

                            <div className="form-group">
                                <label for="name"> Name </label>
                                <input type="name" name="name" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label for="email"> username or email</label>
                                <input type="email name" name="username or email" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label for="password"> Password </label>
                                <input type="password" name="password" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label for="password"> Confirm Password </label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            {/* checkbox */}
                            <div className="form-group from-check">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox"/>
                                <label className="form-check-label" for="checkbox">Remember Me</label>
                            </div>
                            <button className="btn btn-success">Create an account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
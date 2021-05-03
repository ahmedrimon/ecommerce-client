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
                                <input type="name" name="name" placeholder="Name" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <input type="email name" name="username or email" placeholder="Username or Email" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password" className="form-control"/>
                            </div>

                            <div className="form-group">   
                                <input type="password" name="password" placeholder="Confirm Password" className="form-control"/>
                            </div>
                            {/* checkbox */}
                            <div className="form-group from-check">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox"/>
                                <label className="form-check-label" for="checkbox">Remember Me</label>
                            </div>
                            <button className="btn btn-success">Create an account</button>
                            <br/><br/>
                            <p>Already have an account?&nbsp;<a href="#">Login</a></p>
                        </form>
                        or <br/>
                        <button className="btn btn-outline-primary">Continue with Google</button>
                        <br/>
                        <br/>
                        <button className="btn btn-outline-primary">Continue with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
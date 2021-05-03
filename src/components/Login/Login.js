import React from 'react';
import "./Login.css";
//firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const Login = () => {

    // const handleOnBlur = (e) => {
    //     let isFormValid = true;
    //     if(e.target.name === 'email'){
    //         const isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

    //     }
    //     if(e.target.name === 'password'){
    //         const isPasswordValid = e.target.value.length > 6;
    //         console.log(isPasswordValid);
    //     }
    // }
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user);
                
            }).catch((error) => {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage,errorCode,email)
                
            });

    }

    return (
        <div>

            <div className="container">
                <div className="row content">
                    <div className="col-md-6">
                        <h3 className="signin-text mb-3">Login</h3>
                        <form>
                            <div className="form-group">

                                <input type="email" name="email" placeholder="UserName or Email" className="form-control" />
                            </div>
                            <div className="form-group">

                                <input type="password" name="password" placeholder="Password" className="form-control" />
                            </div>
                            <div className="form-group from-check">
                                <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox" />
                                <label className="form-check-label" for="checkbox">Remember Me</label>
                            </div>
                            <button className="btn btn-success">Login</button>
                            <br /><br />
                            <p>Don't have an account?&nbsp;<a href="/"> Create an account</a></p>
                        </form>
                        or <br />
                        <button onClick={handleGoogleSignIn} className="btn btn-outline-primary">Continue with Google</button>
                        <br />
                        <br />
                        <button className="btn btn-outline-primary">Continue with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { useHistory } from 'react-router';

const Navbar = () => {

    const history = useHistory();

    const handleLogIn = () => {
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">Fresh Valley</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Orders</a>
                        </li>

                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Admin</a>
                        </li>

                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/">Deals</a>
                        </li>

                        <li className="nav-item me-5">
                            <a className="nav-link active" aria-current="page" href="/"><button onClick={handleLogIn} className="btn btn-success" >Login</button></a>
                        </li>

                        
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
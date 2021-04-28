import React from 'react';

const Home = () => {
    return (
        <div className="m-5">
            <div className="d-flex justify-content-center">
                <input type="text" placeholder="Search Book" />
                <button className="btn btn-success">Search</button>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Card from '../Card/Card';

const Home = () => {
    return (
        <div className="m-5">
            <div className="d-flex justify-content-center">
                <input type="text" placeholder="Search Book" />
                <button className="btn btn-success">Search</button>
            </div>
            <br />
            <Card></Card>



        </div>
    );
};

export default Home;
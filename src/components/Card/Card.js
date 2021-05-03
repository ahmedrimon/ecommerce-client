import React from 'react';
import { useHistory } from 'react-router';

const Card = () => {

    const history = useHistory();

    const handleLogIn = () => {
        history.push('/login');
    }

    return (
        <div>

            <div className="cardcontainer">
                <div className="row">
                    <div className="col-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card" >
                                        <img src="https://i.ibb.co/wsvhNm6/image-32.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Marks full cream milk powder</p>
                                            <button onClick={handleLogIn} className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/LrBQxLf/image-33.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Moushum Bay Leaves- 200gm</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/P5Gw8DD/image-34.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Onion Local - 1kg</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card" >
                                        <img src="https://i.ibb.co/b1h7SHG/image-35.png" className="card-img-top" alt="..." height="200px"/>
                                        <div className="card-body">
                                            <p className="card-text">Rashid Minicate Rice - 50 Kg</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/10ZJMCJ/image-36.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Omera LPG Refill 12 KG</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/gtV4fY5/image-37.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Bombay Sweets Mr.Twist - 25 gm</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card" >
                                        <img src="https://i.ibb.co/7jrZzBd/image-38.png" className="card-img-top" alt="..." height="200px" />
                                        <div className="card-body">
                                            <p className="card-text">Lifeboy Soap Bar Tota - 100 gm</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/4RwVWn2/image-39.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Ruchi BBQ Chanachur - 350 gm</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                    <div className="card" >
                                        <img src="https://i.ibb.co/s9ypqSm/image-40.png" className="card-img-top" alt="..." height="200px"  />
                                        <div className="card-body">
                                            <p className="card-text">Parachute Coconut oil - 200ml</p>
                                            <button className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Card;

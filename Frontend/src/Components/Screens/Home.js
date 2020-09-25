import React from 'react'
import home from '../../styles/Home.module.css';
import Sidemenu from './Sidemenu.js'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>

            <div className="row" style={{ margin: "0" }}>
                <div className="col-12 col-xl-3" >
                    <br></br>
                    <div style={{ position: "sticky", top: "10%" }}>
                        <h4 className=" btn btn-danger w-100" style={{ cursor: "pointer", fontFamily: "sans-serif" }} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">Categories</h4>
                        <div className="collapse" id="collapseExample">
                            <div className={home.relative} >
                                <img src={require('../../assets/spider-man2.jpg')} className="card-img" alt="" height="50" />
                                <div className={home.centered}>Movies</div>
                            </div><br></br>
                            <div className={home.relative}>
                                <img src={require('../../assets/avengers3.jpg')} className="card-img" alt="" height="50" />
                                <div className={home.centered}>Games</div>
                            </div><br></br>
                            <div className={home.relative}>
                                <img src={require('../../assets/300.jpg')} className="card-img" alt="" height="50" />
                                <div className={home.centered}>Music</div>
                            </div>
                            <br></br>
                            <div className={home.relative}>
                                <img src={require('../../assets/john-wick-2-poster-gun.jpg')} className="card-img" alt="" height="50" />
                                <div className={home.centered}>Food</div>
                            </div>
                            <br></br>
                            <div className={home.relative}>
                                <img src={require('../../assets/spider-man2.jpg')} className="card-img" alt="" height="50" />
                                <div className={home.centered}>Fashion</div>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <Sidemenu></Sidemenu>
                </div>


                <div className="col-12 col-xl-6">
                    <br></br>
                    <div className="card shadow p-3 mb-5" className={home.relative}>
                        <div class="carouselbx">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner ">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={require("../../assets/black-widow.jpg")} height="300" alt="Second slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>BlackWidow-2020</h5>
                                            <p>Action Movie</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={require('../../assets/aladdin.jpg')} height="300" alt="First slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Alladdin-2018</h5>
                                            <p>Magical Mystery Movie</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={require("../../assets/spider-man2.jpg")} height="300" alt="Second slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Spiderman-2 Homecoming-2019</h5>
                                            <p>Action Movie</p>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={require("../../assets/john-wick-2-poster-gun.jpg")} height="300" alt="Third slide" />
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>JHONWICK-2-2020</h5>
                                            <p>Action and Thrilling Movie</p>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    <br></br>
                    <div className="card shadow p-3 mb-5">
                        <a className="navbar-brand" href="/Home">
                            <img src={require('../../assets/logo.png')} width="80" height="80" alt="" />
                        </a>
                        <h4 className="text-secondary">Welcome To U'r Choice Blog</h4>
                        <h6 style={{ color: "grey" }} className="text-secondary">Share Your Personal With Us</h6>

                        <button className="btn btn-danger">Create a blog</button>

                    </div>


                    <div className="card ">
                        <div className="card-header text-left">
                            <a className="navbar-brand text-secondary" href="/Home">
                                <img src={require('../../assets/logo.png')} width="30" height="30" alt="" />
                            &nbsp;Food Community
                        </a>
                            <h6 className={home.timestamp}>Sep 12 2020 12:00 AM</h6>
                        </div>
                        <div className="card-body">
                            <img src={require('../../assets/logo.png')} width="100" height="100" alt="" />
                            <h6> F9 (alternatively known as Fast & Furious 9) is an upcoming American action film directed by Justin Lin and written by Daniel Casey. A sequel to 2017's The Fate of the Furious. Action Thrilling Movie
                        </h6>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger">Read More</button>
                        </div>
                    </div>
                    <br></br>
                    <div className="card ">
                        <div className="card-header text-left">
                            <a className="navbar-brand text-secondary" href="/Home">
                                <img src={require('../../assets/logo.png')} width="30" height="30" alt="" />
                            &nbsp;Movies Community
                        </a>
                            <h6 className={home.timestamp}>Sep 12 2020 12:00 AM</h6>
                        </div>
                        <div className="card-body">
                            <h3>Avengers Is Great Movie</h3>
                            <img className="card-img" src={require('../../assets/avengers3.jpg')} alt="" /><br></br>
                            <h6> F9 (alternatively known as Fast & Furious 9) is an upcoming American action film directed by Justin Lin and written by Daniel Casey. A sequel to 2017's The Fate of the Furious. Action Thrilling Movie
                        </h6>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger">Read More</button>
                        </div>
                    </div>

                    <br></br>
                    <div className="card ">
                        <div className="card-header" style={{display:"flex"}}>
                            <div className="text-left">
                            <a className="navbar-brand text-secondary" href="/Home">
                                <img src={require('../../assets/logo.png')} width="30" height="30" alt="" />
                            &nbsp;Movies Community
                        </a>

                            <h6 className={home.timestamp}>Sep 12 2020 12:00 AM</h6>
                            </div>
                            <div className="text-right" style={{marginLeft:"300px",marginTop:"20px"}}>
                                <i className="fa fa-twitter" style={{padding:"0px 15px",fontSize:"20px",color:"#1DA1F2"}}></i>
                                <i className="fa fa-facebook" style={{padding:"0px 15px",fontSize:"20px",color:"blue"}}></i>
                                <i className="fa fa-instagram" style={{padding:"0px 15px",fontSize:"20px"}}></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>Logan Is Great Movie</h3>
                            <img className="card-img" src={require('../../assets/logan.jpg')} alt="" /><br></br>
                            <h6> F9 (alternatively known as Fast & Furious 9) is an upcoming American action film directed by Justin Lin and written by Daniel Casey. A sequel to 2017's The Fate of the Furious. Action Thrilling Movie
                        </h6>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger">Read More</button>
                        </div>
                    </div>


                </div>
                <div className="col col-sm-1 col-xl-3">
                    <br></br>
                    <div style={{ position: "sticky", top: "10%" }}>
                        <img className="card-img" src={require('../../assets/logan.jpg')} alt="" />
                        <br></br><br></br>
                        <img className="card-img" src={require('../../assets/avengers3.jpg')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

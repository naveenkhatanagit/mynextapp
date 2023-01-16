import React from 'react'

function MainbannersliderComponent() {
    return (
        <section className="main-slider p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div id="banner-slider" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#banner-slider" data-bs-slide-to="0" className="active"
                                    aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#banner-slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#banner-slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active slider-content">
                                    <img src="assets/images/Banner.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="num-head">
                                            <img src="assets/images/1.png" alt="" />
                                            <h2><b>stop shop for</b> all uniform needs</h2>
                                        </div>
                                        <p className="pt-3 ps-3">For a hassle free uniform shopping, No more long queue<br />
                                            as we deliver your school dresses to doorstep</p>
                                        <div className="slider_btn pt-3">
                                            <a href="#">
                                                <button className="btn orange-btn">BUY NOW</button>
                                            </a>
                                            <a href="#">
                                                <button className="btn white-btn">VIEW SCHOOL</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item slider-content">
                                    <img src="assets/images/Banner.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="num-head">
                                            <img src="assets/images/1.png" alt="" />
                                            <h2><b>stop shop for</b> all uniform needs</h2>
                                        </div>
                                        <p className="pt-3 ps-3">For a hassle free uniform shopping, No more long queue<br />
                                            as we deliver your school dresses to doorstep</p>
                                        <div className="slider_btn pt-3">
                                            <a href="#">
                                                <button className="btn orange-btn">BUY NOW</button>
                                            </a>
                                            <a href="#">
                                                <button className="btn white-btn">VIEW SCHOOL</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item slider-content">
                                    <img src="assets/images/Banner.png" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption">
                                        <div className="num-head">
                                            <img src="assets/images/1.png" alt="" />
                                            <h2><b>stop shop for</b> all uniform needs</h2>
                                        </div>
                                        <p className="pt-3 ps-3">For a hassle free uniform shopping, No more long queue<br />
                                            Hi~<br />
                                            as we deliver your school dresses to doorstep</p>
                                        <div className="slider_btn pt-3">
                                            <a href="#">
                                                <button className="btn orange-btn">BUY NOW</button>
                                            </a>
                                            <a href="#">
                                                <button className="btn white-btn">VIEW SCHOOL</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#banner-slider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#banner-slider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainbannersliderComponent
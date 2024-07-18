import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/project-tab.jpg';
import img2 from '../../assets/img/project-tab2.jpg'
import img3 from '../../assets/img/project-tab2.jpg';

function ProjectsTab() {
  return (
    <section className="our-info-tabs-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xl-12">
                    <div className="project-tabs-wrapper">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="pills-tab1" data-bs-toggle="pill" data-bs-target="#pills-tab-1" type="button" role="tab" aria-controls="pills-tab-1" aria-selected="true"><i className="flaticon-notebook"></i> Core Planning</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-tab2" data-bs-toggle="pill" data-bs-target="#pills-tab-2" type="button" role="tab" aria-controls="pills-tab-2" aria-selected="false"><i className="flaticon-construction-tool-vehicle-with-crane-lifting-materials"></i> Raw Materials</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-tab3" data-bs-toggle="pill" data-bs-target="#pills-tab-3" type="button" role="tab" aria-controls="pills-tab-3" aria-selected="false"><i className="flaticon-operation"></i> Execution</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-tab4" data-bs-toggle="pill" data-bs-target="#pills-tab-4" type="button" role="tab" aria-controls="pills-tab-4" aria-selected="false"><i className="flaticon-bar-chart"></i> Final Result</button>
                            </li>
                        </ul>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-tab-1" role="tabpanel" aria-labelledby="pills-tab-1">
                                <div className="tab-content-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h2>We Plan Strategic Before Starting a project</h2>
                                            <p>Our promise as a contractor is to build community value into every project while delivering professional expertise, exceptional customers service and quality construction.</p>
                                            <div className="data-flex">
                                                <div className="single-data">
                                                    <p>POF</p>
                                                    <span>Elemental</span>
                                                    <h6>24.658 <span>Mon</span></h6>
                                                </div>
                                                <div className="single-data">
                                                    <p>HUI</p>
                                                    <span>Special</span>
                                                    <h6>224.658 <span>Year</span></h6>
                                                </div>
                                            </div>
                                            <Link to="/projectDetails">Read More <i className="fas fa-long-arrow-right"></i></Link>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="tab-img">
                                                <img src={img1} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-tab-2" role="tabpanel" aria-labelledby="pills-tab-2">
                                <div className="tab-content-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h2>This is some placeholder content the Tabs</h2>
                                            <p>Our promise as a contractor is to build community value into every project while delivering professional expertise, exceptional customers service and quality construction.</p>
                                            <div className="data-flex">
                                                <div className="single-data">
                                                    <p>POF</p>
                                                    <span>Elemental</span>
                                                    <h6>24.658 <span>Mon</span></h6>
                                                </div>
                                                <div className="single-data">
                                                    <p>HUI</p>
                                                    <span>Special</span>
                                                    <h6>224.658 <span>Year</span></h6>
                                                </div>
                                            </div>
                                            <Link to="/projectDetails">Read More <i className="fas fa-long-arrow-right"></i></Link>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="tab-img">
                                                <img src={img2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-tab-3" role="tabpanel" aria-labelledby="pills-tab-2">
                                <div className="tab-content-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h2>We Plan Strategic Before Starting a project</h2>
                                            <p>Our promise as a contractor is to build community value into every project while delivering professional expertise, exceptional customers service and quality construction.</p>
                                            <div className="data-flex">
                                                <div className="single-data">
                                                    <p>POF</p>
                                                    <span>Elemental</span>
                                                    <h6>24.658 <span>Mon</span></h6>
                                                </div>
                                                <div className="single-data">
                                                    <p>HUI</p>
                                                    <span>Special</span>
                                                    <h6>224.658 <span>Year</span></h6>
                                                </div>
                                            </div>
                                            <Link to="/projectDetails">Read More <i className="fas fa-long-arrow-right"></i></Link>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="tab-img">
                                                <img src={img3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-tab-4" role="tabpanel" aria-labelledby="pills-tab-2">
                                <div className="tab-content-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <h2>This is some placeholder content the Tabs</h2>
                                            <p>Our promise as a contractor is to build community value into every project while delivering professional expertise, exceptional customers service and quality construction.</p>
                                            <div className="data-flex">
                                                <div className="single-data">
                                                    <p>POF</p>
                                                    <span>Elemental</span>
                                                    <h6>24.658 <span>Mon</span></h6>
                                                </div>
                                                <div className="single-data">
                                                    <p>HUI</p>
                                                    <span>Special</span>
                                                    <h6>224.658 <span>Year</span></h6>
                                                </div>
                                            </div>
                                            <a href="project-details.html">Read More <i className="fas fa-long-arrow-right"></i></a>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="tab-img">
                                                <img src={img3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectsTab
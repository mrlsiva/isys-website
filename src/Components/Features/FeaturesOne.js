import coreBg from '../../assets/img/home1/core-bg.jpg';

const FeaturesOne = () => {
    return (
        <section className="core-features-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 pe-lg-0 col-12">
                        <div className="block-contents">
                            <div className="section-title">
                                <span>03. Core Features</span>
                                <h2>View Full project management</h2>
                            </div>
                        </div>
                        <div className="single-icon-circle-item">
                            <div className="icon">
                                <i className="flaticon-cpu"></i>
                            </div>
                            <div className="contents">
                                <h3>Innovation</h3>
                                <p>We are expert and professional.But I must explain to you how all this mistaken ofenoun cing pleasure and praising.</p>
                            </div>
                        </div>
                        <div className="single-icon-circle-item">
                            <div className="icon">
                                <i className="flaticon-secure-shield"></i>
                            </div>
                            <div className="contents">
                                <h3>Project Handover</h3>
                                <p>We are expert and professional.But I must explain to you how all this mistaken ofenoun cing pleasure and praising.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-5 col-12">
                        <div className="project-details-card bg-gray mt-5 mt-lg-0 ms-lg-4 me-lg-4">
                            <div className="project-title">
                                <h3>Harvest Home</h3>
                                <p>We commit ourselves to complete all projects within the timeline.</p>
                            </div>
                            <div className="project-date">
                                <h6>Execution &#38; Handover Date</h6>
                                <p>Jan 18 2010 - Jun 23 2015</p>
                            </div>
                            <div className="project-client">
                                <h6>Client Name</h6>
                                <p>Maxuel D Silva</p>
                            </div>
                            <div className="project-estimate d-flex justify-content-between align-items-center">
                                <div className="single-data">
                                    <h6>POF</h6>
                                    <p>Elemental</p>
                                    <div className="total-ton">
                                        <h3>24.658</h3>
                                        <span>Mon</span>
                                    </div>
                                </div>
                                <div className="single-data">
                                    <h6>HUI</h6>
                                    <p>Special</p>
                                    <div className="total-ton">
                                        <h3>224.658</h3>
                                        <span>Years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="core-bg d-none d-xl-block bg-cover" style={{backgroundImage: `url(${coreBg})`}}></div>
        </section>
    )
}

export default FeaturesOne;
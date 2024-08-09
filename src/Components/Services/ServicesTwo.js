import React from 'react'
import { Link } from 'react-router-dom'
import servicesTwoData from './servicesTwoData'

const ServicesTwo = () => {
  return (
    <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="block-contents text-center">
                        <div className="section-title">
                            <h5>Service</h5>
                            <span>Featured Service</span>
                            <h2>What We Do</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    servicesTwoData.map((data) => (
                        <div className="col-xl-4 col-md-6 col-12" key={data.id}>
                            <div className="single-service-card">
                                <div className="service-cover-img bg-cover" style={{backgroundImage:`url(${data.img})`}}></div>
                                <div className="content">
                                    <div className="icon-title">
                                        <div className="icon">
                                            <i className={`flaticon-${data.icon}`}></i>
                                        </div>
                                        <div className="service-title">
                                            <h4><Link to="/servicesDetails">{data.title}</Link></h4>
                                        </div>
                                    </div>
                                    <p>{data.desc}</p>
                                    <Link to="/servicesDetails" className="read-more">Read More <i className="fal fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default ServicesTwo
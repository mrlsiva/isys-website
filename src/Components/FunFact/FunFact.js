import React from 'react'
import CountUp from 'react-countup'; 

const FunFact = () => {
  return (
    <section className="fun-fact-wrapper pt-70 pb-100 text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 mt-30 col-12">
                    <div className="single-fun-fact">
                        <h2><CountUp end={30} duration={3}></CountUp>K+</h2>
                        <h3>PROJECT DONE</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-30 col-12">
                    <div className="single-fun-fact">
                        <h2><CountUp end={980} duration={3}></CountUp>+</h2>
                        <h3>HAPPY CLIENTS</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-30 col-12">
                    <div className="single-fun-fact">
                        <h2><CountUp end={50} duration={3}></CountUp>+</h2>
                        <h3>Skilled Employee</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-30 col-12">
                    <div className="single-fun-fact">
                        <h2><CountUp end={98} duration={3}></CountUp>%</h2>
                        <h3>Country Coverage</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FunFact
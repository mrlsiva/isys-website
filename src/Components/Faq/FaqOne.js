import FaqOneVideo from "./FaqOneVideo";
import CountUp from 'react-countup'; 
import faqOneData from "./faqOneData";

const FaqOne = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="fun-fact-wrapper text-primary mtm-30 text-center">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun-fact mb-4 mb-lg-0">
                                <h2><CountUp end={30} duration={3}></CountUp>K+</h2>
                                <h3>PROJECT DONE</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun-fact mb-4 mb-lg-0">
                                <h2><CountUp end={980} duration={3}></CountUp>+</h2>
                                <h3>HAPPY CLIENTS</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-md-0">
                            <div className="single-fun-fact">
                                <h2><CountUp end={50} duration={3}></CountUp>+</h2>
                                <h3>Skilled Employee</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-fun-fact">
                                <h2><CountUp end={98} duration={3}></CountUp>%</h2>
                                <h3>Country Coverage</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="faq-wrapper section-padding pb-0">
                    <div className="row equal">
                        <div className="col-lg-6 col-12 col-xl-7 pe-lg-0">
                            <div className="faq-content">
                                <div className="faq-accordion">
                                    <div className="accordion" id="accordion">
                                    {
                                        faqOneData.map((data) => (
                                            <div className="accordion-item" key={data.id}>
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${data.index}`} aria-expanded="false" aria-controls={data.index}>
                                                    {data.ques}
                                                    </button>
                                                </h4>
                                                <div id={data.index} className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        {data.ans}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>                      
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12 ps-lg-0">
                            <FaqOneVideo/>
                        </div>
                    </div>
                </div> */}
            </div> 
        </section> 
    )
}

export default FaqOne;


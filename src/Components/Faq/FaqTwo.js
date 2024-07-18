import img from '../../assets/img/home4/faq-img.jpg';
import faqOneData from "./faqOneData";

const FaqTwo = () => {
    return (
        <section className="faq-ask-wrapper section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-12">
                        <div className="call-phone-cta">
                            <div className="icon">
                                <i className="icon-call" />
                            </div>
                            <div className="content">
                                <span>Call for support</span>
                                <h3>(+88) 541 -362 -982</h3>
                            </div>
                        </div>
                        <div className="faq-img mt-20">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-12 mt-5 mt-xl-0">
                        <div className="faq-question-wrapper">
                            <h2>WE DO MORE THEN EVER PLATFORMS</h2>
                            <div className="faq-content">
                                <div className="faq-ask-list mtm-20">
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
                    </div>
                </div>
            </div>
        </section>



    )
}

export default FaqTwo;


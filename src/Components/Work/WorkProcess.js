import workProcessData from "./workProcessData";

const WorkProcess = () => {
    return (
        <section className="workp-process-section section-padding mtm-30">
        <div className="container">
            <div className="row">
                {
                    workProcessData.map((data) => (
                        <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12" key={data.id}>
                            <div className="single-work-process-item">
                                <div className="icon">
                                    <i className={`flaticon-${data.icon}`}></i>
                                </div>
                                <div className="contents">
                                    <span>{data.subTitle}</span>
                                    <h5>{data.title}</h5>
                                    <p>{data.desc}</p>
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

export default WorkProcess;
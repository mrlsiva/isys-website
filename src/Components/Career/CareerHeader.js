import React, { useState } from "react";
import careerData from "./Career.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faIndianRupeeSign,
  faLocationDot,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { CModal, CModalBody, CModalTitle, CModalHeader } from "@coreui/react";
import Applyjob from "../Career/Applyjob";

function CareerHeader() {
  const [visible, setVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // if you need to pass job details

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setSelectedJob(null);
  };

  return (
    <div className="career-page-wrapper">
      <div className="container">
        <h2 className="mb-4">{careerData.title}</h2>
        <div className="row">
          {careerData.positions.map((position, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-secondary">{position.title}</h5>
                  <p className="card-text">{position.description}</p>
                  <div className="d-flex mt-3 flex-wrap">
                    <FontAwesomeIcon icon={faBriefcase} className="mt-1" />
                    <p className="ms-2">{position.experiance}</p>
                    <FontAwesomeIcon className="mt-1 ms-3" icon={faIndianRupeeSign} />
                    <p className="ms-2">{position.income}</p>
                    <FontAwesomeIcon className="mt-1 ms-3" icon={faLocationDot} />
                    <p className="ms-2">{position.location}</p>
                  </div>
                  <div className="d-flex mt-3">
                    <FontAwesomeIcon icon={faNoteSticky} className="mt-1" />
                    <p className="ms-2">{position.notes}</p>
                  </div>
                  <div>
                    <h6 className="text-secondary">
                      <span>TechStack : </span>
                      {position.technology}
                    </h6>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary text-white bg-primary rounded p-2"
                      onClick={() => handleOpenModal(position)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - fixed close handler */}
      <CModal
        size="xl"
        visible={visible}
        onClose={handleCloseModal}
        aria-labelledby="OptionalSizesExample1"
        scrollable={false}  // prevents modal body scrolling if not needed
      >
        <CModalHeader>
          <CModalTitle>Apply Job</CModalTitle>
        </CModalHeader>
        <CModalBody style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <Applyjob jobData={selectedJob} /> {/* pass job info if needed */}
        </CModalBody>
      </CModal>
    </div>
  );
}

export default CareerHeader;
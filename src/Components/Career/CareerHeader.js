import React from 'react';
import careerData from './Career.json'; // Import the JSON file
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faReact  } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faBriefcase,faIndianRupeeSign,faLocationDot,faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function CareerHeader() {
  return (
    <header className="header-wrap header-1 sticky-top">
      <div className="container-fluid">
        <h2 className="mb-4">{careerData.title}</h2>
          <div className="row">
            {careerData.positions.map((position, index) => (
              <div className="col-md-12 mb-4" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title text-secondary">{position.title}</h5>
                    <p className="card-text">{position.description}</p>
                      <div className='d-flex mt-3'>
                        <FontAwesomeIcon icon={faBriefcase} className='mt-1'/>
                        <p className='ms-2'>{position.experiance}</p>
                        <FontAwesomeIcon className='mt-1 ms-3' icon={faIndianRupeeSign} />
                        <p className='ms-2'>{position.income}</p>
                        <FontAwesomeIcon className='mt-1 ms-3' icon={faLocationDot} />
                        <p className='ms-2'>{position.location}</p>
                      </div>
                      <div className='d-flex mt-3'>
                        <FontAwesomeIcon icon={faNoteSticky} className='mt-1'/>
                        <p className='ms-2'>{position.notes}</p>
                      </div>
                      <div>
                        <h6 className='text-secondary'><span >TechStack : </span>{position.technology}</h6>
                      </div>
                      <div>
                        <button type="button" className="btn btn-primary text-white bg-primary rounded p-2">Apply</button>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </header>
  );
}

export default CareerHeader;

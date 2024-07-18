import React from 'react'

const HeaderTwoTop = () => {
  return (
    <div className="header-top-bar text-white d-none d-sm-block">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-9 col-sm-9">
                        <ul className="top-left-content">
                            <li><i className="flaticon-paper-plane"></i> Info@example.com</li>
                            <li><i className="flaticon-map"></i> Jones Street, New York, USA</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-3 text-end">
                        <div className="top-social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderTwoTop
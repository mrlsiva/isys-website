import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/img/home3/logo.png";
import MobileMenu from "./MobileMenu";
import OffsetMenu from "./OffsetMenu";
import { useAuth } from "../../context/AuthContext";

const HeaderThree = () => {
  const [search, setSearch] = useState(true);
  const [offset, setOffset] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for avatar dropdown

  const navigate = useNavigate();
  const { isAuthenticated, userDetails, logout } = useAuth();

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Get initial for avatar (first letter of employee name or 'U')
  const getInitial = () => {
    const name = userDetails?.employeeName || "User";
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      <OffsetMenu offset={offset} handleOffset={handleOffset} />

      <header className="header-wrap header-1 sticky-top p-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={mainLogo} alt="logo" />
            </Link>
          </div>

          <div className="header-right-area d-flex justify-content-between">
            {/* Menu */}
            <div className="main-menu d-none d-xl-block me-xl-5">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                {isAuthenticated && (
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                )}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Right Side Buttons */}
            <div className="header-right-elements d-flex align-items-center justify-content-between">
              {!isAuthenticated ? (
                // Show Login & Signup when not logged in
                <>
                  <Link
                    to="/signup"
                    className="theme-btn style-3 d-none d-sm-block"
                  >
                    SignUp
                  </Link>
                  <Link
                    to="/login"
                    className="theme-btn style-3 d-none d-sm-block"
                  >
                    Login
                  </Link>
                </>
              ) : (
                // Avatar with name next to it and dropdown on click
                <div
                  className="avatar-container"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    className="employee-name"
                    style={{ color: "Gray", fontWeight: "700",fontSize:"18px" }}
                  >
                    {userDetails?.employeeName || "User"}
                  </span>
                  <div
                    className="avatar"
                    onClick={toggleDropdown}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#0d6efd",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {getInitial()}
                  </div>

                  {dropdownOpen && (
                    <div
                      className="dropdown-menu show"
                      style={{
                        position: "absolute",
                        top: "45px",
                        right: "0",
                        backgroundColor: "white",
                        minWidth: "150px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        borderRadius: "4px",
                        zIndex: 1000,
                      }}
                    >
                      <button
                        onClick={handleLogout}
                        style={{
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          background: "none",
                          textAlign: "left",
                          cursor: "pointer",
                          color: "#dc3545",
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
              {/* Mobile Menu */}
              <div className="d-inline-block ms-4 d-xl-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger" onClick={handleMobileMenu}>
                    <i className="fal fa-bars"></i>
                  </div>
                  <MobileMenu
                    mobileMenu={mobileMenu}
                    handleMobileMenu={handleMobileMenu}
                  />
                </div>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;

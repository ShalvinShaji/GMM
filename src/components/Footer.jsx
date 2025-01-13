import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer d-flex align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0 footer-contact d-flex flex-column align-items-lg-start ">
              {/* <div className="">
                <img
                  src="https://heronavbar.netlify.app/assets/img/logo.jpg"
                  alt=""
                  srcset=""
                  className="me-lg-2 mt-lg-1 mb-3"
                />
              </div> */}
              <div className=" d-flex flex-column ">
                <h3 className="text-uppercase ">
                  Rev. George Mathen <br /> Medical Mission Hospital
                </h3>
                <p className="hospital-contact">
                  Mallappally East, P O<br />
                  Pathanamthitta,&nbsp;Kerala
                  <br />
                  <strong>Phone:</strong> 0469-2782262, 8281161330
                  <br />
                  <strong>Email:</strong> gmmhospital@gmail.com
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0 footer-links d-flex flex-column align-items-lg-center">
              <ul>
                <h4 className="text-uppercase ">Useful Links</h4>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link to="/" className="text-uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link to="/Facilities" className="text-uppercase">
                    facilities
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link to="/Appointment" className="text-uppercase">
                    Appointment
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link to="/Contact" className="text-uppercase">
                    Contact
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link to="/Gallery" className="text-uppercase">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-2 mb-lg-0 footer-links d-flex flex-column align-items-lg-center">
              <ul>
                <h4 className="text-uppercase ">Our Departments</h4>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link
                    to="/Departments?tab=general-medicine"
                    className="text-uppercase"
                  >
                    General Medicine
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link
                    to="/Departments?tab=cardiology"
                    className="text-uppercase"
                  >
                    Cardiology
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link
                    to="/Departments?tab=orthopedics"
                    className="text-uppercase"
                  >
                    Orthopedics
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link
                    to="/Departments?tab=pediatrics"
                    className="text-uppercase"
                  >
                    Pediatrics
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="footer-icons"
                  />
                  <Link
                    to="/Departments?tab=nephrology"
                    className="text-uppercase"
                  >
                    Nephrology
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 mb-2 mb-lg-0 footer-newsletter d-flex flex-column align-items-lg-start ">
              <h4 className="text-uppercase mb-2">Follow us on:</h4>
              <div className="social-links d-flex justify-content-center-lg-center align-items-center ">
                <a
                  href="https://www.facebook.com/georgemathen.missionhospital?mibextid=ZbWKwL"
                  className="facebook"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="footer-social"
                  />
                </a>
                <a
                  href="https://instagram.com/gmm_hospital?igshid=YmMyMTA2M2Y="
                  className="instagram"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="footer-social"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credits d-flex flex-column flex-lg-row">
        <div className="col-lg-6 copyright d-flex justify-content-center">
          <small>
            &copy; Copyright{" "}
            <strong>
              <span>gmmhospital</span>
            </strong>
            . All Rights Reserved
          </small>
        </div>
        <div className="col-lg-6 credits d-flex justify-content-center">
          <small>
            {" "}
            Designed by{" "}
            <a className="credit-azaic" href="#">
              AZAIC TECH LLP
            </a>{" "}
          </small>
        </div>
      </div>
    </>
  );
}

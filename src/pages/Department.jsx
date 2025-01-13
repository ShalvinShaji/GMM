import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Departments.css";
import { departmentsList, doctorsList } from "../utils";

export default function Department() {
  const [activeTab, setActiveTab] = useState("general-medicine");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  function departmentData() {
    const filterDoctors = (departmentId) => {
      const tempDoctors = doctorsList.filter(
        (doctor) => doctor.departmentId === departmentId
      );
      setFilteredDoctors(tempDoctors);
    };

    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const selectedDepartment = params.get("tab");

      if (selectedDepartment) {
        setActiveTab(selectedDepartment);
        filterDoctors(selectedDepartment);
      } else {
        filterDoctors("general-medicine");
      }
    }, [location.search]);

    return (
      <div className="row">
        <div className="col-lg-3 mb-5 mb-lg-0">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
              <h5 className=" text-center fw-bold">Our Departments</h5>
            </li>
            {departmentsList.map((department) => (
              <li className="nav-item" key={department.departmentId}>
                <a
                  className={`nav-link ${
                    activeTab === department.departmentId ? "active" : ""
                  }`}
                  onClick={() => {
                    filterDoctors(department.departmentId);
                    setActiveTab(department.departmentId);
                  }}
                >
                  <p>{department.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="tab-content">
            {departmentsList.map((department) => (
              <div
                key={department.departmentId}
                className={`tab-pane ${
                  activeTab === department.departmentId ? "active show" : ""
                }`}
                id={department.departmentId}
              >
                <div className="department-img">
                  <img
                    src={department.bannerImage}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="department-heading my-4">
                  <h3>{department.name}</h3>
                </div>

                <div className="department-description mb-4">
                  <p>{department.description}</p>
                </div>

                {/* Render filtered doctors */}
                <div className="row department-doctors g-3">
                  {filteredDoctors.map((doctor) => (
                    <div className=" col-xl-4 col-md-6" key={doctor.name}>
                      <div className="doc d-flex flex-column justify-content-center align-items-center">
                        <div className="doc-img p-2">
                          <img
                            src={doctor.image}
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                        <div className="doc-info text-center d-flex flex-column align-items-center justify-content-center m-3">
                          <h4>{doctor.name}</h4>
                          <span>{doctor.qualifications}</span>
                          <span>{doctor.role}</span>
                          <p>{doctor.opTimings}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Departments" />
      <section id="departments" className="departments">
        <Sectionhead
          sectionname="Departments"
          sectiondescription="Centres Of "
          sectiondescriptionbold="Excellence"
        />
        <div className="container">{departmentData()}</div>
      </section>
    </>
  );
}

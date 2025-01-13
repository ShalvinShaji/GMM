import React from "react";
import "../css/Homedepartments.css";
import Sectionhead from "./Sectionhead";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Homedepartments({ homedepartments }) {
  function homedepartmentsSectionData() {
    return (
      <div className="row mb-4">
        {homedepartments.map((department) => (
          <div
            key={department.id}
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
          >
            <div className="icon-box">
              <div className="departments-img mb-3">
                <img src={department.imageSrc} alt={department.name} />
              </div>
              <h4 className="text-uppercase">{department.name}</h4>
              <p>{department.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="departments" id="departments">
      <Sectionhead
        sectionname="Departments"
        sectiondescription="Our dedicated"
        sectiondescriptionbold="Services"
      />
      <div className="container">
        {homedepartmentsSectionData()}
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/Departments">
            <Button className="click-btn">
              <span>More Departments</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

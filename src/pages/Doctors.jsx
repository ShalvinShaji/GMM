import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Doctors.css";
import { doctorsList } from "../utils";

export default function Doctors() {
  function doctorsData() {
    return (
      <div className="row">
        {doctorsList.map((doctor) => (
          <div key={doctor.id} className="col-md-6 col-lg-4 col-xl-3">
            <div className="member d-flex flex-column align-items-center justify-content-center">
              <div className="pic">
                <img src={doctor.image} className="mb-3" alt="" />
              </div>
              <div className="member-info text-center">
                <h4>{doctor.name}</h4>
                <span>{doctor.qualifications}</span>
                <span>{doctor.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Doctors" />
      <section className="Doctors" id="Doctors">
        <Sectionhead
          sectionname="Doctors"
          sectiondescription="Our"
          sectiondescriptionbold="Doctors"
        />
        <div className="container">{doctorsData()}</div>
      </section>
    </>
  );
}

import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Careers.css";
import { careersList } from "../utils";

export default function Careers() {
  function careersData() {
    return (
      <div className="row">
        {careersList.map((career) => (
          <div key={career.id} className="col-lg-4 col-md-6 g-2 p-3 m-0">
            <div className="careers-section">
              <div className="careers-banner p-2">
                <img
                  src={career.bannerImage}
                  alt="careers-banner"
                  className="image-fluid "
                />
              </div>
              <div className="careers-description p-2">
                <div className="careers-title mb-3">
                  <h4 className="text-capitalize">{career.title}</h4>
                </div>

                <div className="careers-contact">
                  <p>{career.description}</p>
                </div>
                <div className="careers-contact">
                  <p className="fst-italic text-end">{career.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      <Bcrumbs breadcrumbspage="Careers" />
      <section className="Careers" id="Careers">
        <Sectionhead
          sectionname="Careers"
          sectiondescription="Explore Healthcare "
          sectiondescriptionbold="Careers"
        />
        <div className="container">{careersData()}</div>
      </section>
    </>
  );
}

{
  /* <div className="careers-contact">
                      <p>Qualifications required : {career.qualifications}</p>
                    </div> */
}

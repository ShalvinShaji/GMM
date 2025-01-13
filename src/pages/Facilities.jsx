import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Facilities.css";
import { facilitiesList } from "../utils";

export default function Facilities() {
  function facilitiesData() {
    return (
      <div className="row">
        {facilitiesList.map((facility) => (
          <div className="col-lg-4 col-xl-3 col-md-6" key={facility.id}>
            <div className="facility">
              <div className="facility-img">
                <img src={facility.image} alt={facility.name} />
              </div>
              <div className="facility-name">
                <h3 className="text-uppercase">{facility.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Facilities" />
      <section className="Facilities" id="Facilities">
        <Sectionhead
          sectionname="Facilities"
          sectiondescription="Our"
          sectiondescriptionbold="Facilities"
        />
        <div className="container">{facilitiesData()}</div>
      </section>
    </>
  );
}

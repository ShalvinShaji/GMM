import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Visionmission.css";
import { visionMission } from "../utils";

export default function Visionmission() {
  function VisionMissionData() {
    return (
      <div className="row">
        <div className="col-xl-5 ">
          <img
            src={visionMission.image}
            alt="VisionmissionImage"
            className="img-fluid rounded VisionmissionImage"
          />
        </div>
        <div className="col-xl-7 mt-xl-0 mt-3 d-flex flex-column justify-content-around align-items-baseline">
          <div className="vision-mission-box">
            <h3>Our vision</h3>
            <p>{visionMission.vision}</p>
          </div>
          <div className="vision-mission-box">
            <h3>our mission</h3>
            <p>{visionMission.mission}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Vission & Mission" />
      <section className="Visionmission" id="Visionmission">
        <Sectionhead
          sectionname="Vission & Mission"
          sectiondescription="our"
          sectiondescriptionbold="Vission & Mission"
        />
        <div className="container">{VisionMissionData()}</div>
      </section>
    </>
  );
}

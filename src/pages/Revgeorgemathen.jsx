import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Revgeorgemathen.css";
import { georgeMathenContent } from "../utils";

export default function Revgeorgemathen() {
  function GeorgeMathanData() {
    return (
      <div className="row">
        <div className="col-lg-4 profile-img mb-md-0 mb-3 d-md-block">
          <img
            src={georgeMathenContent.img}
            alt="Revgeorgemathen"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-8 GeorgeMathan-history">
          <p>{georgeMathenContent.first}</p>
          <p>{georgeMathenContent.second}</p>
          <p>{georgeMathenContent.third}</p>
          <p>{georgeMathenContent.fourth}</p>
          <p>{georgeMathenContent.fifth}</p>
          <p>{georgeMathenContent.sixth}</p>
          <p>{georgeMathenContent.seventh}</p>
          <p>{georgeMathenContent.eighth}</p>
          <p>{georgeMathenContent.nineth}</p>
          <p>{georgeMathenContent.tenth}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Rev. George Mathen" />
      <section className="Revgeorgemathen" id="Revgeorgemathen">
        <Sectionhead
          sectionname="Rev. George Mathen"
          sectiondescription="Rev. George"
          sectiondescriptionbold="Mathen"
        />
        <div className="container">{GeorgeMathanData()}</div>
      </section>
    </>
  );
}

import React from "react";
import Bcrumbs from "../components/Bcrumbs";
import Sectionhead from "../components/Sectionhead";
import "../css/Governingboard.css";
import { governingBoard } from "../utils";

export default function Governingboard() {
  function governingBoardMembersData() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>{governingBoard.description}</p>
          </div>
        </div>
        <div className="row my-4">
          {governingBoard.members.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="member-info text-center">
                  <span>{member.position}</span>
                  <h4>{member.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Bcrumbs breadcrumbspage="Governing Board" />
      <section className="Governingboard" id="Governingboard">
        <Sectionhead
          sectionname="Governing Board"
          sectiondescription="Our"
          sectiondescriptionbold="Board of directors"
        />
        {governingBoardMembersData()}
      </section>
    </>
  );
}

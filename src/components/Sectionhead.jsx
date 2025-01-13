import React from "react";
import "../css/Sectionhead.css";

export default function Sectionhead(props) {
  return (
    <>
      <div className="container section-title">
        {/* <div className="title-head">
          <h2>{props.sectionname}</h2>
        </div> */}
        <p>
          {props.sectiondescription}&nbsp;
          <span>{props.sectiondescriptionbold}</span>
        </p>
      </div>
    </>
  );
}

import React from "react";

export default (props) => (
  <div className="details-strip">
    <span className="label">{props.moment.label}</span>
    <span className="streetname">{props.moment.streetname}</span>
  </div>
);
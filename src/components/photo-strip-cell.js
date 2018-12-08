import React from "react";

export default (props) => (
  <div className="photo">
    {(props.date) ? (
      <div className="date-tag">{props.date}</div>
    ) : null}
    <img
      src="/images/1x1.gif" 
      class="lazy" 
      data-src={`/images/photos/${props.moment.filestem}-small.jpg`}
      alt={`Doorway on ${props.moment.streetname}`}
      height="500px" />
    <noscript>
      <img
        src={`/images/photos/${props.moment.filestem}-small.jpg`}
        alt={`Doorway on ${props.moment.streetname}`} />
    </noscript>
  </div>
);
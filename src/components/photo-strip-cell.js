import React from "react";

import DateTag from "./date-tag";

export default (props) => (
  <div className="photo">
    <DateTag date={props.date} showDate={props.showDate} />

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
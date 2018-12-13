import React from "react";

import DateTag from "./date-tag";
import DetailsStrip from "./details-strip";

class PhotoStripCell extends React.Component {
  render() {
    return (
      <div className="photo">
        <DateTag date={this.props.date} showDate={this.props.showDate} />

        <img
          src="/images/1x1.gif" 
          class="lazy" 
          data-src={`/images/photos/${this.props.moment.filestem}-small.jpg`}
          alt={`Doorway on ${this.props.moment.streetname}`}
          height="500px" />
        <noscript>
          <img
            src={`/images/photos/${this.props.moment.filestem}-small.jpg`}
            alt={`Doorway on ${this.props.moment.streetname}`} />
        </noscript>

        <DetailsStrip moment={this.props.moment} />
      </div>
    );
  }
}

export default PhotoStripCell;
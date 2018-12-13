import React from "react";

class DetailsStrip extends React.Component {
  render() {
    return (
      <div className="details-strip">
        <span className="label">{this.props.moment.label}</span>
        <span className="streetname">{this.props.moment.streetname}</span>
      </div>
    );
  }
}

export default DetailsStrip;
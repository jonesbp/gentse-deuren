import React from "react";

import fecha from "fecha";

class DateTag extends React.Component {
  constructor(props) {
    super(props);

    this.formattedDate = this.formattedDate.bind(this);
  }
  
  formattedDate() {
    const date = fecha.parse(this.props.date, 'YYYY-MM-DD HH:mm:ss');
 
    return fecha.format(date, 'ddd MMM D YYYY');
  }

  render() {
    return (
      <div className="date-tag">{this.formattedDate()}</div>
    );
  }
}

export default DateTag;
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

  formattedTime() {
    const date = fecha.parse(this.props.date, 'YYYY-MM-DD HH:mm:ss');

    return fecha.format(date, 'h:mm a');
  }

  render() {
    return (
      <div className="date-tag">
        {(this.props.showDate) ? (
          <span class="date-tag__date">{this.formattedDate()}</span>
        ) : null}
        <span class="date-tag__time">{this.formattedTime()}</span>
      </div>
    );
  }
}

export default DateTag;
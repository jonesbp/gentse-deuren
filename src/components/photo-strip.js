import React from "react";
import ReactDOM from "react-dom";

import {lazyLoad} from "../helpers/lazy-load";

import PhotoStripCell from "../components/photo-strip-cell";

class PhotoStrip extends React.Component {
  constructor(props) {
    super(props);

    this.photoCells = this.props.moments.edges.map(({ node }, idx, originalArray) => {
      if (idx === 0) {
        return { node: node, date: node.datestamp, showDate: true }
      }

      if (node.datestamp.substr(0, 11) !== originalArray[idx - 1].node.datestamp.substr(0, 11)) {
        return { node: node, date: node.datestamp, showDate: true }
      }

      return { node: node, date: node.datestamp, showDate: false };
    });
  }

  componentDidMount() {
    lazyLoad(true); // Force a lazyLoad check on first mount
    ReactDOM.findDOMNode(this.refs.photoStrip).addEventListener('scroll', lazyLoad);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this.refs.photoStrip).removeEventListener('scroll', lazyLoad);
  }

  render() {
    return (
      <div ref="photoStrip" class="photo-strip">
        <div class="photo-strip-contents">
          {this.photoCells.map((val) => (
            <PhotoStripCell moment={val.node} date={val.date} showDate={val.showDate} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoStrip;
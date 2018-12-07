import React from "react";
import ReactDOM from "react-dom";

import {lazyLoad} from "../helpers/lazy-load";

import PhotoStripCell from "../components/photo-strip-cell";

class PhotoStrip extends React.Component {
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
          {this.props.moments.edges.map(({ node }) => (
            <PhotoStripCell moment={node} />
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoStrip;
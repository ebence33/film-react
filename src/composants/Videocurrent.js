/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

class Videocurrent extends Component {
  render() {
    const { Videourl } = this.props;

    return (
      <div>
        <iframe
          title=""
          width="750"
          height="563"
          src={Videourl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Videocurrent;

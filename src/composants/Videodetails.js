import React, { Component } from "react";

class Videodetails extends Component {
  render() {
    const { titre, description } = this.props;
    return (
      <div>
        <center>
          <h4> {titre}</h4>
          <h6> {description}</h6>
        </center>
      </div>
    );
  }
}

export default Videodetails;

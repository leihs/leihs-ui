import React, { Component } from "react";

class Bold extends Component {
  render() {
    return <b className="bold">{this.props.children}</b>;
  }
}

export default Bold;

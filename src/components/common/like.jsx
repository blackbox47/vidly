import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.like) classes += "-o";
    return (
      <i
        className={classes}
        onClick={this.props.onClick}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;

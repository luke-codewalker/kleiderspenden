import React, { Component } from "react";
import "./infoButton.css";

class InfoButton extends Component {
  render() {
    return (
      <button
        className="InfoButton"
        title="Show Info"
        onClick={this.props.clickHandler}
      >
        ?
      </button>
    );
  }
}

export default InfoButton;

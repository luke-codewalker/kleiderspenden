import React, { Component } from "react";
import "./placeInput.css";

class PlaceInput extends Component {
  render() {
    return (
      <form className="PlaceInput" onSubmit={e => this.props.handleSubmit(e)}>
        <label className="PlaceInput__label" htmlFor="place-search">
          Kleider spenden in Köln{" "}
        </label>
        <input
          className="PlaceInput__input"
          type="text"
          id="place-search"
          value={this.props.place}
          onChange={e => this.props.handleChange({ place: e.target.value })}
          title="Hier Stadtteil oder Veedel eingeben"
        />
      </form>
    );
  }
}

export default PlaceInput;

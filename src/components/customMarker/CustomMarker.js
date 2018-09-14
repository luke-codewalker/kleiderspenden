import React, { Component } from "react";
import { Marker } from "react-leaflet";
import CustomPopup from "../customPopup/CustomPopup";
import L from "leaflet";

const customIcon = L.Icon.extend({
  options: {
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }
});

const greenIcon = new customIcon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
});

const orangeIcon = new customIcon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
});

const redIcon = new customIcon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
});

class CustomMarker extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.selected) {
      this.ref.current.leafletElement
        .bindPopup(
          CustomPopup({
          ...this.props.popupValue
          })
        )
        .openPopup();
    }
  }

  render() {
    return (
      <Marker
        ref={this.ref}
        icon={
          this.props.category === "charity"
            ? greenIcon
            : this.props.category === "recycling"
              ? orangeIcon
              : redIcon
        }
        position={this.props.position}
        onClick={e => this.props.clickHandler(e, this.props.uid)}
      />
    );
  }
}

export default CustomMarker;

import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import CustomMarker from "../customMarker/CustomMarker";
import "./siteMap.css";
import { MAP } from "../../globals";

class SiteMap extends Component {
  calculateCenter(sites) {
    const meanLat = sites.reduce(
      (mean, site) =>
        mean + site.location.gps_location.coordinates[1] / sites.length,
      0
    );
    const meanLon = sites.reduce(
      (mean, site) =>
        mean + site.location.gps_location.coordinates[0] / sites.length,
      0
    );
    return [meanLat, meanLon];
  }

  render() {
    let center = [50.935173, 6.953101];
    if (this.props.search.trigger === MAP) {
      center = [this.props.search.coords.lat, this.props.search.coords.lng];
    } else if (this.props.sites.length > 0) {
      center = this.calculateCenter(this.props.sites);
    }

    return (
      <div
        title="Auf Karte klicken, um im Umkreis zu suchen"
        className={this.props.blur ? "SiteMap blur" : "SiteMap"}
      >
        <Map
          center={center}
          zoom={13}
          onClick={this.props.mapClickHandler}
          doubleClickZoom="false"
        >
          {" "}
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.sites.map(site => {
            const lat = site.location.gps_location.coordinates[1];
            const lon = site.location.gps_location.coordinates[0];
            return (
              <CustomMarker
                key={site.uid}
                uid={site.uid}
                category={site.category.name}
                position={[lat, lon]}
                popupValue={{
                  name: site.name,
                  location: site.location,
                  url: site.details.url,
                  category: site.category.name
                }}
                selected={this.props.focusElement === site.uid}
                clickHandler={this.props.markerClickHandler}
              />
            );
          })}
          {this.props.search.trigger === MAP ? (
            <Marker position={this.props.search.coords}>
              <Tooltip>
                Suche in {this.props.search.radius}
                km Umkreis.
                <br />
                Klicken um Radius anzupassen.
              </Tooltip>
              <Popup>
                Radius{" "}
                <input
                  style={{ width: "2.5rem" }}
                  id="radius-input"
                  type="number"
                  min="1"
                  max="10"
                  step="0.5"
                  value={this.props.search.radius}
                  onChange={e =>
                    this.props.handleChange({
                      radius: parseFloat(e.target.value)
                    })
                  }
                />{" "}
                km
              </Popup>
            </Marker>
          ) : null}
        </Map>
      </div>
    );
  }
}

export default SiteMap;

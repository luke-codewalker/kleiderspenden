import React, { Component } from "react";
import "./listItem.css";

class SiteList extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  capitalize(string) {
    return string[0].toUpperCase() + string.substr(1);
  }

  componentDidUpdate() {
    if (this.props.focussed) {
      this.ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }

  render() {
    const site = this.props.site;
    return (
      <div
        ref={this.ref}
        className={`ListItem ${this.props.focussed ? "focussed" : ""}`}
        onClick={e => this.props.clickHandler(e, site.uid)}
      >
        <h3 className={`ListItem__title ${site.category.name}`}>{site.name}</h3>
        <p className="ListItem__adress">
          <em>Adresse: </em>
          {site.details.locationname && site.details.locationname.length > 0
            ? site.details.locationname
            : site.location.street +
              ", " +
              site.location.zipcode +
              ", " +
              this.capitalize(site.location.city) +
              ", " +
              this.capitalize(site.location.district)}
        </p>
        <p className="ListItem__hours">
          <em>Öffnungszeiten:</em> {site.openinghours}
        </p>
      </div>
    );
  }
}

export default SiteList;

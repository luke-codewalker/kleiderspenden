import React, { Component } from "react";
import ListItem from "../listItem/ListItem";
import "./siteList.css";

class SiteList extends Component {
  render() {
    return (
      <div className={this.props.blur ? "SiteList blur" : "SiteList"}>
        {this.props.sites.map(site => (
          <ListItem
            key={site.uid}
            site={site}
            clickHandler={this.props.clickHandler}
            focussed={this.props.focusElement === site.uid}
          />
        ))}
      </div>
    );
  }
}

export default SiteList;

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
        <p className="SiteList__footer">
          Made with{" "}
          <span role="img" aria-label="emoji">
            &#x1F49A;
          </span>{" "}
          in 2018 by{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/luke-codewalker"
          >
            Lukas Eschstruth
          </a>
        </p>
      </div>
    );
  }
}

export default SiteList;

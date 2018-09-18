import React, { Component } from "react";
import ListItem from "../listItem/ListItem";
import "./siteList.css";

class SiteList extends Component {
  render() {
    return (
      <div
        className={`SiteList ${this.props.blur ? "blur" : ""} ${
          this.props.loading ? "loading" : ""
        }`}
      >
        {this.props.sites.length === 0 && (
          <p className="SiteList__exception">
            Keine Ergebnisse{" "}
            <span role="img" aria-label="emoji">
              &#x1F61E;
            </span>
          </p>
        )}
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

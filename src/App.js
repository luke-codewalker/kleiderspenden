import React, { Component } from "react";
import SiteMap from "./components/siteMap/SiteMap";
import SiteList from "./components/siteList/SiteList";
import PlaceInput from "./components/placeInput/PlaceInput";
import CategorySelect from "./components/categorySelect/CategorySelect";
import Intro from "./components/intro/Intro";
import InfoButton from "./components/infoButton/InfoButton";

import { Helmet } from "react-helmet";
import "./App.css";
import { PLACE, MAP, API_ROOT } from "./globals";

class App extends Component {
  constructor() {
    super();
    this.state = {
      visitedBefore: false,
      introStep: 0,
      loading: false,
      search: {
        trigger: PLACE,
        place: "Innenstadt",
        categories: [
          {
            name: "charity",
            description: "Gemeinnützige Einrichtung",
            checked: true
          },
          {
            name: "recycling",
            description: "Wertstoffhof",
            checked: true
          },
          {
            name: "container",
            description: "Altkleiderontainer",
            checked: false
          }
        ],
        coords: {},
        radius: 1
      },
      sites: [],
      currentlySelectedId: ""
    };
  }

  componentWillMount() {
    this.setState({
      visitedBefore: localStorage.getItem("visitedBefore") ? true : false
    });
  }

  updateSearch(obj) {
    // changing a category, coords or the radius triggers a new fetch immediately
    if (
      obj.hasOwnProperty("categories") ||
      obj.hasOwnProperty("radius") ||
      obj.hasOwnProperty("coords")
    ) {
      this.setState(
        prevState => ({ search: { ...prevState.search, ...obj } }),
        this.getSites
      );
    } else {
      this.setState(prevState => ({
        search: { ...prevState.search, ...obj }
      }));
    }
  }

  handleSubmit(e) {
    if (e) e.preventDefault();

    this.setState(
      prevState => ({
        search: { ...prevState.search, trigger: PLACE }
      }),
      this.getSites
    );
  }

  getSites() {
    this.setState({ loading: true });
    const { place, categories, trigger, coords, radius } = this.state.search;

    const query = [];

    if (trigger === PLACE && place.length > 0) {
      query.push(`place=${place}`);
    } else if (trigger === MAP) {
      query.push(`coords=${coords.lat},${coords.lng}`);
      query.push(`radius=${radius * 1000}`);
    }

    const checkedCategories = categories.filter(x => x.checked);
    if (checkedCategories.length > 0) {
      query.push(`category=${checkedCategories.map(x => x.name).join(",")}`);
    }

    const url = `${API_ROOT}${query.length > 0 ? "?" + query.join("&") : ""}`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ sites: data, loading: false }))
      .catch(err => console.log(err));
  }

  handleMapClick(e) {
    this.updateSearch({ coords: e.latlng, place: "", trigger: MAP });
  }

  handleMarkerClick(e, id) {
    this.setState({ currentlySelectedId: id });
  }

  handlePopupClose(e) {
    this.setState({ currentlySelectedId: "" });
  }

  handleListClick(e, id) {
    this.setState({ currentlySelectedId: id });
  }

  componentDidMount() {
    this.getSites();
  }

  introDismissHandler() {
    this.setState({ visitedBefore: true });
    localStorage.setItem("visitedBefore", Date.now());
  }

  showIntroAgain() {
    this.setState({ visitedBefore: false, introStep: 0 });
    localStorage.removeItem("visitedBefore");
  }

  increaseIntroStep() {
    this.setState(
      prevState => ({ introStep: prevState.introStep + 1 }),
      () => {
        if (this.state.introStep > 3) {
          this.introDismissHandler();
        }
      }
    );
  }

  decreaseIntroStep() {
    if (this.state.introStep > 0) {
      this.setState(prevState => ({ introStep: prevState.introStep - 1 }));
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>
            Kleiderspende Köln{" "}
            {this.state.search.trigger === PLACE
              ? `in ${this.state.search.place}`
              : `nahe ${this.state.search.coords.lat.toFixed(
                  3
                )}, ${this.state.search.coords.lng.toFixed(3)}`}
          </title>
        </Helmet>
        <div
          className={
            !this.state.visitedBefore && this.state.introStep === 0
              ? "BlurWrap blur"
              : "BlurWrap"
          }
        >
          <InfoButton clickHandler={() => this.showIntroAgain()} />
          <PlaceInput
            place={this.state.search.place}
            handleChange={this.updateSearch.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
          <CategorySelect
            categories={this.state.search.categories}
            handleChange={this.updateSearch.bind(this)}
          />
          <SiteMap
            sites={this.state.sites}
            search={this.state.search}
            mapClickHandler={this.handleMapClick.bind(this)}
            markerClickHandler={this.handleMarkerClick.bind(this)}
            handlePopupClose={this.handlePopupClose.bind(this)}
            handleChange={this.updateSearch.bind(this)}
            focusElement={this.state.currentlySelectedId}
            blur={!this.state.visitedBefore && this.state.introStep < 3}
          />
          <SiteList
            sites={this.state.sites}
            loading={this.state.loading}
            clickHandler={this.handleListClick.bind(this)}
            focusElement={this.state.currentlySelectedId}
            blur={
              !this.state.visitedBefore &&
              (this.state.introStep === 3 || this.state.introStep === 1)
            }
          />
        </div>
        {!this.state.visitedBefore && (
          <Intro
            step={this.state.introStep}
            dismissHandler={this.introDismissHandler.bind(this)}
            nextHandler={this.increaseIntroStep.bind(this)}
            prevHandler={this.decreaseIntroStep.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default App;

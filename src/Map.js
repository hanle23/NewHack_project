import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMap from "google-map-react";
import shouldPureComponentUpdate from "react-pure-render/function";
import MyGreatPlaceWithControllableHover from "./hover_marker.jsx";
import { K_SIZE } from "./hover_style.jsx";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)",
};
export default class Map extends Component {
  static propTypes = {
    center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn

    greatPlaces: PropTypes.array,
  };
  static defaultProps = {
    zoom: 9,
    greatPlaces: [
      { id: "User", lat: 59.955413, lng: 30.337844 },
      { id: "A", lat: 59.724, lng: 30.08 },
      { id: "B", lat: 59.724, lng: 30.98 },
      { id: "C", lat: 60.0, lng: 30.08 },
    ],
  };
  shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props) {
    super(props);
    this.state = { test: null, center: [59.955413, 30.337844] };
  }

  _onChildClick = (key, childProps) => {
    this.setState({ center: [childProps.lat, childProps.lng] });
    this._onChildMouseEnter();
  };

  _onChildMouseEnter = (key /*, childProps */) => {
    this.setState({ test: key });
  };

  _onChildMouseLeave = (/* key, childProps */) => {
    this.setState({ test: null });
  };

  render() {
    const places = this.props.greatPlaces.map((place) => {
      const { id, ...coords } = place;

      return (
        <MyGreatPlaceWithControllableHover
          key={id}
          {...coords}
          text={id}
          // use your hover state (from store, react-controllables etc...)
          hover={this.state.test === id}
        />
      );
    });
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
          }}
          yesIWantToUseGoogleMapApiInternals
          hoverDistance={K_SIZE / 2}
          onChildClick={this._onChildClick}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {places}
        </GoogleMap>
      </div>
    );
  }
}

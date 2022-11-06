import React, { useEffect, useState, Component } from "react";

import GoogleMap from "google-maps-react";
import pin from "./Styles/pin.png";
import Marker from "./Marker";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)",
};

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 43.65107,
        lng: -79.347015,
      },
      zoom: 15,
      locations: this.props.locations,
      lat1: this.props.locations[0].lat,
      longitude: this.props.locations[0].lng,
    };
  }
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          google={window.google}
          bootstrapURLKeys={{
            key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
          }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker position={(this.state.lat1, this.state.longitude)} />

          {this.state.locations.map((i) => {
            return (
              <div
                key={i.id}
                lat={i.lat}
                lng={i.lng}
                onClick={() => {
                  this.setState({
                    longitude: i.lng,
                    lat1: i.lat,
                  });
                }}
              >
                <img style={markerStyle} src={pin} alt="pin" />
              </div>
            );
          })}
        </GoogleMap>
      </div>
    );
  }
}

// export default function Map(props) {

// const [center, setCenter] = useState( {
//   lat: 43.65107,
//   lng: -79.347015,
// })

// const [zoom, setZoom] = useState(15)
// const [locations , setLocations] = useState([
//   {
//     lat : 123,
//     lng : 92,
//     id :1,
//   }
// ])
// const [lat1, setLat1] = useState(locations[0].lat)
// const [longitude, setLongitude] = useState(locations[0].lng)

// return (
//   // Important! Always set the container height explicitly
//   <div style={{ height: "100vh", width: "100%" }}>
//     <GoogleMap
//       bootstrapURLKeys={{
//         key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
//       }}
//       center={center}
//       defaultZoom={zoom}

//     >
//        <Marker position={{lat1, longitude}} />

//       {locations.map((i) => {
//             return (
//               <div key={i.id} lat={i.lat} lng={i.lng} onClick = { ()=>{
//                 setLat1(i.lat)
//                 setLongitude(i.lng)
//               }}>
//                 <img style={markerStyle} src={pin} alt="pin" />
//               </div>
//             );
//           })
//         }
//     </GoogleMap>
//   </div>
// );
// }


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { BrowserRouter as Link } from "react-router-dom";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Google extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
       
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Google;
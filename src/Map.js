import React from "react";
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    DirectionsRenderer
} from "react-google-maps";
import { withProps, compose, lifecycle } from "recompose";

const start = { lat: 37.4148533, lng: -4.5140462 }
const end = { lat: 37.4067561, lng: -4.4199274 }

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDb6j6n9zxPAMT0LPVDSVfqPoisC30dK84&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `250px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {

            /*global  google*/
            /*eslint no-undef: "error"*/
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route(
                {
                    origin: new google.maps.LatLng(start),
                    destination: new google.maps.LatLng(end),
                    travelMode: google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    })
)(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={new google.maps.LatLng(start)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
));

class Map extends React.Component {
    render(star, end) {
        return (
            <React.Fragment>
                <MapWithADirectionsRenderer />
            </React.Fragment>
        );
    }
}

export default Map;
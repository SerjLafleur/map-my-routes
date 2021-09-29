import React from "react";
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    DirectionsRenderer
} from "react-google-maps";
import { withProps, compose, lifecycle } from "recompose";

const Map = ({ desde, hasta }) => {

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
                        origin: new google.maps.LatLng(desde),
                        destination: new google.maps.LatLng(hasta),
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
            defaultCenter={new google.maps.LatLng(desde)}
        >
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    ));
    return (
        <MapWithADirectionsRenderer />
    )
}

export default Map;
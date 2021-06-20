import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const googleMap = (props) => {
    const mapStyles = {
        width: '500px',
        height: '500px',
    };

    return (
        <Map google={props.google} zoom={17} style={mapStyles} initialCenter={{ lat: 37.468609531851904, lng: 126.92463967075119 }}>
            <Marker position={{ lat: 37.468609531851904, lng: 126.92463967075119 }} />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAMWZdlzmg-1yi84DTrrLkhwvFe0kxU1t8',
})(googleMap);

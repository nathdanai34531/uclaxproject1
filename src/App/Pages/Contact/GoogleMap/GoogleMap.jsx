import './GoogleMap.scss';
import React from 'react';

import GoogleMapReact from 'google-map-react';
const googleApiKey = 'AIzaSyBJptE3Te02Kozh8bqpBwaeA7hc3onQmBY';
const googleCoords = {
    lat: 34.134617,
    lng: -118.019816
}

const GoogleMap = () => {
    return (
        <div className={'GoogleMap'} style={{height: '600px', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys = {{ key: googleApiKey }}
                defaultCenter={ googleCoords }
                defaultZoom={ 14 }
                initialCenter
        >

            </GoogleMapReact>
        </div >
            );
        }

export default GoogleMap;
import React, { Component } from 'react';
import GoogleMap from 'google-map-react'

import { MAPS_API_KEY } from '../constants'
console.log(MAPS_API_KEY)
export default class Home extends Component {
  render() {
    return (
      <div style={{height: 100, width: 100}}>
        <h1>Fuck Yeah!</h1>
        <GoogleMap bootstrapURLKeys={{key: MAPS_API_KEY, language: 'en' }} defaultCenter={{lat: 0.01, lng: 0.01}} defaultZoom={9}>
        </GoogleMap>
      </div>

    )
  }
}

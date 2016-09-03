import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY } from '../constants'

/*
  Map View
*/

let MapView = ({ locations }) => (
  <GoogleMap bootstrapURLKeys={{key: MAPS_API_KEY, language: 'en' }} center={locations.car} defaultZoom={15}></GoogleMap>
)

MapView = inject('locations')(observer(MapView))


/*
  Home View
*/

let Home = ({ locations: { reachDestination } }) => (
  <div style={{height: 500, width: 500}}>
    <h1 onClick={e => reachDestination()}>Fuck Yeah!</h1>
    <MapView />
  </div>
)

Home = inject('locations')(observer(Home))

export default Home

import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'



/*
  Map Marker
*/

const MapMarker = ({ $geoService, $getDimensions, $dimensionKey, $hover, lat, lng }) => {
  // const mapWidth = $geoService.getWidth()
  // const mapHeight = $geoService.getHeight()

  const {x: left, y:top} = $getDimensions($dimensionKey)

  return (
    <div className='map-marker' style={{ top, left }} />
  )
}


/*
  Map View
*/

const mapOptions = {
  styles: MAP_STYLE
}

class MapView extends Component {
  constructor(props) {
    super(props)

    const bounds = fitBounds({ nw: LOCATIONS.NW, se: LOCATIONS.SE }, { height: window.innerHeight * 0.75, width: window.innerWidth })
    this.center = bounds.center
    this.zoom = bounds.zoom

    this.onMapLoaded = this.onMapLoaded.bind(this)
  }

  onRoute([{routes: [{overview_path: routeA}]}, {routes:[{overview_path: routeB}]}]) {
    // Check for mobile
    if (false) {
      var pathA = new google.maps.Polyline({
        path: routeA,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })

      var pathB = new google.maps.Polyline({
        path: routeB,
        geodesic: true,
        strokeColor: '#AC3AC3',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })

      pathA.setMap(this.map)
      pathB.setMap(this.map)
    } else {
      animateRoute(routeA, this.map, this.maps, 0, () => {
        animateRoute(routeB, this.map, this.maps, 0)
      })
    }

    // var route = response.routes[0]
    // var summaryPanel = document.getElementById('directions-panel')
    // summaryPanel.innerHTML = ''
    //
    // // For each route, display summary information.
    // for (var i = 0; i < route.legs.length; i++) {
    //   var routeSegment = i + 1;
    //   summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
    //   '</b><br>';
    //   summaryPanel.innerHTML += route.legs[i].start_address + ' to '
    //   summaryPanel.innerHTML += route.legs[i].end_address + '<br>'
    //   summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>'
    // }
  }

  onMapLoaded({map, maps}) {
    this.map = map
    this.maps = maps

    Promise.all([
      getDirections(ROUTE[0], maps),
      getDirections(ROUTE[1], maps)
    ])
    // .then(({routes:[route]}) => {
    .then(routes => {
      this.onRoute(routes)

      // const display = new maps.DirectionsRenderer()
      // display.setMap(map)
      // console.log(display)
      // display.setDirections(a)
    })
    .catch(status => console.log(status))
  }

  render() {
    const { locations } = this.props

    return (
      <GoogleMap
        options={mapOptions}
        bootstrapURLKeys={{key: MAPS_API_KEY, language: 'en' }}
        defaultCenter={this.center}
        defaultZoom={this.zoom}
        onGoogleApiLoaded={this.onMapLoaded}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        { <MapMarker {...LOCATIONS.ORIGIN} /> }
        { <MapMarker {...LOCATIONS.DEST} /> }
      </GoogleMap>
    )
  }
}

MapView = inject('locations')(observer(MapView))


/*
  Home View
*/

let Home = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='full-map'>
      <div className='map-fill'>
        <MapView className='fill-map' />
      </div>
    </section>
  </div>
)

Home = inject('locations')(observer(Home))

export default Home
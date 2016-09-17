import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Foundation View
*/

let Foundation = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='full-map'>
      <div className='map-fill'>
        <MapView className='fill-map' />
      </div>
    </section>
  </div>
)

Foundation = inject('locations')(observer(Foundation))

export default Foundation

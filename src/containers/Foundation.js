import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Foundation View
*/

let Foundation = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main' style={{backgroundImage: 'url(src/assets/charity.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>WildJourney Foundation</h1>
          <h2>Raising money to enable education</h2>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
        </div>
      </div>
    </section>
  </div>
)

Foundation = inject('locations')(observer(Foundation))

export default Foundation

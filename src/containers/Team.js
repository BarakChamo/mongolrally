import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Team View
*/

let Team = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main'>
      <span>sdkfjsdlkfjslkdfjslkdfj</span>
      <span>sdkfjsdlkfjslkdfjslkdfj</span>
      <span>sdkfjsdlkfjslkdfjslkdfj</span>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>The WildJourney Team</h1>
          <h2>Three whackjobs with a lot of spare time</h2>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
        </div>
      </div>
    </section>
  </div>
)

Team = inject('locations')(observer(Team))

export default Team

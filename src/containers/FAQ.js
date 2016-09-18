import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  FAQ View
*/

let FAQ = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/rally.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>What the hell is going on?</h1>
          <h2>Eveything you might be wondering about the journey</h2>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
          <p>You all might suck balls but we're fucking awesome! LOLOL we're going to Mongolia!.</p>
        </div>
      </div>
    </section>
  </div>
)

FAQ = inject('locations')(observer(FAQ))

export default FAQ

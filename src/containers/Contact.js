import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Contact View
*/

let Contact = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/contactus.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>Cheer us on!</h1>
          <h2>Get in touch and tell to tell us we're crazy</h2>
          <p>contact@wildjourney.net</p>
        </div>
      </div>
    </section>
  </div>
)

Contact = inject('locations')(observer(Contact))

export default Contact

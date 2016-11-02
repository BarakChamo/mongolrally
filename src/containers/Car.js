import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Car View
*/

let Car = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/panda.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>Our Shit Ride</h1>
          <h2>No AC in the Gobi desert... in August.</h2>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p>Our holy vessel will be an old <b>Fiat Panda</b> from 2002, kindly lent (as if it's ever coming back...?) to us by Andrea's father.</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p>The car is equipped with an all-mighty 1000cc engine in accordance with the Mongol Rally rules. It has absolutely no air conditioning whatsoever so that our appreciation of the wonderful Turkmenistan weather can be full and genuine.</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p>Do we have any of the mechanical skills required to fix this piece of trash when it's going to break? Of course not...</p>
        </div>
      </div>
    </section>

  </div>
)

Car = inject('locations')(observer(Car))

export default Car

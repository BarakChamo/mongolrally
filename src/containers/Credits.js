import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Credits View
*/

let Credits = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/thanks.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>Wall of Thanks</h1>
          <h2>The angels that gave a damn about us</h2>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <h3>Where did we get the Panda...</h3>
          <p>First and foremost, massive thanks to <b>Giancarlo Orrù</b> for lending us his <b>Panda</b>.<br/>
          We wonder whether he fully realizes that he might never seen it in one piece again...</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <h3>The contest partecipants</h3>
          <p>These awesome people took part of our <b>Geppetto contest</b> to design our mascot:
            <ul>
              <li>"La Pandorica"</li>
              <li>Luca Lopane</li>
              <li>Federico Zapelloni</li>
              <li>Alyssa Polissack</li>
              <li>Victoria Hartnagel</li>
              <li>En H. Cavalier</li>
            </ul>
            <b>Thanks a ton guys!</b>
          </p>
        </div>
      </div>
    </section>

  </div>
)

Credits = inject('locations')(observer(Credits))

export default Credits

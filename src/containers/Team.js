import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Team View
*/

let Team = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/team.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>The WildJourney Team</h1>
          <h2>Three whackjobs with too much spare time</h2>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>WildJourney</b> was created in the summer of 2014 by <b>Riccardo</b> and <b>Andrea</b>, two Italian guys who wanted to share a very unique experience: traveling for two months around Europe, <b>from Lisbon to Istanbul</b> passing through Copenhagen, meeting as many people as possible, and recording every single moment with our GoPro cameras. A blog and a Facebook page were created in order to keep track of what happened to us on the road (and to let our parents know we where alive without having to call them).</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
<p>The first journey was such a big success that we decided to continue the blog: in February 2015 we sailed for a second <b>adventure in Japan</b> and once again we kept track of everything on our blog. On July 2016 we took a step further: <b>Barak</b> joined our group and together we created a <b>charity organization</b> with the goal of rasing money for <b>children education</b>. To promote our association and raise as much as possible, we joined the craziest adventure in the world, the <b>Mongol Rally!</b></p>
        </div>
      </div>
    </section>
  </div>
)

Team = inject('locations')(observer(Team))

export default Team

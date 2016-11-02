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
        </div>
      </div>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
<p>Do we owe you money? Sorry, 404...</p>
 
<p>Do you owe us money? This is the right page!</p>
        </div>
      </div>
    </section>
 
    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
<p>Being serious, there are plenty of reasons why you might want to get in touch with us, from sponsor inquires to just stopping by to say hello and that you like what we do. Whatever the reason, insults included, we are always happy to hear from you, as we actually never expected anyone to visit this page (seriously, no, seriously).
 
The fastest way to get a reply from us is to drop a line to our <a href="https://www.facebook.com/WildJourneyOfficial">Facebook page</a>, we usually reply within a day. Otherwise, you can always send us an email to <b>info@wildjourney.net</b>.
</p>
        </div>
      </div>
    </section>
  </div>
)

Contact = inject('locations')(observer(Contact))

export default Contact

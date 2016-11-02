import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { MAPS_API_KEY, MAP_STYLE, LOCATIONS, ROUTE } from '../constants'

/*
  Charity View
*/

let Charity = ({ locations: { reachDestination } }) => (
  <div className='home'>
    <section className='main fill' style={{backgroundImage: 'url(src/assets/charity.jpg)'}}>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='display-4'>Charity</h1>
          <h2>Raising money to enable education</h2>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
<p>Plot twist: main purpose of the rally is not learning how to bribe Tajikistani policemen. Behind the scenes the organizers have set up a huge charity machine that collect money for several purposes, from <b>providing health-care to children to saving the planet</b>. Originally, the money was collected to buy ambulances for the Mongolian emergency units, but they did such a good job that very soon no more ambulances were needed. Today, the rally imposes to the participants to donate £500 to their current project and at least £500 to a charity of their choice.
Right now, the organizers are supporting a charity called <b>CoolEarth</b>, created with the purpose of <b>preserving rainforest and prevent industrialization</b> from leaving countless people without a job in Mongolia. You should definitely <a href="http://www.theadventurists.com/mongol-rally-charity/">take a look at their page.</a></p>
        </div>
      </div>
    </section>

     <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
<p>Regarding the organization of our choice, we decided to go for something we could really relate to. We thought that driving an old polluting car across a third of the world wasn't the best business card to raise money for the environment. We therefore decided to aim for associations that provide <b>higher instruction to people with potential but not enough money to be able to study</b>. After a small search, we managed to partner with <b>Bhalobasa, a Tuscany-based association that has been working in the poorest countries of the world for 25 years, providing them with basic health care and instruction.</b></p>
        </div>
      </div>
    </section>
 
    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
<p>As their website reports, <i>"Since 1991 Bhalobasa ONLUS has been promoting distance sponsorships along with micro credit projects, especially focusing on the healthcare and social field in India, Burkina Faso, Congo, Uganda and Tanzania. Friendship with the people that we support is basilar to all of our activities: they are not numbers, they all are people with their own names and stories. It all is made possible thanks to our volunteers who carry out open journeys in order to evaluate the concreteness of the aid on site and meet the people we collaborate with."</i></p>
        </div>
      </div>
    </section>
 
    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
<p>We decided to partner with them because we resonate we with their values of embrace diversity and cooperation. They are a non-religious association created by a Catholic priest to help people in countries where Islam, Hinduism and Buddhism are the main religions. All the people involved in their events are people just like us, with an everyday job and a common life that decided to spend some of their time helping someone else, having nothing in return but knowing they for someone in the world, they have just made the difference between life and death. Moreover, their motto is <b><i>"Not tourists, but travellers"</i></b>, how can you possibly not love them?</p>
        </div>
      </div>
    </section>
 
    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
<p>In the next few weeks we will launch a <b>fundraising campaign</b>, with the purpose of raising money for the rally and the charity. Our plan is to make a unique fundraising account, where 50% of both donations and sponsorship will go to the rally, and 50% will go to the charity (excluding the £500 for CoolEarth), until we reach the amount of money needed to complete the rally. <b>Any other pound we receive will go to Bhalobasa, nothing will be kept for ourselves</b>. In order to be transparent, we are also setting up <b>our own charity</b>, for which we hope we will receive the documentation in early November. Also, <b>a list of the costs will be published soon</b>. If you happen to have something we need and you are willing to donate it, it will make a huge difference cutting down the costs. The rally is followed by hundreds of thousands of people worldwide and we are sure we can find a way to pay your generosity back.</p>
        </div>
      </div>
    </section>
  </div>
)

Charity = inject('locations')(observer(Charity))

export default Charity

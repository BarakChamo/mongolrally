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
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>Who the heck are you?</b><br/>
          We are Andrea, Riccardo and Barak, a bunch of geeks who decided to get out from their caves to explore the world. After meating loads of interesting creatures all around the old continent, we decided to get ourselves busy on something new, a decision that will probably cost us our lives. Next year, if we don't get kidnapped by our parents or girlfriends, we are going to take part to the Mongol Rally.
          </p>
        </div>
      </div>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
           <p><b>What is this Mongol Rally thing anyway?<br/></b>
          The Mongol Rally is a non-competitive race organized by The Adventurers that compels as many idiots as possible to drive from London to Mongolia. The race takes place every year and has three simple rules:
          <ol>
            <li>You can only use a crappy car, the engine must be not bigger than 1000cc. No Ferrari, no Prius, no daddy's car. Just two bicycles taped together.</li>
            <li>You are on your own. You make the route, you fix the car, you (try to) survive. The organizers will just give you enough booze to get drunk the first night.</li>
            <li>You have to raise at least £1000 for charity. No matter how you do that, at least that amount of money must be raised.</li>
          </ol>
          One race, three simple rules, it doesn't look so hard does it?
          </p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
           <p><b>Wait, are you really gonna do that?<br/></b>
          This is by far the most frequent question that we get asked. And of course, who'd like to spend his summer driving a crappy car in the middle of some God-forgotten desert?

          Well, turns out we do.</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>Do you already have a sacrificial car?</b><br/>
          Meh, we do have a car, but we are not completely satisfied with that. Andrea's father gave us his old glorious Panda, but another team finished the race with the same car this year and we would like to do something different and unique. Also, the Panda is a pretty robust car, and we wouldn't want to look like sissies. If you happen to know anyone with a broken alien UFO, please let us know.
          </p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>What route are you going to take?<br/></b>
          As we said, there is no route planned by the organizers. The race starts in London and ends in Ulan-Ude, a few kilometers above the Russian-Mongolian border, what happens between this two cities it's our business only. At the moment, our plan is to follow the most common route, going from London to Istanbul, drive East to Azerbaijan and get a ferry to Turkmenistan. From there, we'd like to take a small detour and get to... Beijing. Yes, we would love to drive through China, we believe we'll never have another chance to drive the entire country from one side to the other, and we don't want to miss that chance. From there, we'll get straight to the finishing line. Sounds easy, doesn't it?</p>
        </div>
      </div>
    </section>

    <section className='container-fluid content clear'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>To whom will you donate the money?</b><br/>
          As the race rules say, at least £500 must go to the organizers' charity organization. All the rest of the money that we'll be able to collect will go to someone that provides poor children's education. All three of us work in IT and we got there only because our family could afford to send us to university. We think it's fair that to give the same possibility to others that weren't as lucky. We are currently trying to get in touch with some organizations. You'll find more on the specific page as soon as we have something to tell you! 
          </p>
        </div>
      </div>
    </section>

    <section className='container-fluid content'>
      <div className='row'>
        <div className='col-sm-12'>
          <p><b>How much money is this going to cost you?<br/></b>
          The rally is pretty expensive, as we have to pay for the visas, the fuel, the food, the equipment, the subscription fees, the charity money and the tips for some Kazhakistan ladies we can't wait to meet. Our plan is to keep the costs as low as possible, but it's not going to be cheap no matter what we do. We are currently looking for sponsors to help us cover our expenses and be part of this thing. The Mongol Rally has a huge visibility and the teams gets featured on so many media that it's impossible to count them. We are not going around saying "please we are poor give us money". We are trying to find someone who would benefit from sponsoring us. We are willing to do almost everything, including murder and playing Mexican music at a wedding, so if you happen to know someone who might help us, please point them to our page!
          </p>
        </div>
      </div>
    </section>
  </div>
)

FAQ = inject('locations')(observer(FAQ))

export default FAQ

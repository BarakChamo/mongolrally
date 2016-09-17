import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider, inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { Home } from './containers'

import { LocationsStore } from './stores'

import './styles/style.scss'

const isDev = process.env.NODE_ENV !== 'production'

const stores = {
  locations: new LocationsStore()
}

const Navbar = ({ history, location, route }) => (
  <nav>
    <a data-content="Team" href="" className='nav'>Team</a>
    <a data-content="Car" href="" className='nav'>Car</a>
    <a data-content="FAQ" href="" className='nav'>FAQ</a>
    <a href="" className='nav brand'>
      <img onClick={e => reachDestination()} src='src/assets/logo.png' className='logo' />
      <span>Mongol Rally 2017</span>

      {/* <small><small><small>Please Misbehave Responsibly</small></small></small> */}
    </a>
    <a data-content="Foundation" href="" className='nav'>Foundation</a>
    <a data-content="WildJourney" href="" className='nav'>Wild Journey</a>
    <a data-content="Contact" href="" className='nav'>Contact</a>
  </nav>
)

const App = ({ children, ...props }) => (
  <Provider {...stores}>
    <div>
      <Navbar {...props} />
      {children}
    </div>
  </Provider>
)

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/* <Route path="/counter" component={Counter} /> */}
  </Route>
)

render(
  <div>
    {isDev && <DevTools />}
    <Router history={hashHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
)

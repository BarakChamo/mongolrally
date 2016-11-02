import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import { Provider, inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { Home, Charity, Car, Team, FAQ, Contact } from './containers'

import { LocationsStore } from './stores'

import './styles/style.scss'

const isDev = process.env.NODE_ENV !== 'production'

const stores = {
  locations: new LocationsStore()
}

const Navbar = ({ history, location, route }) => (
  <nav>
    <div className="nav-mobile">
      <input type="checkbox"></input>
      <div className="menu-icon"></div>
    </div>

    <Link to="/credits" className='nav'>Credits</Link>
    <Link to="/car" className='nav'>Car</Link>
    <Link to="/team" className='nav'>Team</Link>
    <Link to="/" className='nav brand'>
      <img onClick={e => reachDestination()} src='src/assets/logo.png' className='logo' />
      <br/>
      <span>Mongol Rally<br/>2017</span>

      {/* <small><small><small>Please Misbehave Responsibly</small></small></small> */}
    </Link>
    <Link to="/charity" className='nav'>Charity</Link>
    <Link to="/faq" className='nav'>FAQ</Link>
    <Link to="/contact" className='nav'>Contact</Link>
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
    <Route path="/charity" component={Charity} />
    <Route path="/contact" component={Contact} />
    <Route path="/car" component={Car} />
    <Route path="/team" component={Team} />
    <Route path="/faq" component={FAQ} />
  </Route>
)

render(
  <div>
    {isDev && <DevTools />}
    <Router history={hashHistory} routes={Routes} />
  </div>,
  document.getElementById('root')
)

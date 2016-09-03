import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider, inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import { Home } from './containers'

// import { AppStore, DevicesStore } from './stores'

import './styles/style.scss'

const isDev = process.env.NODE_ENV !== 'production'

const stores = {
//   app: new AppStore(),
//   devices: new DevicesStore()
}

const App = ({ children }) => (
  <Provider {...stores}>
    {children}
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

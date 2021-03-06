
'use strict'
import React from 'react'
import {Router, Route, Switch} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'

import SQLabView from './components/SQLabView.jsx'
import store from './store.jsx'
import App from './components/App.jsx'
import HomeView from './components/HomeView.jsx'
import DashboardView from './components/DashboardView.jsx'
import ExplorerView from './components/ExplorerView.jsx'
import AllCardsView from './components/AllCardsView.jsx'

const history = createBrowserHistory()
export default history

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={DashboardView} />
            <Route path="/home" component={HomeView} />
            <Route path="/dashboard" component={DashboardView} />
            <Route path="/explorer" component={ExplorerView} />
            <Route path="/sqlab" component={SQLabView} />
            <Route path="/allCardsView" component={AllCardsView} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </div>
  ,
 document.getElementById('main')
)

import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './static/styles/main.css'

import Landing from './pages/Landing'
import Settings from './pages/Preferences'

import NewSpot from './pages/spots/new/NewSpot'
import AnalyzeSpots from './pages/spots/AnalyzeSpots'
import ListSpots from './pages/spots/ListSpots'

import Main from './containers/Main'
import AuthenticationContainer from './containers/AuthenticationContainer'
import DependenciesContainer from './containers/DependenciesContainer'
import RoleContainer from './containers/RoleContainer'

import Container from './Container'
import Event from './Event'

Container.add('event', Event.getInstance())

const MainWithDependencies = DependenciesContainer(Main)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={DependenciesContainer(Landing)} />

      <MainWithDependencies>
        <Route path='/settings' component={AuthenticationContainer(Settings)} />
        <Route path='/spots/list' component={AuthenticationContainer(DependenciesContainer(ListSpots))} />
        <Route path='/spots/new' component={AuthenticationContainer(DependenciesContainer(NewSpot))} />
        <Route path='/spots/analyze' component={RoleContainer(AuthenticationContainer(DependenciesContainer(AnalyzeSpots)))} />
      </MainWithDependencies>
    </Switch>
  </BrowserRouter>
)

export default App

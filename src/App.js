import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import NoMatch from './components/NoMatch'

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App

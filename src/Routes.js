import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react'
import Index from './pages/Index'
import NavBar from './comps/NavBar'
import Footer from './comps/Footer'
import IndexCreate from './pages/index/IndexCreate'
import IndexUpdate from './pages/index/IndexUpdate'
const Routes = () => {
  return (<Router>
    <Container>
      <Segment>
        <NavBar />
      </Segment>
      <Segment>
        <Switch>
          <Route component={IndexCreate} path="/index/create" />
          <Route component={IndexUpdate} path="/index/update" />
          <Route component={Index} path="/" />
        </Switch>
      </Segment>
      <Segment>
        <Footer />
      </Segment>
    </Container>
  </Router>)
}

export default Routes
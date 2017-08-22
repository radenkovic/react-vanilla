import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {Provider } from 'react-redux'

import AppLayout from 'layout/AppLayout'

// Routes
import Home, { HOME_PATH } from 'routes/Home'
import About, { ABOUT_PATH } from 'routes/About'


export default class Routes extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <AppLayout>
            <Route exact path ={HOME_PATH} component={Home} />
            <Route path={ABOUT_PATH} component={About} />
          </AppLayout>
        </Router>
      </Provider>
    )
  }
}

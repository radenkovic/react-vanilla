import React, { Component } from 'react'
import Vanilla from './assets/vanilla.png'
import { connect } from 'react-redux'

const HomeRoute = ({ user }) => (
  <div>
    <img src={Vanilla} />
    <br/>
    <p>
      This is Home Route
    </p>
  </div>
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(HomeRoute)

export const HOME_PATH = '/'

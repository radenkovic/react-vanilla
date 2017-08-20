import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>🍨 React Vanilla Boilerplate 🍨</h1>
        <Link to='/'>Home</Link>
        {' • '}
        <Link to='/about'>About</Link>
        <br/><br/>
      </div>
    )
  }
}

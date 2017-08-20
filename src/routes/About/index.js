import React from 'react'

export default () => (
  <div className="container">
    <p>This is About Route.</p>
    <p style={{ textAlign: 'left' }}>
      Stuff Included:
    </p>
    <ul style={{ textAlign: 'left' }}>
      <li>React</li>
      <li>Redux</li>
      <li>React Router DOM</li>
      <li>Hot Module Replacement</li>
      <li>Sass Global Stylesheets (gulp)</li>
      <li>Webpack</li>
      <li>Gulp</li>
    </ul>
  </div>
)

export const ABOUT_PATH = '/about'

import React from 'react'
import Header from 'components/Header'

export default ({ children }) => (
  <div style={{ textAlign: 'center' }}>
    <Header />
    {children}
  </div>
)

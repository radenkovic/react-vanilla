import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from 'store/createStore'

import App from 'routes'
const rootElement = 'root'

const store = createStore(window.__INITIAL_STATE__)
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./routes').default

  ReactDOM.render(
    <App store={store} />,
    MOUNT_NODE
  )
}

// Enable HMR
if (__DEV__) {
  if (module.hot) {
    const renderApp = render

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

render()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from 'store/createStore'

import App from 'routes'
const rootElement = 'root'

const store = createStore(window.__INITIAL_STATE__)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById(rootElement))

// Enable HMR
if (module.hot) module.hot.accept()

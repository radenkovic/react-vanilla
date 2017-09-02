import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

const createStore = (initialState = {}) => {
  const middleware = [thunk]
  const enhancers = []
  let composeEnhancers = compose
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
    return store
  }
  return store
}

export default createStore

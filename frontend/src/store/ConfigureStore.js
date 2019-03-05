import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './Posts';

const composeEnhancers = process.env.NODE_ENV !== 'Production' ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose :
  compose;

const store = createStore(postsReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;